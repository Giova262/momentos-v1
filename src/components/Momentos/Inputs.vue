<template>
  <div class="col-12 row q-pa-md">
    <div class="col-12">
      <q-input
        v-model="modelo.nombre"
        label="Nombre"
        filled
        :rules="[(val) => !!val || 'El nombre es obligatorio']"
      />
    </div>

    <div class="col-12">
      <q-input
        v-model.number="modelo.edad"
        label="Edad"
        type="number"
        filled
        :rules="[(val) => val > 0 || 'La edad debe ser mayor que 0']"
      />
    </div>

    <div class="col-12 full-height">
      <q-btn label="Enviar" type="submit" color="primary" class="q-mt-md" />
    </div>
  </div>
</template>

<script setup>
import Momento from "src/Models/Momento";
import { onMounted, reactive, ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: false,
  },

  caption: {
    type: String,
    default: "",
  },

  link: {
    type: String,
    default: "#",
  },

  icon: {
    type: String,
    default: "",
  },
});

const modelo = reactive(new Momento());

onMounted(() => {
  console.log( "¡Componente montado!");
  console.log(modelo.saludar());
});

</script>
