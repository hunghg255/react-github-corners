# React Github Corners


## Demo

[Live Demo](https://github-corners.vercel.app/)

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
