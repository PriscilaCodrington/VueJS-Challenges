<script setup>
import DirectiveSandbox from './components/DirectiveSandbox.vue'
import TaskExercise from './components/TaskExercise.vue'
import {ref} from 'vue'

let currentMode = ref(1);

function setCurrentMode(mode) {
  this.currentMode = mode;
}
</script>

<template>
  <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>
  <div class="button-bar">Choose what you want to do:
    <button v-on:click="setCurrentMode(1)">Directive exercises (sandbox)</button>
    <button v-on:click="setCurrentMode(2)">Task exercise</button>
  </div>
  <div>
    <DirectiveSandbox v-if="currentMode === 1"/>
    <TaskExercise v-else/>
  </div>
</template>

<style>
@import './assets/base.css';

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
</style>
