import axios from 'axios';

export default () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return {
      username: 'Guest',
      email: null
    };
  }

  axios
    .get(`http://127.0.0.1:8081/api/auth/me/from/token`, {
      params: {
        token: JSON.parse(token)
      }
    })
    .then(response => {
      if (response.data.success) {
        return response.data.user;
      }

      return {
        username: 'Guest',
        email: null,
        _id: null,
        cars: [],
        games: []
      };
    })
    .catch(e => {
      console.log(e);
    });
};
