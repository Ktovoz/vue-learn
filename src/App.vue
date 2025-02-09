<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElCarousel, ElCarouselItem } from 'element-plus'
import type { Component } from 'vue'

// 自动导入所有组件
const modules = import.meta.glob<{ default: Component }>('./components/*.vue')

// 组件数组
const pages = ref<{ component: Component }[]>([])

// 初始化组件
Promise.all(
  Object.entries(modules)
    .sort(([a], [b]) => {
      const numA = parseInt(a.match(/\/(\d+)\.vue$/)?.[1] || '0')
      const numB = parseInt(b.match(/\/(\d+)\.vue$/)?.[1] || '0')
      return numA - numB
    })
    .map(([_, importFn]) => importFn())
).then((components) => {
  pages.value = components.map(module => ({
    component: module.default
  }))
})

const autoplay = ref(false)
const interval = ref(3000)
const carouselRef = ref()
const currentIndex = ref(0)

// 键盘控制
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowUp') {
    carouselRef.value?.prev()
  } else if (e.key === 'ArrowDown') {
    carouselRef.value?.next()
  }
}

// 页面变化处理
const handleChange = (index: number) => {
  currentIndex.value = index
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="presentation-container">
    <!-- 导航菜单 -->
    <div class="nav-menu">
      <div 
        v-for="(_, index) in pages" 
        :key="index"
        class="nav-item"
        :class="{ active: currentIndex === index }"
        @click="carouselRef?.setActiveItem(index)">
        {{ index + 1 }}
      </div>
    </div>

    <!-- 页码显示 -->
    <div class="page-number">{{ currentIndex + 1 }} / {{ pages.length }}</div>

    <el-carousel
      ref="carouselRef"
      :interval="interval"
      :autoplay="autoplay"
      height="100vh"
      indicator-position="outside"
      direction="vertical"
      :loop="true"
      @change="handleChange">
      <el-carousel-item v-for="(page, index) in pages" :key="index">
        <component :is="page.component" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
/* 只保留基础的容器样式 */
.presentation-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

/* 导航菜单基础样式 */
.nav-menu {
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-item {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #ddd;
}

.nav-item:hover {
  background: #fff;
  transform: scale(1.1);
}

.nav-item.active {
  background: #409eff;
  color: white;
  border-color: #409eff;
}

/* 页码显示基础样式 */
.page-number {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  font-size: 1.2rem;
  color: #666;
  z-index: 100;
}

/* 自定义轮播指示器样式 */
:deep(.el-carousel__indicators--right) {
  right: 2rem;
}

:deep(.el-carousel__indicator) {
  padding: 12px 4px;
}

:deep(.el-carousel__button) {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
}

:deep(.el-carousel__indicator--active .el-carousel__button) {
  background-color: #409eff;
}

/* 添加页面切换动画 */
:deep(.el-carousel__item) {
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.el-carousel__item--card) {
  transform: translateY(0);
}

:deep(.el-carousel__item--card.is-active) {
  transform: translateY(0);
}
</style>
