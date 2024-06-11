import React from 'react';

export default function Menu({ onSectionChange, menuOpened, setMenuOpened }) {
  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className='z-20 fixed top-4 right-4 md:top-12 md:right-12 p-3 bg-primary w-11 h-11 rounded-md'
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? 'rotate-45  translate-y-0.5' : ''
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? 'hidden' : ''
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? '-rotate-45' : ''
          }`}
        />
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
        <div className='flex-1 flex items-start justify-center flex-col gap-6 p-8'>
          <MenuButton
            label='Home'
            onClick={() => onSectionChange(0)}
            color='primary'
          />
          <MenuButton
            label='Experience'
            onClick={() => onSectionChange(1)}
            color={'summer'}
          />
          <MenuButton
            label='Skills'
            onClick={() => onSectionChange(2)}
            color={'fall'}
          />
          <MenuButton
            label='Contact'
            onClick={() => onSectionChange(3)}
            color={'winter'}
          />
          <MenuButton
            label='Portal'
            onClick={() => onSectionChange(4)}
            color={'spring'}
          />
        </div>
      </div>
    </>
  );
}

const MenuButton = ({ label, onClick, color }) => {
  const hoverColor = `hover:text-${color}`;

  return (
    <button
      onClick={onClick}
      className={`text-2xl font-bold cursor-pointer ${hoverColor} transition-colors`}
    >
      {label}
    </button>
  );
};
