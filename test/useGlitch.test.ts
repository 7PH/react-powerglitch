import { mockAnimationsApi } from 'jsdom-testing-mocks';

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
    it('should work', async () => {
        void 0;
    });
});
