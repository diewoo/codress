// import UserActionTypes from './user.types';

// const INITIAL_STATE = {
//   currentUser: null,
//   error: null
// };

// const userReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case UserActionTypes.SIGN_IN_SUCCESS:
//       return {
//         ...state,
//         currentUser: action.payload,
//         error: null
//       };
//     case UserActionTypes.SIGN_OUT_SUCCESS:
//       return {
//         ...state,
//         currentUser: null,
//         error: null
//       };
//     case UserActionTypes.SIGN_IN_FAILURE:
//     case UserActionTypes.SIGN_OUT_FAILURE:
//     case UserActionTypes.SIGN_UP_FAILURE:
//       return {
//         ...state,
//         error: action.payload
//       };
//     default:
//       return state;
//   }
// };

// export default userReducer;


import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  LIKE_PRODUCT,
  UNLIKE_PRODUCT,
  MARK_NOTIFICATIONS_READ
} from '../types';

const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  likes: [],
  notifications: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    case LIKE_PRODUCT:
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            userHandle: state.credentials.handle,
            screamId: action.payload.screamId
          }
        ]
      };
    case UNLIKE_PRODUCT:
      return {
        ...state,
        likes: state.likes.filter(
          (like) => like.screamId !== action.payload.screamId
        )
      };
    case MARK_NOTIFICATIONS_READ:
      state.notifications.forEach((not) => (not.read = true));
      return {
        ...state
      };
    default:
      return state;
  }
}

export default userReducer;