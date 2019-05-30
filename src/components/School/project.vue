<template>
    <div>
        <div class="project-text">
            金沢工業大学にはプロジェクトという部活のような物があり
            私はスマートフォンアプリプロジェクトに所属しています。
            日々、勉強会やlt会などを通して知識を共有しあっています。<br>
            KanazawaCivicTechContestに毎年チームでエントリーしてアプリを開発しています。
            2018年のコンテストでは金沢21世紀美術館でカナヤドというアプリをプレゼンしてきました。
        </div>
    </div>
</template>

<script>
export default {
}
</script>
<style lang="scss">
@media screen and (min-width: 780px) {
    .project-text{
        color: white;
        font-size: 22px;
        font-weight: bold;
        margin: 0 0 0;
        text-align: left;
    }
    .project-img{
        width: 550px;
        height: 300px;
    }
}
@media screen and (max-width: 780px) and (min-width: 481px){
    .project-text{
        color: white;
        font-size: 20px;
        font-weight: bold;
        margin: 0 0 0;
        text-align: left;
    }
    .project-img{
        width: 430px;
        height: 300px;
    }
}
@media screen and (max-width: 480px){
    .project-text{
        color: white;
        font-size: 20px;
        font-weight: bold;
        margin: 0 0 0;
        text-align: left;
    }
    .project-img{
        width: 280px;
        height: 200px;
    }
}
</style>
