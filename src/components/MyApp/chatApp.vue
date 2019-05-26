<template>
    <div class="content">
        <div class="flex-button">
            <SelectButton v-on:call-parent="changeView(true)" name="概要" v-bind:class="{ active: view }"></SelectButton>
            <SelectButton v-on:call-parent="changeView(false)" name="プレビュー" v-bind:class="{ active: !view }"></SelectButton>
        </div>
        <div id ="overview" v-if="view">
          <div class="row-flex">
            <img src="../../assets/chatIcon.png" class="icon">
            <div>
              <div class="appName">TVTALK</div>
              <div class="concept">コンセプト</div>
              <div class="sentence">テレビのことを語るチャット</div>
              <div class="skill">
                <div>
                  <span>仕様技術</span><br>RubyOnRails
                </div>
                <div class="right">
                  <span>稼働環境</span><br>Web
                </div>
              </div>
            </div>
          </div>
          <div class="subTitle">説明</div>
          <div class="sentence">
            railstutorialを勉強し終わった後に学んだことを使って何かを作ろうと思ったのがきっかけで作りました。<br>
            前から自分の見てるドラマを語れる人があまり周りにいなかったので(友達があまりドラマとか見ない)<br>
            テレビを語れる場があればいいと思っていました。そこでテレビのことを語れるチャットを作りました。<br>
            実装した機能はチャット機能、アカウント作成、ログインなどです。<br>
            ユーザーは好きなドラマについて語る部屋を作ることでそこに参加してきた人とチャットすることができます。<br>
          </div>
          <div class="subTitle">反省点</div>
          <div class="sentence">
            本当はログインしなくても話せるようにしたかったのですが、ログインしていない人が荒らし行為などをした時に<br>
            ブロックする方法が分からなかったので実装することができませんでした。またプロフィール画像がたまに表示されないというバグあります。
          </div>
          <div class="subTitle">URL</div>
          <div class="sentence">
            <a href="https://calm-garden-21543.herokuapp.com/">https://calm-garden-21543.herokuapp.com/</a>
          </div>
        </div>
        <div id ="preview" v-if="!view">
            <img src="../../assets/chatApp1.png" class="chatAppImage">
            <img src="../../assets/chatApp2.png" class="chatAppImage">
            <img src="../../assets/chatApp3.png" class="chatAppImage">
            <img src="../../assets/chatApp4.png" class="chatAppImage">
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
  .chatAppImage{
    width: 540px;
    height: 300px;
    margin: 10px auto 0;
  }
}
@media screen and (max-width: 780px) and (min-width: 481px) {
  .chatAppImage{
    width: 400px;
    height: 280px;
    margin: 10px auto 0;
  }
}
@media screen and (max-width: 480px) {
  .chatAppImage{
    width: 290px;
    height: 160px;
    margin: 10px auto 0;
  }
}
</style>
