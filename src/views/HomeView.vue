<template>
  <div>
    <h1>Bienvenidos a la Tienda de Zapatos</h1>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner" v-if="zapatos.length">
        <div
          class="carousel-item"
          v-for="(zapato, index) in zapatos"
          :class="{ active: index === 0 }"
          :key="zapato.titulo"
        >
          <img :src="zapato.imagen" class="d-block w-100" :alt="zapato.titulo">
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ zapato.titulo }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from '@/services/apiService';

export default {
  name: 'HomeView',
  data() {
    return {
      zapatos: []
    };
  },
  mounted() {
    apiService.getHomeData().then(response => {
      this.zapatos = response.data.mejoreszapatos;
    }).catch(error => {
      console.error('Error cargando los datos del JSON:', error);
    });
  }
};
</script>
