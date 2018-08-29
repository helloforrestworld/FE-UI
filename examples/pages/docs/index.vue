<template>
  <section id="docs">
    <aside id="docs__aside">
      <div class="aside__cell">
        <h2 class="aside__header fs-16  pl-10">组件</h2>
        <div class="aside__link fs-14 pl-16">
          <router-link class="aside-label" to="/button">按钮</router-link>
        </div>
        <div class="aside__link fs-14 pl-16">
          <router-link class="aside-label" to="/tag">标签</router-link>
        </div>
      </div>
    </aside>
    <main id="docs__main">
      <router-view/>
    </main>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
@import '../../assets/less/var.less';
#docs {
  width: 100%;
  height: 100%;
  display: flex;
  #docs__aside {
    flex: 300px;
    flex: 0 0 300px;
    height: 100%;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    .aside__cell {
      padding: 10px;
      .aside__header {
        margin: 10px 0 4px 0;
      }
      .aside__link {
        &:hover {
          background: @color-hover;
        }
        height: 30px;
        line-height: 30px;
        .aside-label {
          display: block;
          color: @color-black;
        }
      }
    }
  }
  #docs__main {
    flex: 1;
    padding: 0 20px 20px 20px;
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
}
</style>
