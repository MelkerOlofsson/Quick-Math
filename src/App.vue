<template>
  <div class="box">
    <nav>
      <div class="box-content">
        <a v-if="notInHomePage" @click="navigateToDifficulty">
          <img class="logo push-left" src="/calculator.png" alt="Logo" />
        </a>
        <img v-else class="logo" src="/calculator.png" alt="Logo" />
      </div>
      <button v-if="showLogout" @click="logout" class="logout-button">
        Logout
      </button>
    </nav>
    <RouterView />
  </div>
</template>

<script>
export default {
  computed: {
    showLogout() {
      // Don't show the logout button in Home page
      return this.$route.name !== "Home";
    },
    notInHomePage() {
      // Can't press Logo in Home page
      return this.$route.name !== "Home";
    },
  },
  methods: {
    logout() {
      // Navigate back to the login page
      this.$router.push({ name: "Home" });
    },
    navigateToDifficulty() {
      // Navigate to the difficulty page
      this.$router.push({ name: "Difficulty" });
    },
  },
};
</script>

<style scoped>
.box {
  background-color: #ded6d6;
  min-height: 100vh;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #db4c4c;
}

.box-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

.logo {
  width: 60px;
}

.push-left {
  margin-left: 100px;
  cursor: pointer;
}

.logout-button {
  background-color: #ded6d6;
  color: #db4c4c;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 8px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: rgba(222, 214, 214, 0.7);
}
</style>
