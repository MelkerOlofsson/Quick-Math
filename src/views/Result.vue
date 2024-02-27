<template>
    <div class="results-container">
        <h1>You scored {{ score }} out of {{ total }}!</h1>
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
      this.$router.push({ name: "Question" });
    },
    nextQuiz() {
      // Placeholder function for proceeding to the next quiz
      console.log("Next quiz action");
    },
  },
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
    font-size: 2.5rem;
    margin-bottom: 2rem;
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
