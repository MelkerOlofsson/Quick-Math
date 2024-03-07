<template>
  <p>Choose your level:</p>
  <div class="level-buttons">
    <button @click="chosenCategory('beginner')">Beginner (5-8 years old)</button>
    <button @click="chosenCategory('intermediate')">Intermediate (9-12 years old)</button>
    <button @click="chosenCategory('expert')">Expert (13-17 years old)</button>
    <button @click="Test">Challenge: Answer until you get one wrong</button>
  </div>
</template>

<script>
export default {
  methods: {
    chosenCategory(chosenDifficulty) {
      this.$router.push({ name: "Question", params: { difficulty: chosenDifficulty }});
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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: auto;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  flex-grow: 1;
  flex-grow: 1;
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
