<template>
	<div>
		<ul>
			<li>
				<h1>Image</h1>
				<Picture src="logo" @click="test"/>
			</li>
			<li>
				<h1>Spin</h1>
				<Spin :loading="loading"></Spin>
				<button @click="showLoading">show loading</button>
			</li>
			<li>
				<h1>Error Page</h1>
				<Error404/>
			</li>
			<li>
				<h1>Icon</h1>
				<Icon type="html-line"></Icon>
				<Icon type="code-line"></Icon>
				<Icon type="heart-fill" style="color: red"></Icon>
			</li>
			<li>
				<h1>Tree</h1>
				<Tree :data="myData"></Tree>
			</li>
			<li>
				<h1>Form</h1>
				<Form :model='ruleForm' :rules='rules' ref='loginForm'>
					<FormItem label='用户名' prop='name'>
						<Input  v-model="ruleForm.name" type="text"/>
					</FormItem>
					<FormItem label='密码' prop='pwd'>
						<Input v-model="ruleForm.pwd" type="password"/>
					</FormItem>
					<FormItem>
						<button @click='submitForm'>signIn</button>
					</FormItem>
				</Form>
			</li>
		</ul>
	</div>
</template>

<script>
	import Picture from "@/components/Picture";
	import logo from "@/assets/logo.png";
	import Spin from "@/components/Spin";
	import Error404 from "@/components/Error-404";
	import Icon from "@/components/Icon";
	import Tree from "@/components/Tree/Tree";
	import FormItem from "@/components/Form/FormItem";
	import Form from "@/components/Form/Form";
	import Input from "@/components/Input";


	const myData = [
		{
			'name': '技术',
			'children': [{
				'name': 'web前端',
				'children': [{
					'name': 'CSS'
				}, {
					'name': 'JavaScript'
				}, {
					'name': 'Vue'
				}, {
					'name': '小程序'
				}, {
					'name': 'Three.js'
				}]
			}, {
				'name': '服务器'
			}, {
				'name': '工具类'
			}]
		}, {
			'name': '今日头条',
			'children': [{
				'name': '图片'
			}, {
				'name': '新闻',
				'children': []
			}]
		}
	];

	export default {
		name: 'home',
		data() {
			return {
				logo,
				loading: false,
				flex: true,
				myData,
				ruleForm: {
					name: "",
					pwd: ""
				},
				rules: {
					name: [
						{ required: true, message: "请输入名称" },
						{ min: 6, max: 10, message: "请输入6~10位用户名" }
					],
					pwd: [{ required: true, message: "请输入密码" }]
				}
			}
		},
		methods: {
			test() {
				console.log('img click');
			},
			showLoading() {
				this.loading = true;
				setTimeout(() => this.loading = false, 3000);
			},
			submitForm() {
				// 调用组件的validate方法获取验证结果
				this.$refs.loginForm.validate(valid => {
					if (valid) {
						alert("提交登录！")
					} else {
						console.log("校验失败")
						return false
					}
				})
			}
		},
		components: {
			FormItem,
			Icon,
			Error404,
			Spin,
			Picture,
			Tree,
			Form,
			Input
		}
	}
</script>

<style lang="less" scoped>
	.flex-box {
		height: 50px;
		width: 100px;
		text-align: center;

		&.flex-box-1 {
			background-color: gray;
		}

		&.flex-box-2 {
			background-color: antiquewhite;
			height: 80px;
		}

		&.flex-box-3 {
			background-color: aqua;
		}
	}
</style>

