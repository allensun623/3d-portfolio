import { ActionTypes } from '@/constants';

const createAction = (type, field, payload) => ({ type, field, payload });

export const actions = {
  setValue: (field, value) =>
    createAction(ActionTypes.SET_VALUE, field, { value }),
  setError: (field, error = true) =>
    createAction(ActionTypes.SET_ERROR, field, { error }),
  clearError: (field) =>
    createAction(ActionTypes.CLEAR_ERROR, field, { error: false }),
  resetForm: () => createAction(ActionTypes.RESET_FORM),
};
