import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from 'helpers/state-provider';
import { getCartTotal } from 'helpers/reducer';
import { useHistory } from 'react-router-dom';
import './subtotal.scss';

export function Subtotal() {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}
