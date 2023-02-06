<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
  <r-Button>确认</r-Button>
  <hr />
  <g-button btnType="default">提交</g-button>
  <g-button btnType="success">提交</g-button>
  <g-button btnType="warning">提交</g-button>
  <rd-avatar :padding='5' shade imgSrc="http://8.142.19.67:3000/images/cat1.jpg"/>
  <rd-avatar :padding='2' shade imgSrc="http://8.142.19.97:3000/images/cat.jpg"/>
  <rd-avatar :padding='2' shade shape="square" imgSrc="http://8.142.19.67:3000/images/cat2.jpg"/>
  <rd-avatar size="small" bg="green">Tom</rd-avatar>
  <rd-avatar bg="pink">Alen</rd-avatar>
  <rd-avatar bg="blue">Jack</rd-avatar>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
