<template>
  <div class="question-container">
    <h2>1 + 3 = _</h2>
  </div>
  <div class="answers-container">
    <!-- Använder v-for för att skapa svarsalternativen -->
    <input v-for="optionValue in answerOptions"
      :key="optionValue"
      class="answer-button"
      type="button"
      :value="optionValue"
      @click="answerClicked(optionValue)"
      :class="rightOrWrongAnswer(optionValue)"
      :disabled="answerInput !== null"
    />
  </div>
  <div v-if="answerInput !== null" class="question-answered">
    <h3 v-if="questionPassed === true" class="right-answer">Right!</h3>
    <h3 v-if="questionPassed === false" class="wrong-answer">Wrong!</h3>
    <input type="button" value="Next question &#x2192;" @click="$emit('to-next-question', this.questionPassed)">
  </div>
</template>

<script>

  export default {
    data() {
      return {
        correctAnswer: 4, // Svaret på frågan
        answerOptions: [3, 5, 4, 6], // Svarsalternativen på frågan
        questionPassed: null,
        answerInput: null,
      }
    },
    methods: {
      answerClicked(value) { // Funktion som kollar om svaret var rätt eller fel
        this.answerInput = value;
        if (this.answerInput === this.correctAnswer) {
          this.questionPassed = true;
        } else {
          this.questionPassed = false;
        }
      },

      rightOrWrongAnswer(value) { // Funktion som dynamiskt returenar en klass
        return {
          'correct-answer-button': this.correctAnswer === value,
          'wrong-answer-button': this.answerInput === value && this.answerInput !== this.correctAnswer
        }
      }
    },
    emits: ["to-next-question"]
  }
</script>

<style scoped>

.question-container {
  font-size: 1.5rem;
}

.answers-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  max-width: 30rem;
  margin-top: 4rem;
}

.answer-button {
  border: 2px solid transparent;
  border-radius: 1rem;
  padding: 2rem 5rem;
  font-size: 2rem;
}

.answer-button:hover {
  cursor: pointer;
  background-color: rgba(128, 128, 128, 0.2);
}

.correct-answer-button:disabled {
  border: 2px green solid;
}

.wrong-answer-button:disabled {
  border: 2px red solid
}

h3 {
  font-size: 1.5rem;
  text-align: center;
}

.right-answer {
  color: rgb(0, 165, 0);
}

.wrong-answer {
  color: rgb(255, 0, 0)
}

</style>
