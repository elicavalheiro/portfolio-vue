<template>
  <transition appear name="container">
    <div class="container">
      <transition appear>
        <img src="../assets/image.svg" alt="Eli Cavalheiro Image" />
      </transition>
      <div class="texts">
        <transition appear name="welcome">
          <h1>Hello, I’m Eli!</h1>
        </transition>

        <transition appear name="work-title">
          <p>
            Front-end developer
            <br />& Associate Product
            <br />Manager.
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
  padding: 0 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  margin-right: 200px;
}

.texts {
  font-family: "Alegreya Sans SC", sans-serif;

  & h1 {
    font-size: 6.8rem;
  }

  & p {
    font-size: 4.5rem;
    margin-bottom: 10px;
  }

  & span {
    content: "";
    position: absolute;
    width: 620px;
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
</style>