<template>
    <div class="study-content">
      <div class="study-span">
        勉強期間<br>
        <span>1ヶ月</span>
      </div>
      <div class="done">
        <div class="sub-title">やってきたこと</div>
        <a href="https://cryptozombies.io/jp/">cryptoZombies<br></a>
        <a href="https://www.amazon.co.jp/%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%83%81%E3%82%A7%E3%83%BC%E3%83%B3%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E9%96%8B%E7%99%BA%E3%81%AE%E6%95%99%E7%A7%91%E6%9B%B8-%E5%8A%A0%E5%B5%9C-%E9%95%B7%E9%96%80/dp/4839965137">ブロックチェーンアプリケーション開発の教科書<br></a>
      </div>
      <img src="../../assets/studySolidity.png" class="study-image">
    </div>
</template>

<script>
export default {
  data () {
    return {
      view: true
    }
  },
  methods: {
    changeView: function (bool) {
      this.view = bool
    }
  }
}
</script>

<style lang="scss">
</style>
