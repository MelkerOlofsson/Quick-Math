<template>
  <div class="box">
    <header>
      <img class="logo-box" src="../../public/calculator.png" alt="Logo" />
    </header>
    <div class="container">
      <h1 class="title">
        Quick <br />
        Maths
      </h1>
      <div class="content">
        <p>Your daily math dosage</p>
        <hr />
      </div>

      <p class="Log-in-text">Log In</p>
      <input type="text" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="login">Login</button>
      <p v-if="invalidLogin" class="error-message">
        Invalid email or password. Please try again.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      invalidLogin: false, // Invalid login
    };
  },
  methods: {
    login() {
      // Check if email and password match
      if (this.email === "guest01" && this.password === "123") {
        // Redirect to the next page -- not created yet -- need router.js and destination page
        this.$router.push({ name: "NextPage" });
      } else {
        this.invalidLogin = true;
      }
    },
  },
};
</script>

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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
}
.title {
  font-family: kavoon, arial, helvetica, sans-serif;
  font-size: 4rem;
  margin-bottom: 2rem;
}
.content {
  text-align: center;
  margin-top: -40px;
}

.Log-in-text {
  font-size: larger;
  font-weight: bold;
  font-family: Courier, monospace;
}

input {
  margin-top: -8px;
  margin-bottom: 16px;
  border-radius: 2px;
  width: 180px;
}
.error-message {
  color: red;
}
</style>
