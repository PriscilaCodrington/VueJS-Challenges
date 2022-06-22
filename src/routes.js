import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue'
import DirectiveSandbox from './components/DirectiveSandbox.vue'
import TaskExercise from './components/TaskExercise.vue'
import PropsExercise from './components/PropsExercise.vue'
import EventsExercise from './components/EventsExercise.vue'
import FetchingDataExercise from './components/FetchingDataExercise.vue'

const routes = [
  {path: '/directive-sandbox', name: 'DirectiveSandbox', component: DirectiveSandbox},
  {path: '/task-exercise', name: 'TaskExercise', component: TaskExercise},
  {path: '/props', name: 'PropsExercise', component: PropsExercise},
  {path: '/events', name: 'EventsExercise', component: EventsExercise},
  {path: '/fetching-data', name: 'FetchingDataExercise', component: FetchingDataExercise}
]

const router = new createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
})

export default router