import { GET_USERS_LIST, GET_USERS_DETAIL, POST_USERS_CREATE, PUT_USERS_EDIT } from "../actions/UserActions";

let initialState = {
  title: "Hellodev Academy",
  getUsersList: false,
  errorUsersList: false,
  getUsersDetail: false,
  errorUsersDetail: false,
  getResponseDataUsers: false,
  errorResponseDataUsers: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUsersList: action.payload.errorMessage
      }

    case GET_USERS_DETAIL:
      return {
        ...state,
        getUsersDetail: action.payload.data,
        errorUsersDetail: action.payload.errorMessage
      }

    case POST_USERS_CREATE:
      return {
        ...state,
        getResponseDataUsers: action.payload.data,
        errorResponseDataUsers: action.payload.errorMessage
      }

    case PUT_USERS_EDIT:
      return {
        ...state,
        getResponseDataUsers: action.payload.data,
        errorResponseDataUsers: action.payload.errorMessage
      }
    default:
      return state;
  }
};

export default users;
