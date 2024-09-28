<template>
  <div class="background-image">
    <div class="Header">
      <h1>รายชื่อสมาชิกกลุ่ม</h1>
    </div>
    <div class="Sub-Head">
      <h2>นายจิรัฎฐ์ ชุติเกียรติญานนท์ 6504101313</h2>
      <h2>นางสาวมนภัทร มั่นคง 6504101374</h2>
      <h2>นางสาวศิรินภา มณีรัตน์ 6504101393</h2>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

.background-image {
  background-image: url('@/assets/wokwok.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.Header {
  font-family: 'Kanit', sans-serif;
  text-align: center;
  margin-top: 10rem;
  color: rgb(255, 153, 20);
}

.Sub-Head {
  font-family: 'Kanit', sans-serif;
  text-align: center;
  margin-top: 1rem;
  color: bisque;
}
</style>
