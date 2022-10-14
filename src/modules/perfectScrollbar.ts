import PerfectScrollbar from 'vue3-perfect-scrollbar'
import { type UserModule } from '~/types'

import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

export const install: UserModule = ({ app }) => {
  app.use(PerfectScrollbar)
}
