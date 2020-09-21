<template>
  <div class="container">
    <transition appear name="content">
      <div class="content">
        <transition appear name="title">
          <h1>Experiências</h1>
        </transition>
        <div class="grid">
          <div class="column left work">
            <p>MadeiraMadeira</p>
            <h3>Desenvolvedora front-end</h3>
            <p class="detail">2 meses</p>
          </div>
          <div class="column">
            <p class="detail">Ago 2020 - agora</p>
          </div>
          <div class="column left">
            <p class="detail">Nov 2019 - Mar 2020</p>
          </div>
          <div class="column">
            <p>Leankeep Software</p>
            <h3>Coordenadora de Desenvolvimento de Software</h3>
            <p class="detail">4 meses</p>
          </div>
          <div class="column left work">
            <p>Leankeep Software</p>
            <h3>Analista de Desenvolvimento</h3>
            <p class="detail">3 meses</p>
          </div>
          <div class="column">
            <p class="detail">Ago 2019</p>
          </div>
          <div class="column left">
            <p class="detail">Fev 2019</p>
          </div>
          <div class="column">
            <p>Leankeep Software</p>
            <h3>Suporte para Sucesso do Cliente</h3>
            <p class="detail">6 meses</p>
          </div>
          <div class="column left work">
            <p>Stefanini</p>
            <h3>Analista de Suporte Técnico</h3>
            <p class="detail">4 meses</p>
          </div>
          <div class="column">
            <p class="detail">Set 2018 - Jan 2019</p>
          </div>
          <div class="column left">
            <p class="detail">Out 2018 - Jan 2019</p>
          </div>
          <div class="column">
            <p>Lionbridge</p>
            <h3>Personalized Internet Assessor</h3>
            <p class="detail">3 meses</p>
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
}

.content {
  width: 50%;

  & h1 {
    font-family: "Alegreya Sans SC", sans-serif;
    font-size: 5rem;
    margin-bottom: 150px;
  }

  & p {
    font-size: 1.8rem;
    line-height: 2.7rem;
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
    font-size: 1.6rem;
  }

  & h3 {
    font-size: 1.8rem;
  }

  & .detail {
    opacity: 0.5;
    font-size: 1.25rem;
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

@media (max-width: 1300px) {
  .content {
    width: 70%;
  }
}

@media (max-width: 600px) {
  .content {
    width: 100%;

    & h1 {
      font-size: 3.5rem;
      text-align: center;
    }

    & p {
      font-size: 1.4rem;
      line-height: 2.1rem;
    }

    &::before {
      display: none;
    }
  }

  .column {
    & p {
      font-size: 1.3rem;
    }

    & h3 {
      font-size: 1.5rem;
    }

    & .detail {
      font-size: 1rem;
    }
  }
}
</style>