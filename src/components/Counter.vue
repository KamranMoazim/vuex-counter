<template>
  <div>
      <h1>Counter</h1>
      <!-- <h1 class="counter"> {{ $store.state.counter }} </h1> -->
      <h1 class="counter"> {{ counter }} </h1>
      <button @click="subtractFromCounter(value)">-</button>
      <input type="number" v-model="value" />
      <button @click="addToCounter(value)">+</button>
      <div>
            <button class="btn" @click="addRandomNumberToCounter">Add Random Number</button>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex"

export default {
    name:'Counter',
    data(){
        return {
            value: 1,
            // counter: 0   // here we are storing this into vuex store
        }
    },
    computed: {
        // ...mapState()   // to get all data in states
        ...mapState(["counter"])   // to get only counter data
    },
    methods: {
        ...mapMutations(['addToCounter', 'subtractFromCounter']),
        ...mapActions(['addRandomNumberToCounter'])
    }
}
</script>

<style>
    .counter {
        font-size: 5rem;
    }

    button {
        border-radius: 20px;
        border: none;
        width: 2rem;
        height: 2rem;
        font-weight: 700;
        cursor: pointer;;
    }

    input {
        padding: .4rem;
        margin: 0 .5rem;
        text-align: center;
    }

    .btn {
        border-radius: 0.5rem;
        width: auto;
        background: #41B983;
        margin-top: 1rem;
        color: white;
        cursor: pointer;
    }
</style>