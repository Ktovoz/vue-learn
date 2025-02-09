<script setup lang="ts">
import { ref } from 'vue'
import { ElTimeline, ElTimelineItem, ElStatistic, ElNotification } from 'element-plus'
import { Calendar, Star, Trophy } from '@element-plus/icons-vue'

const stats = [
  { number: 1000, label: '用户数量', prefix: '+' },
  { number: 50, label: '企业客户', prefix: '+' },
  { number: 99.9, label: '正常运行时间', suffix: '%' }
]

const showNotification = () => {
  ElNotification({
    title: '欢迎加入',
    message: '感谢您的关注，我们会尽快与您联系！',
    type: 'success',
    duration: 3000
  })
}

const milestones = [
  { timestamp: '2024 Q1', title: '产品发布', content: '正式版本发布', icon: Star },
  { timestamp: '2024 Q2', title: '功能升级', content: '新增多个核心功能', icon: Trophy },
  { timestamp: '2024 Q3', title: '全球化', content: '支持多语言和本地化', icon: Calendar }
]
</script>

<template>
  <div class="final-page">
    <div class="content-wrapper">
      <div class="stats-section">
        <div v-for="(stat, index) in stats" 
             :key="index" 
             class="stat-item">
          <el-statistic 
            :value="stat.number"
            :prefix="stat.prefix"
            :suffix="stat.suffix"
            :value-style="{ color: '#fff', fontSize: '2.5rem' }"
            :title="stat.label"/>
        </div>
      </div>

      <div class="timeline-section">
        <el-timeline>
          <el-timeline-item
            v-for="(milestone, index) in milestones"
            :key="index"
            :timestamp="milestone.timestamp"
            :type="index === 0 ? 'danger' : 'info'"
            placement="top">
            <el-card>
              <template #header>
                <div class="milestone-header">
                  <el-icon><component :is="milestone.icon" /></el-icon>
                  <span>{{ milestone.title }}</span>
                </div>
              </template>
              {{ milestone.content }}
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>

      <div class="cta-section">
        <h2>准备好开始了吗？</h2>
        <p>加入我们，开启创新之旅</p>
        <div class="buttons">
          <el-button type="danger" size="large" @click="showNotification">
            立即开始
          </el-button>
          <el-button type="info" size="large" plain>
            了解更多
          </el-button>
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
.final-page {
  min-height: 100vh;
  width: 100vw;
  background: #1a1a1a;
  color: white;
  position: relative;
  overflow: hidden;
}

.content-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  padding: 2rem;
  gap: 1.5rem;
}

.stats-section {
  display: flex;
  gap: clamp(1rem, 3vw, 4rem);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: clamp(1rem, 2vw, 2rem) clamp(1.5rem, 3vw, 4rem);
  width: 100%;
  max-width: 1200px;
}

.stat-item {
  text-align: center;
  position: relative;
  flex: 1;
  &::after {
    content: '';
    position: absolute;
    right: -0.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
  }
  &:last-child::after {
    display: none;
  }
}

:deep(.el-statistic__title) {
  color: rgba(255, 255, 255, 0.6);
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  margin-top: 0.5rem;
}

:deep(.el-statistic__content) {
  font-size: clamp(1.5rem, 2.5vw, 2.5rem) !important;
}

.timeline-section {
  width: 100%;
  max-width: 1000px;
  padding: clamp(1rem, 2vw, 2rem);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  margin: 0 auto;
}

:deep(.el-timeline) {
  padding-bottom: 0;
}

:deep(.el-timeline-item:last-child) {
  padding-bottom: 0;
}

:deep(.el-card) {
  --el-card-padding: 1rem;
}

.milestone-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ff6b6b;
  font-weight: 500;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
}

.cta-section {
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: clamp(1.5rem, 3vw, 3rem);
  width: 100%;
  max-width: 1000px;
}

h2 {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  margin: 0;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-section p {
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  margin: 0.5rem 0;
  color: rgba(255, 255, 255, 0.8);
}

.buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  justify-content: center;
}

:deep(.el-button.el-button--large) {
  padding: clamp(0.8rem, 1.5vw, 1.2rem) clamp(1.5rem, 2vw, 2rem);
  font-size: clamp(0.9rem, 1.5vw, 1rem);
}

.geometric-shapes .shape {
  position: absolute;
  opacity: 0.1;
  background: linear-gradient(45deg, #ff6b6b, #feca57);
}

.shape-1 {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  top: -150px;
  right: -150px;
  filter: blur(60px);
}

.shape-2 {
  width: 200px;
  height: 200px;
  transform: rotate(45deg);
  bottom: -100px;
  left: -100px;
  filter: blur(60px);
}

.shape-3 {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  top: 50%;
  left: 10%;
  filter: blur(60px);
}

:deep(.el-button--info) {
  &.is-plain {
    border-color: rgba(255, 255, 255, 0.2);
    &:hover {
      border-color: #ff6b6b;
      color: #ff6b6b;
    }
  }
}

:deep(.el-timeline-item__content) {
  color: #fff;
}

:deep(.el-card) {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: #fff;
}

:deep(.el-card__header) {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

:deep(.el-timeline-item__timestamp) {
  color: rgba(255, 255, 255, 0.8);
}

:deep(.el-button) {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  &.el-button--danger {
    background: linear-gradient(45deg, #ff6b6b, #feca57);
    border: none;
    &:hover {
      opacity: 0.9;
      transform: translateY(-2px);
    }
  }
  &.el-button--info.is-plain {
    border-color: rgba(255, 255, 255, 0.2);
    &:hover {
      border-color: #ff6b6b;
      color: #ff6b6b;
      transform: translateY(-2px);
    }
  }
}
</style> 