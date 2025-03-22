<template>
  <q-page class="bg-grey-2">
    <div class="q-pa-md text-center">
      <h1 class="text-h4">Bienvenido a Momentos</h1>
      <p class="text-subtitle1">
        Esta aplicación te permite gestionar tus momentos importantes. Aquí
        probamos nuevas funcionalidades antes de pasarlas a producción.
      </p>
      <p class="text-caption">Creado con ❤️ por Giova</p>
      <div class="gear-container q-mt-md">
        <div class="gear"></div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import {
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onActivated,
  onDeactivated,
} from "vue";

const emit = defineEmits(["incrementar"]);

defineProps({
  titulo: String,
});

onBeforeMount(async () => {
  console.info("Componente a punto de montarse");
});

onMounted(() => {
  console.info("¡Componente montado!");
});

onBeforeUpdate(() => {
  console.info("Componente a punto de actualizarse");
});

onUpdated(() => {
  console.info("Componente actualizado");
});

onBeforeUnmount(() => {
  console.info("Componente a punto de destruirse");
});

onUnmounted(() => {
  console.info("Componente destruido");
});

onErrorCaptured((err, vm, info) => {
  console.error("Error capturado:", err);
});

onActivated(() => {
  console.info("Componente activado");
});

onDeactivated(() => {
  console.info("Componente desactivado");
});
</script>
