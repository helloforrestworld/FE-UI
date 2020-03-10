<template>
  <div id="app">
      <FeButtonGroup>
        <FeButton>按钮1</FeButton>
        <FeButton :loading="loading" iconPosition="right">按钮2</FeButton>
        <FeButton>按钮3</FeButton>
      </FeButtonGroup>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      loading: true
    }
  }
}
</script>
