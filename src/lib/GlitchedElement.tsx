import { PowerGlitch, PowerGlitchOptions, RecursivePartial } from 'powerglitch';
import React, { createRef, ForwardedRef, forwardRef, ReactNode, useEffect, useImperativeHandle } from 'react';

interface PropsType {
    /**
     * Options passed to PowerGlitch.
     * @remarks
     * The only option which will be ignored is `createContainers`, as this component always set this value to false. 
     */
    options?: RecursivePartial<PowerGlitchOptions>;
    
    /**
     * Whether this component's root div should behave as an inline block or as a block.
     */
    inline?: boolean;

    /**
     * Given slot is what will be glitched.
     */
    children: ReactNode;
}

/**
 * Represents a reference to a GlitchedElement component.
 */
export type GlitchedElementRef = {
    startGlitch: () => void,
    stopGlitch: () => void,
};

const GlitchedElement = forwardRef(function GlitchedElement(props: PropsType, ref: ForwardedRef<GlitchedElementRef>) {
    const glitched = createRef<HTMLDivElement>();

    /**
     * Placeholder functions to start/stop the glitch, set after actually glitching the element.
     */
    let startGlitch: () => void = () => void 0;
    let stopGlitch: () => void = () => void 0;

    /**
     * TODO: Element should be re-glitched only when props.options or props.children change
     */
    useEffect(() => {
        if (! glitched.current) {
            return;
        }
        ({ startGlitch, stopGlitch } = PowerGlitch.glitch(glitched.current, props.options));
    });

    // Expose glitch controls to parent component
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
