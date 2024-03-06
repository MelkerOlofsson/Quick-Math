<template>
    <div class="results-container">
        <h1>You scored {{ score }} out of {{ total }}!</h1>
        <div class="star-container">
          <img
            v-for="n in this.stars"
            src="../assets/icons8-star-100.png"
            alt="Earned star"
          />
          <img
            v-for="n in (3 - this.stars)"
            src="../assets/icons8-star-unlit-100.png"
            alt="Unlit star"
          />
        </div>
        <div class="button-container">
            <button @click="retakeQuiz">Retake quiz</button>
            <button @click="nextQuiz">Next quiz</button>
        </div>
    </div>
</template>

<script>
export default {
  props: ['score', 'total'],
  methods: {
    retakeQuiz() {
      // Navigate back to the quiz page to retake the quiz
      this.$router.go(-1);
    },
    nextQuiz() {
      // Placeholder function for proceeding to the next quiz
      this.$router.push({ name: "Category" });
    },
  },
  computed: {
    // Calculate earned star medals
    stars() {
      if (this.score < (this.total / 4) * 1) {
        return 0;
      } else if (this.score <= (this.total / 4) * 2) {
        return 1;
      } else if (this.score <= (this.total / 4) * 3) {
        return 2;
      } else {
        return 3;
      };
    }
  }
};
</script>



<style scoped>
.results-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  color: var(--color);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.star-container {
  display: flex;
  margin: 1rem;
}

.button-container {
  display: flex;
  gap: 1rem;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  cursor: pointer;
  background-color: #80808033;
}

</style>
