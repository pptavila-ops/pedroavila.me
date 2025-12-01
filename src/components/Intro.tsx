import React from 'react';
import AsciiWave from './AsciiWave';

const Intro: React.FC = () => {
    return (
        <section>
            <AsciiWave />
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#111' }}>
                I'm Dul, a product designer based in London.
                <br />
                Currently at <a href="https://elevenlabs.io/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>ElevenLabs</a>, making the internet's content accessible to everyone, everywhere around the world.
            </p>
        </section>
    );
};

export default Intro;
