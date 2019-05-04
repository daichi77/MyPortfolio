<template>
    <div class="content">
        <div class="flex-button">
            <selectButton v-on:call-parent="changeView(true)" name="概要" v-bind:class="{ active: view }"></selectButton>
            <selectButton v-on:call-parent="changeView(false)" name="プレビュー" v-bind:class="{ active: !view }"></selectButton>
        </div>
        <div id ="overview" v-if="view">
            かなっこ１
        </div>
        <div id ="preview" v-if="!view">
            かなっこ２
        </div>
    </div>
</template>

<script>
import selectButton from './selectButton'
export default {
  name: 'kanayado',
  data () {
    return {
      view: true
    }
  },
  methods: {
    changeView: function (bool) {
      this.view = bool
    }
  },
  components: {
    selectButton
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 780px) {
    .content{
        margin: 20px 0 0;
        width: 100%;
    }
    .flex-button{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: left;
    }
    .select-button.active{
        opacity: 1;
        color: white;
        border-bottom: 5px solid white;
        font-size: 20px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        margin-right: 10px;
        font-weight: bold;
    }
}
@media screen and (max-width: 780px) {

}
@media screen and (max-width: 480px) {
  .content{
        margin: 20px 0 0;
        width: 100%;
    }
    .flex-button{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: left;
    }
    .select-button.active{
        opacity: 1;
        color: white;
        border-bottom: 5px solid white;
        font-size: 12px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        margin-right: 5px;
        font-weight: bold;
    }
}
</style>
