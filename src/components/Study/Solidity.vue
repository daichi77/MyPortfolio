<template>
    <div class="content">
      solidity
    </div>
</template>

<script>
export default {
  data () {
    return {
      view: true
    }
  },
  methods: {
    changeView: function (bool) {
      this.view = bool
    }
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 780px) {
  .content{
    margin: 20px 0 0;
    width: 100%;
  }
}
@media screen and (max-width: 780px) {

}
@media screen and (max-width: 480px) {
  .content{
    margin: 20px 0 0;
    width: 100%;
  }
}
</style>
