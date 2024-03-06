<script>
export default {
  data() {
    return {
      num1: null,
      num2: null,
      correctAnswer: null,
      answerOptions: [],
      questionPassed: null,
      answerInput: null,
      correctAnswersCount: 0, // Count of correct answers in the current streak
      totalCorrectAnswers: 0, // Total number of correct answers
      totalQuestions: 0, // Total number of questions asked
    };
  },
  methods: {
    generateQuestion() {
      this.num1 = Math.floor(Math.random() * 10) + 1;
      this.num2 = Math.floor(Math.random() * 10) + 1;
      this.correctAnswer = this.num1 + this.num2;

      // Select a random index for the correct answer
      const correctIndex = Math.floor(Math.random() * 4);

      // Generate options
      this.answerOptions = [];
      for (let i = 0; i < 4; i++) {
        let option;
        if (i === correctIndex) {
          option = this.correctAnswer; // Assign correct answer to the selected index
        } else {
          do {
            const min = this.correctAnswer - 5;
            const max = this.correctAnswer + 5;
            option = Math.floor(Math.random() * (max - min + 1)) + min;
          } while (
            option === this.correctAnswer ||
            this.answerOptions.includes(option)
          );
        }
        this.answerOptions.push(option);
      }

      // Shuffle the answer options array
      this.answerOptions = this.shuffleArray(this.answerOptions);

      // Increment total questions counter
      this.totalQuestions++;
    },

    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },

    answerClicked(value) {
      this.answerInput = parseInt(value); // Parse input to ensure numerical comparison
      if (this.answerInput === this.correctAnswer) {
        this.questionPassed = true;
        this.correctAnswersCount++;
        this.totalCorrectAnswers++; // Increment total correct answers
      } else {
        this.questionPassed = false;
        this.correctAnswersCount = 0; // Reset correct answers count
      }
    },

    rightOrWrongAnswer(value) {
      return {
        "correct-answer-button": this.correctAnswer === parseInt(value),
        "wrong-answer-button":
          this.answerInput === parseInt(value) &&
          this.answerInput !== this.correctAnswer,
      };
    },
    nextQuestionOrShowResult() {
      if (this.questionPassed) {
        this.generateQuestion();
      } else {
        // Be sent to result page
        this.$router.push({
          name: "Result",
          params: {
            score: this.totalCorrectAnswers,
            total: this.totalQuestions,
          },
        });
      }
      // Reset all counters when showing result
      this.answerInput = null;
      this.questionPassed = null;
      this.correctAnswersCount = 0;
    },
  },
  mounted() {
    this.generateQuestion();
  },
  emits: ["to-next-question"],
};
</script>

<template>
  <div class="box-container">
    <div class="question-container">
      <h2>{{ num1 }} + {{ num2 }} = _</h2>
    </div>
    <div class="answers-container">
      <input
        v-for="optionValue in answerOptions"
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
      <input
        v-if="questionPassed !== null"
        type="button"
        :value="questionPassed ? 'Next question &#x2192;' : 'Show result'"
        @click="nextQuestionOrShowResult()"
      />
    </div>
  </div>
</template>

<style scoped>
.box-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.question-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.answers-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 0 auto;
  max-width: 30rem;
  margin: 4rem 0;
}

.answer-button {
  background-color: white;
  border: 2px solid transparent;
  border-radius: 1rem;
  padding: 2rem 4rem;
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
  border: 2px red solid;
}

h3 {
  font-size: 1.5rem;
  text-align: center;
}

.right-answer {
  color: rgb(0, 165, 0);
}

.wrong-answer {
  color: rgb(255, 0, 0);
}

.question-answered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
