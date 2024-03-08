<template>
  <div class="box">
    <nav>
      <div class="box-content">
        <img
          v-if="showIcon"
          class="logo push-left"
          src="/src/assets/calculator.png"
          alt="Logo"
        />
        <img v-else class="logo" src="/src/assets/calculator.png" alt="Logo" />
      </div>
      <button v-if="showIcon" @click="logout" class="logout-button">
        Logout
      </button>
    </nav>
    <NavBar v-if="showIcon" />
    <RouterView />
  </div>
</template>

<script>
// Import NavBar
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  computed: {
    showIcon() {
      // Don't show the logout button in Home page
      return this.$route.name !== "Home";
    },
  },
  methods: {
    logout() {
      // Navigate back to the login page
      this.$router.push({ name: "Home" });
    },
    navigateToCategory() {
      // Navigate to the Category page
      this.$router.push({ name: "Category" });
    },
  },
};
</script>

<style scoped>
.box {
  background-color: #ded6d6;
  min-height: 100vh;
  height: auto;
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
  margin-left: 104px;
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
