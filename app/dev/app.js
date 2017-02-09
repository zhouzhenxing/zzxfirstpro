require("./page.scss");
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/index';
import List from './views/list';
import accdisp from './views/accdisp.vue';
Vue.use(VueRouter);
const router =new VueRouter({
	routes: [
			  { path: '/home', component: App },
			  { path: '/accdisp', component: accdisp },
			  { path: '/list', component: List }
			]
});
let mian=new Vue({
	  el: '#app',
	  router:router
	});
router.push({path:'home'})