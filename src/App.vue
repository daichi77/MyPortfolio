<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
＊ {
  margin: 0px;
  padding: 0px;
}
body,html{
  height: 100%;
  width: 100%;
  margin:0px;
  padding:0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: linear-gradient(#9999ff, #99ffff);
  height: 100%;
  width: 100%;
}
</style>
