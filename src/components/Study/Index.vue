<template>
    <div>
        <div class="title">
            Study
        </div>
        <ul id="menu">
            <li @click="change('swift')" v-bind:class="{ active: page === 'swift' }">
                swift
            </li>
            <li @click="change('ruby')" v-bind:class="{ active: page === 'ruby' }">
                ruby(rails)
            </li>
            <li @click="change('javascript')" v-bind:class="{ active: page === 'javascript' }">
               javascript
            </li>
            <li @click="change('java')" v-bind:class="{ active: page === 'java' }">
                java
            </li>
            <li @click="change('solidity')" v-bind:class="{ active: page === 'solidity' }">
                solidity
            </li>
        </ul>
        <div class="main">
            <Swift v-if="page === 'swift'"></Swift>
            <Ruby v-else-if="page === 'ruby'"></Ruby>
            <Javascript v-else-if="page === 'javascript'"></Javascript>
            <Java v-else-if="page === 'java'"></Java>
            <Solidity v-else-if="page === 'solidity'"></Solidity>
        </div>
    </div>
</template>

<script>
import Swift from './Swift'
import Ruby from './Ruby'
import Javascript from './JavaScript'
import Java from './Java'
import Solidity from './Solidity'
export default {
  data () {
    return {
      page: 'swift'
    }
  },
  methods: {
    change: function (data) {
      this.page = data
    }
  },
  components: {
    Swift,
    Ruby,
    Javascript,
    Java,
    Solidity
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 780px) {
    .title{
        color: white;
        opacity: 70%;
        font-size: 70px;
        margin: 0 0 0;
        padding-top: 50px;
        opacity: 0.5;
    }
    #menu{
        width: 65%;
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
            font-size: 18px;
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
        margin: 20px auto 0;
    }
}
@media screen and (max-width: 780px) and (min-width: 481px){
    .title{
        color: white;
        opacity: 70%;
        font-size: 70px;
        margin: 0 0 0;
        padding-top: 50px;
        opacity: 0.5;
    }
    #menu{
        width: 85%;
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
        width: 65%;
        margin: 20px auto 0;
    }
}
@media screen and (max-width: 480px){
    .title{
        color: white;
        opacity: 70%;
        font-size: 70px;
        margin: 0 0 0;
        padding-top: 50px;
        opacity: 0.5;
    }
    #menu{
        width: 92%;
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
        width: 100%;
        margin: 20px auto 0;
    }
}
</style>
