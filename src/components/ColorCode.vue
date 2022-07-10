<template>
      <div>
      <input
        v-model="colorCode"
        placeholder="Enter a color code"
        type="text"> 
    </div>
</template>

<script>
export default { 
    // Computed property - Vuex gets tricky with two way binding and text inputs.
    // input v-model not using a computed value isn't correct. Needs to be computed.
    computed: {
    // not a method but an object with two methods inside. Because of vuex.
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        //get current value
        let currentColor = this.$store.state.colorCode;
        // commit mutation
        this.$store.commit('setColorCode', newValue);
      }
    }
  },

}
</script>

<style>

</style>