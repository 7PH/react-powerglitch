import React, { useRef } from 'react';
import GlitchedElement from '../lib/GlitchedElement';
import './App.css';

function App() {
    const glitched = useRef<any>();

    return (
        <div className="App">
            <div>
                <GlitchedElement
                    ref={glitched}
                    inline={true}
                    options={{ glitchTimeSpan: { start: 0, end: 1 } }}
                >
                    <h1>react-powerglitch 🌎</h1>
                </GlitchedElement>
            </div>
            <button onClick={() => glitched.current?.startGlitch()}>
                Start
            </button>
            <button onClick={() => glitched.current?.stopGlitch()}>
                Stop
            </button>
        </div>
    );
}

export default App;
