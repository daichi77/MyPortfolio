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
            <img src="../../assets/newsApp1.png" class="sampleImage">
            <img src="../../assets/newsApp2.png" class="sampleImage">
            <img src="../../assets/newsApp3.png" class="sampleImage">
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

  // @mixin body-font{
  //   color: white;
  //   font-size: 20px;
  //   font-weight: bold;
  //   text-align: left;
  // }
  // @mixin row-flex{
  //   display: flex;
  //   flex-direction: row;
  // }
  // .content{
  //   margin: 20px 0 0;
  //   width: 100%;
  //   .flex-button{
  //     display: flex;
  //     flex-direction: row;
  //     width: 90%;
  //     justify-content: left;
  //     .select-button.active{
  //       opacity: 1;
  //       color: white;
  //       border-bottom: 5px solid white;
  //       font-size: 20px;
  //       font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  //       margin-right: 10px;
  //       font-weight: bold;
  //     }
  //   }
  //   #overview{
  //     padding-top: 20px;
  //     width: 100%;
  //     margin-left: auto;
  //     margin-right: auto;
  //     .row-flex{
  //       @include row-flex();
  //       width: 100%;
  //       .newsIcon{
  //         width: 180px;
  //         height: 180px;
  //         margin-right: 50px;
  //       }
  //       div{
  //         .appName{
  //           margin-top: 10px;
  //           color: white;
  //           font-size: 35px;
  //           font-weight: bold;
  //           text-align: left;
  //         }
  //         .concept{
  //           color: orange;
  //           font-size: 22px;
  //           font-weight: bold;
  //           text-align: left;
  //           span{
  //             @include body-font();
  //             font-size: 22px;
  //           }
  //         }
  //         .row-flex{
  //           @include row-flex();
  //           margin-top: 10px;
  //           div{
  //             color: white;
  //             font-size: 20px;
  //             font-weight: bold;
  //             text-align: left;
  //             span{
  //               color: orange;
  //             }
  //           }
  //         }
  //       }
  //     }
  //     .subTitle{
  //       margin-top: 20px;
  //       @include body-font();
  //       color: orange;
  //     }
  //     .sentence{
  //       @include body-font();
  //     }
  //   }
  // }
  #preview{
    .sample-box{
      width: 100%;
      display: flex;
      flex-direction: row;
      padding-top: 30px;
      justify-content: space-around;
      .sampleImage{
        width: 180px;
        height: 300px;;
      }
    }
  }
}
@media screen and (max-width: 780px) and (min-width: 481px) {
  // @mixin body-font{
  //   color: white;
  //   font-size: 18px;
  //   font-weight: bold;
  //   text-align: left;
  // }
  // @mixin row-flex{
  //   display: flex;
  //   flex-direction: row;
  // }
  // .content{
  //     margin: 20px 0 0;
  //     width: 100%;
  // }
  // .flex-button{
  //     display: flex;
  //     flex-direction: row;
  //     width: 90%;
  //     justify-content: left;
  //     margin-left: auto;
  //     margin-right: auto;
  //     .select-button.active{
  //       opacity: 1;
  //       color: white;
  //       border-bottom: 5px solid white;
  //       font-size: 20px;
  //       font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  //       margin-right: 10px;
  //       font-weight: bold;
  //     }
  // }
  // #overview{
  //   padding-top: 20px;
  //   width: 100%;
  //   margin-left: auto;
  //   margin-right: auto;
  //   .row-flex{
  //     @include row-flex();
  //     .icon{
  //       display: block;
  //       width: 150px;
  //       height: 150px;
  //       margin-right: 30px;
  //     }
  //     div{
  //       .appName{
  //         margin-top: 5px;
  //         color: white;
  //         font-size: 30px;
  //         font-weight: bold;
  //         text-align: left;
  //       }
  //       .concept{
  //         color: orange;
  //         font-size: 18px;
  //         font-weight: bold;
  //         text-align: left;
  //         span{
  //           @include body-font();
  //         }
  //       }
  //       .row-flex{
  //         @include row-flex();
  //         margin-top: 10px;
  //         div{
  //           color: white;
  //           font-size: 18px;
  //           font-weight: bold;
  //           text-align: left;
  //           margin-right: 30px;
  //           span{
  //             color: orange;
  //           }
  //         }
  //       }
  //     }
  //   }
  //   .subTitle{
  //     margin-top: 20px;
  //     @include body-font();
  //     color: orange;
  //   }
  //   .sentence{
  //     @include body-font();
  //   }
  // }
  #preview{
    .sample-box{
      width: 100%;
      display: flex;
      flex-direction: row;
      padding-top: 30px;
      justify-content: space-around;
      .sampleImage{
        width: 140px;
        height: 230px;;
      }
    }
  }
}
@media screen and (max-width: 480px) {
  // @mixin body-font{
  //   color: white;
  //   font-size: 15px;
  //   font-weight: bold;
  //   text-align: left;
  // }
  // @mixin row-flex{
  //   display: flex;
  //   flex-direction: row;
  // }
  // .content{
  //   margin: 10px 0 0;
  //   width: 100%;
  //   .flex-button{
  //       display: flex;
  //       flex-direction: row;
  //       width: 100%;
  //       justify-content: left;
  //       margin-left: auto;
  //       margin-right: auto;
  //       .select-button.active{
  //         opacity: 1;
  //         color: white;
  //         border-bottom: 5px solid white;
  //         font-size: 17px;
  //         font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  //         margin-right: 10px;
  //         font-weight: bold;
  //       }
  //   }
  //   #overview{
  //     width: 100%;
  //     margin-left: auto;
  //     margin-right: auto;
  //     .row-flex{
  //       @include row-flex();
  //       .icon{
  //         margin-top: 25px;
  //         display: block;
  //         width: 95px;
  //         height: 95px;
  //         margin-right: 20px;
  //       }
  //       div{
  //         .appName{
  //           color: white;
  //           font-size: 20px;
  //           font-weight: bold;
  //           text-align: left;
  //         }
  //         .concept{
  //           color: orange;
  //           font-size: 15px;
  //           font-weight: bold;
  //           text-align: left;
  //           span{
  //             @include body-font();
  //           }
  //         }
  //         .row-flex{
  //           @include row-flex();
  //           margin-top: 10px;
  //           div{
  //             color: white;
  //             font-size: 14px;
  //             font-weight: bold;
  //             text-align: left;
  //             margin-right: 15px;
  //             span{
  //               color: orange;
  //             }
  //           }
  //         }
  //       }
  //     }
  //     .subTitle{
  //       margin-top: 20px;
  //       @include body-font();
  //       color: orange;
  //     }
  //     .sentence{
  //       @include body-font();
  //     }
  //   }
    #preview{
      .sample-box{
        width: 100%;
        padding-top: 30px;
        .sampleImage{
          display: block;
          width: 250px;
          height: 500px;
          margin: 0 auto 10px;
        }
      }
    }
}
</style>
