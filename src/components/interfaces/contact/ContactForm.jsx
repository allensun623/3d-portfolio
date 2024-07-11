import { useState, useReducer } from 'react';
import { useForm } from '@formspree/react';
import { isEmpty } from 'lodash';
import isEmail from 'validator/lib/isEmail';
import { motion } from 'framer-motion';
import { fieldsEnum } from '@/constants/contact';
import ContactFields from './ContactFields';
import ContactProfileIcon from './ContactSocials';
import ContactSubmitButton from './ContactSubmitButton';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        [action.field]: { ...state[action.field], value: action.value },
      };
    case 'SET_ERROR':
      return {
        ...state,
        [action.field]: { ...state[action.field], error: action.error },
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        [action.field]: { ...state[action.field], error: false },
      };
    default:
      return state;
  }
};

const formState = {
  name: { value: '', error: false },
  email: { value: '', error: false },
  message: { value: '', error: false },
};

export default function Contact({ isInView, handleAnimationComplete }) {
  const [state, submit] = useForm(import.meta.env.VITE_APP_EMAIL_KEY);
  const [form, dispatch] = useReducer(formReducer, formState);
  const [focusedId, setFocusedId] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch({ type: 'SET_VALUE', field: id, value });
  };

  const handleFocus = (e) => {
    const { id } = e.target;
    setFocusedId(id);
    // only clear error while focus on the error one
    dispatch({ type: 'CLEAR_ERROR', field: id });
  };

  const handleBlur = () => setFocusedId('');

  const handleUpdateError = (field) =>
    dispatch({ type: 'SET_ERROR', field, error: true });

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

  // Prevent tab while not in view
  // https://stackoverflow.com/a/58253418/12395126
  const tabIndex = isInView ? 0 : -1;

  return (
    <motion.div
      animate={
        state.succeeded
          ? { scale: 0, transition: { duration: 2 } }
          : { scale: 1 }
      }
      onAnimationComplete={() => {
        if (state.succeeded) handleAnimationComplete();
      }}
      className='w-full md:w-[50%] h-full flex flex-col items-center justify-end md:justify-center p-2 pb-6 md:p-10 opacity-90'
    >
      <form
        className='w-full h-fit flex flex-col p-4 md:p-8 gap-4 md:gap-8 rounded-2xl bg-slate-200'
        onSubmit={handleSubmit}
      >
        <ContactFields
          form={form}
          onHandleChange={handleChange}
          onHandleFocus={handleFocus}
          onHandleBlur={handleBlur}
          tabIndex={tabIndex}
          focusedId={focusedId}
        />
        <div className='flex flex-row justify-between items-center'>
          <ContactProfileIcon tabIndex={tabIndex} />
          <ContactSubmitButton
            tabIndex={tabIndex}
            submitting={state.submitting}
          />
        </div>
      </form>
    </motion.div>
  );
}
