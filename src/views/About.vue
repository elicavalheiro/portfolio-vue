<template>
  <div class="about">
    <Intro />
    <AboutComponent />
    <Skills />
  </div>
</template>

<script>
import Intro from "@/components/Intro";
import AboutComponent from "@/components/AboutComponent";
import Skills from "@/components/Skills";
export default {
  name: "About",
  components: {
    Intro,
    AboutComponent,
    Skills,
  },
};
</script>
