<template>
  <div class="container">
    <transition appear name="content">
      <div class="content">
        <transition appear name="title">
          <ul class="projects">
            <li>
              <router-link to="/work-projects/totodo">.totodo</router-link>
            </li>
            <li>
              <router-link to="/work-projects/devcv">DevCV</router-link>
            </li>
          </ul>
        </transition>
      </div>
    </transition>
    <transition appear name="title">
      <p class="footer">Made with love by Eli Cavalheiro.</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "WorkProjects",
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
  width: 100%;
  height: 68vh;
}

.content {
  width: 100%;
  height: 68vh;
}

.projects {
  list-style: none;
  text-align: center;

  & li {
    & a {
      text-decoration: none;
      font-size: 50px;
      font-family: "Alegreya Sans SC", sans-serif;
      font-weight: 900;
      color: #f1f1f1;
      opacity: 0.5;
      transition: all 0.3s ease-in-out;
      /* 
      &::before {
        content: "";
        position: absolute;
        height: 2px;
        background: #f1f1f1;
        margin-top: 60px;
        left: 0;
      } */

      &:hover {
        font-size: 100px;
        opacity: 1;

        /* &::before {
          width: 40%;
          animation: fill 0.8s 0.3s ease-in-out;
        } */
      }
    }
  }
}

@keyframes fill {
  from {
    width: 0;
    opacity: 0;
  }
}

.footer {
  bottom: 0;
  text-align: center;
  margin-bottom: 35px;
}
</style>