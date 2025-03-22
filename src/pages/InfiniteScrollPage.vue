<template>
  <q-page class="bg-grey-2">
    <InfiniteScroll
      @load-more="loadMore"
      @load-more-top="loadMoreTop"
      @edit="(momento) => onEditarClick(momento)"
      @delete="(momento) => onEliminarClick(momento)"
      :items="momentos"
      :loading="loading"
      class="bg-white"
    />

    <div class="bg-grey-1">
      <InputsPage
        class="col-12"
        :isEditing="false"
        :momento="current_momento"
        @add="onGrabarClick"
      />
    </div>
  </q-page>
</template>

<script setup>
import InfiniteScroll from "src/components/InfiniteScroll/InfiniteScroll.vue";

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
import InputsPage from "src/components/InfiniteScroll/Inputs.vue";
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
  current_momento.value.reset();
  await refresh();
}

async function refresh() {
  momentos.value = [];
  const lista_completa = await MomentoDB.getAll();
  for (let i = 0; i < lista_completa.length; i++) {
    const nuevo_momento = new Momento();
    nuevo_momento.fill(lista_completa[i]);
    momentos.value.push(nuevo_momento);
  }
}

onBeforeMount(async () => {
  console.info("Componente a punto de montarse");
  await refresh();
  loadMore();
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

//-----

const loading = ref(false);

const loadMore = async () => {
  loading.value = true;

  const lista_completa = await MomentoDB.getAll();
  for (let i = 0; i < lista_completa.length; i++) {
    const nuevo_momento = new Momento();
    nuevo_momento.fill(lista_completa[i]);
    momentos.value.push(nuevo_momento);
  }

  loading.value = false;
};

const loadMoreTop = async () => {
  loading.value = true;

  const lista_completa = await MomentoDB.getAll();
  for (let i = 0; i < lista_completa.length; i++) {
    const nuevo_momento = new Momento();
    nuevo_momento.fill(lista_completa[i]);
    momentos.value.unshift(nuevo_momento);
  }
  loading.value = false;
};
</script>
