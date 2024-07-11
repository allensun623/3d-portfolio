import { useReducer, useState } from 'react';
import { fieldsEnum } from '@/constants/contact';
import { useForm } from '@formspree/react';
import { isEmpty } from 'lodash';
import isEmail from 'validator/lib/isEmail';

const ActionTypes = Object.freeze({
  SET_VALUE: 'SET_VALUE',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  RESET_FORM: 'RESET_FORM',
});

const initFields = Object.freeze({ value: '', error: false });
const initFormState = Object.freeze(
  Object.values(fieldsEnum).reduce((acc, field) => {
    acc[field] = { ...initFields };
    return acc;
  }, {})
);

const handleUpdateState = ({ state, action }) => {
  const { field, payload } = action;
  return {
    ...state,
    [field]: { ...state[field], ...payload },
  };
};

/**
 * Form reducer function
 * @param {Object} state - Current state
 * @param {Object} action - Action object
 * @returns {Object} New state
 */
const formReducer = (state, action) => {
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

// Helper function to create actions
const createAction = (type, field, payload) => ({ type, field, payload });

// Action creators
const actions = {
  setValue: (field, value) =>
    createAction(ActionTypes.SET_VALUE, field, { value }),
  setError: (field, error = true) =>
    createAction(ActionTypes.SET_ERROR, field, { error }),
  clearError: (field) =>
    createAction(ActionTypes.CLEAR_ERROR, field, { error: false }),
  resetForm: () => createAction(ActionTypes.RESET_FORM),
};

// Custom hook for form state management
const useFormStore = () => {
  const [state, submit] = useForm(import.meta.env.VITE_APP_EMAIL_KEY);
  const [form, dispatch] = useReducer(formReducer, initFormState);
  const [focusedId, setFocusedId] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch(actions.setValue(id, value));
  };

  const handleUpdateError = (field) => dispatch(actions.setError(field));

  const handleBlur = () => setFocusedId('');

  const handleFocus = (e) => {
    const { id } = e.target;
    setFocusedId(id);
    // only clear error while focus on the error one
    dispatch(actions.clearError(id));
  };

  const validateForm = () => {
    if (isEmpty(form.name.value.trim())) {
      handleUpdateError(fieldsEnum.NAME);
      return false;
    }
    if (!isEmail(form.email.value.trim())) {
      handleUpdateError(fieldsEnum.EMAIL);
      return false;
    }
    if (isEmpty(form.message.value.trim())) {
      handleUpdateError(fieldsEnum.MESSAGE);
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) submit(e);
  };

  return {
    state,
    form,
    focusedId,
    handleChange,
    handleFocus,
    handleSubmit,
    handleBlur,
  };
};

export { useFormStore };
