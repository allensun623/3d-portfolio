import { useState } from 'react';
import SectionContainer from '@/layouts/SectionContainer';
import ContactBanner from './ContactBanner';
import ContactForm from './ContactForm';

export default function Contact({ isInView }) {
  const [hide, setHide] = useState(true);

  return (
    <SectionContainer>
      {hide ? (
        <ContactBanner />
      ) : (
        <ContactForm
          isInView={isInView}
          handleAnimationComplete={() => setHide(true)}
        />
      )}
    </SectionContainer>
  );
}
