<template>
    <div>
        <div class="class-text">
            授業ではプログラミングやCGなど様々なことを学んでいます。
            特に力を入れている授業はプロジェクトデザインという授業です。
            この授業では地域課題を見つけ、それに対する解決案を話し合って、形にしていきます。
            私のチームでは金沢工大がある野々市市の公園を広めることを目的にして
            野々市市の公園サイトを作りました。<br>
            野々市市市役所に作ったサイトをプレゼンをしに行って職員の方から高評価をもらうことができました。
            残念ながらリリースまではいきませんでした。
            使用技術はnode.js+express+mysplです。
        </div>
        <div class="img-title">
            授業で作ったwebサイトの写真
        </div>
        <img src="../../assets/class1.png" class="class-img">
        <img src="../../assets/class2.png" class="class-img">
        <img src="../../assets/class3.png" class="class-img">
    </div>
</template>

<script>
export default {
}
</script>
<style lang="scss">
@media screen and (min-width: 780px) {
    .class-text{
        color: white;
        font-size: 22px;
        font-weight: bold;
        margin: 0 0 0;
        text-align: left;
    }
    .img-title{
        color:orange;
        font-size: 25px;
        font-weight: bold;
    }
    .class-img{
        width: 550px;
        height: 300px;
    }
}
@media screen and (max-width: 780px) and (min-width: 481px){
    .class-text{
        color: white;
        font-size: 20px;
        font-weight: bold;
        margin: 0 0 0;
        text-align: left;
    }
    .img-title{
        color:orange;
        font-size: 25px;
        font-weight: bold;
    }
    .class-img{
        width: 430px;
        height: 300px;
    }
}
@media screen and (max-width: 480px){
    .class-text{
        color: white;
        font-size: 20px;
        font-weight: bold;
        margin: 0 0 0;
        text-align: left;
    }
    .img-title{
        color:orange;
        font-size: 23px;
        font-weight: bold;
    }
    .class-img{
        width: 280px;
        height: 200px;
    }
}
</style>
