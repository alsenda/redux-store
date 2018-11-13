import { UPDATE_USER, API_REQUEST_ERROR } from '../actions/userActions';

export default function userReducer(state = '', { type, payload }) {
  switch (type) {
    case UPDATE_USER:
      return payload.user;
    case API_REQUEST_ERROR:
      return payload.user;
    default:
      return state;
  }
}