<template>
	<h2>{{texto}} : {{id_restaurante}}</h2>
</template>
<script>
export default {
  name: 'rest-top',
  mounted(){
  	this.id_restaurante = this.$route.params.id;
  },
  data () {
    return {
      texto: 'Restaurante destacado',
      id_restaurante: null
    }
  }
}
</script>