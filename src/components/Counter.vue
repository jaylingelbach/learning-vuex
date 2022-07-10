<template>
     <div
      :style="{ color: $store.state.colorCode }"
      class="counter"

    >
      {{ $store.state.counter }}
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>