<template>
    <div class="study-content">
      <div class="study-span">
        勉強期間<br>
        <span>2ヶ月</span>
      </div>
      <div class="done">
        <div class="sub-title">やってきたこと</div>
        <a href="https://prog-8.com/">progate(Swiftコース)<br></a>
        <a href="https://gihyo.jp/book/2018/978-4-7741-9414-1">Swift実践入門<br></a>
        <router-link to="/myapp">成果物作成(newsCamera)</router-link>
      </div>
      <img src="../../assets/studySwift.png" class="study-image">
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
  .study-content{
    margin: 20px auto 0;
    border-radius: 20px;
    background: #6495ed;
    width: 500px;
    .study-span{
      color: orange;
      font-size: 25px;
      font-weight: bold;
      text-align: left;
      width: 420px;
      padding-top: 20px;
      margin-left: auto;
      margin-right: auto;
      span{
        color: white;
        font-size: 23px;
      }
    }
    .done{
      text-align: left;
      width: 420px;
      padding-top: 20px;
      margin-left: auto;
      margin-right: auto;
      .sub-title{
        color: orange;
        font-size: 25px;
        font-weight: bold;
        text-align: left;
      }
      a{
        color: white;
        font-size: 23px;
        font-weight: bold;
        &:hover{
          color: #000066;
        }
      }
    }
    .study-image{
      margin-top: 20px;
      width:430px;
      height: 150px;
    }
  }
}
@media screen and (max-width: 780px) and (min-width: 481px) {
  .study-content{
    margin: 20px auto 0;
    border-radius: 20px;
    background: #6495ed;
    width: 400px;
    .study-span{
      color: orange;
      font-size: 25px;
      font-weight: bold;
      text-align: left;
      width: 350px;
      padding-top: 20px;
      margin-left: auto;
      margin-right: auto;
      span{
        color: white;
        font-size: 23px;
      }
    }
    .done{
      text-align: left;
      width: 350px;
      padding-top: 20px;
      margin-left: auto;
      margin-right: auto;
      .sub-title{
        color: orange;
        font-size: 25px;
        font-weight: bold;
        text-align: left;
      }
      a{
        color: white;
        font-size: 19px;
        text-decoration: none;
        font-weight: bold;
      }
    }
    .study-image{
      margin-top: 20px;
      width:330px;
      height: 120px;
    }
  }
}
@media screen and (max-width: 480px) {
  .study-content{
    margin: 20px auto 0;
    border-radius: 20px;
    background: #6495ed;
    width: 280px;
    .study-span{
      color: orange;
      font-size: 20px;
      font-weight: bold;
      text-align: left;
      width: 270px;
      padding-top: 20px;
      margin-left: auto;
      margin-right: auto;
      span{
        color: white;
        font-size: 15px;
      }
    }
    .done{
      text-align: left;
      width: 270px;
      padding-top: 20px;
      margin-left: auto;
      margin-right: auto;
      .sub-title{
        color: orange;
        font-size: 20px;
        font-weight: bold;
        text-align: left;
      }
      a{
        color: white;
        font-size: 15px;
        text-decoration: none;
        font-weight: bold;
      }
    }
    .study-image{
      margin-top: 20px;
      width:270px;
      height: 100px;
    }
  }
}
</style>
