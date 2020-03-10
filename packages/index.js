import Button from './button'
import ButtonGroup from './button-group'
import Layout from './layout'
import Main from './main'
import Header from './header'
import Aside from './aside'
import Footer from './footer'

// 所有组件列表
const components = {
  Button,
  ButtonGroup,
  Layout,
  Main,
  Header,
  Aside,
  Footer
}

const install = function (Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
  Object.keys(components).map(key => {
    const cmp = components[key]
    if (typeof cmp === 'undefined' || !cmp.name) return
    Vue.component(cmp.name, cmp)
  })
}

export default {
  install,
  ...components
}
