import axios from 'axios';

const validateToken = async (userDispatch) => {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      return;
    } else {
      const { data } = await axios.get(
        `http://127.0.0.1:8081/api/auth/me/from/token`,
        {
          params: {
            token: JSON.parse(token)
          }
        }
      );

      if (!data.success) {
        return;
      } else {
        userDispatch({ type: 'UPDATE_USER', user: data.user });

        localStorage.setItem('token', data.token);
      }
    }
  } catch (e) {
    localStorage.removeItem('token');
    console.log(e.message);
  }
};

export { validateToken as default }
