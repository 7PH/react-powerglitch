import React, { useState } from 'react';
import { GlitchHandle, useGlitch } from '../lib/';
import './App.css';


function App() {
    const glitched: GlitchHandle = useGlitch({ hideOverflow: true, glitchTimeSpan: { start: 0, end: 1 } });
    const [show, setShow] = useState(true);

    return (
        <>
            {show &&
                <div>
                    <h1 ref={glitched.ref}>react-powerglitch 🌎</h1>
                </div>
            }
            <button onClick={glitched.startGlitch}>
                Start
            </button>
            <button onClick={glitched.stopGlitch}>
                Stop
            </button>
            <button onClick={() => setShow(! show)}>
                Toggle
            </button>
        </>
    );
}

export default App;
