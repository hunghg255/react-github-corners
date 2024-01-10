<p align="center">
<a href="https://www.npmjs.com/package/react-gh-corners" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/codicon:github-inverted.svg?color=%23cefdb4" alt="logo" width='100'/></a>
</p>

<p align="center">
  A React component to add a GitHub corner to your project.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-gh-corners" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/csvs-parsers.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/react-gh-corners" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/csvs-parsers.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=react-gh-corners" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/react-gh-corners" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/react-gh-corners/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/react-gh-corners/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/react-gh-corners" alt="License" /></a>
</p>

## Live demo
[Live Demo](https://github-corners.vercel.app/)

## Installation

[![NPM](https://nodei.co/npm/react-gh-corners.png?compact=true)](https://nodei.co/npm/react-gh-corners/)

## Install

```
npm i react-gh-corners@latest
```

## Use

```tsx
import { GithubCorners } from 'react-gh-corners';

// Nextjs only CSR
const GithubCorners = dynamic(() => import('react-gh-corners').then((m) => m.GithubCorners), {
  ssr: false,
});


const App = () => {
  return (
    <GithubCorners position='right' href='/' />
  );
};
```

## Package

```js
import 'gh-corners';
```

## unpkg.com CDN:

```js
<script type="module" src="https://unpkg.com/gh-corners@latest"></script>
```

## HTML
```
<github-corners target="__blank" position="fixed" href="https://github.com/hunghg255"></github-corners>
```

### About

<a href="https://www.buymeacoffee.com/hunghg255" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

Gia Hung – [hung.hg](https://hung.thedev.id)
