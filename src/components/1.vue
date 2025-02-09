<script setup lang="ts">
import {ElButton, ElInput} from 'element-plus'
import {Edit, Message, Search} from '@element-plus/icons-vue'
import {ref} from 'vue'

const searchInput = ref('')
</script>

<template>
  <div class="landing-page">
    <div class="hero-section">
      <div class="logo">PPT</div>
      <h1>创新演示系统</h1>
      <div class="tagline">让演示更加生动有趣</div>

      <div class="search-section">
        <el-input
            v-model="searchInput"
            placeholder="搜索功能..."
            class="search-input"
            :prefix-icon="Search">
          <template #append>
            <el-button :icon="Search">搜索</el-button>
          </template>
        </el-input>
      </div>

      <div class="action-buttons">
        <el-button type="primary" :icon="Edit" size="large">
          开始创建
        </el-button>
        <el-button :icon="Message" size="large">
          联系我们
        </el-button>
      </div>
    </div>
    <div class="wave-decoration">
      <svg viewBox="0 0 1440 320">
        <path fill="#4c84ff" fill-opacity="0.8"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.landing-page {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #f6f8ff 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 0 2rem;
}

.logo {
  font-size: 5rem;
  font-weight: bold;
  color: #4c84ff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  animation: float 3s ease-in-out infinite;
}

.tagline {
  font-size: 1.5rem;
  color: #666;
  margin-top: 1rem;
  letter-spacing: 2px;
}

h1 {
  font-size: 3.5rem;
  background: linear-gradient(45deg, #4c84ff, #18e7d3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.wave-decoration {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.search-section {
  margin-top: 2rem;
  width: 100%;
  max-width: 500px;
}

.search-input {
  --el-input-hover-border-color: #4c84ff;
  --el-input-focus-border-color: #4c84ff;
}

.action-buttons {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}
</style>
