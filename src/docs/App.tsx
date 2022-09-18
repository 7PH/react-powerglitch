import React, { useState } from 'react';
import { GlitchHandle, useGlitch } from '../lib/';


function App() {
    const glitch: GlitchHandle = useGlitch({ hideOverflow: true, glitchTimeSpan: { start: 0, end: 1 } });
    const [show, setShow] = useState(true);

    return (
        <>
            {show &&
                <div>
                    <h1 ref={glitch.ref}>react-powerglitch 🌎</h1>
                </div>
            }
            <button onClick={glitch.startGlitch}>
                Start
            </button>
            <button onClick={glitch.stopGlitch}>
                Stop
            </button>
            <button onClick={() => setShow(! show)}>
                Toggle
            </button>
        </>
    );
}

export default App;
