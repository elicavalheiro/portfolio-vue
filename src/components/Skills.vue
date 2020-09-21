<template>
  <div class="container">
    <transition appear name="content">
      <div class="content">
        <transition appear name="title">
          <h1 v-scroll="handleScroll">Habilidades</h1>
        </transition>
        <div class="grid" v-scroll="handleScroll">
          <div class="skills">
            <h3>HTML</h3>
            <div class="bar">
              <div class="progress"></div>
            </div>
            <div class="percentage">80%</div>
          </div>
          <div class="skills">
            <h3>CSS</h3>
            <div class="bar">
              <div class="progress"></div>
            </div>
            <div class="percentage">80%</div>
          </div>
          <div class="skills">
            <h3>Javascript</h3>
            <div class="bar">
              <div class="progress" style="width: 70%"></div>
            </div>
            <div class="percentage">70%</div>
          </div>
          <div class="skills">
            <h3>VueJS</h3>
            <div class="bar">
              <div class="progress" style="width: 70%"></div>
            </div>
            <div class="percentage">70%</div>
          </div>
          <div class="skills">
            <h3>ReactJS</h3>
            <div class="bar">
              <div class="progress" style="width: 60%"></div>
            </div>
            <div class="percentage">60%</div>
          </div>
          <div class="skills">
            <h3>Node.js</h3>
            <div class="bar">
              <div class="progress" style="width: 60%"></div>
            </div>
            <div class="percentage">60%</div>
          </div>
        </div>
        <div class="other-skills" v-scroll="handleScroll">
          <p>Outras skills: Design de Interfaces | Experiência do Usuário | Gerenciamento de Projeto | Customer Centric | Liderança | Capacidade Analítica | Data Driven | Solução de Problemas</p>
        </div>
        <div class="certificates" v-scroll="handleScroll">
          <h2>Certificados</h2>
          <ul>
            <li>
              _ Modern Web Development With Javascript |
              <strong>UDEMY</strong>
            </li>
            <li>
              _ Product Management & Product Leadership |
              <strong>HOW BOOTCAMPS</strong>
            </li>
            <li>
              _ VueJS |
              <strong>ORIGAMID</strong>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Skills",
  methods: {
    handleScroll: function (evt, el) {
      console.log(window.scrollY);
      if (window.scrollY > 1100) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(-30px,0,0)"
        );
      }
      return window.scrollY > 1200;
    },
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
  transform: translate3d(30px, 0, 0);
}

.container {
  padding: 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 70%;

  & h1 {
    margin: 0 20%;
    font-family: "Alegreya Sans SC", sans-serif;
    font-size: 5rem;
    text-align: right;
    opacity: 0;
    transform: translate3d(0, 0, 0);
    transition: 0.8s 0.8s all cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  & p {
    margin-top: 150px;
    font-size: 1.8rem;
    line-height: 2.7rem;
  }

  &::before {
    content: "";
    position: absolute;
    right: 0;
    margin-top: 65px;
    width: 15%;
    height: 2px;
    background: #f1f1f1;
    animation: fill 0.8s ease-in-out;
  }
}

@keyframes fill {
  from {
    width: 0;
  }
}

.grid {
  margin-top: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  opacity: 0;
  transform: translate3d(0, 0, 0);
  transition: 0.8s 1.6s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.skills {
  margin: 0 100px 100px 0;

  & h3 {
    font-weight: 400;
    font-size: 2rem;
  }
}

.bar {
  display: flex;
  margin-top: 20px;
  height: 10px;
  width: 100%;
  border-radius: 3px;
  background-color: rgba(241, 241, 241, 0.1);
}

.progress {
  height: 100%;
  width: 80%;
  border-radius: 3px;
  background-color: #f1f1f1;
  animation: fillBars 0.8s ease-in-out;
}

@keyframes fillBars {
  from {
    width: 0;
  }
}

.percentage {
  margin-top: 20px;
  text-align: right;
}

.other-skills {
  margin-right: 30px;
  opacity: 0;
  transform: translate3d(0, 0, 0);
  transition: 0.8s 2.4s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.certificates {
  margin-top: 150px;
  opacity: 0;
  transform: translate3d(0, 0, 0);
  transition: 0.8s 3.2s all cubic-bezier(0.39, 0.575, 0.565, 1);

  & h2 {
    font-size: 2.8rem;
    text-align: center;
  }

  & ul {
    margin-top: 100px;
    list-style: none;

    & li {
      font-size: 1.8rem;
      line-height: 2.7rem;
      margin-bottom: 20px;
    }
  }
}

@media (max-width: 1300px) {
  .content {
    width: 80%;
  }

  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .content {
    width: 80%;

    & h1 {
      margin: 0 5%;
      font-size: 3rem;
    }

    & p {
      font-size: 1.4rem;
      line-height: 2.1rem;
    }

    &::before {
      display: none;
    }
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .skills {
    margin: 20px 5%;

    & h3 {
      font-size: 1.5rem;
    }
  }

  .certificates {
    & h2 {
      font-size: 2.2rem;
    }

    & ul {
      & li {
        font-size: 1.5rem;
        line-height: 2.2rem;
      }
    }
  }
}
</style>