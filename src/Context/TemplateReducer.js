export const templateReducer = (state, action) => {
    switch (action.type) {
      case "SET_DATA":
        return {
          ...state,
          data: action.data,
        };
      default:
        return state;
    }
}