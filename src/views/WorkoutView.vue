<template>
  <div class="background-image">
    <div class="exercise-tracker">
      <h1>บันทึกการออกกำลังกาย</h1>
      <form @submit.prevent="saveExercise">
        <label for="exerciseType">ประเภทการออกกำลังกาย:</label>
        <select v-model="exerciseType" id="exerciseType" @change="updateCalories">
          <option value="running">วิ่ง</option>
          <option value="swimming">ว่ายน้ำ</option>
          <option value="cycling">ปั่นจักรยาน</option>
          <option value="cardio">คาร์ดิโอ</option>
          <option value="yoga">โยคะ</option>
          <option value="weightTraining">เวทเทรนนิ่ง</option>
          <option value="aerobics">แอโรบิค</option>
          <option value="boxing">มวย</option>
          <option value="badminton">แบตมินตัน</option>
          <option value="soccer">ฟุตบอล</option>
          <option value="futsal">ฟุตซอล</option>
          <option value="rockClimbing">ปีนผา</option>
        </select>

        <label for="duration">ระยะเวลา (นาที):</label>
        <input type="number" v-model="duration" id="duration" min="1" @input="updateCalories" />

        <label for="date">วันที่:</label>
        <input type="date" id="date" v-model="date" required />

        <label for="calories">แคลอรีที่เผาผลาญ:</label>
        <input type="number" v-model="caloriesBurned" id="calories" readonly />

        <button type="submit">บันทึกข้อมูล</button>
        <RouterLink to="/worklist">
          <button type="button">ดูรายการการออกกำลังกาย</button>
        </RouterLink>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exerciseType: 'running',
      duration: 0,
      date: '',
      caloriesBurned: 0,
      calorieBurnRates: {
        running: 600,
        swimming: 500,
        cycling: 400,
        cardio: 500,
        yoga: 200,
        weightTraining: 300,
        aerobics: 400,
        boxing: 600,
        badminton: 400,
        soccer: 600,
        futsal: 600,
        rockClimbing: 500
      }
    }
  },
  methods: {
    saveExercise() {
      const exercise = {
        type: this.exerciseType,
        duration: this.duration,
        date: this.date,
        caloriesBurned: this.caloriesBurned
      }
      console.log('Sending exercise:', exercise)
      alert('บันทึกข้อมูลสำเร็จ!')
    },
    updateCalories() {
      const burnRate = this.calorieBurnRates[this.exerciseType] || 0
      this.caloriesBurned = (burnRate * this.duration) / 60
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

.background-image {
  background-image: url('@/assets/bgwork.png');
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

.exercise-tracker {
  background-color: #ffedc6;
  border-radius: 10px;
  padding: 20px;
  max-width: 500px;
  margin: 120px auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-family: 'Kanit', sans-serif;
  color: #ff9800;
}

label {
  font-family: 'Kanit', sans-serif;
  color: #ff5722;
  margin-top: 10px;
  display: block;
}

select,
input {
  font-family: 'Kanit', sans-serif;
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ffcc80;
  border-radius: 5px;
}

button {
  font-family: 'Kanit', sans-serif;
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #e68900;
}

p {
  font-family: 'Kanit', sans-serif;
  color: #cf5a12;
  margin-top: 20px;
}
</style>
