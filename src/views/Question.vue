<template>
  <h1>Question {{ questionNumber }}/5</h1>
  <QuestionOne />
</template>

<script>

import QuestionOne from '../components/questions/addition/QuestionOne.vue'

export default {
  components: {
    QuestionOne
  },
  data() {
    return {
      questionNumber: 1
    }
  }
}

</script>
