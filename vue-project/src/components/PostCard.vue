<template>
  <div class="card">
    <h2>{{ post.title }}</h2>
    <img :src="post.cover" alt="Cover Image" />
    <p>{{ post.detail }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.card {
  width: 300px;
  padding:10px
}

img {
  width:100%;
}

.card:hover {
  background-color: #d8ebff60;
}
</style>
