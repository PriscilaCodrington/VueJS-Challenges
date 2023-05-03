<script>
export default {
  data() {
    return {
      mouseShow: false,
    };
  },
  methods: {
  clickHere(){
    alert("CLICK!");
  }
  },

  
};
</script>

<template>
  <div>
    <h1>Events exercise</h1>
    <div>
      <p>
        Official documentation:
        <a href="https://vuejs.org/guide/essentials/event-handling.html"
          >Event handling</a
        >
      </p>
      <p>
        Official documentation:
        <a
          href="https://vuejs.org/guide/components/events.html#emitting-and-listening-to-events"
          >Custom Events</a
        >
      </p>
    </div>
  </div>
  <div>
    <div class="exercise">
      <h3>Exercise 1: Defining events handlers</h3>
      <!-- TODO Exercise 1:
      Here we have a div element where we are about to define event listener to handle and trigger methods.
      In this case, we are going to set the following events, all to the same element:
       - on click: shows an alert saying "CLICK!"
       - on mouseenter: shows a new HTML tag that you have to insert (remember, you can use a variable to put a condition
       tho show or not certain element)
       - on mouseover: hides the HTML tag from the previous point
       -->
      <div class="event-hub" @click='clickHere'  @mousemove="mouseShow= true" @mouseleave="mouseShow = false">
        This box are the HTML EVENT LISTENER HUB
      <h1 v-show="mouseShow">HelloFriends!!</h1>
    </div>
    </div>
  </div>
</template>

<style scoped>
.event-hub {
  background-color: hsla(160, 100%, 37%, 1);
  width: 100%;
  padding: 2rem;
  font-weight: bold;
  color: white;
  text-align: center;
}
</style>
