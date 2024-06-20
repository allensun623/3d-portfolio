import About from './interfaces/About';
import Contact from './interfaces/Contact';
import Skills from './interfaces/Skills';
import Experience from './interfaces/Experience';
import RIP from './interfaces/RIP';

export default function Interface({ section }) {
  return (
    <div className='w-screen flex flex-col items-start'>
      <About section={section} />
      <Experience isInView={section === 1} />
      <Skills />
      <Contact />
      <RIP />
    </div>
  );
}
