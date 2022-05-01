<template>
  <div id ="app">
    <section class="todoapp">
      <header class="header">
        <h1>todo list</h1>
          <AddApp/>
      </header>
          <ListApp/>


      <footer class="footer">
        <span class="todo-count"><strong id="todoCount">0</strong> item left</span>
        <ul class="filters">
          <li>
            <a class="selected" id="allWorks" onclick="changeClass(this)" href="#/">All</a>
          </li>
          <li>
            <a href="#active" id="activedItems" onclick="changeClass(this)">Active</a>
          </li>
          <li>
            <a href="#completed" id="completedTodos" onclick="changeClass(this)">Completed</a>
          </li>
        </ul>
        <button class="clear-completed" id="btnClear">Clear completed</button>
      </footer>
    </section>
  </div>


</template>

<script>
import ListApp from '@/components/ListApp'
import AddApp from '@/components/AddApp'
export default {
  name: 'App',
  data () {
      return {
      }

  },
  methods: {
  },
  components: {
    ListApp,
    AddApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
