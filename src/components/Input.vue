<template>
	<div class="maple-input">
		<input :type="type" :value="value" @input="handlerInput">
	</div>
</template>
<script>
	export default {
		props: {
			type: {
				type: String,
				default: 'text'
			},
			value: {
				type: String,
				default: ''
			}
		},
		methods: {
			handlerInput(e) {
				// 通知父组件值更新
				this.$emit('input', e.target.value);
				// 通知 formItem 进行校验
				this.$parent.$emit('validate', e.target.value);
			}
		},
	}
</script>
<style lang="less" scoped>
	@import "../style/color";
	@import "../style/size";

	.maple-input input {
		display: block;
		width: 360px;
		border:  1px solid @color-border-1;
		height: @inputHeight-normal;
		line-height: @inputHeight-normal;
		padding: 0 @inputPadding;
		&:focus {
			outline: 0;
			border: 1px solid @color-primary;
			outline-offset: 0;
		}
	}
</style>
