
<template>
  <div class="box">
    <header>
      <img class="logo-box" src="/calculator.png" alt="Logo" />
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #db4c4c;
}

.logo-box {
  width: 60px;
}
.box {
  background-color: #ded6d6;
  min-height: 100vh;
}
</style>
