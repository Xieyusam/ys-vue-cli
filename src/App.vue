<template>
	<div class="box">
		App221321
		<img src="../src/assets/images/logo.png" alt="" />
		<asyncComp></asyncComp>
	</div>
</template>

<script>
// import  asyncComp  from "@/components/asyncComp.vue"

export default {
	components: {
		asyncComp: () => import('./components/asyncComp.vue')
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
