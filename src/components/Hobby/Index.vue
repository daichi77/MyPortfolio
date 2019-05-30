<template>
    <div>
        <div class="title">
            Hobby
        </div>
        <div class="main">
          <div class="hobby-box">
            <div class="hobby-title">漫画・アニメ</div>
            <img src="../../assets/manga.png" class="hobby-image">
            <div class="hobby-sentence">
              一つ目の趣味は漫画・アニメです。上の画像の漫画は今まで見てきた漫画です。<br>
              ほとんどジャンプの漫画でたまに他の雑誌の漫画も読んだりします。
              一番好きなのはドラゴンボールです。
            </div>
          </div>
          <div class="hobby-box">
            <div class="hobby-title">暗号資産</div>
            <img src="../../assets/angou.png" class="hobby-image">
            <div class="hobby-sentence">
              いわゆる仮想通貨というやつです。2018年2月に買い始めました。
              買い始め直後、見事にcoincheckハッキング事件が起きて、そこからの暴落続きで僕の資産は水の泡になりました。<br>
              今現在保有している通貨はBNB,ADA,NOAHです。NOAHは詐欺詐欺言われてる通貨です。
              学生なので数万円分しか買えてません。少ない資金で短期トレードすると税金がやばいので,
              基本ずっとガチホです。
            </div>
          </div>
          <div class="hobby-box">
            <div class="hobby-title">旅行</div>
            <div class="hobby-sentence">
              旅行は正直お金がないので全く行けてないです。なので就職してお金が溜まったらいろんなところに
              行きたいなあ〜という<span>願望</span>です。<br>
              温泉巡りしたいです。
            </div>
          </div>
          <div class="hobby-box">
            <div class="hobby-title">ゲーム</div>
            <img src="../../assets/gameIcon.png" class="game-image">
            <div class="hobby-sentence">
              上の画像にもある通り今やってるのは「城とドラゴン」「クラッシュロワイヤル」
              「ドッカンバトル」「ポケモンGO」です。見ての通りスマホゲームしかやってないです。<br>
              今やってるゲームは高校の時からやってるのでおそらく3年くらいは続けてます。<br>
              逆に最近始めたゲームはあまりないです。ポケモンGOは飽き気味で最近は何もやってないです。
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@media screen and (min-width: 780px) {
    .title{
        color: white;
        font-size: 70px;
        margin: 0 0 0;
        padding-top: 50px;
        opacity: 0.5;
    }
    .main{
      width: 65%;
      min-width: 550px;
      margin: 20px auto 0;
      .hobby-box{
        background: #6495ed;
        border-radius: 20px;
        width: 80%;
        min-width: 570px;
        margin: 20px auto 20px;
        .hobby-title{
          color: orange;
          font-size: 27px;
          font-weight: bold;
          text-align: left;
          width: 540px;
          margin: auto;
        }
        .hobby-sentence{
          color: white;
          font-size: 20px;
          font-weight: bold;
          text-align: left;
          width: 540px;
          margin: auto;
        }
        .hobby-image{
          width: 530px;
          height: 240px;
          margin: auto;
        }
        .game-image{
          width: 530px;
          height: 310px;
          margin: auto;
        }
      }
    }
}
@media screen and (max-width: 780px) and (min-width:481px){
    .title{
        color: white;
        font-size: 70px;
        margin: 0 0 0;
        padding-top: 50px;
        opacity: 0.5;
    }
    .main{
      width: 90%;
      margin: 20px auto 0;
      .hobby-box{
        background: #6495ed;
        border-radius: 20px;
        width: 80%;
        min-width: 420px;
        margin: 20px auto 20px;
        .hobby-title{
          color: orange;
          font-size: 27px;
          font-weight: bold;
          text-align: left;
          width: 400px;
          margin: auto;
        }
        .hobby-sentence{
          color: white;
          font-size: 20px;
          font-weight: bold;
          text-align: left;
          width: 400px;
          margin: auto;
        }
        .hobby-image{
          width: 400px;
          height: 240px;
          margin: auto;
        }
        .game-image{
          width: 400px;
          height: 300px;
          margin: auto;
        }
      }
    }
}
@media screen and (max-width: 480px){
    .title{
        color: white;
        font-size: 70px;
        margin: 0 0 0;
        padding-top: 50px;
        opacity: 0.5;
    }
    .main{
      width: 97%;
      min-width: 290px;
      margin: 20px auto 0;
      .hobby-box{
        background: #6495ed;
        border-radius: 20px;
        width: 80%;
        min-width: 280px;
        margin: 20px auto 20px;
        .hobby-title{
          color: orange;
          font-size: 27px;
          font-weight: bold;
          text-align: left;
          width: 260px;
          margin: auto;
        }
        .hobby-sentence{
          color: white;
          font-size: 18px;
          font-weight: bold;
          text-align: left;
          width: 260px;
          margin: auto;
        }
        .hobby-image{
          width: 260px;
          height: 200px;
          margin: auto;
        }
        .game-image{
          width: 260px;
          height: 200px;
          margin: auto;
        }
      }
    }
}
</style>
