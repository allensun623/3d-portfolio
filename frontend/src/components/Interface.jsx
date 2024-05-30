import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Project from './Project';

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
