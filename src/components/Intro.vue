<template>
  <transition appear name="container">
    <div class="container">
      <transition appear>
        <img src="../assets/image.svg" alt="Eli Cavalheiro Image" />
      </transition>
      <div class="texts">
        <transition appear name="welcome">
          <h1>Oi, eu sou a Eli!</h1>
        </transition>

        <transition appear name="work-title">
          <p>
            Desenvolvedora front-end
            & Designer de Interface
          </p>
        </transition>
        <transition appear name="bar">
          <span></span>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Intro",
};
</script>

<style lang="scss" scoped>
.bar-enter-active,
.bar-leave-active {
  transition: all 0.8s 1.6s ease-in-out;
}

.bar-enter,
.bar-leave-to {
  opacity: 0;
}

.container-enter-active,
.container-leave-active {
  transition: all 0.3s ease-in-out;
}
.container-enter, .container-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.work-title-enter-active,
.work-title-leave-active {
  transition: all 0.8s 1.2s ease-in-out;
}
.work-title-enter, .work-title-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(-30px, 0, 0);
  opacity: 0;
}

.welcome-enter-active,
.welcome-leave-active {
  transition: all 0.8s 0.8s ease-in-out;
}
.welcome-enter, .welcome-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(-30px, 0, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.8s 0.4s ease-in-out;
}
.v-enter, .v-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(-30px, 0, 0);
  opacity: 0;
}

.container {
  margin: 0 10% 150px 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    margin-right: 10%;
    width: 30%;
    height: 30%;
  }
}

.texts {
  font-family: "Alegreya Sans SC", sans-serif;
  width: 50%;

  & h1 {
    font-size: 4.5rem;
  }

  & p {
    font-size: 3rem;
    margin-bottom: 10px;
  }

  & span {
    content: "";
    position: absolute;
    width: 40%;
    height: 2px;
    transform: rotate(-2.79deg);
    background: #f1f1f1;
    animation: fill 0.8s 1.6s ease-in-out;
  }

  /* &::after {
    content: "";
    position: absolute;
    width: 620px;
    height: 2px;
    transform: rotate(-2.79deg);
    background: #f1f1f1;
  } */
}

@keyframes fill {
  from {
    width: 0;
  }
}

@media (max-width: 1200px) {
  .container {
    flex-direction: column;
    margin: 0 5% 100px 5% !important;

    & img {
      width: 40%;
      margin-right: 0;
      margin-bottom: 30px;
    }
  }

  .texts {
    width: 100%;

    & h1 {
      width: 70%;
      margin: 0 auto;
    }

    & p {
      width: 70%;
      margin: 0 auto;
    }

    & span {
      left: 30%;
    }
  }
}

@media (max-width: 1000px) {
  .container {
    padding: 0;
  }

  .texts {
    & h1 {
      font-size: 3rem;
    }

    & p {
      font-size: 2.5rem;
    }

    & h1,
    & p {
      width: 90%;
    }

    & span {
      left: 10%;
      width: 70%;
    }
  }
}

@media (max-width: 600px) {
  .container {
    & img {
      width: 60%;
    }
  }

  .texts {
    & h1 {
      font-size: 3rem;
    }

    & p {
      font-size: 2rem;
    }
  }
}
</style>