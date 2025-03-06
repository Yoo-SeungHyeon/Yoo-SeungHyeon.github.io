<!-- <template>
  <div>
    <header>
      <h1><a href="/">My Projects</a></h1>
      <nav>
        <ul>
          <li>
            <RouterLink :to="{ name: 'HomeView' }">
              <img id="icon" src="@/assets/fi-rr-home.png"/> 
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'AboutView' }">
               <img id="icon" src="@/assets/fi-rr-user.png"/> 
               About
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'ResumeView' }">
              <img id="icon" src="@/assets/fi-rr-envelope.png"/> 
              Resume
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'ProjectsView' }">
              <img id="icon" src="@/assets/fi-rr-bookmark.png"/>
              Projects
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'BlogsView' }">
              <img id="icon" src="@/assets/fi-rr-camera.png"/>
              Blogs
            </RouterLink>
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

#icon {
  width: 30px;
}
</style> -->

<template>
  <div>
    <header>
      <h1><a href="/">Yoo-SeungHyeon</a></h1>
      <nav>
        <ul>
          <li>
            <RouterLink :to="{ name: 'HomeView' }" class="tooltip">
              <img class="icon" src="@/assets/fi-rr-home.png"/>
              <span class="tooltip-text">Home</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'AboutView' }" class="tooltip">
              <img class="icon" src="@/assets/fi-rr-user.png"/>
              <span class="tooltip-text">About</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'ResumeView' }" class="tooltip">
              <img class="icon" src="@/assets/fi-rr-envelope.png"/>
              <span class="tooltip-text">Resume</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'ProjectsView' }" class="tooltip">
              <img class="icon" src="@/assets/fi-rr-bookmark.png"/>
              <span class="tooltip-text">Projects</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'BlogsView' }" class="tooltip">
              <img class="icon" src="@/assets/fi-rr-camera.png"/>
              <span class="tooltip-text">Blogs</span>
            </RouterLink>
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

/* 기본 스타일 */
main {
  padding: 20px 20%;
}

/* 헤더 스타일 */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15%;
  padding-right: 15%;
  border-bottom: 3px solid #c9e3ec;
}

h1 {
  font-family: 'NanumStrong', sans-serif;
  font-size: 50px;
}

h1 a {
  text-decoration: none;
}

/* 네비게이션 스타일 */
nav ul {
  font-size: 40px;
  display: flex;
  gap: 15px;
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin: 10px;
  position: relative; /* 툴팁 배치 기준 */
}

/* 링크 스타일 */
nav ul li a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out;
}

/* 마우스 오버 효과 */
nav ul li a:hover {
  background-color: #a2d5e5;
}

/* 아이콘 스타일 */
.icon {
  width: 30px;
  display: block;
}

/* 툴팁 스타일 */
.tooltip {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tooltip-text {
  position: absolute;
  bottom: -30px; /* 아이콘 아래에 위치 */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 14px;
  padding: 5px 8px;
  border-radius: 5px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
}

/* 마우스를 올리면 툴팁 표시 */
.tooltip:hover .tooltip-text {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-5px);
}
</style>
