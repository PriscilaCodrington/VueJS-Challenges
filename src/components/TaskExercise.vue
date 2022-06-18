<script setup>
import { ref } from 'vue'

/** Array with the current task list **/
const taskList = []

</script>

<template>
  <div>
    <h1>Task exercise</h1>
  </div>
  <div>
    <p>In this exercise, we will create a TO-DO application to add tasks that we should attend. We can do it in this file, after the description of the exercise.</p>
    <p>We need the following requisites:</p>
    <ul>
      <li>First we will have a brief form to add new task. Under the form, we will have a list with
          all the tasks that are currently stored</li>
      <li>We have to ask to the user for the following information:
        <ol>
          <li>Task name</li>
          <li>Task description</li>
          <li>Deadline: the latest date to complete the task</li>
        </ol>
      </li>
      <li>We need a button to add the task. Clicking that button, we add the task information to the array and blank the inputs</li>
      <li>When the list of items is empty, we don't need to show the table of current task. Instead, we are going to show a message that says
      "No task"</li>
      <li>When we have task, we have to show every added task in a table with 4 columns: name, description, deadline and the fourth with a button to mark Done</li>
      <li>When we click the Done button, we should remove the task from the array.</li>
    </ul>
    <p>Official documentation: <a href="https://vuejs.org/api/built-in-directives.html">Built-in directives</a></p>
  </div>
</template>

<style scoped>
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
