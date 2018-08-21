<template>
</template>
<script>
  import {setToken} from '../utils/auth'
  import {mapActions} from 'vuex'
  export default {
    name: 'Redirect',
    data(){
      return {}
    },
    methods: {
      ...mapActions([
        'setIsLoading'
      ]),
      loadData: function (options) {
        this.validationToken(options);
      },
      validationToken: function (options) {
        const _this = this, {token, groupCode, gameCode} = options;
        _this.setIsLoading(true);
        this.$store.dispatch('getAccountInfo', token).then(() => {
          setToken(token);
          _this.redirect(groupCode, gameCode);
        }).catch(err => {
          console.log(`【error】:${err}`)
          _this.$router.push({path: '/401'});
        });
      },
      redirect: function (RGroupCode, RGameCode) {
        const _this = this;
        _this.$store.dispatch('generateRoutes').then(arr => {
          _this.setIsLoading(false);
          let flag = false;
          if (arr && arr.length > 0) {
            for (let x = 0; x < arr.length; x++) {
              const {typeId, typeCode, children} = arr[x]
              if (typeCode === RGroupCode && children && children instanceof Array) {
                for (let y = 0; y < children.length; y++) {
                  const {gameId, gameCode, gameName} = children[y];
                  if (gameCode === RGameCode) {
                    flag = true;
                    _this.$router.push({
                      path: `/game/${typeCode}/${typeId}/${gameId}/${gameCode}/${gameName}`
                    });
                    break;
                  }
                }
              }
            }
            if (!flag) {
              _this.$router.push({path: '/401'});
            }
          } else {
            console.log('【error】:menus is not a array...')
            _this.$router.push({path: '/401'});
          }
        }).catch(err => {
          console.log(err)
          _this.$router.push({path: '/401'});
        });
      }
    },
    beforeRouteEnter(to, from, next){
      if (!from.path)  return false;
      next(vm => {
        vm.loadData(to.params)
      });
    },
  }
</script>
