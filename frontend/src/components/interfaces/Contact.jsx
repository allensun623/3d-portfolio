import SectionContainer from '../../layouts/SectionContainer';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { slideIn } from '../../utils/motion';

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'JavaScript Mastery',
          from_email: form.email,
          to_email: '****',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  const fields = [
    {
      component: 'input',
      label: 'Your name',
      props: {
        type: 'text',
        name: 'name',
        value: form.name,
        placeholder: "What's your name?",
      },
    },
    {
      component: 'input',
      label: 'Your email',
      props: {
        type: 'email',
        name: 'email',
        value: form.email,
        placeholder: "What's your email?",
      },
    },
    {
      component: 'textarea',
      label: 'Your message',
      props: {
        name: 'message',
        value: form.message,
        placeholder: 'What do you want to say?',
        rows: 7,
      },
    },
  ];

  // TODO get in touch from my mouth, 筋斗云变成了get in touch
  return (
    <SectionContainer>
      <div className='w-[50vw] p-10'>
        <div
          className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden bg-slate-200 rounded-xl`}
        >
          <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className='flex-[0.75] p-8 rounded-2xl justify-center'
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='flex flex-col gap-8'
            >
              {fields.map((field, idx) => (
                <label key={idx} className='flex flex-col'>
                  <span className='text-slate-600 font-medium mb-4'>
                    {field.label}
                  </span>
                  <field.component
                    {...field.props}
                    onChange={handleChange}
                    className='bg-tertiary py-4 px-6 placeholder:text-slate-400 text-slate-400 rounded-lg outline-none border-none font-medium'
                  />
                </label>
              ))}

              <button
                type='submit'
                className='bg-slate-600 py-3 px-8 rounded-xl outline-none text-slate-200 font-bold shadow-md shadow-slate-400'
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
