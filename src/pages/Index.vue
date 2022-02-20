<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  beforeMount() {
    // console.dir(this)
    // console.dir(this.$log)
    // console.dir(this.$log.info)
    this.$log.info("info")
    this.$log.debug(this.$axios.defaults)
  }
})
</script>
