const TokenKey = 'whhmobiletoken';
const MenuKey = 'whhmobilemenus';

export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}
export function setMenus(data) {
  return localStorage.setItem(MenuKey,JSON.stringify(data))
}

export function getMenus() {
  return JSON.parse(localStorage.getItem(MenuKey));
}

export function removeMenus() {
  return localStorage.removeItem(MenuKey)
}

export function assembleParam(url, param) {
  return JSON.stringify({
    uri: url,
    token: getToken(),
    paramData: param
  })
}
