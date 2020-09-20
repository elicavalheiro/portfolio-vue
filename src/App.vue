<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "@/views/Home";

export default {
  name: "app",
  components: {
    Home,
  },
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
</style>
