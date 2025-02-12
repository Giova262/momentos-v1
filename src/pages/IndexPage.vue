<template>
  <q-page class="">
    <div class="bg-grey-9 q-pa-sm">
      <ShowPage
        v-for="momento in momentos"
        :key="momento.id"
        class="q-ma-md q-pa-md bg-white"
        :momento="momento"
        @edit="onEditarClick(momento)"
        @delete="onEliminarClick(momento)"
      />
    </div>
    <InputsPage
      class="col-12"
      :isEditing="false"
      :momento="current_momento"
      @add="onGrabarClick"
    />
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
import ShowPage from "src/components/Momentos/Show.vue";
import MomentoDB from "src/DataBase/MomentoDB";
import Momento from "src/Models/Momento";

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
const momentos = ref([]);
const current_momento = ref(new Momento());

const variableComputed = computed(() => `Return del computed`);

const modeloDeFuncion = () => {
  return "modeloDeFuncion";
};

const emitirFuncion = () => {
  emit("incrementar");
};

function onEditarClick(momento) {
  console.log("Editar", momento);
}

async function onEliminarClick(momento) {
  console.log("Eliminar", momento);
  await momento.destroy();
  refresh();
}

async function onGrabarClick() {
  current_momento.value.save();
  await refresh();
}

async function refresh() {
  momentos.value = [];
  const momento2 = await MomentoDB.getAll();
  for (let i = 0; i < momento2.length; i++) {
    const a = new Momento();
    a.fill(momento2[i]);
    momentos.value.push(a);
    console.log("momento agregado");
  }
  console.log("fin de llenar momentos");
  console.log("momentos.value");
  console.log(momentos.value);
}

onBeforeMount(async () => {
  console.info("Componente a punto de montarse");
  await refresh();
});

onMounted(() => {
  mensaje.value = "¡Componente montado!";
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
  return false; // Para evitar que el error se propague
});

onActivated(() => {
  console.info("Componente activado");
});

onDeactivated(() => {
  console.info("Componente desactivado");
});
</script>
