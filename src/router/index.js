import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import About from '@/components/About';
import Todos from '@/components/Todos';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    },
  ],
});
