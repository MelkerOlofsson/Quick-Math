<template>
  <div class="navbar-container">
    <a href="#" class="navbar-link">Home</a>
    <a href="#/category" class="navbar-link">Category</a>
    <a href="#/faq" class="navbar-link">FAQ</a>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    showIcon() {
      // Don't show icon in Home page
      return this.$route.name !== "Home";
    },
  },
};
</script>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  background-color: #ff9500;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-link {
  margin: 0 10px;
  padding: 0.25rem 0.75rem;
  font-size: 0.9rem;
  color: #1c1c1c;
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 8px;
  text-decoration: none;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.navbar-container::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;
  height: 5px;
  background-color: #e0e0e0;
  border-radius: 2px;
}
.navbar-link::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: -100%;
  background-color: #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s ease;
  z-index: -1;
}

.navbar-link:hover::before {
  left: 0;
}

.navbar-link:hover {
  color: #1c1c1c;
}
</style>
