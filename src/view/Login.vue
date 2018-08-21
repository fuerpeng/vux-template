<template>

</template>
<script>
  import {setToken} from '../utils/auth'
  import {mapActions} from 'vuex'
  export default {
    name: 'Login',
    data(){
      return {}
    },
    methods: {
      ...mapActions([
        'setlotteryMenus',
        'setIsLoading',
        'setUserAccount',
        'setUserAmount',
        'setUserId',
        'setUserProxyId'
      ]),
      getUserInfoByTokenFun(token){
        const _this = this;
        _this.setIsLoading(true);
        this.$store.dispatch('getAccountInfo', token).then(() => {
          setToken(token);
          _this.getGameListFun();
        }).catch(() => {
          _this.setIsLoading(false);
          _this.$router.push({path: '/401'});
        });
      },
      getGameListFun: function () {
        const _this = this;
        _this.$store.dispatch('generateRoutes').then(arr => {
          if (arr && arr.length > 0) {
            _this.setIsLoading(false);
            const {typeCode, typeId, children} = arr[0];
            const childrenObj = children && children.length > 0 ? children[0] : null;
            _this.$router.push({
              path: `/game/${typeCode}/${typeId}/${childrenObj.gameId}/${childrenObj.gameCode}/${childrenObj.gameName}`
            });
          } else {
            console.log('loading menus fail...')
            _this.$router.push({path: '/401'});
          }
        }).catch(err => {
          console.log(err)
        });
      },
    },
    beforeRouteEnter(to, from, next){
      if (!from.path)  return false;
      next(vm => {
        const {token} = to.params;
        vm.getUserInfoByTokenFun(token)
      });
    },
  }
</script>
