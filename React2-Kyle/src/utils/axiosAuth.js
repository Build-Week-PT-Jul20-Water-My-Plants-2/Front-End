import axios from 'axios';

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem('token');

  return axios.create({
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    },
    baseURL:
      'https://cors-anywhere.herokuapp.com/https://watermyplants1.herokuapp.com/api/auth'
  });
};
