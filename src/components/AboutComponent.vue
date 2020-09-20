<template>
  <div class="container">
    <transition appear name="content">
      <div class="content">
        <transition appear name="title">
          <h1>About</h1>
        </transition>
        <transition appear name="text">
          <p>
            Driven by
            <strong>my passion for technology</strong>, my objective is to create
            <strong>digital products</strong> and
            <strong>be part of projects</strong> that allows me to
            <strong>innovate</strong> and
            <strong>make great experiences to people</strong>.
            As a developer, I love to develop apps and websites with
            <strong>awesome interface</strong>, especially using
            <strong>ReactJS and VueJS</strong>. And
            <strong>think, create projects and follow up the development</strong> of products that
            <strong>make the difference</strong> is what I want to do as an APM!
            And at last but not least, as a freelancer, I would love to help you
            <strong>get your awesome idea out of the paper!</strong> :D
          </p>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
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
  margin-bottom: 150px;
}

.content {
  width: 50%;

  & h1 {
    font-family: "Alegreya Sans SC", sans-serif;
    font-size: 100px;
  }

  & p {
    margin-top: 150px;
    font-size: 30px;
    line-height: 45px;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    margin-top: 65px;
    width: 400px;
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
</style>