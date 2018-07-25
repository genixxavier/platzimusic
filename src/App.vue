<template>
  <div id="app">
    <img src="https://genixxavier.github.io/dist/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <select v-model="selectcontry">
      <option v-for="country in countries" :value="country.value">{{ country.name }}</option>
    </select>
    <sipiner v-show="loading"></sipiner>
    <ul>
      <artista v-for="artista in artistas" v-bind:artista="artista" v-bind:key="artista.mbid"></artista>
      <li v-for="artista in artistas">{{artista.name}}</li>
    </ul>
  </div>
</template>

<script>
import Artista from './components/Artista.vue'
import Spiner from './components/Spiner.vue'
import getartistas from './api'
export default {
  name: 'app',
  components: {
    Artista: Artista,
    sipiner : Spiner
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      artistas: [],
      countries: [
        {name: 'Argentina', value:'argentina'},
        {name: 'Colombia', value: 'colombia'},
        {name: 'España', value: 'spain'}
      ],
      selectcontry: 'argentina',
      loading: true
    }
  },
  methods:{
    refresartista(){
      const self = this
      this.loading = true
      this.artistas = []
      getartistas(this.selectcontry)
      .then(function(artistas){
        self.loading = false
        self.artistas = artistas
      })
    }
  },
  mounted(){
    this.refresartista()
  },
  watch:{
    selectcontry(){
      this.refresartista()
    }
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
