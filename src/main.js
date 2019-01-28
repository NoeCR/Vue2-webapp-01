import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Contacto from './Contacto.vue'
import Restaurantes from './RestauranteList.vue'
import RestaurantesTop from './RestauranteTop.vue'
import Restaurante from './Restaurante.vue'
import RestauranteAdd from './RestauranteAdd.vue'
import RestauranteEdit from './RestauranteEdit.vue'

Vue.use(VueRouter);

const routes = [
	{path: '/' , component: Home},
	{path: '/home' , component: Home},
	{path: '/contacto' , component: Contacto},
	{path: '/restaurantes' , component: Restaurantes},
	{path: '/restaurante-destacado/:id', name: 'restaurante-destacado', component: RestaurantesTop},
	{path: '/restaurante/:id', name: 'restaurante', component: Restaurante},
	{path: '/crear-restaurante', name: 'crear-restaurante', component: RestauranteAdd},
	{path: '/editar-restaurante/:id', name: 'editar-restaurante', component: RestauranteEdit},
	{path: '/borrar-restaurante/:id', name: 'borrar-restaurante', component: Restaurantes}
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

Vue.component('home', Home);
Vue.component('contacto', Contacto);
Vue.component('rest-list', Restaurantes);
Vue.component('rest-top', RestaurantesTop);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
