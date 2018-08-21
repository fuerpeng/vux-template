import httpRequest from '../utils/fetch';

export function getLotteryPlays(query) {
  return httpRequest({
    url: '/task/lotteryGameKgController/LotteryGameInitData',
    method: 'post',
    data: query
  });
}

export function getMasterList(query) {
  return httpRequest({
    url: '/task/lotteryGameKgController/getMasterList',
    method: 'post',
    data: query
  });
}

export function getGameList() {
  return httpRequest({
    url: '/task/lotteryGameKgController/getGameList',
    method: 'post'
  });
}


export function getLotterysInfo(query) {
  return httpRequest({
    url: '/task/lotteryGameKgController/PcLoadKgGameResult',
    method: 'post',
    data: query
  });
}

export function getLotteryDraw(query) {
  return httpRequest({
    url: '/task/lotteryGameKgController/getLotteryGameResult',
    method: 'post',
    data: query
  });
}


export function betGame(params) {
  return httpRequest({
    url: '/task/gameBetManger/betGame',
    method: 'post',
    data: params
  });
}

export function getUserInfoByToken(params) {
  return httpRequest({
    url: '/game/userManager/getUserInfoByToken',
    method: 'post',
    data:params
  });
}

export function getUserBalance(params) {
  return httpRequest({
    url: '/game/userManager/userAmount',
    method: 'post',
    data:params
  });
}

