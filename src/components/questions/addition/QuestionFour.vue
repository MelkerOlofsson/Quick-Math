<template>
  <div class="question-container">
    <h2>9 + 11 = _</h2>
  </div>
  <div class="answers-container">
    <input
      class="answer-button"
      type="button"
      value="18"
      @click="answerClicked(18)"
      :disabled="answerInput !== null"
    />
    <input
      class="answer-button"
      type="button"
      value="21"
      @click="answerClicked(21)"
      :disabled="answerInput !== null"
    />
    <input
      class="answer-button"
      type="button"
      value="19"
      @click="answerClicked(19)"
      :disabled="answerInput !== null"
    />
    <input
      class="answer-button"
      type="button"
      value="20"
      @click="answerClicked(20)"
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
        correctAnswer: 20,
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
