interface ErrorReducerInitState {

}

const initialState: ErrorReducerInitState = {

};

export const errorReducer = (
  state = initialState, action: any,
): ErrorReducerInitState => {
  switch (action.type) {
    default:
      return state;
  }
};
