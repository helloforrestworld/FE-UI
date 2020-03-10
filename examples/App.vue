<template>
  <div id="app">
    <div class="demo-container">
      <FeButtonGroup>
        <FeButton>按钮1</FeButton>
        <FeButton :loading="loading" iconPosition="right">按钮2</FeButton>
        <FeButton>按钮3</FeButton>
      </FeButtonGroup>
    </div>
    <div class="demo-container">
      <FeLayout>
        <FeHeader>header</FeHeader>
        <FeLayout>
          <FeAside>aside</FeAside>
          <FeMain>main</FeMain>
        </FeLayout>
        <FeFooter>footer</FeFooter>
      </FeLayout>
    </div>
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
<style lang="less" scoped>
.demo-container {
  width: 60%;
  margin: 20px 0;
  .fe-main {
    background-color: #49aeed;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .fe-aside {
    background-color: #89cfed;
    text-align: center;
    line-height: 200px;
  }
  .fe-footer {
    background-color: #c0ebfa;
    color: #333;
    line-height: 60px;
    text-align: center;
  }
  .fe-header {
    background-color: #c0ebfa;
    color: #333;
    line-height: 60px;
    text-align: center;
  }
}
</style>
