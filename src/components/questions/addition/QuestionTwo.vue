<template>
  <div class="question-container">
    <h2>4 + 3 = _</h2>
  </div>
  <div class="answers-container">
    <input
      class="answer-button"
      type="button"
      value="7"
      @click="answerClicked(7)"
      :disabled="answerInput !== null"
    />
    <input
      class="answer-button"
      type="button"
      value="6"
      @click="answerClicked(6)"
      :disabled="answerInput !== null"
    />
    <input
      class="answer-button"
      type="button"
      value="9"
      @click="answerClicked(9)"
      :disabled="answerInput !== null"
    />
    <input
      class="answer-button"
      type="button"
      value="8"
      @click="answerClicked(8)"
      :disabled="answerInput !== null"
    />
  </div>
  <div v-if="answerInput !== null" class="question-answered">
    <h3 v-if="questionPassed === true">Right!</h3>
    <h3 v-if="questionPassed === false">Wrong!</h3>
    <input type="button" value="Next question &#x2192;" @click="$emit('to-next-question', this.questionPassed)">
  </div>
</template>

<script>

  export default {
    data() {
      return {
        correctAnswer: 7,
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
    },
    emits: ["to-next-question"]
  }
</script>
