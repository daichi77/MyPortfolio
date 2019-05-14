<template>
    <div class="parent">
        <div class="HomeTitle">
             Ishida'sPortfolio
        </div>
        <div class="container">
            <router-link to="/myapp"><div class="appImage"></div></router-link>
            <div class="spaceImage"></div>
            <router-link to="/study"><div class="studyImage"></div></router-link>
            <div class="spaceImage"></div>
            <router-link to="/about"><div class="aboutImage"></div></router-link>
            <router-link to="/school"><div class="schoolImage"></div></router-link>
            <div class="spaceImage"></div>
            <router-link to="/hobby"><div class="hobbyImage"></div></router-link>
            <div class="spaceImage"></div>
            <router-link to="/sns"><div class="snsImage"></div></router-link>
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
        width: 130px;
        height: 130px;
        background-size:105% 105%;
        background-position: center;
        border-radius: 50%;
        border: none;
        margin-bottom: 40px;
        opacity: unset;
    }
    .HomeTitle {
        color: white;
        width: 100%;
        font-size: 100px;
        opacity: 0.5;
        padding-top: 5%;
    }
    .container{
        padding: 40px 20px 0 20px;
        border-radius: 20px;
        background-image: url("../assets/background.png");
        margin-top: 4%;
        width: 80%;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.2), 0 -4px 5px -2px #6d95ce inset;
        .spaceImage{
            width: 18%;
            max-width: 200px;
            height: 150px;
            border-radius: 50%;
            opacity: 0;
        }
        .studyImage{
            @include Image();
            background-image: url("../assets/study.png");
            &:hover{
                background-image: url("../assets/studyhover.png");
            }
        }
        .appImage{
            @include Image();
            background-image: url("../assets/app.png");
            &:hover{
                background-image: url("../assets/apphover.png");
            }
        }
        .aboutImage{
            @include Image();
            background-image: url("../assets/profile.png");
            &:hover{
                background-image: url("../assets/profilehover.png");
            }
        }

        .snsImage{
            @include Image();
            background-image: url("../assets/sns.png");
            &:hover{
                background-image: url("../assets/snshover.png");
            }
        }
        .schoolImage{
            @include Image();
            background-image: url("../assets/school.png");
            &:hover{
                background-image: url("../assets/schoolhover.png");
            }
        }
        .hobbyImage{
            @include Image();
            background-image: url("../assets/hobby.png");
            &:hover{
                background-image: url("../assets/hobbyhover.png");
            }
        }
    }
}
@media screen and (max-width: 780px) {
    @mixin Image {
        width: 110px;
        height: 110px;
        background-size:105% 105%;
        background-position: center;
        border-radius: 50%;
        border: none;
        margin-bottom: 40px;
        opacity: unset;
    }
    .HomeTitle {
        color: white;
        width: 100%;
        font-size: 60px;
        opacity: 0.5;
        padding-top: 20%;
    }
    .container{
        padding: 40px 20px 0 20px;
        border-radius: 20px;
        background-image: url("../assets/background.png");
        margin-top: 10%;
        width: 85%;
        max-width: 450px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        .spaceImage{
            width: 35px;
            height: 40px;
            opacity: 0;
        }
        .studyImage{
            @include Image();
            background-image: url("../assets/study.png");
            &:hover{
                background-image: url("../assets/studyhover.png");
            }
        }
        .appImage{
            @include Image();
            background-image: url("../assets/app.png");
            &:hover{
                background-image: url("../assets/apphover.png");
            }
        }
        .aboutImage{
            @include Image();
            background-image: url("../assets/profile.png");
            &:hover{
                background-image: url("../assets/profilehover.png");
            }
        }
        .snsImage{
            @include Image();
            background-image: url("../assets/sns.png");
            &:hover{
                background-image: url("../assets/snshover.png");
            }
        }
        .schoolImage{
            @include Image();
            background-image: url("../assets/school.png");
            &:hover{
                background-image: url("../assets/schoolhover.png");
            }
        }
        .hobbyImage{
            @include Image();
            background-image: url("../assets/hobby.png");
            &:hover{
                background-image: url("../assets/hobbyhover.png");
            }
        }
    }
}
@media screen and (max-width: 480px) {
    @mixin Image {
        width: 75px;
        height: 75px;
        background-size:105% 105%;
        background-position: center;
        border-radius: 50%;
        border: none;
        margin-bottom: 20px;
    }
    .HomeTitle {
        color: white;
        width: 100%;
        font-size: 35px;
        opacity: 0.5;
        padding-top: 25%;
    }
    .container {
        padding: 40px 5px 0 5px;
        border-radius: 20px;
        background-image: url("../assets/background.png");
        margin-top: 20%;
        width: 80%;
        max-width: 310px;
        min-width: 250px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        .spaceImage{
            width: 3%;
            height: 10%;
            min-width: 5px;
            min-height: 5px;
            border-radius: 50%;
            opacity: 0;
        }
        .studyImage{
        @include Image();
            background-image: url("../assets/study.png");
            &:hover{
                background-image: url("../assets/studyhover.png");
            }
        }
        .appImage{
            @include Image();
            background-image: url("../assets/app.png");
            &:hover{
                background-image: url("../assets/apphover.png");
            }
        }
        .aboutImage{
            @include Image();
            background-image: url("../assets/profile.png");
            &:hover{
                background-image: url("../assets/profilehover.png");
            }
        }
        .snsImage{
            @include Image();
            background-image: url("../assets/sns.png");
            &:hover{
                background-image: url("../assets/snshover.png");
            }
        }
        .schoolImage{
            @include Image();
            background-image: url("../assets/school.png");
            &:hover{
                background-image: url("../assets/schoolhover.png");
            }
        }
        .hobbyImage{
            @include Image();
            background-image: url("../assets/hobby.png");
            &:hover{
                background-image: url("../assets/hobbyhover.png");
            }
        }
    }
}
</style>
