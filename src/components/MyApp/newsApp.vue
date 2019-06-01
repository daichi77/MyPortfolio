<template>
    <div class="content">
        <div class="flex-button">
            <SelectButton v-on:call-parent="changeView(true)" name="概要" v-bind:class="{ active: view }"></SelectButton>
            <SelectButton v-on:call-parent="changeView(false)" name="プレビュー" v-bind:class="{ active: !view }"></SelectButton>
        </div>
        <div id ="overview" v-if="view">
          <div class="row-flex">
            <img src="../../assets/newsIcon.png" class="icon">
            <div>
              <div class="appName">ニュースカメラ</div>
              <div class="concept">コンセプト<br><span>写真をテレビニュース風に加工する</span></div>
              <div class="skill">
                <div>
                  <span>仕様言語</span><br>swift
                </div>
                <div class="right">
                  <span>稼働環境</span><br>iOS
                </div>
              </div>
            </div>
          </div>
          <div class="subTitle">説明</div>
          <div class="sentence">
            友達の写真や自分の写真をニュースで報道されている風に加工することができるアプリです。<br>
            友達やグループラインで面白い画像を送りあったりした経験はありませんか？このアプリはそういった時に使用することができます。<br>
            このアプリを使えばあたかもニュースで報道されているように画像を加工することができます。<br>
            オリンピックで金メダルを取ったように加工するもよし、逮捕されてしまったかのように加工するもよし、お好みの内容で報道されることができます。
          </div>
          <div class="subTitle">反省点</div>
          <div class="sentence">
            正方形の画像だと画像加工がうまくいかないため正方形の画像には対応できなかったこと。
          </div>
          <div class="subTitle">URL</div>
          <div class="sentence">
            今後リリース予定です。
          </div>
        </div>
        <div id ="preview" v-if="!view">
          <div class="sample-box">
            <video src="../../assets/newsApp.mp4" controls class="video"></video>
            <img src="../../assets/newsImage1.png" class="sample-image">
            <img src="../../assets/newsImage2.png" class="sample-image">
          </div>
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
@media screen and (min-width: 780px) {
  #preview{
    .sample-box{
      width: 100%;
      display: flex;
      flex-direction: column;
      background: #6495ed;
      border-radius: 20px;
      margin-top: 20px;
      padding-top: 20px;
      .video{
        height: 330px;
        width: 600px;
        margin:20px auto 20px;
      }
      .sample-image{
        width: 600px;
        height: 330px;
        margin:20px auto 20px;
      }
    }
  }
}
@media screen and (max-width: 780px) and (min-width: 481px) {
  #preview{
    .sample-box{
      width: 100%;
      justify-content: space-around;
      background: #6495ed;
      flex-direction: column;
      border-radius: 20px;
      margin-top: 20px;
      padding-top: 20px;
      .video{
        height: 450px;
        width:220px;
        margin:20px auto 20px;
      }
      .sample-image{
        width: 400px;
        height: 220px;
        margin:20px auto 20px;
      }
    }
  }
}
@media screen and (max-width: 480px) {
  #preview{
    .sample-box{
      width: 100%;
      background: #6495ed;
      border-radius: 20px;
      margin-top: 20px;
      padding-top: 20px;
      .video{
        height: 150px;
        width:280px;
        margin:20px auto 20px;
      }
      .sample-image{
        width: 280px;
        height: 150px;
        margin:20px auto 20px;
      }
    }
  }
}
</style>
