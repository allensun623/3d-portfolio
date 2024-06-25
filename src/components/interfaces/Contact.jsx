import SectionContainer from '../../layouts/SectionContainer';
import { useRef, useState } from 'react';
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

const profile = [
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/allensun623/',
    src: '/assets/images/icons/Linkedin.svg',
  },
  {
    name: 'github',
    link: 'https://github.com/allensun623/3d-portfolio',
    src: '/assets/images/icons/Github.svg',
  },
];

export default function Contact({ isInView }) {
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

  // Prevent tab while not in view
  // https://stackoverflow.com/a/58253418/12395126
  const tabIndex = isInView ? 0 : -1;

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
          tabIndex={tabIndex}
        />
      </div>
    );
  };

  const profileIcon = (p) => (
    <a
      key={p.name}
      href={p.link}
      target={'_blank'}
      className='max-h-14 max-w-14 opacity-50 hover:opacity-100'
      tabIndex={tabIndex}
    >
      <img src={p.src} alt={p.name} />
    </a>
  );

  return (
    <SectionContainer>
      <div className='w-[50%] h-full flex items-center justify-center p-10 opacity-90'>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col p-8 rounded-2xl bg-slate-200 gap-8 w-full box-border h-fit'
        >
          {fieldsConfig.map(renderField)}
          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row'>{profile.map(profileIcon)}</div>
            <button
              type='submit'
              className='bg-slate-600 text-3xl py-4 px-20 rounded-2xl outline-none text-slate-200 font-bold shadow-md shadow-slate-400 hover:bg-slate-500'
              disabled={loading}
              tabIndex={tabIndex}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </SectionContainer>
  );
}