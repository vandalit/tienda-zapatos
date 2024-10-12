<template>
  <div>
    <h2>Nuestros Zapatos</h2>
    <div class="row">
      <div class="col-md-4" v-for="producto in productos" :key="producto.id">
        <div class="card">
          <img :src="producto.imagen" class="card-img-top" :alt="producto.nombre">
          <div class="card-body">
            <h5 class="card-title">{{ producto.nombre }}</h5>
            <p class="card-text">
              Precio: {{ producto.precio_normal }}
              <br>
              Promoción: {{ producto.precio_promo }}
            </p>
            <button @click="agregarAlCarrito(producto)" class="btn btn-primary">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from '@/services/apiService';
import { mapActions } from 'vuex';

export default {
  name: 'ZapatosView',
  data() {
    return {
      productos: []
    };
  },
  mounted() {
    apiService.getProductosData().then(response => {
      this.productos = response.data.productos;
    }).catch(error => {
    console.error('Error cargando los datos del JSON:', error);
    });
  },
  methods: {
    ...mapActions(['agregarAlCarrito'])
  }
};
</script>

<style scoped>
h2 {
  color: $primary-color;
}
.card {
  margin-bottom: 20px;
}
.card-img-top {
  height: 250px;
  object-fit: cover;
}
</style>
