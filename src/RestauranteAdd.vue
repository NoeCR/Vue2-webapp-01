<template>
	<div id="container restaurante-add" style="width: 50%; margin: 0px auto">		
		<div class="row">
   			<div class="col-lg-6 mx-auto">
   				<h4>Crear nuevo restaurante</h4>
				<form @submit.prevent="guardarRestaurante()">
					<div class="form-group">
						<label>Nombre</label>
						<input type="text" class="form-control" v-model="restaurante.nombre">
					</div>
					<div class="form-group">
						<label>Dirección</label>
						<input type="text" class="form-control" v-model="restaurante.direccion">
					</div>
					<div class="form-group">
						<label>Descripción</label>
						<textarea class="form-control" v-model="restaurante.descripcion"></textarea> 
					</div>
					<div class="form-group">
						<label>Precio</label>
						<select class="form-control" v-model="restaurante.precio">
							<option value="0">Selecciona el precio</option>
							<option value="10">10</option>
							<option value="20">20</option>
							<option value="30">30</option>
							<option value="40">40</option>
						</select>
					</div>
					<input type="submit" value="Guardar">
				</form>
			</div>
		</div>	
	</div>
</template>


<script>
import axios from 'axios';
export default {
	name: 'restaurante-add',
	mounted(){

	},
	data(){
		return {
			restaurante: {
				nombre: '',
				direccion: '',
				descripcion: '',
				imagen: null,
				precio: '0',
			}
		}
	},
	methods: {
		guardarRestaurante(){
			var router = this.$router;
			var params = "json="+JSON.stringify(this.restaurante);
			axios.post('http://localhost/restaurantes-api.php/restaurantes', params)
			.then((res) => {
				if(res.data.status == 'success'){
					router.push('/restaurantes');
				}
			})
			.catch((err) => {
				console.log(err);
			});
		}
	}
};

</script>