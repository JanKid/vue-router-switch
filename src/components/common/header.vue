<template>
	<div class="header">
		<router-link class="fl" :to="{path:'/'}">返回</router-link>
		<span>{{ title }}</span>
		<a class="fr" href="javascript:;">菜单</a>
	</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
	data () {
		return {}
	},
	computed: {
		...mapState({ direction:state => state.site.direction }),
		headerTransition () {
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    },
    title () {
    	console.log(this.$route)
    	 return this.$route.meta.title || '首页'
    }
	}
}
</script>
<style scoped>
.header {
	width: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 100;
  line-height: 0.9rem;
  height: 0.9rem;
  padding: 0 0.1rem;
  box-sizing: border-box;
  color:#fff;
  background-color: #35495e;
	}
	.fl {
		float: left;
	}
	.fr {
		float: right;
	}
</style>