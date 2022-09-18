import React, { useRef } from 'react';
import GlitchedElement, { GlitchedElementRef } from '../lib/GlitchedElement';
import './App.css';

function App() {
    const glitched = useRef<GlitchedElementRef | null>(null);

    return (
        <>
            <GlitchedElement ref={glitched}>
                <h1>react-powerglitch 🌎</h1>
            </GlitchedElement>
            <button onClick={() => glitched.current?.startGlitch()}>
                Start
            </button>
            <button onClick={() => glitched.current?.stopGlitch()}>
                Stop
            </button>
        </>
    );
}

export default App;
