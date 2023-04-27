<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "VueJS Challenges",
  data() {
    return {
      currentMode: 1,
    };
  },
  methods: {
    setCurrentMode(mode) {
      this.currentMode = mode;
    },
  },
});
</script>

<template>
  <img
    alt="Vue logo"
    class="logo"
    src="./assets/logo.svg"
    width="125"
    height="125"
  />
  <div class="button-bar">
    Choose what you want to do:
    <router-link to="/directive-sandbox"
      ><button>Directive exercises (sandbox)</button></router-link
    >
    <router-link to="/task-exercise"
      ><button>Task exercise</button></router-link
    >
    <router-link to="/props"><button>Using props</button></router-link>
    <router-link to="/events"><button>Using events</button></router-link>
    <router-link to="/fetching-data"
      ><button>Fetching data</button></router-link
    >
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.button-bar {
  margin-bottom: 1.5rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.exercise {
  border-top: solid 1px hsla(160, 100%, 37%, 1);
  margin-top: 2rem;
}
</style>
