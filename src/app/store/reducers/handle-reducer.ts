interface HandleReducerInitState {
  onPending: boolean;
  onStart: boolean;
  onFinish: boolean;
  onError: string;
  onMessage: string;
}

const initialState: HandleReducerInitState = {
  onPending: false,
  onStart: false,
  onFinish: false,
  onError: '',
  onMessage: '',
};

export const handleReducer = (
  state = initialState, action: any,
): HandleReducerInitState => {
  switch (action.type) {
    default:
      return state;
  }
};
