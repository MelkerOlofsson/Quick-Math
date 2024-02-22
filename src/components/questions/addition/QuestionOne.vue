<template>
  <div class="question-container">
    <h2>1 + 3 = _</h2>
  </div>
  <div class="answers-container">
    <input
      class="answer-button"
      type="button"
      value="3"
      @click="answerClicked(3)"
      :disabled="answerInput !== null"
    />
    <input
      class="answer-button"
      type="button"
      value="5"
      @click="answerClicked(5)"
      :disabled="answerInput !== null"
    />
    <input
      class="answer-button"
      type="button"
      value="4"
      @click="answerClicked(4)"
      :disabled="answerInput !== null"
    />
    <input
      class="answer-button"
      type="button"
      value="6"
      @click="answerClicked(6)"
      :disabled="answerInput !== null"
    />
  </div>
  <div v-if="answerInput !== null" class="question-answered">
    <h3 v-if="questionPassed === true">Rätt!</h3>
    <h3 v-if="questionPassed === false">Fel!</h3>
    <input type="button" value="Next question &#x2192;">
  </div>
</template>

<script>

  export default {
    data() {
      return {
        correctAnswer: 4,
        questionPassed: null,
        answerInput: null
      }
    },
    methods: {
      answerClicked(value) {
        this.answerInput = value;
        if (this.answerInput === this.correctAnswer) {
          this.questionPassed = true
        } else {
          this.questionPassed = false
        }
      }
    }
  }
</script>
