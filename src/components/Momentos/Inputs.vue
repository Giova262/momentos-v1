<template>
  <div class="col-12 row q-pa-md q-gutter-y-sm">
    <div class="col-12">
      <q-input v-model="momento.nombre" label="Nombre" filled />
    </div>

    <div class="col-12">
      <q-input
        v-model.number="momento.edad"
        label="Edad"
        type="number"
        filled
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
import { onMounted } from "vue";

const emit = defineEmits(["add"]);

const props = defineProps({
  isEditing: {
    type: Boolean,
    required: true,
    default: false,
  },
  momento: {
    type: Momento,
    required: true,
  },
});

function onGrabarClick() {
  emit("add");
}

onMounted(() => {
  console.log("¡Componente montado!");
});
</script>
