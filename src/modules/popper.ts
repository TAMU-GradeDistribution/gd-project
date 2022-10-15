import Popper from 'vue3-popper'
import { type UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.component('Popper', Popper)
}
