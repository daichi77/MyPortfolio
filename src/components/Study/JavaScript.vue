<template>
    <div class="content">
      <div class="study-content">
      <div class="study-span">
        勉強期間<br>
        <span>6ヶ月</span>
      </div>
      <div class="done">
        <div class="sub-title">やってきたこと</div>
        <a href="https://prog-8.com/">progate(javascriptコース)<br></a>
        <a href="https://www.amazon.co.jp/%E3%82%B9%E3%83%A9%E3%82%B9%E3%83%A9%E8%AA%AD%E3%82%81%E3%82%8B-JavaScript-%E3%81%B5%E3%82%8A%E3%81%8C%E3%81%AA%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-%E3%81%B5%E3%82%8A%E3%81%8C%E3%81%AA%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-%E3%83%AA%E3%83%96%E3%83%AD%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%B9/dp/4295003859">スラスラ読めるふりがなプログラミング<br></a>
        <router-link to="/myapp">ReactNativeを使用してチーム開発<br></router-link>
        <router-link to="/myapp">vue.jsでポートフォリオサイト作成<br></router-link>
      </div>
      <img src="../../assets/studyJS.png" class="study-image">
    </div>
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
@media screen and (min-width: 780px) {
    .content{
      margin: 20px 0 0;
      width: 100%;
    }
}
@media screen and (max-width: 780px) {

}
@media screen and (max-width: 480px) {
  .content{
    margin: 20px 0 0;
    width: 100%;
  }
}
</style>
