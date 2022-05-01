<template>
    <form v-on:keyup.enter="add">
        <input type="text" id="newTodo" class="new-todo" placeholder="What needs to be done?" v-model="title">
    </form>
</template>
<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        add() {
          if (this.title.trim()) {
              const newTodo = {
                  id: Date.now(),
                  title: this.title,
                  complited: false
              }
              /*this.$emit("add-todo", newTodo)
              this.title = ''*/
              /*console.log(newTodo)*/
              this.$store.dispatch('SAVE_TODO',newTodo)
              this.title = ''
          }
        }
    }
}
</script>
<style scoped>
    form {
        display: flex;
    }
</style>
