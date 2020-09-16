const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('FAILED')
      return {
      ...state,
      // authError: action.err.message,
      authError: 'Login failed  '
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
    case 'SIGNUP_SUCCESS':
      console.log(' signup SUCCESS')
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('signup error')
      return {
        ...state,
        authError: action.err.message //* így jelezni tudunk a felhasználónak, hogy nem sikerült a regisztráció
      }
    default:
      return state;
  }
}

export default authReducer;