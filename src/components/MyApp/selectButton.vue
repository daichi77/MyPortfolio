<template>
    <div class="select-button">
        <div @click="set()">{{ name }}</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: [
    'name'
  ],
  methods: {
    set: function () {
      this.$emit('call-parent')
    }
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 781px) {
  .select-button{
    color: white;
    opacity: 0.5;
    font-size: 20px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    margin-right: 10px;
    font-weight: bold;
  }
}
@media screen and (max-width: 780px) and (min-width: 481px) {
  .select-button{
    color: white;
    opacity: 0.5;
    font-size: 20px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    margin-right: 10px;
    font-weight: bold;
  }
}
@media screen and (max-width: 480px) {
  .select-button{
    color: white;
    opacity: 0.5;
    font-size: 17px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    margin-right: 10px;
    font-weight: bold;
  }
}
</style>
