<script setup>
import { ref } from 'vue'

/** EXERCISE 1 VARIABLES **/
const msg = "I am printing a text from the javascript.";

/** EXERCISE 2 VARIABLES **/
let booleanForExercise2 = true;

/** EXERCISE 3 VARIABLES **/
let numberForExercise3 = 5;

/** EXERCISE 4 VARIABLES **/
let arrayForExercise4 = [
      {name: "Full-Stack developer", description: "Developing in both front and back sides"},
      {name: "Front-end developer", description: "Specialized on developing in front side"},
      {name: "Back-end developer", description: "Specialized on developing in back side"},
      {name: "Data scientist", description: "Specialized on data treatment"},
    ];

/** EXERCISE 5 VARIABLES **/
/**
 * Variable for exercise 5. Notice that we are using 'ref' function, that allows
 * to create a reactive variable, so when the value changes, is automatically refreshed
 * and reflext the changes in template
 * @type {Ref<UnwrapRef<{lastName: string, name: string, yearOfBirth: number}>>}
 */
let person = ref({
  name: "David",
  lastName: "Miguel de la Fuente",
  yearOfBirth: 1989
});

/** EXERCISE 6 VARIABLES **/
let counter = ref(0);
function incrementCounter(){
  return ++this.counter;
}

</script>

<template>
  <div>
    <h1>Directives in Vue</h1>
  </div>
  <div>
    <p>Directives are reusable functionalities that you can bind to a component for many reasons. Also, you can
      define custom ones, but this is not the point right now. There are several directives that is useful
      to know that allow us to build enriched applications full of interactions in not so much time and easily.</p>
    <p>Official documentation: <a href="https://vuejs.org/api/built-in-directives.html">Built-in directives</a></p>
  </div>

  <div class="exercise">
    <h3>Exercise 1: Interpolation and v-text directive</h3>
    <!-- TODO Exercise 1:
    You can see that we have a variable that is returned inside an object to expose the value to the template.
    That means you can use that variables inside the HTML, so you have to show that message using the both ways
    that you need to know: using interpolation and using v-text directive-->
    <!-- Using v-text -->
    <p v-text="msg"></p>
    <!-- using interpolation -->
    <p>{{msg}}</p>
  </div>

  <div class="exercise">
    <h3>Exercise 2: v-if directive</h3>
    <!-- TODO Exercise 2:
    We have a variable that is a boolean value, so we are going to use the v-if and v-else directives to load some
    HTML elements or others. Add he directive to the following HTML elements and modify manually the value
    of the variable to see the changes -->
    <p v-if="booleanForExercise2">This paragraph should only be loaded if the value is "true"</p>
    <p v-else>If the conditions doesn't meet, we are going to show this paragraph</p>
  </div>

  <div class="exercise">
    <h3>Exercise 3: v-show directive</h3>
    <!-- TODO Exercise 3:
    We are going to show the following HTML elements only if the numeric value meets certain condition -->
    <p v-show="numberForExercise3 > 0">The value at variable numberForExercise3 is positive</p>
    <p v-show="numberForExercise3 < 0">The value at variable numberForExercise3 is negative</p>
    <p v-show="numberForExercise3 == 0">The value at variable numberForExercise3 is 0</p>
  </div>

  <div class="exercise">
    <h3>Exercise 4: v-for directive</h3>
    <!-- TODO Exercise 4:
    We have an array of objects. We want to iterate over the array and print certain HTML elements as many times
    as elements we have. This time, we want to iterate over it and show something that fits the following example structure,
    to show a list of of job positions. The structure is:
      Full-Stack developer: Developing in both front and back sides
    You should use list (ordered or unordered) HTML elements.
    -->
    <ul>
      <li v-for="item in arrayForExercise4">{{item.name}}: {{item.description}}</li>
    </ul>
  </div>

  <div class="exercise">
    <h3>Exercise 5: v-model directive</h3>
    <!-- TODO Exercise 5:
    We have a variable called "person", which is an JSON object. We are going to fix this brief form to edit
    the information of the attributes in this object, so we can see live in the application how the values
    on the variables change. This is quite powerful because allow us to bind values between inputs and
    javascript, so we can execute extra functions with this data or allow the user to insert values that
    can determine what kind os operations we have to execute.
    -->
    <p>Here, you can edit the person information. Check that the information in the bottom paragraph is refreshing live.</p>
    <div>
      Name: <input type="text" name="name" id="name" v-model="person.name">
    </div>
    <div>
      Last name: <input type="text" name="lastName" id="lastName" v-model="person.lastName">
    </div>
    <div>
      Year of birth: <input type="number" name="yearOfBirth" id="yearOfBirth" v-model="person.yearOfBirth">
    </div>
    <div>
      <p><b>{{ person.name }} {{ person.lastName }} was born in {{ person.yearOfBirth }}</b></p>
    </div>
  </div>

  <div class="exercise">
    <h3>Exercise 6: v-on directive</h3>
    <!-- TODO Exercise 6:
    <p>We have a variable and a function that increments the value. We have to modify the following button
    to bind a event, so when the button is clicked, the counter is incremented by one, executing
    the function defined
    -->
    <p>Click the following button to increment counter:</p>
    <div>
      <input type="button" name="incrementCounter" id="incrementCounter" value="Increment counter" @click="incrementCounter()">
      <p>Button was clicked: <b>{{counter}} times</b></p>
    </div>
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
