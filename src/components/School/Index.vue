<template>
    <div>
        <div class="title">
            School
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      page: 'chatApp'
    }
  },
  methods: {
    change: function (data) {
      this.page = data
    }
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
}
</style>
