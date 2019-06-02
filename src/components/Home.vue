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
@media screen and (min-width: 781px) {
    @mixin Image {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        border: none;
        margin-bottom: 40px;
        opacity: unset;
        background-image: url(../assets/largeIcon.png);
        background-repeat: no-repeat;
        display: block;
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
            background-position: -5px -285px;
            &:hover{
                background-position: -145px -285px;
            }
        }
        .appImage{
            @include Image();
            background-position: -425px -145px;
            &:hover{
                background-position: -425px -285px;
            }
        }
        .aboutImage{
            @include Image();
            background-position: -5px -5px;
            &:hover{
                background-position: -145px -5px;
            }
        }

        .snsImage{
            @include Image();
            background-position: -145px -145px;
            &:hover{
                background-position: -285px -145px;
            }
        }
        .schoolImage{
            @include Image();
            background-position: -285px -5px;
            &:hover{
                background-position: -5px -145px;
            }
        }
        .hobbyImage{
            @include Image();
            background-position: -285px -285px;
            &:hover{
                background-position: -425px -5px;
            }
        }
    }
}
@media screen and (max-width: 780px) and (min-width: 481px) {
    @mixin Image {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        border: none;
        margin-bottom: 40px;
        background-image: url("../assets/mediumIcon.png");
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
            background-position: -5px -245px;
            &:hover{
                background-position: -125px -245px;
            }
        }
        .appImage{
            @include Image();
            background-position: -365px -125px;
            &:hover{
                background-position: -365px -245px;
            }
        }
        .aboutImage{
            @include Image();
            background-position: -5px -5px;
            &:hover{
                background-position: -125px -5px;
            }
        }
        .snsImage{
            @include Image();
            background-position: -125px -125px;
            &:hover{
                background-position: -245px -125px;
            }
        }
        .schoolImage{
            @include Image();
            background-position: -245px -5px;
            &:hover{
                background-position: -5px -125px;
            }
        }
        .hobbyImage{
            @include Image();
            background-position: -245px -245px;
            &:hover{
                background-position: -365px -5px;
            }
        }
    }
}
@media screen and (max-width: 480px) {
    @mixin Image {
        width: 75px;
        height: 75px;
        background-image: url("../assets/smallIcon.png");
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
            background-position: -5px -175px;
            &:hover{
                background-position: -90px -175px;
            }
        }
        .appImage{
            @include Image();
            background-position: -260px -90px;
            &:hover{
                background-position: -260px -175px;
            }
        }
        .aboutImage{
            @include Image();
            background-position: -5px -5px;
            &:hover{
                background-position: -90px -5px;
            }
        }
        .snsImage{
            @include Image();
            background-position: -90px -90px;
            &:hover{
                background-position: -175px -90px;
            }
        }
        .schoolImage{
            @include Image();
            background-position: -175px -5px;
            &:hover{
                background-position: -5px -90px;
            }
        }
        .hobbyImage{
            @include Image();
            background-position: -175px -175px;
            &:hover{
                background-position: -260px -5px;
            }
        }
    }
}
</style>
