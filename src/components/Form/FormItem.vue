<template>
	<div class="maple-form-item">
		<label :for="prop">{{label}}</label>
		<slot></slot>
		<span :class="['tips', {hidden: validateStatus !== 'error'}]">{{validateMsg}}</span>
	</div>
</template>
<script>
	import schema from 'async-validator';

	export default {
		inject: ["form"], // 注入form  获取到 form 的 model 以及 rules
		props: {
			prop: {
				type: String,
				default: ''
			},
			label: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				validateStatus: '',
				validateMsg: ''
			}
		},
		created() {
			// 校测到来此 表单组件 的检测请求
			this.$on('validate', this.validate);
		},
		mounted() {
			// 挂载到form上时，派发一个添加事件
			// 如果此组件传入了 props ，则需要通知父组件 以放入检测数组
			if(this.prop) {
				this.$parent.$emit("formItemAdd", this)
			}
		},
		methods: {
			validate() {
				// 使用 async-validator 进行校验
				return new Promise((resolve) => {
					console.log('validate -- input 通知我校验数据了', this.form.model[this.prop])
					// 校验规则
					let descriptor = {
						[this.prop]: this.form.rules[this.prop]
					}

					// 校验器
					let validator = new schema(descriptor)

					// 开始校验数据
					validator.validate({[this.prop]: this.form.model[this.prop]}, (error) => {
						if(error) {
							this.validateStatus = 'error'
							this.validateMsg = error[0].message

							resolve(false)
						} else {
							this.validateStatus = ''
							this.validateMsg = ''

							resolve(true)
						}
					})
				})
			}
		},
	}
</script>
<style lang="less" scoped>
	@import "../../style/color";
	@import "../../style/size";
	.maple-form-item {
		label {
			font-size: @formitem-label;
			display: block;
			padding-bottom: 4px;
		}
		.tips {
			font-size: @fontSize-small;
			color: @color-danger;
			height: 26px;
			display: block;
			line-height: 24px;
		}
	}
</style>
