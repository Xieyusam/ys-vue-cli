<template>
  <div class="child">child
    <input v-model="inputValue1" />
		<input v-model="inputValue2" />
  </div>
</template>

<script>
export default {
  data(){
		return {
			inputValue1:'',
			inputValue2:'',
		}
	}
}
</script>

<style lang="scss" scoped>
.child {
  width: 500px;
  height: 200px;
  color: #000000;
}
</style>
