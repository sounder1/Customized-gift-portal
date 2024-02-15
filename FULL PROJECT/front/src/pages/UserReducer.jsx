// reducers/userReducer.js
const initialState = {
  email: '',
  password: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
