<template>
  <div class="container">
    <transition appear name="content">
      <div class="content" v-for="(project, key) in activeProject" :key="key">
        <transition appear name="title">
          <h1>{{project.name}}</h1>
        </transition>
        <p>{{project.description}}</p>
        <img
          src="../assets/projects/totodo.png"
          :alt="project.name"
          v-if="project.name === 'totodo'"
        />
        <img
          src="../assets/projects/devcv.png"
          :alt="project.name"
          v-else-if="project.name === 'devcv'"
        />
        <p class="footer">Made with love by Eli Cavalheiro.</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: ["project"],
  data() {
    return {
      projects: [
        {
          name: "totodo",
          title: ".totodo",
          description:
            "A beatiful and easy to do app designed for people who wants to organize ideas, thoughts or even job tasks.",
        },
        {
          name: "devcv",
          title: "devcv",
          description:
            "A beatiful and easy to do app designed for people who wants to organize ideas, thoughts or even job tasks.",
        },
      ],
      activeProject: [],
    };
  },
  methods: {
    getProjectInfo() {
      const { project, projects, activeProject } = this;
      const filteredProject = projects.filter((item) => {
        return item.name === project;
      });

      filteredProject.map((item) => {
        activeProject.push({
          name: item.name,
          description: item.description,
        });
      });

      console.log(activeProject);
    },
  },
  created() {
    this.getProjectInfo();
  },
};
</script>

<style lang="scss" scoped>
.content-enter-active,
.content-leave-active {
  transition: all 0.8s ease-in-out;
}

.content-enter,
.content-leave-to {
  opacity: 0;
}

.title-enter-active,
.title-leave-active {
  transition: all 0.3s 0.5s ease-in-out;
}

.title-enter,
.title-leave-to {
  opacity: 0;
  transform: translate3d(-30px, 0, 0);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 50%;
  text-align: center;

  & h1 {
    margin: 0 20%;
    font-family: "Alegreya Sans SC", sans-serif;
    font-size: 100px;
  }

  & p {
    margin-top: 30px;
    font-size: 26px;
    line-height: 39px;
  }
}

@keyframes fill {
  from {
    width: 0;
  }
}

.footer {
  font-size: 16px !important;
  text-align: center;
  margin-bottom: 35px;
}
</style>