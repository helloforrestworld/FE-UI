import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Docs = resolve => {
  import('@/pages/docs/').then(module => {
    console.log(module)
    resolve(module)
  })
}

const Button = resolve => {
  import('@/docs/button.md').then(module => {
    resolve(module)
  })
}

const Tag = resolve => {
  import('@/docs/tag.md').then(module => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      component: Docs,
      children: [
        {
          path: '/',
          name: 'button',
          component: Button
        },
        {
          path: '/tag',
          name: 'tag',
          component: Tag
        }
      ]
    }
  ]
})
