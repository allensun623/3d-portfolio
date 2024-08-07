import classNames from 'classnames';

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
    color: 'text-primary',
    hoverColor: 'hover:text-primary',
  },
  {
    label: 'Experiences',
    color: 'text-summer',
    hoverColor: 'hover:text-summer',
  },
  {
    label: 'Skills',
    color: 'text-fall',
    hoverColor: 'hover:text-fall',
  },
  {
    label: 'Contact',
    color: 'text-winter',
    hoverColor: 'hover:text-winter',
  },
  {
    label: 'Portal',
    color: 'text-spring',
    hoverColor: 'hover:text-spring',
  },
];

const MenuButton = ({ label, onClick, hoverColor, textColor }) => {
  const className = classNames(
    'text-4xl font-bold cursor-pointer transition-colors',
    textColor,
    hoverColor
  );
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default function Menu({ handleSectionChange, menuOpened, setMenuOpened, section }) {
  const menuBar = (mb, i) => (
    <div
      key={i}
      className={classNames(
        'bg-primary h-1.5 rounded-md w-full',
        mb.className,
        { [mb.opened]: menuOpened }
      )}
    />
  );

  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <nav>
      <button
        onClick={toggleMenu}
        className='z-20 fixed top-4 right-4 md:top-12 md:right-12 p-1 w-11 h-11 rounded-md'
      >
        {menuBars.map(menuBar)}
      </button>
      <div
        className={classNames(
          'z-9 fixed top-0 left-0 bottom-0 bg-black transition-all overflow-hidden flex flex-col opacity-0',
          menuOpened ? 'w-full' : 'w-0'
        )}
        onClick={toggleMenu}
      ></div>
      <div
        className={classNames(
          'z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col',
          menuOpened ? 'w-full md:w-80' : 'w-0'
        )}
      >
        <div className='flex-1 flex justify-center flex-col gap-6 p-8'>
          {menuButtons.map((mb, i) => (
            <MenuButton
              key={i}
              label={mb.label}
              textColor={section === i ? mb.color : 'text-black'}
              hoverColor={mb.hoverColor}
              onClick={() => handleSectionChange(i)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
