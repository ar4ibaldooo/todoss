<template>
    <section id="main">
        <input id="toggleInputAll" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul id="todoListView" class="todo-list">

            <ItemApp
            v-for="(todoItem, i)  of $store.getters.getTodos"  :key="todoItem.id"
            v-bind:todoItem="todoItem"
            v-bind:index="i"
            v-on:removeTodoItem="removeTodoItem"
            />
        </ul>
    </section>
</template>
<script>
    import ItemApp from '@/components/ItemApp'
    export default {

        components:{
            ItemApp
        },
        methods: {
            removeTodoItem(id) {
                this.$emit('remove-todo', id)
            }
        }
    }
</script>
<style scoped>
    ul {
        list-stile: none;
        margin: 0;
        padding: 0;
    }
</style>