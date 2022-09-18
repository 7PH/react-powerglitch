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

2. Import the `GlitchedElement` component from `react-powerglitch` anytime you want to use it.
    ```js
    import { GlitchedElement } from 'react-powerglitch'
    ```

## Glitch

In order to glitch something, use the `GlitchedElement` component
```html
<GlitchedElement>
    <p>
        Power<b>Glitch</b> 🌎
    </p>
</GlitchedElement>
```

Specify whether it should behave as an inline-block with the `inline` prop:
```html
Hello <GlitchedElement inline={true}>PowerGlitch 🌎</GlitchedElement>
```

## Customize

You can pass options to customize the glitch effect:
```html
<GlitchedElement
    options={{
        //... (optional) customize the glitch effect here
    }}
>
    <div>
        PowerGlitch 🌎
    </div>
</GlitchedElement>
```

The `options` props accepts any value defined in [the original PowerGlitch library](https://github.com/7PH/powerglitch).

Take a look at the [playground](https://7ph.github.io/powerglitch/#/playground) to visually find out the best glitch options for your element.

## Glitch controls 

The `GlitchedElement` component exposes two methods `startGlitch` and `stopGlitch` that let you control the glitch animation. Create a ref to the `GlitchedElement` component in order to use these methods.

Here is an example:
```jsx
import React, { useRef } from 'react';
import GlitchedElement from 'react-powerglitch';
import './App.css';

function App() {
    const glitched = useRef();

    return (
        <>
            <GlitchedElement ref={glitched}>
                <h1>react-powerglitch 🌎</h1>
            </GlitchedElement>
            <button onClick={() => glitched.current.startGlitch()}>
                Start
            </button>
            <button onClick={() => glitched.current.stopGlitch()}>
                Stop
            </button>
        </>
    );
}

export default App;
```

## TypeScript

If using TypeScript, you have access to an exported `GlitchedElementRef` representing a reference to the component.
```tsx
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
```
