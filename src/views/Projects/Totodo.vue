<template>
  <div class="container">
    <transition appear name="content">
      <div class="content">
        <transition appear name="title">
          <h1>.totodo</h1>
        </transition>
        <transition appear>
          <p>
            Minha ideia era criar um app de To Do,
            mas sabemos que tode dev
            já criou um app de to do em algum momento da vida rs.
            <br />
            <br />Então eu decidi criar um projeto completo! Desenvolvi desde
            conceito, pesquisas e validações de experiência do usuário,
            criação de personas, identidade visual e outras etapas criativas.
            E foi assim que nasceu o .totodo :D
          </p>
        </transition>
        <transition appear>
          <div class="imgs">
            <img class="project-img" src="../../assets/projects/totodo.png" alt="project.name" />
          </div>
        </transition>
        <transition appear>
          <a href="#" class="see-live">ver projeto</a>
        </transition>
        <transition appear>
          <div class="nav">
            <router-link to="/devcv">
              <img src="../../assets/arrow_left.svg" alt="Previous Icon" />
              <p>projeto anterior</p>
            </router-link>
            <router-link to="/devcv">
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
  name: "Totodo",
  created() {
    window.scroll(0, 0);
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
    font-size: 5rem;
  }

  & p {
    width: 70%;
    margin-top: 30px;
    text-align: center;
    margin: 0 auto;
    font-size: 1.5rem;
    line-height: 2.2rem;
  }

  & .project-img {
    margin-top: 50px;
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
  font-size: 1.6rem;
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
      width: 100%;
      margin: 0 10px;
      font-size: 1.3rem !important;
    }
  }
}

.footer {
  font-size: 16px !important;
  text-align: center;
  margin-bottom: 35px;
}

@media (max-width: 1300px) {
  .content {
    margin: 0 50px;
    width: 90%;
  }
}

@media (max-width: 600px) {
  .content {
    margin: 0 10px;
    width: 90%;

    & h1 {
      font-size: 3rem;
    }

    & p {
      width: 90%;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    &::before {
      display: none;
    }
  }

  .nav {
    & a {
      & p {
        width: 100%;
        margin: 0 10px;
        font-size: 0.9rem !important;
      }
    }
  }
}
</style>