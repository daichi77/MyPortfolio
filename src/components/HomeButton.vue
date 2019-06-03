<template>
    <div class="home-button">
        HOME
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@media screen and (min-width: 780px){
    .home-button{
        color: white;
        text-decoration: none;
        font-weight: bold;
        margin-left: 30px;
        height: 90px;
        width: 90px;
        border-radius: 50%;
        background:#4169e1;
        line-height: 90px;
        box-shadow: 1px 1px 2px gray;
        &:hover{
            background: #0000cd;
        }
    }
}
@media screen and (max-width: 780px) and (min-width: 481px){
    .home-button{
        text-decoration:  none;
        margin-left: 20px;
        height: 80px;
        width: 80px;
        border-radius: 50%;
        background:#4169e1;
        line-height: 80px;
        color: white;
        font-weight: bold;
        box-shadow: 1px 1px 2px gray;
        &:hover{
            background: #0000cd;
        }
    }
}
@media screen and (max-width: 480px){
    .home-button{
        text-decoration: none;
        margin-left: 5px;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        background:#4169e1;
        line-height: 60px;
        font-size: 10px;
        color: white;
        font-weight: bold;
        box-shadow: 1px 1px 2px gray;
        &:hover{
            background: #0000cd;
        }
    }
}
</style>
