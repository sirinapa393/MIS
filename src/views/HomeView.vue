<template>
  <div class="background-image">
    <header>
      <div class="header-content">
        <h1 class="header-title">WORKOUT</h1>
      </div>
      <div class="sub-header-content">
        <h2 class="sub-header">เว็บไซต์สำหรับการบันทึกการออกกำลังกาย</h2>
        <h2 class="sub-header1">เพื่อเพิ่มประสิทธิภาพในการออกกำลังกาย</h2>
      </div>
    </header>
  </div>
  <div class="Start">
    <RouterLink to="/workout" class="bg-primary">Start</RouterLink>
    <RouterLink to="/bmi" class="bg-primary">BMI</RouterLink>
  </div>
  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

.background-image {
  background-image: url('@/assets/workout.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.bg-primary {
  background-color: #ff583372 !important;
  color: rgb(255, 217, 182) !important;
  padding: 1rem 2rem;
  border-radius: 20px;
  text-align: center;
  display: inline-block;
  margin: 1rem;
}
.Start {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
  font-size: 3.5rem;
}

header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 90%;
  text-align: center;
  padding: 2rem;
  margin-top: 1rem;
  position: relative;
}

.header-content {
  display: flex;
  flex-direction: row;
  text-shadow: 2px 2px 0px rgb(247, 149, 103);
}

.sub-header-content {
  display: flex;
  flex-direction: column;
  margin-top: -5rem;
}

.header-title {
  font-family: 'Rubik Mono One', monospace;
  font-weight: 1000;
  color: rgb(251, 93, 20);
  font-size: 6rem;
  margin: 5rem 0;
}

.sub-header,
.sub-header1 {
  font-family: 'Kanit', sans-serif;
  color: rgb(251, 164, 114);
  margin: 0.1rem 5rem;
}

@media (min-width: 1024px) {
  .header-title {
    font-size: 6rem;
  }

  .sub-header,
  .sub-header1 {
    font-size: 1.5rem;
  }

  .Start {
    font-size: 3.5rem;
  }
}

@media (max-width: 600px) {
  .header-title {
    font-size: 2.5rem;
  }

  .sub-header,
  .sub-header1 {
    font-size: 1rem;
  }

  .Start {
    font-size: 2.5rem;
  }
}
</style>
