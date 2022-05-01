import { createStore } from 'vuex'

export default createStore({
    state: {
        todos: [
            {id: 1, title: 'купить хлеб', completed: true},
            {id: 2, title: 'купить maslo', completed: false},
            {id: 3, title: 'купить bulku', completed: false}
        ]
    },
    mutations: {
        SET_TODO : (state,payload) => {
            state.todos = payload
        },
        ADD_TODO : (state,payload) => {
            state.todos.push(payload)
        },
        DELETE_TODO : (state,payload) => {
            state.todos= state.todos.filter(t=> t.id !== payload)
            let S  = state.todos.filter(t=> t.id !== 2)
            console.log(S)
          /*  state.todos.splice(payload-1, 1);*/
        },
        EDIT (state, payload) {
            let stateTodo = state.todos.map(t => t.id !== payload.id ? t : payload);
            state.todos = state.todos.map(t => t.id !== payload.id ? t : payload);

            console.log("ss")
        }
        },
    getters:{
        TODOS : state => {
            return state.todos;
        }
    },
    actions: {
        GET_TODO : async (context,payload) => {
            context.commit('SET_TODO',payload)
        },
        SAVE_TODO : async (context,payload) => {
            context.commit('ADD_TODO',payload)
        },
        DELETE_TODO_ACTION : async (context,payload) => {
            context.commit('DELETE_TODO',payload)
        },
        EDIT_ACTION (context, payload) {
            context.commit('EDIT', payload)

        }
    }


})