[![NPM Version](https://img.shields.io/npm/v/blockscout-cli)](https://www.npmjs.com/package/blockscout-cli)
[![NPM Downloads](https://img.shields.io/npm/dm/blockscout)](https://www.npmjs.com/package/blockscout-cli)
[![Minified Size](https://img.shields.io/bundlephobia/min/blockscout-cli)](https://www.npmjs.com/package/blockscout-cli)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Faaop3734%2Fblockscout-cli.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Faaop3734%2Fblockscout-cli?ref=badge_shield)

# [BlockScout-CLI](https://github.com/aaop3734/blockscout-cli)

A TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios) to make HTTP requests to the BlockScout API for any Front-end framework based on JavaScript.

## 📚 Install

```bash
npm install blockscout-cli
```

or

```bash
yarn add blockscout-cli
```

## ⚙️ Configuration

In file `blockscout-cli.service.ts`

```typescript
import { Configuration, DefaultApi } from 'blockscout-cli'

const config = new Configuration({
  basePath: 'https://eth.blockscout.com/api/v2/',
})

const BlockscoutService = new DefaultApi(config)
export default BlockscoutService
```

## 🔨 Usage

```tsx
import React from 'react'

import BlockscoutService from '@/services/blockscout-cli.service'

const blockScoutSearch = async (q: string | undefined) => {
  const result = await BlockscoutService.search(q)

  return result.data
}

function Home() {
  const onClick = async () => {
    const result = await blockScoutSearch('USDT')

    console.log(result)
  }

  return (
    <>
      <button onClick={onClick}>Search</button>
    </>
  )
}

export default Home
```

## 🖲️ Roadmap

| Feature                 | Status |
| ----------------------- | ------ |
| NextJS + Tanstack Query | ✅     |
| React + Tanstack Query  | ✅     |
| NodeJS with ES Modules  | ⚠️     |
| Typescript Strict       | ❌     |

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Faaop3734%2Fblockscout-cli.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Faaop3734%2Fblockscout-cli?ref=badge_large)
