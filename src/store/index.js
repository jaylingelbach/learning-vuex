import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    counter: 0,
    colorCode: 'blue',
  },
  mutations: {
    increaseCounter(state, randomNumber) {
     console.log(randomNumber);
     state.counter += randomNumber;
    },    
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber;
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue;
    }
  },
  actions: {
    /* 
      Contrived AF. Just showing the general use of actions async purpose
      Grabs random number from random # generator api and increments counter
      by that random number.

      in order to commit a mutation from an action have to pass an object with
      the type of commit method.

      Axios used to make API call quicker.
    */
      increaseCounter({ commit }) {
        axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
            commit('increaseCounter', response.data)
          }
        ) 
      },  
      decreaseCounter({ commit }) {
        axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
            commit('decreaseCounter', response.data)
          }
        ) 
      },   
      setColorCode({ commit }, newValue) {
        commit('setColorCode', newValue)
      }

  },
  getters: {
    /*
      display square of the current counter underneath the main counter.
      pass in state to method
    */
    counterSquared(state) {
     return state.counter * state.counter;
    }
  },
  modules: {
  }
})
