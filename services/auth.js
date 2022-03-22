import axios from 'axios';
import { BASE_URL } from './index';

const authService = {
  register: async ({ email, password, firstName, lastName, phoneNumber }) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, {
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
        confirmPassword: password,
        platform: 'mobile'
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  login: async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
        rememberMe: true
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  requestOtp: async email => {
    try {
      const response = await axios.get(
        `${BASE_URL}/auth/request-otp?email=${email}&platform=mobile`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  confirmOtp: async (email, code) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/confirm-otp`, {
        email,
        code,
        platform: 'mobile'
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default authService;
