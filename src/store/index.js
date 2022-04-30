import { createStore } from 'vuex'

export default createStore({
    state: {
        todos: [
            {id: 1, title: 'купить хлеб', completed: false},
            {id: 2, title: 'купить maslo', completed: false},
            {id: 3, title: 'купить bulku', completed: false}
        ]
    },
    mutations: {
        setTodos(state, payLoad) {
            state.todos = payLoad
        },
        removeTodoItem(state){
            this.todos = this.todos.filter(t=>t.id !== id)
        },
    },
    getters:{
        getTodos(state ) {
            return state.todos
        }
    },
    action: {
        addTodo(todo, context){
            context.commit("setTodos", todo)
        },

    }


})