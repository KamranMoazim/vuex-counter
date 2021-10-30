import { createApp } from 'vue'
import {createStore} from "vuex"
import App from './App.vue'


const store = createStore({
    state(){
        return {
            counter: 0,
            history: [0]
        }
    },
    mutations:{
        addToCounter(state, payload){
            state.counter = state.counter + payload
            state.history.push(state.counter)
        },
        subtractFromCounter(state, payload){
            state.counter = state.counter - payload
            state.history.push(state.counter)
        }
        // async tasks should not be done here
    },
    actions: {
        async addRandomNumberToCounter(context){
            let num = await fetch("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new")
            num = await num.json()
            // console.log(num)
            context.commit("addToCounter", num)
        }
    },
    getters: {
        activeIndexes: (state) => (payload) => {
            let indexes = []
            state.history.forEach((value, index) => {
                if (payload === value) {
                    indexes.push(index)
                }
            });
            return indexes
        }
    }
})



// YOU CAN ALSO USE MODULES APPROACH
// const moduleA = {
//     state: () => ({ ... }),
//     mutations: { ... },
//     actions: { ... },
//     getters: { ... }
//   }
  
//   const moduleB = {
//     state: () => ({ ... }),
//     mutations: { ... },
//     actions: { ... }
//   }
  
//   const store = new Vuex.Store({
//     modules: {
//       a: moduleA,
//       b: moduleB
//     }
//   })
  
//   store.state.a // -> `moduleA`'s state
//   store.state.b // -> `moduleB`'s state



const app = createApp(App)

app.use(store)

app.mount('#app')
