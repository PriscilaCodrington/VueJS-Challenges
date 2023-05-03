<script>

import axios from "axios";

export default {
  data() {
    return {
      
      titlesApi: [
        {
          title: "",
          complete: false,

        }
      ],
    };
  },
  methods: {
    loadNewInfo() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          for(let i = 0; i<= 50; i++){
          console.log (response.data[i]);

          this.titlesApi.push({
            title: response.data[i].title,
            complete: response.data[i].completed
          })
          i++
          }
      
        })
        .catch((error) => {
          console.log(error);
        });
    },

    
  },
};
</script>

<template>
  <div>
    <h1>Fetching data exercise</h1>
  </div>
  <div>
    In this exercise, we will request to a REST API to retrieve some information
    and print in our template. We have to request to the following mock API,
    which return a list of TO-DOs objects. The URL to request is
    https://jsonplaceholder.typicode.com/todos
  </div>
  <div>
    <table>
      <thead>
        <tr>
          <th @click="loadNewInfo()">Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(toDo, index) in titlesApi">
          <td>
            <span >
              {{ toDo.title }}
            </span>
          </td>
          <td>
            <span>
              {{ toDo.complete }}
            </span>
          </td>
          </tr>
        <!-- Replace with the full list of TO-DOs -->
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
