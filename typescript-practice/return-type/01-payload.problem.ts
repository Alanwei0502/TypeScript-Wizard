type UserDataPayload = { userId: string; data: any};
export const setUserDataAction = (payload: UserDataPayload) => ({
  type: 'SET_USER_DATA',
  payload
});

export const resetuserDataAction = () => ({
  type: 'RESET_USER_DATA',
})

type CartDataPayload = { productId: string };
export const setCartDataAction = (payload: CartDataPayload) => ({
  type: 'SET_CART_DATA',
  payload
});


// 土法煉鋼把 action 型別寫法
type SetUserDataAction = {
  type: 'SET_USER_DATA',
  payload: UserDataPayload
}

type ResetUserDataAction = {
  type: 'RESET_USER_DATA',
}

type SetCartDataAction = {
  type: 'SET_CART_DATA',
  payload: CartDataPayload
}