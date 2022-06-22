<script setup>
import { ref } from 'vue'


</script>

<template>
  <div>
    <h1>Props exercise</h1>
    <div>
      <p>Official documentation: <a href="https://vuejs.org/guide/components/props.html#props-declarationl">Props</a></p>
    </div>
  </div>

  <div class="exercise">
    <h3>Exercise 1: Passing props between components: values</h3>
    <!-- TODO Exercise 1:
    In this component, we have an input where we can set the value for a variable. This variable should be
    passed by a prop to a different component which responsibility is just to print inside a box. You must
    create. -->
  </div>

  <div class="exercise">
    <h3>Exercise 2: Passing props between components: objects</h3>
    <!-- TODO Exercise 2:
    In this component, we have two inputs to set the values in two properties of an object. This object should be
    passed by a prop to a different component with the same two inputs. The changes in the upper inputs and in
    the inputs inside the new component should reflect in both ways: if I change the value in the upper input
    of name, I can see the value changing in the second name input. -->
  </div>
</template>

<style scoped>

</style>
