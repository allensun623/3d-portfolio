import { fieldsEnum, initFormState } from '@/constants';
import { useForm } from '@formspree/react';
import { isEmpty } from 'lodash';
import { useReducer, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import { actions } from './formActions';
import { formReducer } from './formReducer';

export const useFormStore = () => {
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
