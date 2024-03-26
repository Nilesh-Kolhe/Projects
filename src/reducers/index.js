const initialState = {
  counter: 0,
  token: '',
  profile: {
    displayName: '',
    country: '',
    email: '',
    picture: '',
    product: '',
    type: '',
    uri: ''
  }
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "SET_PROFILE":
      console.log('SET_PROFILE payload: ', action.payload);
      return {
        ...state,
        profile: {
          displayName: action.payload.displayName,
          country: action.payload.country,
          email: action.payload.email,
          picture: action.payload.picture,
          product: action.payload.product,
          type: action.payload.type,
          uri: action.payload.uri
        }
      };
    case "SET_TOKEN":
      console.log('SET_TOKEN Payload: ', action.payload);
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
};

export default profileReducer;