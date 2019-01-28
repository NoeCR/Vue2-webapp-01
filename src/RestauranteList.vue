<template>
	<div>
		<ul id="restaurantes-list" v-if="restaurantes != null">
			<li v-for="restaurante in restaurantes">
				<strong>{{restaurante.nombre}}</strong>
				<p>
					<router-link :to="{name: 'restaurante', params: {id: restaurante.id}}">
						Ver
					</router-link>
					<router-link :to="{name: 'editar-restaurante', params: {id: restaurante.id}}">
						Editar
					</router-link>

					<span v-if="showBorrar != restaurante.id">
						<a @click="borrarRestaurante(restaurante.id)" style="cursor: pointer; color: #42b983;">Eliminar</a>
					</span>
					<span v-else>
						<p>¿Estas seguro de querer borrarlo?</p>
						<button @click="cancelarBorrado()">Cancelar</button>
						<button @click="confirmarBorrado(restaurante.id)">Borrar</button>
					</span>
				</p>
			</li>
		</ul>
		<span v-else>Cargando restaurantes ... </span>
	</div>
</template>
<style lang="scss">
	#restaurantes-list{
		padding: 5px;
		li{
			margin-top: 10px;
			width: 30%;
			height: 120px;
			border: 1px solid #ddd;
			background: #eee;
			padding: 20px;
			overflow: hidden;
			box-sizing: content-box;
		}
	}
</style>
<script>
import axios from 'axios'
export default {
  name: 'rest-list',
  mounted(){
      	this.getRestaurantes();
  },
  data () {
    return {
      texto: 'Restaurantes',
      showBorrar: null,
      restaurantes: null
    }
  },
  methods: {
  	getRestaurantes(){
  		axios.get('http://localhost/restaurantes-api.php/restaurantes')
  		.then((respuesta) => {
  			this.restaurantes = respuesta.data.data;
  		})
  		.catch(e => {
  			console.log(e);
  		});
  	},
  	borrarRestaurante(id){
  		this.showBorrar = id;
  	},
  	cancelarBorrado(){
  		this.showBorrar = null;
  	},
  	confirmarBorrado(id){
  		axios.get('http://localhost/restaurantes-api.php/delete-restaurante/' + id)
  		.then((res) => {
  			this.showBorrar = null;
  			this.getRestaurantes();
  			});
  	}
  }
};
</script>
