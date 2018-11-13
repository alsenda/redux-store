import $ from 'jquery';

export const UPDATE_USER = 'users:updateUser';
export const SHOW_ERROR = 'users:showError';
export const API_REQUEST_SUCCESS = 'api:API_REQUEST_SUCCESS';
export const API_REQUEST_ERROR = 'api:API_REQUEST_ERROR';
export const API_REQUEST_REQUEST = 'api:API_REQUEST_REQUEST';

export function updateUser(newUser) {
  return {
    type: API_REQUEST_SUCCESS,
    payload: {
      user: newUser,
    },
  };
};

export function showError() {
  return {
    type: API_REQUEST_ERROR,
    payload: {
      user: 'ERROR!!'
    },
  }
}

export function requestMade() {
  return {
    type: API_REQUEST_REQUEST,
  }
}

export function apiRequest() {
  return dispatch => {
    dispatch(requestMade());

    $.ajax({
      url: 'http://google.com',
      success(response) {
        console.log('success');
        dispatch(updateUser(response.newUser));
      },
      error() {
        console.log('error');
        dispatch(showError());
      }
    })
  }
}