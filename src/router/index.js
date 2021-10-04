
import Vue from "vue";
import Router from "vue-router";

import home from "@/views/Home"
import watch from "@/views/Watch"
Vue.use(Router);

export default new Router({
    mode: 'history',
	routes:[ 
		{path: "/",name:"home",component: home},
		{path: "/watch",name:"watch",component: watch, props:true},
	]
})