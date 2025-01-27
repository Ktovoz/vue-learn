<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="layout">
    <!-- 顶部导航栏 -->
    <header class="header">
      <h1>{{ msg }}</h1>
      <nav>
        <a href="#">首页</a>
        <a href="#">关于</a>
        <a href="#">联系我们</a>
      </nav>
    </header>

    <div class="main-container">
      <!-- 侧边栏 -->
      <aside class="sidebar">
        <ul>
          <li><a href="#">菜单项 1</a></li>
          <li><a href="#">菜单项 2</a></li>
          <li><a href="#">菜单项 3</a></li>
        </ul>
      </aside>

      <!-- 主要内容区域 -->
      <main class="content">
        <div class="card">
          <button type="button" @click="count++">计数器: {{ count }}</button>
        </div>

        <div class="links">
          <p>
            查看 
            <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>
            , Vue + Vite 官方启动模板
          </p>
          <p>
            了解更多 Vue IDE 支持，请访问
            <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">Vue 文档</a>
          </p>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header nav a {
  color: white;
  text-decoration: none;
  margin-left: 1rem;
}

.main-container {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 200px;
  background-color: #f5f5f5;
  padding: 1rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 0.5rem;
}

.sidebar a {
  color: #2c3e50;
  text-decoration: none;
}

.content {
  flex: 1;
  padding: 2rem;
}

.card {
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
}

.links {
  color: #666;
}

.links a {
  color: #42b983;
  text-decoration: none;
}
</style>
