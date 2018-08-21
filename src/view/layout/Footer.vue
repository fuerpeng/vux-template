<template>
  <nav class="kd-toolbar" :class="{'hide-toolbar':isHide}">
    <a class="icon kd-toolbar-toggle" @click="isHide=!isHide">
    </a>
    <ul class="kd-toolbar-inner">
      <li class="kd-toolbar-item">
        <a>
          <i class="icon icon-home">
          </i>
          首页
        </a>
      </li>
      <li class="kd-toolbar-item">
        <a>
          <i class="icon icon-user-center">
          </i>
          我的地盘
        </a>
      </li>
      <li class="kd-toolbar-item">
        <a>
          <i class="icon icon-money-in-out">
          </i>
          充值/提现
        </a>
      </li>
      <li class="kd-toolbar-item">
        <a>
          <i class="icon icon-gift">
          </i>
          优惠
        </a>
      </li>
      <li class="kd-toolbar-item">
        <a data-clipboard-text="1594888884" class="js-add-qq-contact">
          <i class="icon icon-qq animated infinite bounce">
          </i>
          客服QQ
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'FooterHtml',
    data () {
      return {
        isHide: false
      }
    }
  }
</script>
