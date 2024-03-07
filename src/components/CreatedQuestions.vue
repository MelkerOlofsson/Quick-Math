<template>
  <div class="question-container">
    <!-- Skapar och visar frågan -->
    <h2>{{ questionObject.question }}</h2>
  </div>
  <div class="answers-container">
    <!-- Använder v-for för att skapa svarsalternativen -->
    <input v-for="optionValue in questionObject.answerOptions"
      :key="optionValue"
      class="answer-button"
      type="button"
      :value="optionValue"
      @click="answerClicked(optionValue)"
      :class="rightOrWrongAnswer(optionValue)"
      :disabled="answerInput !== null"
    />
  </div>
  <!-- Om frågan har besvarats så visas detta -->
  <div v-if="answerInput !== null" class="question-answered">
    <h3 v-if="questionPassed === true" class="right-answer">Right!</h3>
    <h3 v-if="questionPassed === false" class="wrong-answer">Wrong!</h3>
    <input type="button" value="Next &#x2192;" @click="handleNext">
  </div>
</template>

<script>

  export default {
    data() {
      return {
        questionPassed: null,
        answerInput: null,
      }
    },
    props: {
      questionObject: {
        // Innehåller frågan med följande objektsnycklar: "question", "correctAnswer", "answerOptions".
        type: Object
      }
    },
    methods: {

      handleNext() { // Återställer inför nästa fråga och efterfrågar en ny fråga genom "emit".
        this.$emit('to-next-question', this.questionPassed);
        this.questionPassed = null;
        this.answerInput = null;
      },

      answerClicked(value) { // Kollar om svaret var rätt eller fel.
        this.answerInput = value;
        if (this.answerInput === this.questionObject.correctAnswer) {
          this.questionPassed = true;
        } else {
          this.questionPassed = false;
        };
      },

      rightOrWrongAnswer(value) { // Dynamiskt returenar en klass vid rätt eller fel svar.
        return {
          'correct-answer-button': this.questionObject.correctAnswer === value,
          'wrong-answer-button': this.answerInput === value && this.answerInput !== this.questionObject.correctAnswer
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
  margin: 4rem 0;
}

.answer-button {
  background-color: white;
  border: 2px solid transparent;
  border-radius: 1rem;
  padding: 2rem 4rem;
  font-size: 2rem;
  min-width: 11rem;
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
