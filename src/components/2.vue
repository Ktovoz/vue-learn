<script setup lang="ts">
import { ElCard, ElImage, ElDivider, ElTimeline, ElTimelineItem, ElCollapse, ElCollapseItem } from 'element-plus'

// 假设这些是示例图片URL，实际使用时需要替换为真实的图片路径
const statusImages = [
  'https://img10.360buyimg.com/ddimg/jfs/t1/252618/28/17732/57667/67a0e98dF0534eed4/0ade58e461ce4d78.jpg',
  'https://img14.360buyimg.com/ddimg/jfs/t1/259561/27/17874/54054/67a7ab6cF9dae3b7d/c2afc0af82ea87b5.jpg',
  'https://img14.360buyimg.com/ddimg/jfs/t1/260616/30/2415/41024/676a52aeF155b4d60/f2ea3f6b73f26e20.jpg',
  'https://img10.360buyimg.com/ddimg/jfs/t1/252618/28/17732/57667/67a0e98dF0534eed4/0ade58e461ce4d78.jpg',
  'https://img14.360buyimg.com/ddimg/jfs/t1/259561/27/17874/54054/67a7ab6cF9dae3b7d/c2afc0af82ea87b5.jpg',
  'https://img14.360buyimg.com/ddimg/jfs/t1/260616/30/2415/41024/676a52aeF155b4d60/f2ea3f6b73f26e20.jpg',
  'https://img10.360buyimg.com/ddimg/jfs/t1/252618/28/17732/57667/67a0e98dF0534eed4/0ade58e461ce4d78.jpg',
  'https://img14.360buyimg.com/ddimg/jfs/t1/259561/27/17874/54054/67a7ab6cF9dae3b7d/c2afc0af82ea87b5.jpg',
  'https://img14.360buyimg.com/ddimg/jfs/t1/260616/30/2415/41024/676a52aeF155b4d60/f2ea3f6b73f26e20.jpg',
  
]

const currentStatus = {
  description: `目前我们的API框架存在以下几个主要问题：
  1. 接口响应时间较长，平均响应时间超过500ms
  2. 系统架构较为老旧，维护成本高
  3. 缺乏统一的错误处理机制
  4. 文档更新不及时，团队协作效率低
  `,
  keyPoints: [
    {
      timestamp: '2023 Q4',
      content: '系统负载持续增加，响应时间开始显著下降'
    },
    {
      timestamp: '2024 Q1',
      content: '维护成本增加50%，开发效率降低'
    },
    {
      timestamp: '2024 Q2',
      content: '新功能开发周期延长，平均交付时间增加一倍'
    }
  ]
}

const improvementNecessity = [
  {
    title: '性能提升',
    content: '通过改进架构，预期可将响应时间降低到200ms以内'
  },
  {
    title: '维护成本',
    content: '新架构采用模块化设计，预计可降低40%维护成本'
  },
  {
    title: '开发效率',
    content: '统一接口规范和文档管理，提高团队协作效率'
  },
  {
    title: '用户体验',
    content: '提供更稳定、快速的API服务，提升用户满意度'
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
  padding: 20px;
  max-height: 800px;
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
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
}

.image-container {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.status-image {
  width: calc(50% - 0.5rem);
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
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