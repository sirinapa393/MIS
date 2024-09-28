<script setup>
import { ref } from 'vue'

const weight = ref(0)
const height = ref(0)
const bmi = ref(null)
const bmiStatus = ref('')
const exerciseRecommendation = ref('')

const calculateBMI = () => {
  if (weight.value > 0 && height.value > 0) {
    const heightInMeters = height.value / 100
    bmi.value = (weight.value / heightInMeters ** 2).toFixed(2)

    if (bmi.value < 18.5) {
      bmiStatus.value = 'น้ำหนักน้อย'
      exerciseRecommendation.value =
        'เน้นการออกกำลังกายที่สร้างกล้ามเนื้อ เช่น เวทเทรนนิ่งและโยคะ ควบคู่กับการรับประทานอาหารที่มีแคลอรีสูงอย่างเหมาะสม'
    } else if (bmi.value >= 18.5 && bmi.value < 24.9) {
      bmiStatus.value = 'น้ำหนักปกติ'
      exerciseRecommendation.value =
        'สามารถออกกำลังกายได้ทุกประเภท ทั้งคาร์ดิโอและเวทเทรนนิ่ง เพื่อรักษาสุขภาพและรูปร่าง'
    } else if (bmi.value >= 25 && bmi.value < 29.9) {
      bmiStatus.value = 'น้ำหนักเกิน'
      exerciseRecommendation.value =
        'เน้นการออกกำลังกายแบบคาร์ดิโอ เช่น วิ่ง ว่ายน้ำ หรือปั่นจักรยาน เพื่อเผาผลาญไขมัน'
    } else {
      bmiStatus.value = 'โรคอ้วน'
      exerciseRecommendation.value =
        'ควรเริ่มด้วยการออกกำลังกายแบบเบาๆ เช่น การเดินหรือว่ายน้ำ แล้วค่อยเพิ่มความเข้มข้นเมื่อร่างกายปรับตัวได้ดีขึ้น'
    }
  } else {
    bmi.value = null
    bmiStatus.value = ''
    exerciseRecommendation.value = ''
  }
}
</script>

<template>
  <div class="bmi-calculator">
    <h1>คำนวณ BMI</h1>
    <div class="form-group">
      <label for="weight">น้ำหนัก (กิโลกรัม):</label>
      <input type="number" v-model="weight" id="weight" placeholder="กรอกน้ำหนักของคุณ" />
    </div>
    <div class="form-group">
      <label for="height">ส่วนสูง (เซนติเมตร):</label>
      <input type="number" v-model="height" id="height" placeholder="กรอกส่วนสูงของคุณ" />
    </div>
    <button @click="calculateBMI">คำนวณ BMI</button>

    <div v-if="bmi !== null" class="result">
      <h2>ผลลัพธ์:</h2>
      <p>BMI ของคุณคือ: {{ bmi }}</p>
      <p>สถานะสุขภาพ: {{ bmiStatus }}</p>
      <p>คำแนะนำการออกกำลังกาย: {{ exerciseRecommendation }}</p>
    </div>
  </div>
</template>

<style scoped>
.bmi-calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f8f8;
  padding: 2rem;
}

h1 {
  font-family: 'Kanit', sans-serif;
  color: #ff5733;
}

.form-group {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
}

label {
  font-family: 'Kanit', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  font-size: 1.1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 250px;
}

button {
  font-family: 'Kanit', sans-serif;
  padding: 0.7rem 1.5rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #ff5733;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
}

button:hover {
  background-color: #e74c3c;
}

.result {
  margin-top: 1.5rem;
  font-family: 'Kanit', sans-serif;
}

.result p {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}
</style>
