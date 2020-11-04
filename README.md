# @ithreat/use-mounted

> useMounted hook for checking to see whether a component is mounted

[![NPM](https://img.shields.io/npm/v/@ithreat/use-mounted.svg)](https://www.npmjs.com/package/@ithreat/use-mounted) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @ithreat/use-mounted
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from '@ithreat/use-mounted'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [japhy-](https://github.com/japhy-)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
