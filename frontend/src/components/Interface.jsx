import About from './interfaces/About';
import Contact from './interfaces/Contact';
import Skills from './interfaces/Skills';
import Project from './interfaces/Experience';
import RIP from './interfaces/RIP';

export default function Interface() {
  return (
    <div className='w-screen flex flex-col items-start'>
      <About />
      <Project />
      <Skills />
      <Contact />
      <RIP />
    </div>
  );
}
