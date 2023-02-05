type UserDataPayload = { userId: string; data: any};
export const setUserDataAction = (payload: UserDataPayload) => ({
  type: 'SET_USER_DATA' as const,
  payload
});

export const resetuserDataAction = () => ({
  type: 'RESET_USER_DATA' as const,
})

type CartDataPayload = { productId: string };
export const setCartDataAction = (payload: CartDataPayload) => ({
  type: 'SET_CART_DATA' as const,
  payload
});

type SetUserDataAction = ReturnType<typeof setUserDataAction>;
type ResetUserDataAction = ReturnType<typeof resetuserDataAction>;
type SetCartDataAction = ReturnType<typeof setCartDataAction>;
