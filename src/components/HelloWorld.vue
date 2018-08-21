<template>
  <scroller lock-x scrollbar-y height="-99" ref="scroller">
    <div class="box2">
      <p v-for="i in 100">placeholder {{ i + '' + i }}</p>
    </div>
  </scroller>
</template>

<script>
  import { Scroller } from 'vux'

  export default {
    components: {
      Scroller
    },
    data () {
      return {

      }
    },
    mounted () {

    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
