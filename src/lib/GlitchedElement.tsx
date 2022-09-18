import { PowerGlitch, PowerGlitchOptions, RecursivePartial } from 'powerglitch';
import React, { createRef, forwardRef, ReactNode, useEffect, useImperativeHandle } from 'react';

interface PropsType {
    options?: RecursivePartial<PowerGlitchOptions>;
    inline?: boolean;
    children: ReactNode;
}

const GlitchedElement = forwardRef(function GlitchedElement(props: PropsType, ref) {
    const glitched = createRef<HTMLDivElement>();

    let startGlitch: () => void = () => void 0;
    let stopGlitch: () => void = () => void 0;

    useEffect(() => {
        if (! glitched.current) {
            return;
        }
        ({ startGlitch, stopGlitch } = PowerGlitch.glitch(glitched.current, props.options));
    });

    useImperativeHandle(ref, () => ({
        startGlitch: () => startGlitch(),
        stopGlitch: () => stopGlitch(),
    }));

    return (
        <div style={{ display: props.inline ? 'inline-block' : 'block' }}>
            <div ref={glitched}>
                {props.children}
            </div>
        </div>
    );
});

export default GlitchedElement;
