<template>
    <div>
      <!-- 제목 (첫 줄) -->
      <h1 class="title">{{ title }}</h1>
      <hr />
      <!-- cover 배너 (두 번째 줄) -->
      <div v-if="cover" class="cover-banner">
        <img :src="cover" alt="Cover Banner" />
      </div>
      <!-- 나머지 markdown 내용 (4번째 줄 이후) -->
      <div class="content" v-html="htmlContent"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import { marked } from 'marked'
  
  const route = useRoute()
  const post_id = route.params.post_id
  
  // 각각의 내용을 저장할 reactive 변수들
  const title = ref('')
  const cover = ref('')
  const htmlContent = ref('')
  
  // md 파일들을 raw 텍스트로 불러옵니다.
  // 경로는 PostView.vue의 위치와 md 파일들의 실제 경로에 따라 조정하세요.
  const mdModules = import.meta.glob('../pages/*.md', { as: 'raw', eager: true })
  
  const loadContent = () => {
    // 예: "../pages/1.md", "../pages/2.md" 등
    const fileKey = Object.keys(mdModules).find(key => key.endsWith(`/${post_id}.md`))
    if (fileKey) {
      const rawContent = mdModules[fileKey]
      // 파일을 줄 단위로 분리합니다.
      const lines = rawContent.split('\n')
      // 첫 줄: 제목
      title.value = lines[0] ? lines[0].trim() : ''
      // 두 번째 줄: cover (이미지 URL 등)
      cover.value = lines[1] ? lines[1].trim() : ''
      // 세 번째 줄(detail)은 생략하고, 4번째 줄부터의 내용 처리
      const markdownRest = lines.slice(3).join('\n')
      htmlContent.value = marked(markdownRest)
    } else {
      title.value = 'File not found'
      cover.value = ''
      htmlContent.value = '<p>File not found.</p>'
    }
  }
  
  loadContent()
  
  // 라우트가 변경될 때마다 다시 로드
  watch(() => route.params.post_id, () => {
    loadContent()
  })
  </script>
  
  <style scoped>
  .cover-banner img {
    width: 100%;
    max-width: 800px; /* 필요에 따라 조정 */
    display: block;
    margin: 20px auto;
  }

  .title {
    font-family: 'NanumDaHaengCe';
    font-size: 40px;
  }

  .content {
    font-family: 'NanumDaHaengCe';
  }
  </style>
  