<template>
  <div id="app">
    <header class="header">
      <router-link to="/about" exact class="logo">Eli Cavalheiro</router-link>
      <div class="nav">
        <router-link to="/about">about</router-link>
        <router-link to="/work-projects">work & projects</router-link>
        <!-- <router-link to>PT</router-link>
        <router-link to>EN</router-link>-->
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style lang="scss">
$bg-color: #1f1f1f;
$text-color: #f1f1f1;
$first-font-style: "Ubuntu", sans-serif;
$second-font-style: "Alegreya Sans SC", sans-serif;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: $bg-color;
  color: $text-color;
  font-family: $first-font-style;
}

::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-track {
  background: var(--bg-color);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgb(241, 241, 241);
  border-radius: 15px;
}

.header {
  margin: 50px 11% 150px 11%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: $second-font-style;
  font-size: 1.5rem !important;
}

.header::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 10%;
  right: 0;
  background: $text-color;
  animation: grow 0.8s ease-in-out;
}

.header {
  & a {
    text-decoration: none;
    color: $text-color;
    font-size: 1.1rem;
  }
}

@keyframes grow {
  from {
    width: 0;
  }
  to {
    width: 10%;
  }
}

.nav {
  & a {
    margin: 10px;
  }

  .router-link-active,
  .router-link-exact-active {
    text-decoration: underline !important;
  }
}

@media (max-width: 600px) {
  .header {
    margin: 30px;

    &::after {
      display: none;
    }

    & a {
      font-size: 0.9rem;
    }
  }

  .logo {
    font-size: 1.1rem !important;
  }
}
</style>
