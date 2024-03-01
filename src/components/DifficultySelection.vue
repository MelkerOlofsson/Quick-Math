<template>
  <p>Choose your level:</p>
  <div class="level-buttons">
    <button @click="beginner">Beginner (5-8 years old)</button>
    <button>Intermediate (9-12 years old)</button>
    <button>Expert (13-17 years old)</button>
    <button @click="Test">Challenge: Answer until you get one wrong</button>
  </div>
</template>

<script>
export default {
  methods: {
    beginner() {
      this.$router.push({ name: "Question" });
    },
    Test() {
      this.$router.push({ name: "Test" });
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}

.level-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  width: 400px;
  height: 60px;
  background-color: white;
  border: none;
  border-radius: 4px;
}

button:hover {
  cursor: pointer;
  background-color: rgba(128, 128, 128, 0.2);
}
</style>
