import HelloWorld from '@/components/HelloWorld.vue'
import container from './container'

export default {
  install: (Vue: any): void => {
    Vue.use(container)
    Vue.component('HelloWorld', HelloWorld)
  }
}
