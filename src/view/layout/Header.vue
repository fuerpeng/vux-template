<template>
  <header class="kd-head">
    <a class="kd-head-item menu-back-toggle" id="push_menu" @click="setLeftNavBarShow(true)">
      <i class="icon icon-nav"></i>
    </a>
    <span class="kd-head-item head-title game-title  has-betting-amount">
        {{lotteryName}}
    </span>
    <a class="kd-head-item go-to-login">
      余额：<span class="text" @click="refreshBalance">{{userAmount}}</span>
    </a>
  </header>
</template>

<script>
  import{mapActions, mapGetters} from 'vuex'
  export default {
    name: 'HeadeHtml',
    props: {
      gameName: {
        type: String,
        default: ''
      },
      gameId: {
        type: String,
        default: ''
      },
      gameList: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data () {
      return {}
    },
    methods: {
      ...mapActions([
        'setLeftNavBarShow',
        'setMenuShow'
      ]),
      refreshBalance: function () {
        this.$store.dispatch('loadUserBalance', this.userId).then(res => {

        }).catch(err => {

        })
      }
    },
    computed: {
      ...mapGetters([
        'userId',
        'menuShow',
        'lotteryMenus',
        'lotteryId',
        'lotteryName',
        'userAmount'
      ])
    }
  }
</script>


<style>
  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s ease;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
