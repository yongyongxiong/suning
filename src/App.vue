<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  // import userList from './components/userList'
  export default {
    // name: 'App',
    // components: {
    //   userList
    // }
  }
</script>

<style scoped>
  @charset "utf-8";
  /* CSS Document */
  body, div, p, ul, ol, li, dl, dt, dd, table, tr, td, th, form, h1,h2,p, h3, h4, h5, h6, input, label,textarea {
    margin: 0;
    padding: 0;
  }
  body{
    font-family:"微软雅黑",Arial;
  }
  a{
    text-decoration:none;
    cursor: pointer;
  }
  ol,ul{
    list-style: none;
  }
  img{
    border: 0;
  }
</style>
