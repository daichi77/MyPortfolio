<template>
    <div class="parent">
        <router-link to="/"><HomeButton></HomeButton></router-link>
        <div class="title">
            SNS
        </div>
        <div class="main">
          <div class="sns-box">
            <div class="sns-urls">
              <a href="https://qiita.com/daichi77"><img src="../../assets/qiita.png" class="sns-button"></a>
              <a href="https://twitter.com/m190MMJ8xGirQ7a"><img src="../../assets/twitter.png" class="sns-button"></a>
              <a href="https://www.facebook.com/profile.php?id=100026828524589"><img src="../../assets/facebook.png" class="sns-button"></a>
              <a href="https://github.com/daichi77"><img src="../../assets/github.png" class="sns-button"></a>
            </div>
            <div class="sns-sentence">
              qiitaやgithubをSNSとくくるのは違う気がしますが、一応貼っておきます。<br>
              facebookはほとんど使っていません。<br>
              twitterはどーでもいいこと呟いています。
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import HomeButton from '../HomeButton'
export default {
  components: {
    HomeButton
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 780px){
  .parent{
    padding-top: 20px;
    a{
        text-decoration: none;
    }
    .title{
      color: white;
      font-size: 70px;
      margin: 0 0 0;
      opacity: 0.5;
    }
    .main{
      width: 65%;
      min-width: 550px;
      margin: 20px auto 0;
      .sns-box{
        min-width: 560px;
        background: #6495ed;
        border-radius: 20px;
        padding: 20px;
        margin: auto;
        width: 90%;
          .sns-urls{
          width: 400px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin: auto;
          justify-content: space-around;
          .sns-button{
            display: block;
            border-radius: 20px;
            width: 150px;
            height: 150px;
            margin-bottom: 20px;
          }
        }
      }
      .sns-sentence{
          color: white;
          font-size: 20px;
          font-weight: bold;
      }
    }
  }
}
@media screen and (max-width: 780px) and (min-width: 481px){
  .parent{
    padding-top: 20px;
    a{
      text-decoration: none;
    }
    .title{
      color: white;
      font-size: 70px;
      margin: 0 0 0;
      opacity: 0.5;
    }
    .main{
      width: 90%;
      margin: 20px auto 0;
      .sns-box{
        min-width: 400px;
        background: #6495ed;
        border-radius: 20px;
        padding: 20px;
        margin: auto;
        width: 90%;
          .sns-urls{
          width: 350px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin: auto;
          justify-content: space-around;
          .sns-button{
            display: block;
            border-radius: 20px;
            width: 130px;
            height: 130px;
            margin-bottom: 20px;
          }
        }
      }
      .sns-sentence{
          color: white;
          font-size: 20px;
          font-weight: bold;
      }
    }
  }
}
@media screen and (max-width: 480px){
  .parent{
    padding-top: 10px;
    a{
        text-decoration: none;
    }
    .title{
      color: white;
      font-size: 70px;
      margin: 0 0 0;
      opacity: 0.5;
    }
    .main{
      width: 97%;
      min-width: 300px;
      margin: 20px auto 0;
      .sns-box{
        min-width: 260px;
        background: #6495ed;
        border-radius: 20px;
        padding: 10px;
        margin: auto;
        width: 80%;
          .sns-urls{
          width: 240px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin: auto;
          justify-content: space-around;
          .sns-button{
            display: block;
            border-radius: 20px;
            width: 110px;
            height: 110px;
            margin-bottom: 20px;
          }
        }
      }
      .sns-sentence{
          color: white;
          font-size: 20px;
          font-weight: bold;
      }
    }
  }
}
</style>
