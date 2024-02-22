<template>
  <div class="question-container">
    <h2>8 + 8 = _</h2>
  </div>
  <div class="answers-container">
    <input
      class="answer-button"
      type="button"
      value="17"
      @click="answerClicked(17)"
      :disabled="answerInput !== null"
    />
    <input
      class="answer-button"
      type="button"
      value="16"
      @click="answerClicked(16)"
      :disabled="answerInput !== null"
    />
    <input
      class="answer-button"
      type="button"
      value="15"
      @click="answerClicked(15)"
      :disabled="answerInput !== null"
    />
    <input
      class="answer-button"
      type="button"
      value="18"
      @click="answerClicked(18)"
      :disabled="answerInput !== null"
    />
  </div>
  <div v-if="answerInput !== null" class="question-answered">
    <h3 v-if="questionPassed === true">Right!</h3>
    <h3 v-if="questionPassed === false">Wrong!</h3>
    <input type="button" value="Finish quiz &#x2192;" @click="$emit('finish-quiz', this.questionPassed)">
  </div>
</template>

<script>

  export default {
    data() {
      return {
        correctAnswer: 16,
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
    emits: ["to-next-question", "finish-quiz"]
  }
</script>
