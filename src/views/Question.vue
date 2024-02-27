<template>

  <div class="question-container">
    <h1>Question {{ questionNumber }}/5</h1>
    <QuestionOne v-if="questionNumber === 1" @to-next-question="toNextQuestion"/>
    <QuestionTwo v-else-if="questionNumber === 2" @to-next-question="toNextQuestion"/>
    <QuestionThree v-else-if="questionNumber === 3" @to-next-question="toNextQuestion"/>
    <QuestionFour v-else-if="questionNumber === 4" @to-next-question="toNextQuestion"/>
    <QuestionFive v-else-if="questionNumber === 5" @finish-quiz="finishQuiz"/>
  </div>

</template>

<script>

import QuestionOne from '../components/questions/addition/QuestionOne.vue'
import QuestionTwo from '../components/questions/addition/QuestionTwo.vue'
import QuestionThree from '../components/questions/addition/QuestionThree.vue'
import QuestionFour from '../components/questions/addition/QuestionFour.vue'
import QuestionFive from '../components/questions/addition/QuestionFive.vue'

export default {
  components: {
    QuestionOne,
    QuestionTwo,
    QuestionThree,
    QuestionFour,
    QuestionFive
  },
  data() {
    return {
      questionNumber: 1,
      totalScore: 0
    }
  },
  methods: {
    // Byter fråga
    toNextQuestion(correctAnswer) {
      this.questionNumber++
      // Håller koll på antal korrekta svar
      if (correctAnswer === true) {
        this.totalScore += correctAnswer
      }
    },
    finishQuiz(correctAnswer) {
      if (correctAnswer === true) {
        this.totalScore += correctAnswer
      };
      console.log("detta körs")
      this.$router.push({ name: "Result", params: { score: this.totalScore, total: this.questionNumber } });
    }
  }
}

</script>

<style scoped>

.question-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-family: kavoon, arial, helvetica, sans-serif;
  font-size: 3rem;
  margin: 4rem;
}


</style>
