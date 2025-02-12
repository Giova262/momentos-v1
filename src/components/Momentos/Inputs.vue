<template>
  <div class="col-12 row q-pa-md">
    <div class="col-12">
      <q-input
        v-model="momento.nombre"
        label="Nombre"
        filled
        :rules="[(val) => !!val || 'El nombre es obligatorio']"
      />
    </div>

    <div class="col-12">
      <q-input
        v-model.number="momento.edad"
        label="Edad"
        type="number"
        filled
        :rules="[(val) => val > 0 || 'La edad debe ser mayor que 0']"
      />
    </div>

    <div class="col-12 full-height">
      <q-btn
        label="GRABAR"
        @click="onGrabarClick"
        color="primary"
        class="q-mt-md"
      />
    </div>
  </div>
</template>

<script setup>
import Momento from "src/Models/Momento";
import { onMounted, reactive, ref } from "vue";

const props = defineProps({
  isEditing: {
    type: Boolean,
    required: true,
    default: false,
  },
  currentItem: {
    type: Object,
    required: false,
  },
});

const momento = reactive(new Momento());

function onGrabarClick() {
  momento.save();
}

onMounted(() => {
  console.log("¡Componente montado!");
});
</script>
