export default function Menu({ onSectionChange, menuOpened, setMenuOpened }) {
  const menuBars = [
    {
      className: 'transition-all',
      opened: 'rotate-45 translate-y-1.5',
    },
    {
      className: 'my-1',
      opened: 'hidden',
    },
    {
      className: 'transition-all',
      opened: '-rotate-45',
    },
  ];

  // https://v2.tailwindcss.com/docs/just-in-time-mode
  // Tailwind doesn’t include any sort of client-side runtime, so class names need to be statically extractable at build-time, and can’t depend on any sort of arbitrary dynamic values that change on the client.
  const menuButtons = [
    {
      label: 'Home',
      hoverColor: 'hover:text-primary',
    },
    {
      label: 'Experiences',
      hoverColor: 'hover:text-summer',
    },
    {
      label: 'Skills',
      hoverColor: 'hover:text-fall',
    },
    {
      label: 'Contact',
      hoverColor: 'hover:text-winter',
    },
    {
      label: 'Portal',
      hoverColor: 'hover:text-spring',
    },
  ];

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className='z-20 fixed top-4 right-4 md:top-12 md:right-12 p-1 w-11 h-11 rounded-md'
      >
        {menuBars.map((mb, i) => (
          <div
            key={i}
            className={`bg-primary h-1.5 rounded-md w-full ${mb.className} ${
              menuOpened ? `${mb.opened}` : ''
            }`}
          />
        ))}
      </button>
      <div
        className={`z-9 fixed top-0 left-0 bottom-0 bg-black transition-all overflow-hidden flex flex-col opacity-0
      ${menuOpened ? 'w-full md:w-100' : 'w-0'}`}
        onClick={() => setMenuOpened(false)}
      ></div>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
      ${menuOpened ? 'w-full md:w-80' : 'w-0'}`}
      >
        <div className='flex-1 flex justify-center flex-col gap-6 p-8'>
          {menuButtons.map((mb, i) => (
            <MenuButton key={i} {...mb} onClick={() => onSectionChange(i)} />
          ))}
        </div>
      </div>
    </>
  );
}

const MenuButton = ({ label, onClick, hoverColor }) => {
  return (
    <button
      onClick={onClick}
      className={`text-2xl font-bold cursor-pointer ${hoverColor} transition-colors`}
    >
      {label}
    </button>
  );
};
