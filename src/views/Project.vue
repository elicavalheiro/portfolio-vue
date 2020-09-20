<template>
  <div class="container">
    <transition appear name="content">
      <div class="content" v-for="(project, key) in activeProject" :key="key">
        <transition appear name="title">
          <h1>{{project.title}}</h1>
        </transition>
        <transition appear>
          <p>{{project.description}}</p>
        </transition>
        <transition appear>
          <div class="imgs">
            <img
              class="project-img"
              src="../assets/projects/totodo.png"
              :alt="project.name"
              v-if="project.name === 'totodo'"
            />
            <img
              class="project-img"
              src="../assets/projects/devcv.png"
              :alt="project.name"
              v-else-if="project.name === 'devcv'"
            />
          </div>
        </transition>
        <transition appear>
          <a href="#project" class="see-live">see live</a>
        </transition>
        <transition appear>
          <div class="nav">
            <!-- <router-link :to="('/work-projects/' + previousProject)">Previous Project</router-link> -->
            <a :href="('/work-projects/' + previousProject)">
              <img src="../assets/arrow_left.svg" alt="Previous Icon" />
              <p>Previous Project</p>
            </a>
            <a :href="('/work-projects/' + nextProject)">
              <p>Next Project</p>
              <img src="../assets/arrow_right.svg" alt="Previous Icon" />
            </a>
          </div>
        </transition>
        <transition appear>
          <p class="footer">Made with love by Eli Cavalheiro.</p>
        </transition>
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
            "Simple project that consumes GitHub API where you can search for a user and get information about projects created on GitHub. For recruiters that are looking for developers, feels nice to have a simple visualization of a applicant projects. :D",
        },
      ],
      activeProject: [],
      previousProject: [],
      nextProject: [],
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
          title: item.title,
          description: item.description,
        });
      });

      if (projects.length > 0 && projects[0].name === activeProject[0].name) {
        const project = projects[projects.length - 1];
        this.previousProject = project.name;
      } else {
        let lastindex = null;

        projects.forEach((item, index) => {
          if (activeProject[0].name === item.name) {
            lastindex = index - 1;
          }
          // return;
        });
        this.previousProject = projects[lastindex].name;
      }

      if (
        project.length > 0 &&
        projects[projects.length - 1].name === activeProject[0].name
      ) {
        this.nextProject = projects[0].name;
      } else {
        let nextindex = null;

        projects.forEach((item, index) => {
          if (activeProject[0].name === item.name) {
            nextindex = index + 1;
          }
          // return;
        });
        this.nextProject = projects[nextindex].name;
      }
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
  text-align: center;
  margin: 0 150px;

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

  & .project-img {
    margin-top: 150px;
    width: 100%;
    margin-bottom: 100px;
  }

  & a {
    color: #fff;
    text-decoration: none;
  }
}

@keyframes fill {
  from {
    width: 0;
  }
}

.see-live {
  font-size: 36px;
  text-decoration: underline !important;
}

.nav {
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      width: 10px;
      height: 10px;
    }

    & p {
      margin: 0 10px;
      font-size: 20px !important;
    }
  }
}

.footer {
  font-size: 16px !important;
  text-align: center;
  margin-bottom: 35px;
}
</style>