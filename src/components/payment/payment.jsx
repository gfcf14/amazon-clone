import React, {useEffect, useState} from 'react';
import CurrencyFormat from 'react-currency-format';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CheckoutProduct } from 'components/checkout-product/checkout-product';
import { Link, useHistory } from 'react-router-dom';
import axios from 'helpers/axios';
import { db } from 'helpers/firebase';
import { useStateValue } from 'helpers/state-provider';
import { getCartTotal } from 'helpers/reducer';
import './payment.scss';

export function Payment() {
  const [ {cart, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState(true);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState('');
  const [succeeded, setSucceeded] = useState(false);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getCartTotal(cart) * 100}` // x100 because it counts in subunits (dollar -> 100 cents)
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  console.log('THE SECRET IS >>> ', clientSecret);

  const handleSubmit = async e => {
    e.preventDefault();
    setProcessing(true);


    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      }
    }).then(({ paymentIntent }) => {
      const { amount, created, id} = paymentIntent;

      db.collection('users').doc(user?.uid).collection('orders').doc(id)
        .set({ cart: cart, amount, created });

      setSucceeded(true);
      setError(null);
      setProcessing(false);

      history.replace('/orders');
    })
  };

  const handleChange = e => {
    // listen for changes in the card element and display errors as customer types
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to='/checkout'>{cart?.length} item{cart.length > 1 ? 's' : ''}</Link>)
        </h1>
        {/* delivery address */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* review items */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review Items and Delivery</h3>
          </div>
          <div className='payment__items'>
            {cart.map((item, i) => (
              <CheckoutProduct key={`item-${i}`} {...item} />
            ))}
          </div>
        </div>
        {/* payment method */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className='payment__priceContainer'>
              <CurrencyFormat
                renderText={(value) => (
                  <h3>Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p>: 'Buy Now'}</span>
              </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
