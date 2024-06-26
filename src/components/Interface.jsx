import About from './interfaces/About';
import Contact from './interfaces/contact/Contact';
import Skills from './interfaces/Skills';
import Experience from './interfaces/Experience';
import Portal from './interfaces/Portal';

export default function Interface({ section, ballState, onSectionChange }) {
  return (
    <div className='w-screen flex flex-col items-start'>
      <About section={section} />
      <Experience isInView={section === 1} ballState={ballState} onSectionChange={onSectionChange}/>
      <Skills ballState={ballState} />
      <Contact isInView={section === 3} />
      <Portal ballState={ballState} />
    </div>
  );
}
