export const requestReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_TYPE":
        return {
          ...state,
          type: action.payload,
        };
      case "CHANGE_STATUS":
        return {
          ...state,
          status: action.payload,
        };
      default:
        return state;
    }
}