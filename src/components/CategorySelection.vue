<script>
export default {
  data(){
    return{
      categories:[
        "Addition",
        "Subtraction",
        "Multiplication",
        "Division",
        "Geometri",
        "Decimals",
        "Fractions",
        "Trigonometry",
        "Probability"
      ]
    }
  },
  methods: {
    category1(/*destination*/) {
      this.$router.push({ name: /*destination*/ "Difficulty"});
    },
  },

};
</script>

<template>
  <div class="container">
    <h1 class="title">Categories</h1>
    <div class="grid-container" >
      <div v-for="category in categories" @click="category1(/*category*/)">{{ category }}</div>
    </div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  margin: 2rem;
}

.title {
  font-family: kavoon, arial, helvetica, sans-serif;
  font-size: 4rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.grid-container {
  width: 60%;
  display: grid;
  grid-template-columns: auto auto auto ;
  grid-gap: 30px;
  padding: 10px;
  align-items: center;
}

.grid-container > div {
  background-color: white;
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
  border-radius: 10px;

}

.grid-container > div:hover{
  cursor: pointer;
  background-color: rgba(128, 128, 128, 0.2);
}

@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: auto;
  }
}

</style>
