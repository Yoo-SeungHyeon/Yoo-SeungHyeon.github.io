// src/stores/blogs.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

// md 파일들이 위치한 경로 (store 파일 위치에 따라 경로 수정 필요)
// 여기서는 md 파일들이 src/pages 폴더에 있다고 가정합니다.
const mdModules = import.meta.glob('../pages/*.md', { eager: true, as: 'raw' })

export const useBlogsStore = defineStore('blogs', () => {
  const blogsList = ref(
    Object.keys(mdModules).map((filePath) => {
      const rawContent = mdModules[filePath]
      // 파일의 내용을 줄 단위로 분리합니다.
      const lines = rawContent.split('\n')
      const title = lines[0] ? lines[0].trim() : ''
      const cover = lines[1] ? lines[1].trim() : ''
      const detail = lines[2] ? lines[2].trim() : ''

      // 파일 경로에서 / 뒤에 오는 파일 이름(.md 제거)을 post_id로 사용
      const match = filePath.match(/\/([^/]+)\.md$/)
      const post_id = match ? match[1] : filePath

      return { post_id, title, cover, detail }
    })
  )

  return { blogsList }
})
