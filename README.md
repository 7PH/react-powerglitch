# React PowerGlitch

<img src="./assets/intro.gif" alt="">

This React library is a wrapper around [PowerGlitch](https://github.com/7PH/powerglitch). PowerGlitch is a standalone library with no external dependencies. It leverages CSS animations to glitch anything on the web, without using a canvas. It weights less than 2kb minified and gzipped.

[Original project repository and documentation](https://github.com/7PH/powerglitch)

# Getting started

<p align="center">
 <a href="#install">Install</a>
 → <a href="#glitch">Glitch</a>
 → <a href="#customize">Customize</a>
 → <a href="#glitch-controls">Controls</a>
 / <a href="#typescript">TypeScript</a>
</p>

## Install

1. Install `react-powerglitch` using a package manager
    ```bash
    npm i --save react-powerglitch
    # or
    yarn add react-powerglitch
    ```

2. Import the `useGlitch` hook from `react-powerglitch` anytime you want to use it.
    ```js
    import { useGlitch } from 'react-powerglitch'
    ```

## Glitch

In order to glitch something, call `useGlitch()` and store its result in a variable.
```jsx
function App() {
    const glitched = useGlitch();

    return (
        <h1>react-powerglitch <span ref={glitched.ref}>🌎</span></h1>
    );
}
```

One limitation due to React internals is to never place a glitched element as the direct child of a conditional rendering block. E.g. please **never** do this:
```jsx
<>
    {/* Do NOT do this */}
    {condition &&
        <span ref={glitched.ref}>🌎</span>
    }
</>
```

Instead, wrap the glitched element with a container:
```jsx
<>
    {condition &&
        <div>
            <span ref={glitched.ref}>🌎</span>
        </div>
    }
</>
```

## Customize

You can pass options to customize the glitch effect to `useGlitch`:
```jsx
function App() {
    const glitched = useGlitch({ glitchTimeSpan: false });

    return (
        <h1>react-powerglitch <span ref={glitched.ref}>🌎</span></h1>
    );
}
```

The `options` props accepts any value defined in [the original PowerGlitch library](https://github.com/7PH/powerglitch).

Take a look at the [playground](https://7ph.github.io/powerglitch/#/playground) to visually find out the best glitch options for your element.

## Glitch controls 

The `useGlitch` hook returns an object containing:
- `ref`: A function ref which you should use on the element you want to glitch, as shown in previous sections.
- `startGlitch/stopGlitch`: Glitch control functions to start and stop the glitch animation.
- `setOptions`: A function to change the glitch options. This will update the glitched element with the new options.

Here is an example:
```jsx
function App() {
    const glitched = useGlitch({ glitchTimeSpan: false });

    return (
        <>
            <div>
                <h1 ref={glitched.ref}>react-powerglitch 🌎</h1>
            </div>
            <button onClick={glitched.startGlitch}>
                Start
            </button>
            <button onClick={glitched.stopGlitch}>
                Stop
            </button>
        </>
    );
}
```

## TypeScript

The type `GlitchHandle` represents the return type of the `useGlitch` hook.

Your IDE should automatically identify the return type of `useGlitch` to be `GlitchHandle` and assign it to any variable you assign `useGlitch()` to. In case you want to statically use it, import `GlitchHandle` from `react-powerglitch`.

```tsx
import { useGlitch, GlitchHandle } from 'react-powerglitch';

function App() {
    const glitched: GlitchHandle = useGlitch({ glitchTimeSpan: false });

    return (
        <>
            <div>
                <h1 ref={glitched.ref}>react-powerglitch 🌎</h1>
            </div>
            <button onClick={glitched.startGlitch}>
                Start
            </button>
            <button onClick={glitched.stopGlitch}>
                Stop
            </button>
        </>
    );
}
```
