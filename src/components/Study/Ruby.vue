<template>
    <div class="study-content">
      <div class="study-span">
        勉強期間<br>
        <span>6ヶ月</span>
      </div>
      <div class="done">
        <div class="sub-title">やってきたこと</div>
        <a href="https://prog-8.com/">progate(ruby,railsコース)<br></a>
        <a href="https://railstutorial.jp/">railstutorial<br></a>
        <a href="https://leanpub.com/everydayrailsrspec-jp">Everyday Rails - RSpec<br></a>
        <router-link to="/myapp">成果物作成(chatApp)<br></router-link>
      </div>
      <img src="../../assets/studyRails.png" class="study-image">
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
</style>
