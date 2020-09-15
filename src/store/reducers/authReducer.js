const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('FAILED')
      return {
      ...state,
      authError: 'Login failed',
    }
    case 'LOGIN_SUCCESS':
      console.log('SUCCESS')
      return {
        ...state,
        authError: null,
      }
    default:
      return state;
  }
}

export default authReducer;
