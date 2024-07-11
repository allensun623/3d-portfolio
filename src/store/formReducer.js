import { ActionTypes, initFormState } from '@/constants';

const handleUpdateState = ({ state, action }) => {
  const { field, payload } = action;
  return {
    ...state,
    [field]: { ...state[field], ...payload },
  };
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_VALUE:
    case ActionTypes.SET_ERROR:
    case ActionTypes.CLEAR_ERROR:
      return handleUpdateState({ state, action });
    case ActionTypes.RESET_FORM:
      return initFormState;
    default:
      return state;
  }
};
