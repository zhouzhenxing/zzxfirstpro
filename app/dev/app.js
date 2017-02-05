require("./page.scss");
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/index';
import List from './views/list';
Vue.use(VueRouter);
const router =new VueRouter({
	routes: [
			  { path: '/home', component: App },
			  { path: '/list', component: List }
			]
});
let mian=new Vue({
	  el: '#app',
	  router:router,
	  data: {
	    message: 'Hell 只ddd'
	  }
	});
router.push({path:'home'})