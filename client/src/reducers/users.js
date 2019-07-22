const usersReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.user;
    case 'LOGOUT_USER':
      return {
        username: 'Guest',
        cars: [],
        email: null,
        games: []
      };
    default:
      return state;
  }
};

export { usersReducer as default };
