import React, { useEffect } from 'react';
import { mockAnimationsApi } from 'jsdom-testing-mocks';
import { render } from '@testing-library/react';
import { useGlitch } from '../src/lib/index';

try {
    mockAnimationsApi();
} catch (error) {
    console.warn('Unable to mock Web Animation API');
}

// Steps is not supported by the Web Animation API mock so we use a different easing for all tests
const BASE_OPTIONS = {
    timing: {
        easing: 'ease-in-out',
    },
};


describe('useGlitch', () => {
    it('is exported', async () => {
        expect(useGlitch).toBeTruthy();
    });

    it('can glitch span element without error', async () => {
        function Dummy() {
            const glitch = useGlitch({ ...BASE_OPTIONS, slice: { count: 3 } });
            return (<div>Hello <span ref={glitch.ref}>World</span></div>);
        }
        const wrapper = render(<Dummy />);

        // With 3 slices, total layer count should be 3 + 1 = 4
        expect(wrapper.container.querySelectorAll('div > div > span').length).toBe(4);
    });

    it('can call startGlitch/stopGlitch after glitch', async () => {
        function Dummy() {
            const glitch = useGlitch({ ...BASE_OPTIONS });
            useEffect(() => {
                glitch.stopGlitch();
                glitch.stopGlitch();
                glitch.startGlitch();
                glitch.startGlitch();
            }, []);
            return (<div>Hello <span ref={glitch.ref}>World</span></div>);
        }
        render(<Dummy />);
    });

    it('can call startGlitch/stopGlitch before glitch without an error', async () => {
        function Dummy() {
            const glitch = useGlitch({ ...BASE_OPTIONS, slice: { count: 3 } });
            glitch.startGlitch();
            glitch.stopGlitch();
            return (<div>No glitch.</div>);
        }
        render(<Dummy />);
    });
});
