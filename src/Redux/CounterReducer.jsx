//state khoi tao
const initialState = {
  name: "binh",
  count: 0,
};
export const inCrements = () => ({
  type: "INCREMENT",
});
export const deCrements = () => ({
  type: "DECREMENT",
});
export const handleIncrementAll = (value) => ({
  type: "handleIncrementAll",
  payload: value,
});

//viet mot ham reducer
export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "handleIncrementAll":
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};
