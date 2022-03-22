import { combineReducers } from 'redux';
import { USER_DETAILS } from './types';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  phoneCode: '',
  phoneNumber: '',
  email: '',
  birthday: '',
  gender: '',
  maritalStatus: '',
  educationLevel: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  password: '',
  pinCode: '',
  userId: '',
  token: '',
  virtualAccount: null,
  walletId: null
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_DETAILS:
      return {
        ...state,
        firstName: action.data.firstName,
        lastName: action.data.lastName,
        phoneCode: action.data.phoneCode,
        phoneNumber: action.data.phoneNumber,
        email: action.data.email,
        birthday: action.data.birthday,
        gender: action.data.gender,
        maritalStatus: action.data.maritalStatus,
        educationLevel: action.data.educationLevel,
        address1: action.data.address1,
        address2: action.data.address2,
        city: action.data.city,
        state: action.data.state,
        password: action.data.password,
        pinCode: action.data.pinCode,
        userId: action.data.userId,
        token: action.data.token,
        virtualAccount: action.data.virtualAccount,
        walletId: action.data.walletId
      };
    default:
      return state;
  }
};

export default combineReducers({
  app: appReducer
});
