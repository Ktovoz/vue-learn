<script setup lang="ts">
import {ElCard,ElDivider, ElIcon} from 'element-plus'
import {Edit} from '@element-plus/icons-vue'
</script>

<template>
  <div class="page-background">
    <h1 class="fixed-title">阶段二：测试用例精准挑选与运行</h1>
    <div class="content-container">
      <div class="geometric-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>

      <div class="main-content">
        <el-card class="description-card">
          <template #header>
            <div class="card-header">
              <el-icon>
                <Edit/>
              </el-icon>
              <span>修改说明</span>
            </div>
          </template>
          <div class="description-content">
            <h3>主要添加修改：</h3>
            <ol>
              <li>在阶段二添加的用例处理类中添加对用例的读取修改</li>
              <li>通过JVM传入变量来实现测试套件运行前修改运行的测试用例范围</li>
              <li>当没有额外变量传入时还是按照原先默认的运行模式来运行测试</li>
            </ol>
            <el-divider/>
            <h3>注意事项：</h3>
            <ul>
              <li>用例的选择来自于Zepher Scale</li>
              <li>这个功能仅限于独立分支，并在gitlab的pipeline中使用</li>
            </ul>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-background {
  width: 100%;
  min-height: 100vh;
  position: relative;
}

.fixed-title {
  position: fixed;
  top: 40px;
  left: 40px;
  font-size: 3.5rem;
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.3;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
}

.content-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  position: relative;
  z-index: 2;
  margin-bottom: 2rem;
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
  background: linear-gradient(135deg, rgba(44, 62, 80, 0.95), rgba(52, 152, 219, 0.95));
  border-radius: 16px;
  padding: 1.8rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
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
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
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
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #fff, #e6e6e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.02em;
  padding-bottom: 0.2rem;
}

.timeline-content {
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.8rem;
  backdrop-filter: blur(12px);
  min-height: 100px;
  display: flex;
  align-items: flex-start;
  transition: all 0.3s ease;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  position: relative;
}

.timeline-header::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  -webkit-mask: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)); /* 修改为单个渐变 */
  mask: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)); /* 同样修改为单个渐变 */
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
  rgba(255, 255, 255, 0.2),
  rgba(255, 255, 255, 0.05)
  );
  transform: translateY(-50%);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.1);
}

.timeline-item.completed:not(:last-child) .timeline-header::after {
  background: linear-gradient(90deg,
  rgba(46, 204, 113, 0.4),
  rgba(46, 204, 113, 0.1)
  );
  box-shadow: 0 0 12px rgba(46, 204, 113, 0.2);
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
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: rgba(255, 107, 107, 0.2);
  top: -150px;
  right: -150px;
  opacity: 0.6;
}

.shape-2 {
  width: 400px;
  height: 400px;
  background: rgba(254, 202, 87, 0.2);
  bottom: -150px;
  left: -150px;
  opacity: 0.6;
}

.shape-3 {
  width: 600px;
  height: 600px;
  background: rgba(255, 107, 107, 0.05);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(100px);
  opacity: 0.3;
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
  .hero-section {
    gap: 1.5rem;
  }

  h1 {
    font-size: 2.6rem;
    letter-spacing: -0.01em;
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

  .fixed-title {
    font-size: 2.8rem;
    top: 20px;
    left: 20px;
  }

  .description-content {
    font-size: 1rem;
  }

  .description-content h3 {
    font-size: 1.4rem;
    margin: 1.5rem 0 1rem;
  }

  .description-content li {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }

  .card-header {
    font-size: 1.3rem;
  }
}

.main-content {
  padding: 220px 40px 40px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

.content-row {
  margin-top: 2rem;
}

.description-card,
.code-card {
  height: 100%;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-size: 1.4rem;
  padding: 1rem 0;
}

.card-header :deep(.el-icon) {
  font-size: 1.4em;
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description-content {
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.1rem;
  line-height: 1.8;
}

.description-content h3 {
  color: #ff7b7b;
  margin: 2rem 0 1.2rem;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.description-content ol,
.description-content ul {
  padding-left: 2rem;
  margin-bottom: 2rem;
}

.description-content li {
  margin-bottom: 1rem;
  line-height: 1.8;
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.9);
}

.code-content pre {
  margin: 0;
  padding: 1.5rem;
  background: rgba(30, 30, 30, 0.95);
  border-radius: 8px;
  overflow-x: auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.code-content code {
  color: #e6e6e6;
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.95rem;
  line-height: 1.6;
  display: block;
}

/* 代码高亮 */
.code-content .keyword {
  color: #569cd6;
}

.code-content .string {
  color: #ce9178;
}

.code-content .comment {
  color: #6a9955;
}

.code-content .type {
  color: #4ec9b0;
}

.code-content .function {
  color: #dcdcaa;
}

.code-card {
  background: rgba(40, 44, 52, 0.95) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
}

.code-card :deep(.el-card__header) {
  background: rgba(30, 30, 30, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.code-card .card-header {
  color: #e6e6e6;
}

.code-card .card-header :deep(.el-icon) {
  font-size: 1.2em;
  margin-right: 8px;
  background: linear-gradient(45deg, #61afef, #56b6c2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 768px) {
  .content-row {
    flex-direction: column;
  }

  .el-col {
    width: 100% !important;
    margin-bottom: 2rem;
  }

  .main-content {
    padding: 100px 20px 20px;
  }
}
</style>
