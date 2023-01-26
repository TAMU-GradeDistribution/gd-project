import 'vue-select/dist/vue-select.css'
import vSelect from 'vue-select'
import { type UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.component('VSelect', vSelect)
}
