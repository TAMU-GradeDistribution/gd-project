# Modules

A custom user module system.

Place a `.ts` file with the following template, all modules will be installed automatically.

```ts
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import { type UserModule } from '~/types'

import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

export const install: UserModule = ({ app, router, isClient }) => {
  // do something
  app.use(PerfectScrollbar)
}
```
