<template>
  <div id="app">
    <fe-button icon="set" icon-position="right" @click="loading = !loading" :loading="loading">欢迎来</fe-button>
  </div>
</template>

<script>
import { Button } from 'fe-ui-test01'

export default {
  name: 'app',
  data() {
    return {
      loading: false
    }
  },

  components: {
    FeButton: Button
  },

  methods: {
  },
}
</script>

<style>
  * {
    box-sizing: border-box;
  }
  :root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
  }
  #app {
    margin: 20px;
  }
  body {
    font-size: var(--font-size);
  }
</style>
