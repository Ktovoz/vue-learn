<script setup lang="ts">
import { ElCard, ElSteps, ElStep, ElIcon } from 'element-plus'
import { Connection, Select, Monitor } from '@element-plus/icons-vue'
import { ref } from 'vue'

const positionX = ref(300)
const positionY = ref(200)

const steps = [
  {
    title: '环境自适应runner改进',
    icon: Connection,
    description: '优化runner的运行环境识别与适配，可以合并多个分支，提升维护效率以及框架的智能化',
    status: 'success'
  },
  {
    title: '测试用例精准挑选与运行',
    icon: Select,
    description: '智能化测试用例筛选，提高使用便捷性',
    status: 'success'
  },
  {
    title: 'Web GUI服务集成[待定]',
    icon: Monitor,
    description: '可视化操作界面，简化使用流程',
    status: 'success'
  }
]
</script>

<template>
  <div class="landing-page">
    <div class="content-container" :style="{ 
      position: 'absolute',
      top: `${positionY}px`,
      left: `${positionX}px`
    }">
      <div class="hero-section">
        <h1>API框架改进计划</h1>
        <div class="tagline">进一步提升维护效率，提高框架智能化</div>

        <div class="roadmap-section">
          <div class="timeline-container">
            <div 
              v-for="(step, index) in steps" 
              :key="index"
              class="timeline-item"
              :class="{ 'completed': step.status === 'success' }"
            >
              <div class="timeline-header">
                <div class="timeline-icon">
                  <el-icon>
                    <component :is="step.icon" />
                  </el-icon>
                </div>
                <div class="timeline-title">
                  <h3>{{ step.title }}</h3>
                </div>
              </div>
              <div class="timeline-content">
                <p>{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="geometric-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-page {
  min-height: 100vh;
  width: 100vw;
  background: #1a1a1a;
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.content-container {
  position: relative;
}

.hero-section {
  min-height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 2;
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
}

h1 {
  font-size: 4rem;
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.tagline {
  font-size: 1.8rem;
  color: #888;
  margin-top: 0.5rem;
  letter-spacing: 0.02em;
  line-height: 1.4;
  font-weight: 300;
}

.roadmap-section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline-container {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  position: relative;
  gap: 3.5rem;
  margin-top: 2rem;
}

.timeline-item {
  flex: 1;
  max-width: 400px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  gap: 1.5rem;
}

.timeline-header {
  width: 100%;
  background: linear-gradient(135deg, #2C3E50, #3498DB);
  border-radius: 16px;
  padding: 1.8rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.5rem;
  box-shadow: 0 8px 32px rgba(52, 152, 219, 0.2);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.timeline-header:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(52, 152, 219, 0.3);
}

.timeline-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.timeline-icon:hover {
  transform: scale(1.05);
  border-color: rgba(255, 255, 255, 0.3);
}

.timeline-icon :deep(.el-icon) {
  font-size: 1.6rem;
  color: #fff;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.timeline-title {
  flex: 1;
  text-align: left;
}

.timeline-title h3 {
  font-size: 1.5rem;
  line-height: 1.3;
  color: #fff;
  margin: 0;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background: linear-gradient(45deg, #fff, #e6e6e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.02em;
  padding-bottom: 0.2rem;
}

.timeline-content {
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 1.8rem;
  backdrop-filter: blur(12px);
  min-height: 100px;
  display: flex;
  align-items: flex-start;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.12);
  position: relative;
}

.timeline-content::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.timeline-item:not(:last-child) .timeline-header::after {
  content: '';
  position: absolute;
  right: -3.5rem;
  top: 50%;
  width: 3.5rem;
  height: 2px;
  background: linear-gradient(90deg, 
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.1)
  );
  transform: translateY(-50%);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
}

.timeline-item.completed:not(:last-child) .timeline-header::after {
  background: linear-gradient(90deg, 
    rgba(46, 204, 113, 0.6),
    rgba(46, 204, 113, 0.2)
  );
  box-shadow: 0 0 12px rgba(46, 204, 113, 0.3);
}

.timeline-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.015em;
  font-weight: 400;
  text-align: left;
}

.step-details {
  margin: 2rem auto;
  max-width: 800px;
}

.detail-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: all 0.3s ease;
  transform: translateY(0);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
}

.detail-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #ff6b6b;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  
  .el-icon {
    font-size: 1.4em;
    background: linear-gradient(45deg, #ff6b6b, #feca57);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.step-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

:deep(.el-button) {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;
  padding: clamp(0.8rem, 1.5vw, 1.2rem) clamp(1.5rem, 2vw, 2rem);
  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  &.el-button--primary {
    background: linear-gradient(45deg, #ff6b6b, #feca57);
    border: none;
    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  }
  &:disabled {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.3);
  }
}

.geometric-shapes .shape {
  opacity: 0.05;
}

.shape-1 {
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
}

.shape-2 {
  width: 150px;
  height: 150px;
  bottom: -75px;
  left: -75px;
}

.shape-3 {
  width: 100px;
  height: 100px;
}

@media (max-width: 1400px) {
  .timeline-item {
    max-width: 350px;
    min-width: 300px;
  }
  
  .timeline-title h3 {
    font-size: 1.3rem;
  }
  
  .timeline-content p {
    font-size: 1rem;
  }
}

@media (max-width: 1024px) {
  .timeline-container {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin-top: 1rem;
  }

  .timeline-item {
    width: 100%;
    max-width: 600px;
  }

  .timeline-item:not(:last-child) .timeline-header::after {
    right: 50%;
    top: auto;
    bottom: -2rem;
    width: 3px;
    height: 2rem;
    transform: translateX(50%);
  }
}

@media (max-width: 768px) {
  .landing-page {
    padding: 1rem;
  }

  .hero-section {
    gap: 1.5rem;
  }

  h1 {
    font-size: 2.6rem;
    letter-spacing: -0.01em;
  }

  .tagline {
    font-size: 1.2rem;
    letter-spacing: 0.01em;
    margin-top: 0.3rem;
  }

  .timeline-item {
    min-width: unset;
  }

  .timeline-header {
    padding: 1.5rem;
    gap: 1.2rem;
  }

  .timeline-icon {
    width: 42px;
    height: 42px;
  }

  .timeline-title h3 {
    font-size: 1.3rem;
    line-height: 1.4;
    letter-spacing: 0.01em;
  }

  .timeline-content {
    padding: 1.5rem;
  }

  .timeline-content p {
    font-size: 1rem;
    line-height: 1.7;
  }
}
</style>
