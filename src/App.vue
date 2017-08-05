<template>
    <div id="app" :class="appClass">  
      <common-header></common-header>
      <common-body></common-body>
      <common-footer></common-footer>
  </div>
</template>
<script>

export default {
  name: 'app',
  data () {
    return {
      appClass: ''
    }
  },
}
</script>
<style lang="scss">
@import "./styles/reset.scss";
</style>>
<style>
body, html {
      height: 100%;
    width: 100%;
    overflow-x: hidden;
}
body *,body *:before,body *:after{
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: relative;
  font-size: .32rem;
}
.router-view {
  top:0.9rem;
  width: 100%;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 300ms;
  height: 100%;
  top:0.9rem;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
