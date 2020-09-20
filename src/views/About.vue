<template>
  <div class="about">
    <Intro />
    <AboutComponent />
    <Skills />
    <WorkExperiences />
    <Contact />
  </div>
</template>

<script>
import Intro from "@/components/Intro";
import AboutComponent from "@/components/AboutComponent";
import Skills from "@/components/Skills";
import WorkExperiences from "@/components/WorkExperiences";
import Contact from "@/components/Contact";

export default {
  name: "About",
  components: {
    Intro,
    AboutComponent,
    Skills,
    WorkExperiences,
    Contact,
  },
};
</script>
