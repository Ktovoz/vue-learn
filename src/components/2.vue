<script setup lang="ts">
import { ElCard, ElImage, ElDivider, ElTimeline, ElTimelineItem, ElCollapse, ElCollapseItem } from 'element-plus'

// 批量导入图片
const images = import.meta.glob('@/assets/image/statusImages/*.png', { eager: true })
const statusImages = Object.values(images).map(module => (module as any).default)

const currentStatus = {
  description: `目前我们的API框架存在以下几个主要问题：
  1. 不同项目拥有不同的分支，最初设计是为了支持不同项目的测试运行，但是受限于框架的架构，只能创建多个分支。
  2. 维护成本较高，各个分支可能会有框架细节的差异，而其中的差异只有我自己知道，这意味着只有我才可以高效的维护这套API框架。
  3. 无法自动的智能的运行指定的测试用例，只能运行提前设置好的测试用例范围，所以目前可以看到我们如果需要运行Zephyr Scale里指定的测试用例需要我们把测试用例拆成单个，这样也增加了维护成本。
  4. 目前只有测试自动化在使用这套框架，如果添加web操作界面，提供更加简单的使用方法可以让人人都上手这套框架。
  `
}

const improvementNecessity = [
  {
    title: '维护成本',
    content: '通过优化框架，维护API测试用例的成本降低了，我们不再需要为每个项目创建不同的分支，只需要维护一个分支即可。 '
  },
  {
    title: '智能选择测试用例',
    content: '通过优化框架，我们可以智能的选择测试用例，不再需要手动选择测试用例，只需要设置好测试用例的范围，框架就会自动选择测试用例。'
  },
  {
    title: '自动切换Runner',
    content: '通过优化框架，我们可以根据环境自动切换Runner，不再需要手动创建多个Runner'
  },
  {
    title: '操作界面',
    content: '未来可以添加spring boot来为我们的测试框架提供web操作界面，这样人人都可以通过web来启动测试。'
  }
]
</script>

<template>
  <div class="page-background">
    <div class="content-wrapper">
      <div class="content-container">
        <div class="header">
          <h1>API框架现状与改进必要性</h1>
        </div>

        <div class="sections-grid">
          <el-card class="section">
            <h2>当前现状</h2>
            <p class="description">{{ currentStatus.description }}</p>
            
            <div class="image-container">
              <el-image 
                v-for="(url, index) in statusImages" 
                :key="index"
                :src="url"
                :preview-src-list="statusImages"
                :preview-teleported="true"
                :initial-index="index"
                fit="cover"
                class="status-image"
              />
            </div>
          
          </el-card>

          <el-card class="section">
            <h2>改进必要性</h2>
            <div class="improvement-list">
              <div v-for="(item, index) in improvementNecessity" :key="index" class="improvement-item">
                <h3 class="improvement-title">{{ item.title }}</h3>
                <div class="improvement-content">
                  {{ item.content }}
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>

    <div class="geometric-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>
  </div>
</template>

<style scoped>
.content-wrapper {
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.content-container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin: 0;
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sections-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.section {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  height: calc(90vh - 100px);
  overflow-y: auto;
  padding: 2rem;
  max-height: 800px;
  letter-spacing: 0.5px;
}

h2 {
  color: #ff6b6b;
  margin-bottom: 1.5rem;
}

h3 {
  color: #feca57;
  margin: 1rem 0;
}

.description {
  white-space: pre-line;
  color: rgba(255, 255, 255, 0.9);
  line-height: 2;
  font-size: 1.1rem;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 1rem 0;
}

.image-container {
  display: flex;
  gap: 1.5rem;
  margin: 2rem 0;
  flex-wrap: wrap;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.status-image {
  width: calc(50% - 0.5rem);
  height: 200px;
  border-radius: 12px;
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.status-image:hover {
  transform: scale(1.02);
}

.improvement-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.improvement-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
}

.improvement-title {
  color: #feca57;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.improvement-content {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

:deep(.el-timeline-item__content) {
  color: rgba(255, 255, 255, 0.8);
}

:deep(.el-timeline-item__timestamp) {
  color: rgba(255, 255, 255, 0.6);
}

:deep(.el-collapse) {
  border: none;
  background: transparent;
}

:deep(.el-collapse-item__header) {
  font-size: 1.1rem;
  color: #feca57;
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
}

:deep(.el-collapse-item__content) {
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  padding: 1rem;
}

:deep(.el-collapse-item__wrap) {
  background: transparent;
  border: none;
}

:deep(.el-collapse-item) {
  margin-bottom: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

:deep(.el-card) {
  background: transparent;
  border: none;
  color: white;
}

:deep(.el-divider) {
  background-color: rgba(255, 255, 255, 0.1);
}

.geometric-shapes .shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: rgba(255, 107, 107, 0.2);
  top: -100px;
  left: -100px;
}

.shape-2 {
  width: 400px;
  height: 400px;
  background: rgba(254, 202, 87, 0.2);
  bottom: -150px;
  right: -150px;
}

.shape-3 {
  width: 200px;
  height: 200px;
  background: rgba(255, 107, 107, 0.15);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.section::-webkit-scrollbar {
  width: 6px;
}

.section::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.section::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.section::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style> 