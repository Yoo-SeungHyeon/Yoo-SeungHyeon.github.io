<template>
  <div class="ttf">
    <h1>{{ title }}</h1>
    <hr />
    <div v-if="cover" class="cover-banner">
      <img :src="cover" alt="Cover Banner" />
    </div>
    <!-- Markdown 내용이 HTML로 렌더링됨 -->
    <div ref="contentContainer" v-html="htmlContent"></div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

// marked 옵션 설정: 코드 하이라이팅
marked.setOptions({
  highlight: (code) => hljs.highlightAuto(String(code)).value
})

// 커스텀 렌더러 설정
const renderer = new marked.Renderer()

// 수정된 코드 블럭 렌더러: code 값을 문자열로 변환
renderer.code = (code, lang) => {
  // console.log("code 값 확인:", code) // 디버깅용

  // `code`가 객체이고, `text` 속성이 있으면 올바른 코드 내용 가져오기
  let codeContent = typeof code === "object" && code.text ? code.text : String(code)

  const language = lang ? lang.toUpperCase() : 'CODE'
  const highlightedCode = hljs.highlightAuto(codeContent).value

  return `
    <div class="code-container">
      <div class="code-header">
        <span class="code-lang">${language}</span>
        <button class="copy-button" onclick="copyCode(this)">복사</button>
      </div>
      <pre><code class="hljs">${highlightedCode}</code></pre>
    </div>
  `
}



// 이미지 렌더러: "@/..." 경로 변환 및 이미지 클래스 추가
renderer.image = (href, title, text) => {
  if (typeof href === 'string' && href.startsWith('@/')) {
    href = new URL(href.replace('@', '/src'), import.meta.url).href
  }
  return `<img src="${href}" alt="${text}" ${title ? `title="${title}"` : ''} class="content-img"/>`
}

const route = useRoute()
const post_id = route.params.post_id

const title = ref('')
const cover = ref('')
const htmlContent = ref('')

// md 파일들을 raw 텍스트로 가져오기 (경로는 환경에 맞게 조정)
const mdModules = import.meta.glob('../pages/*.md', { as: 'raw', eager: true })

const loadContent = () => {
  const fileKey = Object.keys(mdModules).find(key => key.endsWith(`/${post_id}.md`))
  if (fileKey) {
    const rawContent = mdModules[fileKey]
    const lines = rawContent.split('\n')
    title.value = lines[0] ? lines[0].trim() : ''
    cover.value = lines[1] ? lines[1].trim() : ''
    // 세 번째 줄은 생략하고 4번째 줄부터의 내용을 마크다운으로 변환
    const markdownRest = lines.slice(3).join('\n')
    htmlContent.value = marked(markdownRest, { renderer })
  } else {
    title.value = 'File not found'
    cover.value = ''
    htmlContent.value = '<p>File not found.</p>'
  }
}

loadContent()
watch(() => route.params.post_id, loadContent)

// 복사 버튼 기능: 글로벌 함수
window.copyCode = (button) => {
  const preElement = button.parentElement.nextElementSibling
  if (!preElement) return
  const codeText = preElement.innerText
  navigator.clipboard.writeText(codeText).then(() => {
    button.innerText = '복사됨!'
    setTimeout(() => {
      button.innerText = '복사'
    }, 2000)
  }).catch((err) => {
    console.error('복사 실패:', err)
  })
}
</script>

<style scoped>
/* 전체 폰트 스타일 */
.ttf {
  font-family: 'NanumDaHaengCe';
}

/* Cover 이미지 스타일 */
.cover-banner img {
  width: 100%;
  height: auto;
  display: block;
  margin: 20px auto;
}

/* 코드 블럭 컨테이너: 본문과 확실히 구분 */
.code-container {
  background: #FAF9F6; /* 연한 회색 */
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 12px;
  margin: 16px 0;
  overflow-x: auto;
}

/* 코드 블럭 상단 헤더: 언어 표시 및 복사 버튼 */
.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 6px;
}

.code-lang {
  color: #888;
}

/* 복사 버튼 스타일 */
.copy-button {
  background: #f0f0f0;
  border: none;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}

.copy-button:hover {
  background: #e0e0e0;
}

/* 코드 블럭 내 <pre> 스타일 */
pre {
  background: rgba(200, 220, 230, 0.2); /* 연한 회색+파랑, 투명도 20% */
  padding: 12px;
  border-radius: 6px;
  font-size: 14px;
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
}

/* 콘텐츠 내 이미지: 100% 너비 적용 */
.content-img {
  width: 100%;
  height: auto;
}
</style>
