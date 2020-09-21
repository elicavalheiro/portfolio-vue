<template>
  <div class="container">
    <transition appear name="content">
      <div class="content">
        <transition appear name="title">
          <h1 v-scroll="handleScroll">Contato</h1>
        </transition>
        <p v-scroll="handleScroll">
          Se você gostou do meu portfolio e gostaria de
          <strong>
            conversar sobre
            algum projeto
          </strong> seu ou
          <strong>solicitar um orçamento</strong>, você pode me encontrar
          através desses canais:
        </p>
        <div class="social" v-scroll="handleScroll">
          <ul>
            <li>
              <a href="https://github.com/elicavalheiro" target="_blank">
                <img src="../assets/github.svg" alt="Github Icon" />
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/elicavalheiro" target="_blank">
                <img src="../assets/behance.svg" alt="behance Icon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/elicavalheiro/" target="_blank">
                <img src="../assets/linkedin.svg" alt="linkedin Icon" />
              </a>
            </li>
            <li>
              <a href="mailto: elimara.ac@gmail.com">
                <img src="../assets/email.svg" alt="email Icon" />
              </a>
            </li>
          </ul>
        </div>
        <p class="footer">Made with love by Eli Cavalheiro.</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    handleScroll: function (evt, el) {
      console.log(window.scrollY);
      if (window.scrollY > 4700) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(30px,0,0)"
        );
      }
      return window.scrollY > 5000;
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
  transform: translate3d(-30px, 0, 0);
}

.container {
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 50%;

  & h1 {
    font-family: "Alegreya Sans SC", sans-serif;
    font-size: 6rem;
    opacity: 0;
    transform: translate3d(0, 0, 0);
    transition: 0.8s 0.8s all cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  & p {
    margin-top: 150px;
    font-size: 1.8rem;
    line-height: 2.7rem;
    opacity: 0;
    transform: translate3d(0, 0, 0);
    transition: 0.8s 1.6s all cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
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

.social {
  margin-top: 150px;
  opacity: 0;
  transform: translate3d(0, 0, 0);
  transition: 0.8s 2.4s all cubic-bezier(0.39, 0.575, 0.565, 1);

  & ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;

    & li a {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      transition: background 0.3s ease-in-out;

      &:hover {
        background: rgba(241, 241, 241, 0.1);
      }
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
    width: 65%;
  }
}

@media (max-width: 600px) {
  .content {
    width: 80%;

    & h1 {
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

  .social {
    & ul {
      & li a {
        width: 70px;
        height: 70px;

        & img {
          width: 40px !important;
          height: 40px !important;
        }
      }
    }
  }
}
</style>