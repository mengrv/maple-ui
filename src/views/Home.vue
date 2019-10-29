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
				myData
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
		},
		components: {
			Icon,
			Error404,
			Spin,
			Picture,
			Tree
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

