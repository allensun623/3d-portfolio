import SectionContainer from '../../layouts/SectionContainer';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';
// import { slideIn } from '../../utils/motions/motion';

const fieldsConfig = [
  {
    component: 'input',
    label: '🄽🄰🄼🄴',
    props: {
      type: 'text',
      id: 'name',
    },
  },
  {
    component: 'input',
    label: '🄴🄼🄰🄸🄻',
    props: {
      type: 'email',
      id: 'email',
    },
  },
  {
    component: 'textarea',
    label: '🄼🄴🅂🅂🄰🄶🄴',
    props: {
      id: 'message',
      rows: 7,
    },
  },
];


export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    focused: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [id]: value }));
  };

  const handleFocus = (e) => {
    setForm((prevForm) => ({ ...prevForm, focused: e.target.id }));
  };

  // TODO handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  const renderField = (field) => {
    const Component = field.component === 'input' ? 'input' : 'textarea';
    return (
      <div
        key={field.props.id}
        className={`box-content flex flex-col p-4 rounded-xl bg-white border-solid border-4 ${
          form.focused === field.props.id ? 'border-slate-400' : 'border-white'
        }`}
      >
        <span className='text-slate-400 text-xl mb-4'>{field.label}</span>
        <Component
          className='text-slate-400 text-4xl focus:outline-none resize-none'
          {...field.props}
          value={form[field.props.id]}
          onChange={handleChange}
          onFocus={handleFocus}
        />
      </div>
    );
  };

  return (
    <SectionContainer>
      <div className='w-[50%] p-10'>
        <div
          className={`xl:mt-12 flex flex-col-reverse gap-10 overflow-hidden bg-slate-200 rounded-xl`}
        >
          <motion.div className='flex-[0.75] p-8 rounded-2xl justify-center'>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='flex flex-col gap-8'
            >
              {fieldsConfig.map(renderField)}
              <button
                type='submit'
                className='bg-slate-600 text-3xl py-3 px-8 rounded-xl outline-none text-slate-200 font-bold shadow-md shadow-slate-400 hover:bg-slate-500'
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}