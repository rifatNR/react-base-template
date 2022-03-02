export const requestReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_TYPE":
        return {
          ...state,
          type: action.payload,
        };
      case "CHANGE_VALUE":
        return {
          ...state,
          [action.payload.name]: action.payload.value
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