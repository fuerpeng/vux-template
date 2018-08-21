<template>
  <div class="kd-page" :class="{'push-menu':leftNavBarShow}">
    <app-main></app-main>
  </div>
</template>

<script>
  import AppMain from  './AppMain'
  import {mapGetters} from 'vuex'
  export default {
    name: 'layout',
    components: {
      AppMain
    },
    data(){
      return {}
    },
    created(){
      this.refreshUserBalance();
    },
    computed: {
      ...mapGetters([
        'leftNavBarShow',
        'lotteryName',
        'userId'
      ])
    },
    methods: {
      refreshUserBalance: function () {
        this.$store.dispatch('loadUserBalance', this.userId).then(() => {}).catch(err => {});
      }
    }
  }
</script>
