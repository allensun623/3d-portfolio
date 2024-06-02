import About from './interfaces/About';
import Contact from './interfaces/Contact';
import Skills from './interfaces/Skills';
import Project from './interfaces/Project';

export default function Interface() {
  return (
    <div className='w-screen flex flex-col items-start'>
      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}
