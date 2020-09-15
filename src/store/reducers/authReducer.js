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
      case 'SIGN_OUT_SUCCESS':
        console.log(' signed out SUCCESS')
        return state;
    default:
      return state;
  }
}

export default authReducer;
