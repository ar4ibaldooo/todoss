<template>
    <li>
        <div v-if="!editing">
        <span v-bind:class="{done: todoItem.completed}">
            <input type="checkbox" v-on:change="markComplete">

            {{todoItem.title}}
        </span>
        </div>
        <div v-if="editing">
        <span v-bind:class="{done: todoItem.completed}">
            <input type="checkbox" v-on:change="markComplete">

            <form v-on:keyup.enter="edit(todoLocal)">
                <input type="text" id="edit" class="edit-todo" placeholder="What needs to be done?" v-model="todoLocal.title">
            </form>
        </span>

        </div>
        <button class="rm" v-on:click="removeTodoItem(todoItem.id)">&times;</button>
    </li>
</template>
<script>
    export default {
        props: {
            todoItem: {
                type: Object,
                required: true
            },
            index: Number
        },
        data() {
            return {
                editing: true,
                todoLocal: this.todoItem,
            };
        },

        methods: {
            markComplete() {
                this.todoLocal.completed = !this.todoLocal.completed;
            },
            removeTodoItem(id) {
                this.$store.dispatch('DELETE_TODO_ACTION', id)
                console.log(id)
            },
            edit(editTodo) {
               /* if (this.title.trim()) */{


                    this.$store.dispatch('EDIT_ACTION',editTodo)

                }
            }
        },

    }

</script>
<style scoped>
/*    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }
    .rm {
        background: rgba(255, 3, 0, 0.64);
        color: #fff;
        font-weight: 900;
    }
    .done {
        text-decoration: line-through;
    }
    input {
    margin-right: 1rem;
    }*/
</style>