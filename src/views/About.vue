<template>
  <div class="about">
    <Intro />
    <AboutComponent />
    <Skills />
    <WorkExperiences />
  </div>
</template>

<script>
import Intro from "@/components/Intro";
import AboutComponent from "@/components/AboutComponent";
import Skills from "@/components/Skills";
import WorkExperiences from "@/components/WorkExperiences";

export default {
  name: "About",
  components: {
    Intro,
    AboutComponent,
    Skills,
    WorkExperiences,
  },
};
</script>
