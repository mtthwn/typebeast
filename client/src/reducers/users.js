const usersReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...action.user };
    default:
      return state;
  }
};

export { usersReducer as default };
