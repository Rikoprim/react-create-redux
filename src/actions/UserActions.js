import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_DETAIL = "GET_USERS_DETAIL";
export const POST_USERS_CREATE = "POST_USERS_CREATE";
export const PUT_USERS_EDIT = "PUT_USERS_EDIT";

export const getUsersList = () => {
  return dispatch => {
    axios.get(`http://my-json-server.typicode.com/Rikoprim/Reactjs-Redux/users`)
      .then(response => {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          }
        })
      })
      .catch(error => {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          }
        })
      })
  };
};

export const getUsersDetail = (id) => {
  return dispatch => {
    axios.get(`http://my-json-server.typicode.com/Rikoprim/Reactjs-Redux/users/${id}`)
      .then(response => {
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          }
        })
      })
      .catch(error => {
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          }
        })
      })
  };
};

export const deleteDataUsers = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USERS_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      }
    })

    dispatch({
      type: POST_USERS_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      }
    })
  }
}

export const postUsersCreate = (data) => {
  return dispatch => {
    axios.post(`http://my-json-server.typicode.com/Rikoprim/Reactjs-Redux/users`, data)
      .then(response => {
        console.log(response);
        
        dispatch({
          type: POST_USERS_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          }
        })
      })
      .catch(error => {
        dispatch({
          type: POST_USERS_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          }
        })
      })
  };
};

export const putUsersEdit = (data, id) => {
  return dispatch => {
    axios.put(`http://my-json-server.typicode.com/Rikoprim/Reactjs-Redux/users/${id}`, data)
      .then(response => {
        dispatch({
          type: PUT_USERS_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          }
        })
      })
      .catch(error => {
        dispatch({
          type: PUT_USERS_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          }
        })
      })
  };
};

export const deleteUsers = (id) => {
  return (dispatch) => {
    axios.delete(`http://my-json-server.typicode.com/Rikoprim/Reactjs-Redux/users/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  };
};
