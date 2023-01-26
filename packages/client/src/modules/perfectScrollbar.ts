import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { type UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.component('PerfectScrollbar', PerfectScrollbar)
}
