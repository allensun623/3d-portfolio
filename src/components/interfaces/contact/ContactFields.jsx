import { inputFields } from '@/constants/contact';
import classNames from 'classnames';

export default function ContactFields({
  form,
  onHandleChange,
  onHandleFocus,
  onHandleBlur,
  tabIndex,
  focusedId,
}) {
  const renderField = ({ label, errorMessage, Component, id, ...props }) => (
    <div
      key={id}
      className={classNames(
        'box-content flex flex-col p-2 md:p-4 rounded-xl bg-white border-solid border-4',
        {
          'border-slate-400': id === focusedId,
          'border-red-400 bg-pink-100': form[id].error,
        }
      )}
    >
      <div className='flex flex-row gap-2'>
        <span
          className={classNames(
            'text-md md:text-xl xl:text-2xl',
            form[id].error ? 'text-red-400' : 'text-slate-400'
          )}
        >
          {label}
        </span>
        <span className={'text-red-400 text-md md:text-xl xl:text-2xl'}>
          {form[id].error ? errorMessage : ''}
        </span>
      </div>
      <Component
        className={classNames(
          'text-slate-400 text-md md:text-3xl focus:outline-none resize-none bg-white',
          { 'bg-pink-100': form[id].error }
        )}
        {...props}
        id={id}
        value={form[id].value}
        onChange={onHandleChange}
        onFocus={onHandleFocus}
        onBlur={onHandleBlur}
        tabIndex={tabIndex}
      />
    </div>
  );

  return inputFields.map(renderField);
}
