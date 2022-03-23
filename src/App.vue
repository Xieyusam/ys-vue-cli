<template>
	<div class="box">
		App
		<img src="../src/assets/images/logo.png" alt="" />
		<input v-model="inputValue1" />
		<input v-model="inputValue2" />
		<input v-model="inputValue3" />
		<input v-model="inputValue4" />
		<input v-model="inputValue5" />
		<asyncComp></asyncComp>

	</div>
</template>

<script>
// import  asyncComp  from "@/components/asyncComp.vue"

export default {
	components: {
		asyncComp: () => import('./components/asyncComp.vue')
	},
	data(){
		return {
			inputValue1:'',
			inputValue2:'',
			inputValue3:'',
			inputValue4:'',
			inputValue5:'',
		}
	}
};
</script>

<style lang="scss" scoped>
.box {
	width: 500px;
	height: 200px;
	color: #000000;
}
</style>
