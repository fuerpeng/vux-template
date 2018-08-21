const getters = {
  leftNavBarShow: state => state.header.leftNavBarShow,
  menuShow: state => state.header.menuShow,
  lotteryId: state => state.lottery.lotteryId,
  lotteryGroupId: state => state.lottery.lotteryGroupId,
  lotteryCode: state => state.lottery.lotteryCode,
  lotteryMenus: state => state.lottery.lotteryMenus,
  lotteryName: state => state.lottery.lotteryName,
  isLoading: state => state.load.isLoading,
  userAccount: state => state.user.userAccount,
  userAmount: state => state.user.userAmount,
  userId: state => state.user.userId,
  userProxyId: state => state.user.userProxyId,
  menuList: state => state.user.menuList
};
export default getters
