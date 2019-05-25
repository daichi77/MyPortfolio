<template>
    <div>
        <div class="title">
            MyApp
        </div>
        <ul id="menu">
            <li @click="change('kanayado')" v-bind:class="{ active: page === 'kanayado' }">
                カナヤド
            </li>
            <li @click="change('chatApp')" v-bind:class="{ active: page === 'chatApp' }">
                ChatApp
            </li>
            <li @click="change('newsCamera')" v-bind:class="{ active: page === 'newsCamera' }">
               newsCamera
            </li>
            <li @click="change('myPortfolio')" v-bind:class="{ active: page === 'myPortfolio' }">
                Portfolio
            </li>
        </ul>
        <div class="main">
            <ChatApp v-if="page === 'chatApp'"></chatApp>
            <NewsApp v-else-if="page === 'newsCamera'"></newsApp>
            <MyPortfolio v-else-if="page === 'myPortfolio'"></myPortfolio>
            <Kanayado v-else-if="page === 'kanayado'"></kanayado>
        </div>
    </div>
</template>

<script>
import ChatApp from './ChatApp'
import NewsApp from './NewsApp'
import MyPortfolio from './MyPortfolio'
import Kanayado from './Kanayado'

export default {
  data () {
    return {
      page: 'kanayado'
    }
  },
  methods: {
    change: function (data) {
      this.page = data
    }
  },
  components: {
    ChatApp,
    NewsApp,
    MyPortfolio,
    Kanayado
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 780px) {
    .title{
        color: white;
        font-size: 50px;
        margin: 0 0 0;
        padding-top: 50px;
        opacity: 0.5;
    }
    #menu{
        min-width: 550px;
        width: 65%;
        height: 40px;
        margin:20px 0 0;
        background:#3366ff;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style: none;
        padding-left: 0;
        li{
            line-height: 40px;
            height: 40px;
            text-align: center;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-weight: bold;
            font-size: 18px;
            width: 18%;
            list-style: none;
            color: white;
            text-decoration: none;
            opacity: 0.5;
            &:hover{
                color: white;
                opacity: 1;
            }
        }
        .active{
            line-height: 40px;
            height: 40px;
            text-align: center;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-weight: bold;
            font-size: 18px;
            width: 18%;
            list-style: none;
            color: white;
            text-decoration: none;
            opacity: 1.0;
        }
    }
    .main{
        width: 65%;
        min-width: 550px;
        margin: 20px auto 0;
    }
}
@media screen and (max-width: 780px){
    .title{
        color: white;
        opacity: 70%;
        font-size: 70px;
        margin: 0 0 0;
        padding-top: 50px;
        opacity: 0.5;
    }
    #menu{
        width: 90%;
        height: 40px;
        margin:20px 0 0;
        background:#3333ff;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: row;
        opacity: 0.5;
        justify-content: space-around;
        list-style: none;
        padding-left: 0;
        li{
            line-height: 40px;
            height: 40px;
            text-align: center;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-weight: bold;
            font-size: 15px;
            width: 18%;
            list-style: none;
            color: white;
            text-decoration: none;
            opacity: 0.5;
            &:hover{
                color: white;
                opacity: 2;
            }
        }
        .active{
            line-height: 40px;
            height: 40px;
            text-align: center;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-weight: bold;
            font-size: 15px;
            width: 18%;
            list-style: none;
            color: white;
            text-decoration: none;
            opacity: 1.0;
        }
    }
    .main{
        width: 90%;
        margin: 20px auto 0;
    }
}
@media screen and (max-width: 480px){
    .title{
        color: white;
        opacity: 70%;
        font-size: 50px;
        margin: 0 0 0;
        padding-top: 50px;
        opacity: 0.5;
    }
    #menu{
        width: 100%;
        height: 40px;
        margin:20px 0 0;
        background:#3333ff;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: row;
        opacity: 0.5;
        justify-content: space-around;
        list-style: none;
        padding-left: 0;
        li{
            line-height: 40px;
            height: 40px;
            width: 19%;
            text-align: center;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-weight: bold;
            font-size: 12px;
            list-style: none;
            color: white;
            text-decoration: none;
            opacity: 0.5;
            &:hover{
                color: white;
                opacity: 2;
            }
        }
        .active{
            line-height: 40px;
            height: 40px;
            width: 19%;
            text-align: center;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-weight: bold;
            font-size: 12px;
            list-style: none;
            color: white;
            text-decoration: none;
            opacity: 1.0;
        }
    }
    .main{
        width: 97%;
        margin: 20px auto 0;
    }
}
</style>
