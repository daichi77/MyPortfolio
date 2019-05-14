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

html{
  background:#6495ed;
  height: 100%;
}
body{
  min-height: 100%;
  margin: 0px;
  padding: 0px;
  display: block;
  background-image: url("./assets/bodyBackground.png");
}
#app {
  padding-bottom: 50px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
}
</style>
