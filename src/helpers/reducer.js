export const initialState = {
  cart: [],
  user: null,
};

// selector
export const getCartTotal = cart => ( cart?.reduce((amount, item) => item.price + amount, 0));

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
