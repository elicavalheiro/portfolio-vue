<template>
  <div class="container">
    <transition appear name="content">
      <div class="content">
        <transition appear name="title">
          <h1>Contact</h1>
        </transition>
        <p>
          If you enjoyed my portfolio and want to chat about an idea or a job,
          please contact me through one of these channels:
        </p>
        <div class="social">
          <ul>
            <li>
              <a href="#github">
                <img src="../assets/github.svg" alt="Github Icon" />
              </a>
            </li>
            <li>
              <a href="#behance">
                <img src="../assets/behance.svg" alt="behance Icon" />
              </a>
            </li>
            <li>
              <a href="#linkedin">
                <img src="../assets/linkedin.svg" alt="linkedin Icon" />
              </a>
            </li>
            <li>
              <a href="#email">
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
  padding-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 50%;

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

.social {
  margin-top: 150px;

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
</style>