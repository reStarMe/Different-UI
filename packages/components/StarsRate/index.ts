import { App } from 'vue'
import StarsRate from './src/StarsRate.vue'
import './style/index.scss'

StarsRate.install = (app: App): void => {
  app.component(StarsRate.name, StarsRate)
}

export default StarsRate
