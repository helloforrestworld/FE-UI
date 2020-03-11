# FE-UI

## 安装
```bash
yarn add fe-vue-ui

或

npm i fe-vue-ui
```

## 使用

**全局引入**

```bash
import FeUI from 'fe-vue-ui'
import 'fe-vue-ui/lib/theme-chalk/index.css'

Vue.use(FeUI)
```
例子
```js
<template>
  <FeButton>测试按钮</FeButton>
</template>
```

**按需引入**

安装```babel-plugin-component```

```bash
npm i babel-plugin-component -D
```

然后修改```.babelrc```：
```js
{
  // ...
  plugins: [
    [
      'component',
      {
        libDir: 'packages',
        libraryName: 'fe-vue-ui',
        styleLibraryName: '../lib/theme-chalk'
      }
    ]
  ]
}
```
使用例子：
```js
<template>
  <FeButton>测试按钮</FeButton>
</template>

<script>
import { button } from 'fe-vue-ui'
export default {
  components: {
    FeButton: button
  }
}
</script>
```

****

### Todo

组件：
- 模态框组件
- 表格组件
- 表单组件

优化：
- npm安装速度优化
- 弹窗组件按需加载时使用方式优化
- 组件库文档
- 组件库测试

