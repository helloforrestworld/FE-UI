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
    <div class="demo-container">
      <FeRow>
        <FeCol span="12">
          <div class="deep-blue col-div">
            12
          </div>
        </FeCol>
        <FeCol span="12">
          <div class="blue col-div">
            12
          </div>
        </FeCol>
      </FeRow>
      <FeRow>
        <FeCol span="4">
          <div class="blue col-div">
            4
          </div>
        </FeCol>
        <FeCol span="16">
          <div class="deep-blue col-div">
            16
          </div>
        </FeCol>
        <FeCol span="4">
          <div class="blue col-div">
            4
          </div>
        </FeCol>
      </FeRow>
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
  .fe-layout {
    color: #fff;
  }
  .fe-main {
    background-color: #49aeed;
    color: #fff;
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
    line-height: 60px;
    text-align: center;
  }
  .fe-header {
    background-color: #c0ebfa;
    line-height: 60px;
    text-align: center;
  }
  .col-div {
    height: 40px;
    line-height: 40px;
    color: #fff;
    text-align: center;
    border: 1px solid #fff;
  }
  .blue {
    background: #c0ebfa;
  }
  .deep-blue {
    background: #89cfed;
  }
}
</style>
