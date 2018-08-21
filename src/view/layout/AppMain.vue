<template>
  <main class="kd-body game has-user-playing-info cart-not-empty" :class="cssMap[lotteryCode]" @click="keyupFun">
    <router-view></router-view>
  </main>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: 'AppMain',
    data () {
      return {
        cssMap: {
          ssc: 'ssc',
          xglhc: 'game-l'
        }
      }
    },
    methods: {
      ...mapActions([
        'setMenuShow'
      ]),
      keyupFun: function () {
        if (this.menuShow) {
          this.setMenuShow(false);
        }
      }
    },
    computed: {
      ...mapGetters([
        'lotteryCode',
        'menuShow'
      ])
    }
  }
</script>
