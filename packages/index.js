import Button from './button'
import ButtonGroup from './button-group'

import Layout from './layout'
import Main from './main'
import Header from './header'
import Aside from './aside'
import Footer from './footer'

import Row from './row'
import Col from './col'

import Input from './input'
import Toast, { registerToast } from './toast/plugin'

import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsSpan from './tabs-span'
import TabsBody from './tabs-body'
import TabsPanel from './tabs-panel'

// 所有组件列表
const components = {
  Button,
  ButtonGroup,
  Layout,
  Main,
  Header,
  Aside,
  Footer,
  Row,
  Col,
  Input,
  Tabs,
  TabsHead,
  TabsSpan,
  TabsBody,
  TabsPanel
}

const pluginComponent = {
  Toast
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
  // 注册Toast插件
  registerToast(Vue)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components,
  ...pluginComponent
}
