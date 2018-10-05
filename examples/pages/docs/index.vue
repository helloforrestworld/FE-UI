<template>
  <section id="docs">
    <aside id="docs__aside">
      <div class="aside__cell">
        <h2 class="aside__header fs-16  pl-10">组件</h2>
        <div class="aside__link fs-14 pl-16" v-for="link in routerData" :key="link.route">
          <router-link class="aside-label" exact :to="link.route" active-class="aside--active">{{link.name}}</router-link>
        </div>
      </div>
    </aside>
    <main id="docs__main">
      <router-view />
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      routerData: [
        {name: '按钮', route: '/'},
        {name: '标签', route: '/tag'}
      ]
    }
  }
}
</script>

<style scoped lang="less">
@import '~var.less';
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
          &.aside--active {
            color: @color-primary;
          }
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
