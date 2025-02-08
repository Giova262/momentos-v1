<template>
  <q-page class="flex flex-center">
    <div class="col-12 row">
      <span>modeloDeFuncion: {{ modeloDeFuncion() }}</span>
      <span>variableComputed: {{ variableComputed }}</span>
      <span>contador: {{ contador }}</span>
    </div>
    <!-- <img
        alt="Quasar logo"
        src="~assets/quasar-logo-vertical.svg"
        style="width: 200px; height: 200px"
      > -->

    <div class="col-12 row">
      <div class="q-pa-md q-gutter-sm">
        <q-btn color="white" text-color="black" label="Standard" />
        <q-btn color="primary" label="Primary" />
        <q-btn color="secondary" label="Secondary" />
        <q-btn color="amber" glossy label="Amber" />
        <q-btn color="brown-5" label="Brown 5" />
        <q-btn color="deep-orange" glossy label="Deep Orange" />
        <q-btn color="purple" label="Purple" />
        <q-btn color="black" label="Black" />
      </div>
    </div>
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
import { agregarMomento } from "src/Servicios/archivosService";

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
