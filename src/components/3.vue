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
            :type="index === 0 ? 'primary' : ''"
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
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.content-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}

.stats-section {
  display: flex;
  gap: 4rem;
  margin-bottom: 4rem;
  padding: 0 2rem;
}

.stat-item {
  text-align: center;
}

.timeline-section {
  width: 100%;
  max-width: 800px;
  margin: 3rem auto;
  padding: 0 2rem;
}

.milestone-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

:deep(.el-timeline-item__node--normal) {
  background-color: #e74c3c;
}

:deep(.el-timeline-item__content) {
  color: #fff;
}

:deep(.el-card) {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  backdrop-filter: blur(10px);
  color: #fff;
}

:deep(.el-card__header) {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

:deep(.el-timeline-item__timestamp) {
  color: rgba(255, 255, 255, 0.8);
}

.cta-section {
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  margin: 0;
  margin-bottom: 1rem;
}

.buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;
  border: none;
}

.btn:hover {
  transform: translateY(-3px);
}

.primary {
  background: #e74c3c;
  color: white;
}

.secondary {
  background: transparent;
  border: 2px solid white;
  color: white;
}

.geometric-shapes .shape {
  position: absolute;
  opacity: 0.1;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: white;
  border-radius: 50%;
  top: -150px;
  right: -150px;
}

.shape-2 {
  width: 200px;
  height: 200px;
  background: white;
  transform: rotate(45deg);
  bottom: -100px;
  left: -100px;
}

.shape-3 {
  width: 150px;
  height: 150px;
  background: white;
  border-radius: 50%;
  top: 50%;
  left: 10%;
}
</style> 