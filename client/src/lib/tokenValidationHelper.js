import axios from 'axios';

export default () => {
  return new Promise((res, rej) => {
    const token = localStorage.getItem('token');

    if (!token) {
      return {
        username: 'Guest',
        email: null
      };
    }

    console.log(token);

    axios
      .get(`http://127.0.0.1:8081/api/auth/me/from/token`, {
        params: {
          token: JSON.parse(token)
        }
      })
      .then(response => {
        if (response.data.success) {
          res(response.data.user);
        }

        rej({
          username: 'Guest',
          email: null,
          _id: null,
          cars: [],
          games: []
        });
      })
      .catch(e => {
        console.log(e);
      });
  });
};
