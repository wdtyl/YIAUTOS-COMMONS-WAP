import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import ModelLib from '../views/ModelLib';
import pages from './pages';
import YiDrawer from '../views/YiDrawer';
import YiColorSelect from '../views/YiColorSelect'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
    ...pages.map(page => {
      return {
        path: '/' + page.route,
        name: page.component,
        component: () => import('../views/' + page.component)
      }
    })
	]
});
