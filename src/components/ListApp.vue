<template>
    <section id="main">
        <input id="toggleInputAll" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul id="todoListView" class="todo-list">

            <ItemApp
            v-for="(todoItem, i)  of $store.getters.TODOS"  :key="todoItem.id"
            v-bind:todoItem="todoItem"
            v-bind:index="i"

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
        }
    }
</script>
<style scoped>
  /*  ul {
        list-stile: none;
        margin: 0;
        padding: 0;
    }*/
</style>