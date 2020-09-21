<template>
  <div class="container">
    <transition appear name="content">
      <div class="content">
        <transition appear name="title">
          <h1 v-scroll="handleScroll">Sobre</h1>
        </transition>
        <transition appear name="text">
          <p v-scroll="handleScroll">
            <strong>Apaixonada por tecnologia</strong>,
            meu objetivo é
            <strong>criar produtos digitais e participar de projetos</strong> que
            me permitam inovar e
            <strong>criar ótimas experiências</strong> para as pessoas.
            <br />
            <br />Como desenvolvedora,
            <strong>amo desenvolver apps e sites com interfaces</strong>
            incríveis, principalmente utilizando
            <strong>HTML, CSS, Javascript</strong> e
            frameworks como
            <strong>ReactJS e VueJS</strong>.
            <br />
            <br />E como freelancer eu adoraria
            <strong>
              ajudar você a tirar a sua ideia
              incrível do papel
            </strong>! :D
          </p>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
  methods: {
    handleScroll: function (evt, el) {
      console.log(window.scrollY);
      if (window.scrollY > 50) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(30px,0,0)"
        );
      }
      return window.scrollY > 110;
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

.text-enter-active,
.text-leave-active {
  transition: all 0.3s 0.8s ease-in-out;
}

.text-enter,
.text-leave-to {
  opacity: 0;
  transform: translate3d(-30px, 0, 0);
}

.container {
  padding: 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* opacity: 0;
  transition: 1.5s 0.8s all cubic-bezier(0.39, 0.575, 0.565, 1); */
}

.content {
  width: 50%;

  & h1 {
    font-family: "Alegreya Sans SC", sans-serif;
    font-size: 6rem;
    opacity: 0;
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
}
</style>