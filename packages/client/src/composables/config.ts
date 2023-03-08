import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { config } from 'dotenv'

const __dirname = dirname(fileURLToPath(import.meta.url))
config({
  path: resolve(__dirname, '../../../.public.env'),
})

export const CONFIG = {
  API_HOST: process.env.API_HOST!,
  API_PORT: process.env.API_PORT!,
  API_PATH: process.env.API_PATH!,
  CLIENT_HOST: process.env.CLIENT_HOST!,
}
