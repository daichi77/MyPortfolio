<template>
    <div class="parent">
        <div class="HomeTitle">
             Ishida'sPortfolio
        </div>
        <div class="container">
            <router-link to="/myapp"><div class="studyImage1"></div></router-link>
            <router-link to="/study"><div class="studyImage2"></div></router-link>
            <router-link to="/about"><div class="studyImage3"></div></router-link>
            <router-link to="/about"><div class="studyImage4"></div></router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 780px) {
@mixin Image {
    width: 120px;
    height: 120px;
    background-size:105% 105%;
    background-position: center;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    border-radius: 50%;
    border: none;
}
.HomeTitle {
    color: white;
    width: 100%;
    font-size: 100px;
    opacity: 0.5;
    padding-top: 15%;
}
.container{
    margin-top: 5%;
    width: 760px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    .studyImage1{
        @include Image();
        background-image: url("../assets/study.png");
        &:hover{
            background-image: url("../assets/studyhover.png");
        }
    }
    .studyImage2{
        @include Image();
        background-image: url("../assets/app.png");
        &:hover{
            background-image: url("../assets/apphover.png");
        }
    }
    .studyImage3{
        @include Image();
        background-image: url("../assets/profile.png");
        &:hover{
            background-image: url("../assets/profilehover.png");
        }
    }

    .studyImage4{
        @include Image();
        background-image: url("../assets/sns.png");
        &:hover{
            background-image: url("../assets/snshover.png");
        }
    }

}
}
@media screen and (max-width: 780px) {
    @mixin Image {
        width: 100px;
        height: 100px;
        background-size:105% 105%;
        background-position: center;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
        border-radius: 50%;
        border: none;
    }
    .HomeTitle {
        color: white;
        width: 100%;
        font-size: 60px;
        opacity: 0.5;
        padding-top: 20%;
    }
    .container{
        margin-top: 10%;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        .studyImage1{
            @include Image();
            background-image: url("../assets/study.png");
            &:hover{
                background-image: url("../assets/studyhover.png");
            }
        }
        .studyImage2{
            @include Image();
            background-image: url("../assets/app.png");
            &:hover{
                background-image: url("../assets/apphover.png");
            }
        }
        .studyImage3{
            @include Image();
            background-image: url("../assets/profile.png");
            &:hover{
                background-image: url("../assets/profilehover.png");
            }
        }
        .studyImage4{
            @include Image();
            background-image: url("../assets/sns.png");
            &:hover{
                background-image: url("../assets/snshover.png");
            }
        }
    }
}
@media screen and (max-width: 480px) {
    @mixin Image {
        width: 100px;
        height: 100px;
        background-size:105% 105%;
        background-position: center;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
        border-radius: 50%;
        border: none;
        margin-bottom: 20px;
    }
    .HomeTitle {
        color: white;
        width: 100%;
        font-size: 50px;
        opacity: 0.5;
        padding-top: 15%;
    }
    .container{
        margin-top: 5%;
        width: 250px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        .studyImage1{
            @include Image();
            background-image: url("../assets/study.png");
            &:active{
                background-image: url("../assets/studyhover.png");
            }
        }
        .studyImage2{
            @include Image();
            background-image: url("../assets/app.png");
            &:active{
                background-image: url("../assets/apphover.png");
            }
        }
        .studyImage3{
            @include Image();
            background-image: url("../assets/profile.png");
            &:active{
                background-image: url("../assets/profilehover.png");
            }
        }
        .studyImage4{
            @include Image();
            background-image: url("../assets/sns.png");
            &:active{
                background-image: url("../assets/snshover.png");
            }
        }
    }
}
</style>
