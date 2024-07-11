import { useFormStore } from '@/store/formStore';
import { motion } from 'framer-motion';
import ContactFields from './ContactFields';
import ContactProfileIcon from './ContactSocials';
import ContactSubmitButton from './ContactSubmitButton';

export default function ContactForm({ isInView, handleAnimationComplete }) {
  const {
    state,
    form,
    focusedId,
    handleSubmit,
    handleChange,
    handleFocus,
    handleBlur,
  } = useFormStore();

  // Prevent tab while not in view
  // https://stackoverflow.com/a/58253418/12395126
  const tabIndex = isInView ? 0 : -1;

  const stateAnimate = state.succeeded
    ? { scale: 0, transition: { duration: 1.5 } }
    : { scale: 1 };

  return (
    <motion.div
      animate={stateAnimate}
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
