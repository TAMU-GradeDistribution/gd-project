# File-based Routing

Routes will be auto-generated for each Vue in this directory using the same file structure.

## Path Aliasing

`~/` is aliased to `./src/` folder.

For example, instead of having to do

```ts
import { isDark } from '../../../../composables'
```

you can instead do

```ts
import { isDark } from '~/composables'
```

## Details

Check out [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) for more details.
