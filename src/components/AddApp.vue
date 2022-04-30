<template>
    <form @submit.prevent="onSubmit">
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
        onSubmit() {
          if (this.title.trim()) {
              const newTodo = {
                  id: Date.now(),
                  title: this.title,
                  complited: false
              }
              this.$emit("add-todo", newTodo)
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
