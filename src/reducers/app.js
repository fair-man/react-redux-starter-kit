const initialState = {
  user: 'unknown user',
  message: 'Welcome',
  newUserName: ''
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case 'TYPED_NAME':
      return {...state, newUserName: action.payload};
      break;
    case 'CHANGE_NAME':
      return {...state, user: action.payload};
      break;
    default:
      return state;
  }
}