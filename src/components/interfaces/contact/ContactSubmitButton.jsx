export default function ContactSubmitButton({ submitting, tabIndex }) {
  return (
    <button
      type='submit'
      className='bg-slate-600 text-xl md:text-3xl py-2 md:py-4 px-10 md:px-20 rounded-2xl outline-none text-slate-200 font-bold hover:bg-slate-500'
      disabled={submitting}
      tabIndex={tabIndex}
    >
      {submitting ? 'Sending...' : 'Send'}
    </button>
  );
}
