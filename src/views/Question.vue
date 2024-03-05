<template>

  <div class="question-container">
    <h1>Question {{ questionNumber }}/{{ questionCount }}</h1>
    <CreatedQuestions :question-object="this.currentQuestion" @to-next-question="toNextQuestion"/>
  </div>

</template>

<script>

import CreatedQuestions from '../components/CreatedQuestions.vue'
import jsonData from '../assets/questions.json'

export default {
  components: {
    CreatedQuestions
  },
  data() {
    return {
      // Samtliga frågor ifrån 'questions.json' under "addition" och "beginner".
      questionData: jsonData.category.addition.difficulty.beginner,

      // Håller räkning.
      questionNumber: 1,
      totalScore: 0,
      questionCount: null,
    }
  },
  methods: {
    // Funktion som kollar antal frågor.
    amountOfQuestion() {
      this.questionCount = this.questionData.length;
    },

    // Funktion som byter fråga eller avslutar quizet om inga fler frågor finns.
    toNextQuestion(correctAnswer) {
      // Kollar om svaret var korrekt på förgående fråga.
      if (correctAnswer === true) {
        this.totalScore += 1;
      };
      // Kollar om det finns en till fråga.
      if (this.questionNumber < this.questionCount) {
        this.questionNumber++;
      } else {
        this.$router.push({ name: "Result", params: { score: this.totalScore, total: this.questionNumber } });
      };
    },
  },

  created() {
    this.amountOfQuestion();
  },

  computed: {
    // Hämtar nuvarande fråga.
    currentQuestion() {
      return this.questionData.find((question) => question.id === this.questionNumber);
    },
  },
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
