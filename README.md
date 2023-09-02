# [BlockScout-CLI](https://github.com/aaop3734/blockscout-cli)

A TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios) to make HTTP requests to the BlockScout API.

## ⚙️ Configuration

In file `blockscout-cli.service.ts`

```typescript
import { Configuration, DefaultApi } from 'blockscout-cli'

const config = new Configuration({
  basePath: 'https://testnet.a8scan.io/api/v2',
})

const BlockscoutService = new DefaultApi(config)
export default BlockscoutService
```

## 🔨 Usage

```tsx
import React from 'react'

import { useGetSmartContract } from '@/hooks/useGetSmartContract'
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
