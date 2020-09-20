<template>
  <div class="container">
    <transition appear name="content">
      <div class="content">
        <transition appear name="title">
          <h1>Skills</h1>
        </transition>
        <div class="grid">
          <div class="skills">
            <h3>HTML</h3>
            <div class="bar">
              <div class="progress"></div>
            </div>
            <div class="percentage">80%</div>
          </div>
          <div class="skills">
            <h3>Javascript</h3>
            <div class="bar">
              <div class="progress"></div>
            </div>
            <div class="percentage">80%</div>
          </div>
          <div class="skills">
            <h3>Node.js</h3>
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
            <h3>ReactJS</h3>
            <div class="bar">
              <div class="progress"></div>
            </div>
            <div class="percentage">80%</div>
          </div>
          <div class="skills">
            <h3>VueJS</h3>
            <div class="bar">
              <div class="progress"></div>
            </div>
            <div class="percentage">80%</div>
          </div>
        </div>
        <div class="other-skills">
          <p>Other skills: Project Management | Customer Centric | Leadership | Analytical Capability | Data Driven | Problem Solving</p>
        </div>
        <div class="certificates">
          <h2>Certificates</h2>
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
  margin-bottom: 150px;
}

.content {
  width: 70%;

  & h1 {
    margin: 0 20%;
    font-family: "Alegreya Sans SC", sans-serif;
    font-size: 100px;
    text-align: right;
  }

  & p {
    margin-top: 150px;
    font-size: 30px;
    line-height: 45px;
  }

  &::before {
    content: "";
    position: absolute;
    right: 0;
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
  margin-top: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.skills {
  margin: 0 100px 100px 0;

  & h3 {
    font-weight: 400;
    font-size: 36px;
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
}

.certificates {
  margin-top: 150px;

  & h2 {
    font-size: 48px;
    text-align: center;
  }

  & ul {
    margin-top: 100px;
    list-style: none;

    & li {
      font-size: 30px;
      line-height: 45px;
      margin-bottom: 20px;
    }
  }
}
</style>