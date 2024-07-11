import classNames from 'classnames';
import { Suspense, useEffect, useState } from 'react';
import Menu from './components/Menu';
import Welcome from './components/welcome/Welcome';
import MainCanvas from './MainCanvas';

export default function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (menuOpened) setMenuOpened(false);
  }, [section]);

  const canvasClassName = classNames(
    'w-full h-screen h-dvh',
    entered ? 'opacity-100' : 'fixed top-0 left-0 opacity-0'
  );

  return (
    <>
      <Suspense>
        <div className={canvasClassName}>
          <MainCanvas
            entered={entered}
            section={section}
            handleSectionChange={setSection}
          />
          <Menu
            section={section}
            handleSectionChange={setSection}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
          />
        </div>
      </Suspense>
      {!entered && <Welcome setEntered={setEntered} />}
    </>
  );
}
