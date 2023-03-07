import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { config } from 'dotenv'

const __dirname = dirname(fileURLToPath(import.meta.url))
config({
  path: resolve(__dirname, '../../../.client.env'),
})

export const CONFIG = {
  API_HOST: process.env.API_HOST!,
  API_PORT: process.env.API_PORT!,
  CLIENT_HOST: process.env.CLIENT_HOST!,
}
