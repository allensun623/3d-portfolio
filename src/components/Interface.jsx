import Contact from './interfaces/contact/Contact';
import Experience from './interfaces/Experience';
import Home from './interfaces/Home';
import Portal from './interfaces/Portal';
import Skills from './interfaces/Skills';

export default function Interface({
  section,
  ballState,
  onSectionChange,
  isMobile,
}) {
  return (
    <div className='w-screen flex flex-col items-start'>
      <Home section={section} isMobile={isMobile} />
      <Experience
        isInView={section === 1}
        ballState={ballState}
        onSectionChange={onSectionChange}
      />
      <Skills ballState={ballState} />
      <Contact isInView={section === 3} />
      <Portal ballState={ballState} />
    </div>
  );
}
