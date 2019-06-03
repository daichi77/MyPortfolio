<template>
    <div class="parent">
      <router-link to="/"><HomeButton></HomeButton></router-link>
      <div class="school">
          学校:金沢工業大学<br>
          学科:メディア情報学科
      </div>
      <ul id="school-menu">
          <li @click="change('Class')" v-bind:class="{ active: page === 'Class' }">
              授業
          </li>
          <li @click="change('Project')" v-bind:class="{ active: page === 'Project' }">
              project
          </li>
      </ul>
      <div class="main">
        <Class v-if="page === 'Class'"></Class>
        <Project v-else-if="page === 'Project'"></Project>
      </div>
    </div>
</template>

<script>
import Class from './Class'
import Project from './Project'
import HomeButton from '../HomeButton'
export default {
  data () {
    return {
      page: 'Class'
    }
  },
  methods: {
    change: function (data) {
      this.page = data
    }
  },
  components: {
    Class,
    Project,
    HomeButton
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 780px) {
  .parent{
    padding-top: 20px;
    a{
        text-decoration: none;
    }
    .school{
      color: white;
      font-size: 40px;
      margin: 0 0 0;
    }
    #school-menu{
      width: 60%;
      min-width: 550px;
      height: 40px;
      margin:20px auto 0;
      background:#3366ff;
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
        font-size: 20px;
        width: 40%;
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
        opacity: 1.0;
      }
    }
    .main{
      width: 65%;
      min-width: 550px;
      margin: 20px auto 0;
    }
  }
}
@media screen and (max-width: 780px) and (min-width: 481px){
  .parent{
    padding-top: 20px;
    a{
        text-decoration: none;
    }
    .school{
      color: white;
      font-size: 30px;
      margin: 0 0 0;
    }
    #school-menu{
      width: 90%;
      height: 40px;
      margin:20px auto 0;
      background:#3366ff;
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
        font-size: 20px;
        width: 40%;
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
        opacity: 1.0;
      }
    }
    .main{
      width: 90%;
      margin: 20px auto 0;
    }
  }
}
@media screen and (max-width: 480px){
  .parent{
    padding-top: 10px;
    a{
        text-decoration: none;
    }
    .school{
      color: white;
      font-size: 20px;
      margin: 0 0 0;
    }
    #school-menu{
      width: 95%;
      height: 40px;
      margin:10px auto 0;
      background:#3366ff;
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
        font-size: 20px;
        width: 40%;
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
        opacity: 1.0;
      }
    }
    .main{
      width: 97%;
      margin: 20px auto 0;
    }
  }
}
</style>
