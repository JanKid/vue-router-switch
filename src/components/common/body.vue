<template>
	<div class="main">
		<loading v-show="isLoading"></loading>
		<transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
    	<router-view class="router-view"></router-view>
  	</transition>
	</div>
</template>
<style scoped="">
.main {
	padding-top: 0.9rem;
	padding-bottom: 1.1rem;
  background-size: 100% 100%;
  width: 100%;
  height:100%;
  position: relative;
  overflow-y: auto;
}
</style>
<script>
import { mapState } from 'vuex'
export default {
	data () {
		return {}
	},
	computed:mapState({
    direction: state => state.site.direction,
    isLoading: state => state.site.isLoading,

  })
}
</script>