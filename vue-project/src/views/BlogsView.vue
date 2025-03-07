<template>
  <div>
    <h1>Blogs</h1>
    <!-- grid container -->
    <div class="blog-grid">
      <PostCard
        v-for="post in blogsStore.blogsList"
        :key="post.post_id"
        class="card"
        :post="post"
        @click="showPostDetail(post.post_id)"
      />
    </div>
  </div>
</template>

<script setup>
import PostCard from '@/components/PostCard.vue'
import { useBlogsStore } from '@/stores/blogs'
import { useRouter } from 'vue-router'

const blogsStore = useBlogsStore()
const router = useRouter()

const showPostDetail = function(post_id) {
  router.push(`/blogs/${post_id}`)
}
</script>

<style scoped>
/* grid container 설정 */
.blog-grid {
  display: grid;
  gap: 20px; /* 카드 간 간격 */
  /* 각 카드의 최소 크기를 250px로 지정하고, 공간에 맞춰 늘어남 */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

h1 {
  font-family: 'NanumDaHaengCe';
}

/* PostCard에 대한 추가 스타일 (필요한 경우) */
.card {
  cursor: pointer;
  /* 카드 내용이 격자 형태에 맞게 조정되도록 설정 */
  box-sizing: border-box;
  /* font-family: 'NanumGarMaesGeur'; */
  font-family: 'NanumDaHaengCe';
}
</style>
