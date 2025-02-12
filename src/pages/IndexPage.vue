<template>
  <q-page class="row">
    <InputsPage class="col-12" :isEditing="false" />
  </q-page>
</template>

<script setup>
import {
  ref,
  onMounted,
  computed,
  reactive,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onActivated,
  onDeactivated,
} from "vue";
import InputsPage from "src/components/Momentos/Inputs.vue";

const emit = defineEmits(["incrementar"]);

defineProps({
  titulo: String,
});

const contador = ref(0);
const mensaje = ref("Cargando...");

const usuario = reactive({
  nombre: "Carlos",
  edad: 30,
});

const variableComputed = computed(() => `Return del computed`);

const modeloDeFuncion = () => {
  return "modeloDeFuncion";
};

const emitirFuncion = () => {
  emit("incrementar");
};

onBeforeMount(() => {
  console.log("Componente a punto de montarse");
});

onMounted(() => {
  mensaje.value = "¡Componente montado!";
});

onBeforeUpdate(() => {
  console.log("Componente a punto de actualizarse");
});

onUpdated(() => {
  console.log("Componente actualizado");
});

onBeforeUnmount(() => {
  console.log("Componente a punto de destruirse");
});

onUnmounted(() => {
  console.log("Componente destruido");
});

onErrorCaptured((err, vm, info) => {
  console.error("Error capturado:", err);
  return false; // Para evitar que el error se propague
});

onActivated(() => {
  console.log("Componente activado");
});

onDeactivated(() => {
  console.log("Componente desactivado");
});
</script>
