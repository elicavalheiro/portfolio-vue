<template>
  <div class="container">
    <div class="content">
      <ul class="projects">
        <li>
          <router-link to="/work-projects/totodo">.totodo</router-link>
        </li>
        <li>
          <router-link to="/work-projects/devcv">DevCV</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkProjects",
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 50%;
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

      &::before {
        content: "";
        position: absolute;
        height: 2px;
        background: #f1f1f1;
        margin-top: 60px;
        left: 0;
      }

      &:hover {
        font-size: 100px;
        opacity: 1;

        &::before {
          width: 40%;
          animation: fill 0.8s 0.3s ease-in-out;
        }
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
</style>