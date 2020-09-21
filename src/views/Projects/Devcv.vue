<template>
  <div class="container">
    <transition appear name="content">
      <div class="content">
        <transition appear name="title">
          <h1>devcv</h1>
        </transition>
        <transition appear>
          <p>
            Projeto simples que consome a API do Github,
            onde você pode buscar o @ de um usuário e obter
            informações sobre os projetos criados no Github.
            Para recrutadores que precisam contratar desenvolvedores,
            é interessante ter uma visualização mais simples sobre
            o/a dev e os projetos feitos*. :D
            <br />
            <br />
          </p>
        </transition>
        <p class="obs">* Estou criando uma nova versão desse projeto, logo logo tem novidade :D</p>
        <transition appear>
          <div class="imgs">
            <img class="project-img" src="../../assets/projects/devcv.png" alt="project.name" />
          </div>
        </transition>
        <transition appear>
          <a href="#" target="_blank" class="see-live">ver projeto</a>
        </transition>
        <transition appear>
          <div class="nav">
            <router-link to="/totodo">
              <img src="../../assets/arrow_left.svg" alt="Previous Icon" />
              <p>projeto anterior</p>
            </router-link>
            <router-link to="/totodo">
              <p>próximo projeto</p>
              <img src="../../assets/arrow_right.svg" alt="Previous Icon" />
            </router-link>
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
  name: "Devcv",
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

  .obs {
    opacity: 0.5;
    margin: 0;
    padding: 0;
    font-size: 0.9rem;
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