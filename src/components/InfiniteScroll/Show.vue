<template>
  <div style="border-radius: 24px;" class="bg-white">
    <div class="col-12 row">
      <div class="col-12">
        <span style="font-size: 24px" class="text-grey-9">{{
          momento.nombre
        }}</span>
      </div>
      <div class="col-12">
        <span>{{ momento.edad }}</span>
      </div>
    </div>
    <div class="col-12 row justify-end">
      <q-btn icon="edit" @click="onEditarClick" class="q-mr-md" />
      <q-btn icon="delete" @click="onEliminarClick" />
    </div>
  </div>
</template>

<script setup>
import Momento from "src/Models/Momento";
import { onMounted, reactive, ref } from "vue";

const emit = defineEmits(["edit", "delete"]);

const props = defineProps({
  momento: {
    type: Momento,
    required: true,
  },
});

function onEditarClick() {
  emit("edit");
}
function onEliminarClick() {
  emit("delete");
}

onMounted(() => {
  console.log("¡Componente montado!");
});
</script>
