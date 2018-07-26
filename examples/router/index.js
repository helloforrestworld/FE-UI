import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/docs',
      name: 'docs',
      component: resolve => {
        import('@/docs/README.md').then(module => {
          resolve(module)
        })
      }
    }
  ]
})
