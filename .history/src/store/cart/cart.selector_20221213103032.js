import { createSelector } from 'reselect'

const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
)

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isOpen
)

export const selectCartCount = createSelector(
  [selectCartCount],
  (cartItems) => cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  )
)

export const selectCartTotal = createSelector(
  [selectTo]
)


const newCartCount = cartItems.reduce(
  (total, cartItem) => total + cartItem.quantity,
  0
);

const newCartTotal = cartItems.reduce(
  (total, cartItem) => total + cartItem.quantity * cartItem.price,
  0
);
