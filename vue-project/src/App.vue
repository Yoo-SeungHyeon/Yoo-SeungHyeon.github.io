<template>
  <div>
    <header>
      <h1><a href="/">My Portfolio</a></h1>
      <nav>
        <ul>
          <li>
            <RouterLink :to="{ name: 'HomeView' }">Home</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'AboutView' }">About</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'ProjectsView' }">Projects</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'ResumeView' }">Resume</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'BlogsView' }">Blogs</RouterLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
/* 📌 1. 올바른 폰트 적용 (절대 경로 대신 상대 경로) */
@font-face {
  font-family: 'NanumStrong';
  src: url('./assets/nanumstrong.ttf') format('truetype'); /* ✅ 경로 수정 */
  font-weight: 8000;
  font-style: normal;
}

@font-face {
  font-family: 'Nanum31';
  src: url('./assets/nanum31.ttf');
  font-weight: 1000;
  font-style: normal;
}

main {
  padding: 20px 20%;
}

/* 📌 3. 헤더 스타일 */
header {
  font-family: 'NanumStrong', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15%;
  padding-right: 15%;
  border-bottom: 3px solid #c9e3ec;
}

h1 {
  font-size: 50px;
}

h1 a{
  text-decoration: none;
}
/* 📌 4. 네비게이션 메뉴 */
nav ul {
  font-size: 40px;
  display: flex;
  gap: 15px;
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin: 10px; /* ✅ 단위 추가 */
}

/* 📌 5. 링크 스타일 */
nav ul li a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out;
}

/* 📌 6. 마우스 오버 효과 */
nav ul li a:hover {
  background-color: #a2d5e5;
}
</style>
