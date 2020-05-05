<template>
  <div class="home">
    <div class="header">
      <span class="title">{{title}}</span>
      <Nav/>
    </div>
    <div class="body">
      <div class="content"></div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import Nav from './navigator.vue'

  @Component({
    components: {
      Nav
    }
  })
  export default class Home extends Vue {
    title= 'website'
  }
</script>
