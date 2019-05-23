<template>
    <div>
        <div class="title">
            About
        </div>
        <div class="profileContainer">
          <div class="profileTitle">プロフィール</div>
          <div class="profile">
            <img src="../../assets/myImage.png" class="myImage">
            <div class="profileText">
              名前: 石田大智<br>
              年齢: 20歳<br>
              大学: 金沢工業大学<br>
              学科: メディア情報<br>
              学年: 3年<br>
              出身: 福井県<br>
            </div>
          </div>
          <div class="profileTitle">自己紹介</div>
          <div class="introduction">
            中高は陸上部で長距離頑張ってました。プログラミングを始めたのは大学からです。<br>
            作ったものを使ってもらって面白い！とか便利！とか言ってもらうのが好きです。<br>
            現在は大学の授業や部活で日々プログラミングをしてます。<br>
            部活ではアプリコンテストにチームで参加したり、LT会を開いて知識を共有しあったりしてます。
            将来は企画から開発まで携われるようなエンジニアになりたいです。<br>
            お酒弱すぎて、飲めません。
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      page: 'chatApp'
    }
  },
  methods: {
    change: function (data) {
      this.page = data
    }
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 781px) {
    .title{
        color: white;
        font-size: 70px;
        margin: 0 0 0;
        padding-top: 50px;
        opacity: 0.5;
    }
    .profileTitle{
        font-weight: bold;
        color: orange;
        font-size: 30px;
        margin: 0 0 0;
        padding-top: 20px;
        margin-bottom: 20px;
    }
    .profileContainer{
      background: #6495ed;
      width: 780px;
      border-radius: 20px;
      margin: auto;
      padding-bottom: 10px;
      .profile{
        margin-left: auto;
        margin-right: auto;
        width: 750px;
        display: flex;
        flex-direction: row;
        .myImage{
          width: 190px;
          height: 250px;
          margin-left: 100px;
        }
        .profileText{
            padding-top: 15px;
            width: 450px;
            color: white;
            font-size: 25px;
            margin: 0 0 0;
            margin-bottom: 30px;
            font-weight: bold;
            text-align: left;
            padding-left: 30px;
            a{
              color: white;
              text-decoration: none;
              &:hover{
                color:steelblue;
              }
            }
        }
      }
      .introduction{
          text-align: left;
          color: white;
          font-size: 20px;
          margin: 0 0 0;
          font-weight: bold;
          margin-left: auto;
          margin-right: auto;
          width: 760px;
      }
    }
}
@media screen and (min-width: 481px) and ( max-width: 780px){
    .title{
        color: white;
        font-size: 60px;
        margin: 0 0 0;
        padding-top: 50px;
        opacity: 0.5;
    }
    .profileTitle{
          font-weight: bold;
          color: orange;
          font-size: 25px;
          margin: 0 0 0;
          padding-top: 20px;
          margin-bottom: 20px;
    }
    .profileContainer{
      background: #6495ed;
      width: 480px;
      border-radius: 20px;
      margin: auto;
      .profile{
        margin-left: auto;
        margin-right: auto;
        width: 470px;
        display: flex;
        flex-direction: row;
        .myImage{
          width: 170px;
          height: 200px;
          margin-left: 20px;
        }
        .profileText{
          padding-top: 15px;
          width: 280px;
          color: white;
          font-size: 17px;
          margin: 0 0 0;
          margin-bottom: 30px;
          font-weight: bold;
          text-align: left;
          padding-left: 30px;
        }
      }
      .introduction{
          text-align: left;
          color: white;
          font-size: 17px;
          margin: 0 0 0;
          font-weight: bold;
          margin-left: auto;
          margin-right: auto;
          width: 470px;
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
    .profileTitle{
        font-weight: bold;
        color: orange;
        font-size: 30px;
        margin: 0 0 0;
        padding-top: 20px;
        margin-bottom: 20px;
    }
    .profileContainer{
      background: #6495ed;
      width: 300px;
      border-radius: 20px;
      margin: auto;
      .profile{
        margin-left: auto;
        margin-right: auto;
        width: 300px;
        display: flex;
        flex-direction: row;
        .myImage{
          width: 130px;
          height: 160px;
          padding-top: 15px;
          margin-left: 10px;
        }
        .profileText{
            padding-top: 15px;
            width: 150px;
            color: white;
            font-size: 15px;
            margin: 0 0 0;
            margin-bottom: 30px;
            font-weight: bold;
            text-align: left;
            padding-left: 10px;
        }
      }
      .introduction{
          text-align: left;
          color: white;
          font-size: 15px;
          margin: 0 0 0;
          font-weight: bold;
          margin-left: auto;
          margin-right: auto;
          width: 300px;
      }
    }
}
</style>
