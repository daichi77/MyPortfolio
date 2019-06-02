<template>
    <div class="content">
        <div class="flex-button">
            <SelectButton v-on:call-parent="changeView(true)" name="概要" v-bind:class="{ active: view }"></SelectButton>
            <SelectButton v-on:call-parent="changeView(false)" name="プレビュー" v-bind:class="{ active: !view }"></SelectButton>
        </div>
        <div id ="overview" v-if="view">
          <div class="row-flex">
            <div class="kanayado-icon"></div>
            <div>
              <div class="appName">カナヤド</div>
              <div class="concept">コンセプト<br><span>一目で分かるお宿情報</span></div>
              <div class="skill">
                <div>
                  <span>開発言語</span><br>ReactNative
                </div>
                <div class="right">
                  <span>稼働環境</span><br>iOS/Android
                </div>
              </div>
            </div>
          </div>
          <div class="subTitle">説明</div>
          <div class="sentence">
            チームでKanazawaCivicTechContestにエントリーした時に制作したアプリです。<br>
            地図上に宿のピンが立っていて、ピンには宿の値段と空室状況が示されています。<br>
            ピンの色が赤色と青色に分かれており、赤は満室、青は空室という風に色で空室状況を見分けることができます。
            また金沢の観光地ピンも表示されているので観光地近くの宿が探しやすくなっています。<br>
            宿の情報はじゃらんnetのapiで持ってきています。
          </div>
          <div class="subTitle">担当箇所</div>
          <div class="sentence">
            画面遷移と画面遷移時の値の受け渡し<br>
            githubの管理<br>
            コンテストでのプレゼン、仕様書制作
          </div>
          <div class="subTitle">URL</div>
          <div class="sentence">
            <a href="https://github.com/daichi77/kanazawaApp-2018">github</a>
          </div>
        </div>
        <div id ="preview" v-if="!view">
            <video src="../../assets/kanayado.mp4" controls class="video"></video>
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
  @mixin body-font{
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
  }
  @mixin row-flex{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .content{
    margin: 20px 0 0;
    width: 100%;
    .flex-button{
      display: flex;
      flex-direction: row;
      width: 90%;
      justify-content: left;
      .select-button.active{
        opacity: 1;
        color: white;
        border-bottom: 5px solid white;
        font-size: 20px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        margin-right: 10px;
        font-weight: bold;
      }
    }
    #overview{
      padding-top: 20px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      .row-flex{
        @include row-flex();
        max-width: 550px;
        .kanayado-icon{
          background-repeat: no-repeat;
          display: block;
          height: 180px;
          width: 180px;
          background-image: url("../../assets/largeAppIcon.png");
          background-position: -195px -5px;
        }
        div{
          .appName{
            margin-top: 10px;
            color: white;
            font-size: 35px;
            font-weight: bold;
            text-align: left;
          }
          .concept{
            color: orange;
            font-size: 22px;
            font-weight: bold;
            text-align: left;
            span{
              @include body-font();
              font-size: 22px;
            }
          }
          .skill{
            @include row-flex();
            justify-content: left;
            margin-top: 10px;
            div{
              color: white;
              font-size: 20px;
              font-weight: bold;
              text-align: left;
              span{
                color: orange;
              }
            }
            .right{
              margin-left: 50px;
            }
          }
        }
      }
      .subTitle{
        margin-top: 20px;
        @include body-font();
        color: orange;
      }
      .sentence{
        @include body-font();
      }
    }
    #preview{
      .video{
        height: 330px;
        width: 600px;
        margin:20px auto 20px;
      }
    }
  }
}
@media screen and (max-width: 780px) and (min-width: 481px) {
  @mixin body-font{
    color: white;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
  }
  @mixin row-flex{
    display: flex;
    flex-direction: row;
  }
  .content{
      margin: 20px 0 0;
      width: 100%;
    .flex-button{
        display: flex;
        flex-direction: row;
        width: 90%;
        justify-content: left;
        margin-left: auto;
        margin-right: auto;
        .select-button.active{
          opacity: 1;
          color: white;
          border-bottom: 5px solid white;
          font-size: 20px;
          font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
          margin-right: 10px;
          font-weight: bold;
        }
    }
    #overview{
      padding-top: 20px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      .row-flex{
        @include row-flex();
        justify-content: space-around;
        min-width: 460px;
        .kanayado-icon{
          background-repeat: no-repeat;
          display: block;
          height: 150px;
          width: 150px;
          background-image: url("../../assets/mediumAppIcon.png");
          background-position: -5px -165px;
        }
        div{
          .appName{
            margin-top: 5px;
            color: white;
            font-size: 30px;
            font-weight: bold;
            text-align: left;
          }
          .concept{
            color: orange;
            font-size: 18px;
            font-weight: bold;
            text-align: left;
            span{
              @include body-font();
            }
          }
          .skill{
            @include row-flex();
            margin-top: 10px;
            div{
              color: white;
              font-size: 18px;
              font-weight: bold;
              text-align: left;
              margin-right: 30px;
              span{
                color: orange;
              }
            }
          }
        }
      }
      .subTitle{
        margin-top: 20px;
        @include body-font();
        color: orange;
      }
      .sentence{
        @include body-font();
      }
    }
    #preview{
      .video{
        height: 450px;
        width:220px;
        margin:20px auto 20px;
      }
    }
  }
}
@media screen and (max-width: 480px) {
  @mixin body-font{
    color: white;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
  }
  @mixin row-flex{
    display: flex;
    flex-direction: row;
  }
  .content{
    margin: 10px 0 0;
    width: 100%;
    .flex-button{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: left;
        margin-left: auto;
        margin-right: auto;
        .select-button.active{
          opacity: 1;
          color: white;
          border-bottom: 5px solid white;
          font-size: 17px;
          font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
          margin-right: 10px;
          font-weight: bold;
        }
    }
    #overview{
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      .row-flex{
        @include row-flex();
        justify-content: space-around;
        .kanayado-icon{
          margin-top: 17px;
          background-repeat: no-repeat;
          display: block;
          height: 90px;
          width: 90px;
          background-image: url("../../assets/smallAppIcon.png");
          background-position: -105px -5px;
        }
        div{
          .appName{
            color: white;
            font-size: 20px;
            font-weight: bold;
            text-align: left;
            width: 180px;
          }
          .concept{
            width: 180px;
            color: orange;
            font-size: 15px;
            font-weight: bold;
            text-align: left;
            span{
              color: white;
              font-size: 14px;
              font-weight: bold;
              text-align: left;
            }
          }
          .sentence{
            width: 180px;
            @include body-font();
          }
          .skill{
            width: 180px;
            @include row-flex();
            margin-top: 10px;
            div{
              color: white;
              font-size: 14px;
              font-weight: bold;
              text-align: left;
              span{
                color: orange;
              }
            }
            .right{
              margin-left: 15px;
            }
          }
        }
      }
      .subTitle{
        margin-top: 20px;
        @include body-font();
        color: orange;
      }
      .sentence{
        @include body-font();
      }
    }
    #preview{
      .video{
        height: 150px;
        width:280px;
        margin:20px auto 20px;
      }
    }
  }
}
</style>
