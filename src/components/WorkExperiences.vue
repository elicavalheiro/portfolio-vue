<template>
  <div class="container">
    <transition appear name="content">
      <div class="content">
        <transition appear name="title">
          <h1>Work Experiences</h1>
        </transition>
        <div class="grid">
          <div class="column left work">
            <p>MadeiraMadeira</p>
            <h3>Front-end Developer</h3>
            <p class="detail">2 months</p>
          </div>
          <div class="column">
            <p class="detail">Aug 2020 - now</p>
          </div>
          <div class="column left">
            <p class="detail">Nov 2019 - Mar 2020</p>
          </div>
          <div class="column">
            <p>Leankeep Software</p>
            <h3>Software Development Coordinator</h3>
            <p class="detail">4 months</p>
          </div>
          <div class="column left work">
            <p>Leankeep Software</p>
            <h3>Software Development Analyst</h3>
            <p class="detail">3 months</p>
          </div>
          <div class="column">
            <p class="detail">Aug 2019</p>
          </div>
          <div class="column left">
            <p class="detail">Feb 2019</p>
          </div>
          <div class="column">
            <p>Leankeep Software</p>
            <h3>Customer Success Support</h3>
            <p class="detail">6 months</p>
          </div>
          <div class="column left work">
            <p>Stefanini</p>
            <h3>Technical Support Analyst</h3>
            <p class="detail">4 months</p>
          </div>
          <div class="column">
            <p class="detail">Sep 2018 - Jan 2019</p>
          </div>
          <div class="column left">
            <p class="detail">Oct 2018 - Jan 2019</p>
          </div>
          <div class="column">
            <p>Lionbridge</p>
            <h3>Personalized Internet Assessor</h3>
            <p class="detail">3 months</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "WorkExperiences",
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
  padding: 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
}

.content {
  width: 70%;

  & h1 {
    margin: 0 20%;
    font-family: "Alegreya Sans SC", sans-serif;
    font-size: 100px;
    margin-bottom: 150px;
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

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;

  & div {
    padding: 20px 30px;
  }
}

.column {
  & p {
    margin: 0;
    font-size: 26px;
  }

  & h3 {
    font-size: 30px;
  }

  & .detail {
    opacity: 0.5;
    font-size: 20px;
  }
}

.left {
  border-right: 1px solid #f1f1f1;
  text-align: right;

  &.work::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background: #1f1f1f;
    border: 2px solid #f1f1f1;
    border-radius: 50%;
    margin-top: -110px;
    margin-left: 20px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background: #1f1f1f;
    border: 2px solid #f1f1f1;
    border-radius: 50%;
    margin-top: -30px;
    margin-left: 20px;
  }
}

.row {
  display: grid;
  grid-template-rows: 1fr;
}
</style>