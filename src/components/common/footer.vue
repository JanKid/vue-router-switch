<template>
	<div class="footer">
	 	<router-link :to="{ path:'/page1' }">page1</router-link>
    <router-link :to="{ path:'/page2' }">page2</router-link>
    <router-link :to="{ path:'/page3' }">page3</router-link>
	</div>
</template>
<style scoped>
.footer {
	display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  position: absolute;
  z-index: 500;
  bottom: 0;
  width: 100%;
  height: 1.1rem;
  background-color: #f7f7fa;
}
.footer a {
	    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding: 0.3rem 0 0;
    color: #999;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
</style>