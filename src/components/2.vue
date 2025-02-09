<script setup lang="ts">
import {ElCard, ElProgress, ElTag, ElTooltip} from 'element-plus'

const features = [
  {
    icon: '🚀',
    title: '快速开发',
    desc: '简单易用的API',
    progress: 95,
    tags: ['高效', '便捷']
  },
  {
    icon: '🎨',
    title: '主题定制',
    desc: '支持自定义主题',
    progress: 85,
    tags: ['灵活', '美观']
  },
  {
    icon: '📱',
    title: '响应式',
    desc: '完美适配各种设备',
    progress: 90,
    tags: ['自适应', '兼容']
  },
  {
    icon: '🔒',
    title: '安全可靠',
    desc: '内置安全防护',
    progress: 88,
    tags: ['稳定', '安全']
  }
]
</script>

<template>
  <div class="features-page">
    <div class="header">
      <h1>核心特性</h1>
      <div class="subtitle">探索强大的功能集</div>
    </div>

    <div class="features-grid">
      <el-card
          v-for="(feature, index) in features"
          :key="index"
          class="feature-card"
          :style="{ animationDelay: `${index * 0.2}s` }"
          shadow="hover">
        <div class="feature-icon">{{ feature.icon }}</div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.desc }}</p>

        <div class="feature-progress">
          <el-tooltip
              :content="`完成度: ${feature.progress}%`"
              placement="top">
            <el-progress
                :percentage="feature.progress"
                :stroke-width="8"
                :show-text="false"/>
          </el-tooltip>
        </div>

        <div class="feature-tags">
          <el-tag
              v-for="(tag, tagIndex) in feature.tags"
              :key="tagIndex"
              size="small"
              :type="tagIndex === 0 ? 'success' : 'warning'"
              effect="light">
            {{ tag }}
          </el-tag>
        </div>
      </el-card>
    </div>

    <div class="decoration-circles">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>
  </div>
</template>

<style scoped>
.features-page {
  height: 100vh;
  width: 100vw;
  background: #1a1a1a;
  color: white;
  position: relative;
  overflow: hidden;
}

.header {
  text-align: center;
  margin-bottom: 4rem;
  padding-top: 4rem;
}

h1 {
  font-size: 3rem;
  margin: 0;
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  color: #888;
  font-size: 1.2rem;
  margin-top: 1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 0 2rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #ff6b6b;
  margin: 0.5rem 0;
}

.feature-card p {
  color: #888;
  margin: 0;
}

.decoration-circles .circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
}

.circle-1 {
  width: 300px;
  height: 300px;
  background: rgba(255, 107, 107, 0.2);
  top: -100px;
  left: -100px;
}

.circle-2 {
  width: 400px;
  height: 400px;
  background: rgba(254, 202, 87, 0.2);
  bottom: -150px;
  right: -150px;
}

.circle-3 {
  width: 200px;
  height: 200px;
  background: rgba(255, 107, 107, 0.15);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-progress {
  margin: 1rem 0;
}

.feature-tags {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

:deep(.el-card) {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

:deep(.el-card__body) {
  padding: 1.5rem;
}

:deep(.el-progress-bar__inner) {
  background-image: linear-gradient(90deg, #ff6b6b, #feca57);
}
</style> 