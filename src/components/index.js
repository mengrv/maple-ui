import "@/assets/iconfont/iconfont.css";
import '@/style/flex.less';
import '@/style/scroll.less';
import '../util/util.js';
import Error404 from './Error-404';
import Icon from "./Icon";
import Picture from "./Picture";
import Spin from "./Spin";
import Tree from "./Tree/Tree";

const components = {Error404, Icon, Picture, Spin, Tree};

const Plugin = {};

Plugin.install = function(Vue) {
	Object.keys(components).map(key => {
		Vue.component(`maple${components[key].name}`, components[key]);
	});
};


if(typeof window !== 'undefined' && window.Vue) {
	Plugin.install(window.Vue);
}


export { Error404, Icon, Picture, Spin, Tree };
export default Plugin;
