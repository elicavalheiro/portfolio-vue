<template>
  <div class="about">
    <Intro />
    <AboutComponent />
  </div>
</template>

<script>
import Intro from "@/components/Intro";
import AboutComponent from "@/components/AboutComponent";
export default {
  name: "About",
  components: {
    Intro,
    AboutComponent,
  },
};
</script>
