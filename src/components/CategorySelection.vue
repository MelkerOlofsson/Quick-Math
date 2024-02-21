<template>
  <div class="container">
    <h1 class="title">Categories</h1>
    <div class="grid-container">
      <div class="item1">Addtion</div>
      <div class="item2">Subtraktion</div>
      <div class="item3">Multiplikation</div>
      <div class="item4">Division</div>
      <div class="item5">Geometri</div>
      <div class="item6">Decimaler</div>
      <div class="item7">Fraktioner</div>
      <div class="item8">Trigonometri</div>
      <div class="item9">Probabilitet</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  background: red;
  margin: 2rem;
}

.title {
  background-color: blue;
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
  background-color: #2196F3;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
  border-radius: 10px;

}
</style>
