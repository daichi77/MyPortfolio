<template>
    <div class="content">
        <div class="flex-button">
            <SelectButton v-on:call-parent="changeView(true)" name="概要" v-bind:class="{ active: view }"></SelectButton>
            <SelectButton v-on:call-parent="changeView(false)" name="プレビュー" v-bind:class="{ active: !view }"></SelectButton>
        </div>
        <div id ="overview" v-if="view">
          <div class="row-flex">
            <img src="../../assets/portfolioIcon.png" class="icon">
            <div>
              <div class="appName">MyPortfolio</div>
              <div class="concept">コンセプト</div>
              <div class="sentence">ポートフォリオサイト</div>
              <div class="skill">
                <div>
                  <span>仕様技術</span><br>vue.js
                </div>
                <div class="right">
                  <span>稼働環境</span><br>web
                </div>
              </div>
            </div>
          </div>
          <div class="subTitle">説明</div>
          <div class="sentence">
            自分のポートフォリオサイトです。<br>
            自己紹介、作ったアプリ,勉強,趣味,sns,学校でしてることの6つのページがあります。<br>
          </div>
          <div class="subTitle">反省点</div>
          <div class="sentence">
            デザインを2週間くらい考えていまだに納得してません。<br>
            見やすいデザイン、使いやすいデザインをもっと勉強するべきだと思いました。<br>
            vue.jsを勉強しながら作ったので思ったより開発に時間がかかってしまいました。<br>
            またファイル構成やコードを綺麗にできてないのでもっと見やすいコードを書くようにしていきたいです。
          </div>
          <div class="subTitle">URL</div>
          <div class="sentence">
            今後リリース予定です。
          </div>
        </div>
        <div id ="preview" v-if="!view">
            <img src="../../assets/portfolio1.png" class="portfolioImage">
            <img src="../../assets/portfolio2.png" class="portfolioImage">
            <img src="../../assets/portfolio3.png" class="portfolioImage">
        </div>
    </div>
</template>

<script>
import SelectButton from './SelectButton'
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
  },
  components: {
    SelectButton
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 781px) {
  #preview{
    .portfolioImage{
      width: 540px;
      height: 300px;
      margin: 10px auto 0;
      border: 1px solid lightgray;
    }
  }
}
@media screen and (max-width: 780px) and (min-width: 481px){
  #preview{
    .portfolioImage{
      width: 400px;
      height: 280px;
      margin: 10px auto 0;
      border: 1px solid lightgray;
    }
  }
}
@media screen and (max-width: 480px) {
  #preview{
    .portfolioImage{
      width: 290px;
      height: 160px;
      margin: 10px auto 0;
      border: 1px solid lightgray;
    }
  }
}
</style>
