import { useCallback, useState } from 'react';
import { PowerGlitch, PowerGlitchOptions, RecursivePartial } from 'powerglitch';


/**
 * Handle to control the glitch once useGlitch is called.
 */
export type GlitchHandle = {
    /**
     * Function to use as ref for the element to glitch.
     */
    ref: (node: HTMLElement | null) => void,

    /**
     * Glitch control to start the glitch animation.
     */
    startGlitch: () => void,

    /**
     * Glitch control to stop the glitch animation.
     */
    stopGlitch: () => void,

    /**
     * Change the glitch options.
     */
    setOptions: (options: RecursivePartial<PowerGlitchOptions>) => void,
};

/**
 * Hook to glitch one element.
 * @param userOptions Options given to PowerGlitch
 * @returns A glitch handle with glitch controls, a function to update the options and 
 */
export function useGlitch(userOptions?: RecursivePartial<PowerGlitchOptions>): GlitchHandle {
    /**
     * Copy the options into a state object to avoid unecessary re-renders if the client is re-creating an options object in the main block.
     */
    const [options, setOptions] = useState(userOptions);

    /**
     * Placeholder functions to start/stop the glitch, set after actually glitching the element.
     */
    const [startGlitch, setStartGlitch] = useState<(() => void)>(() => () => void 0);
    const [stopGlitch, setStopGlitch] = useState<(() => void)>(() => () => void 0);

    /**
     * Will run each time the ref to the node to glitch changes.
     * E.g. after mount or when added/removed due to conditional rendering.
     */
    const ref = useCallback((node: HTMLElement | null) => {
        // If glitching an element inside a conditional render,
        // `node` might not exist at some point, in which case we have nothing to glitch.
        if (! node) {
            return;
        }
        
        // When/if node is visible, glitch it
        // Because of useCallback, we should not glitch an already glitched element, even though the underlying library supports it.
        const result = PowerGlitch.glitch(node, options);
        setStartGlitch(() => result.startGlitch);
        setStopGlitch(() => result.stopGlitch);
    }, [options]);

    return {
        ref,
        startGlitch,
        stopGlitch,
        setOptions,
    };
}
