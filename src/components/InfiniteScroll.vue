<template>
  <div
    class="row"
    @scroll="handleScroll"
    ref="scrollContainer"
    style="height: 40vh !important; overflow-y: auto"
  >
    <!-- <div v-if="loading" class="q-pa-md text-grey-8" >
      Loading...
    </div> -->

    <div class="col-12 bg-grey-2 q-pa-sm">
      <div v-for="(a, i) in items" class="col-12 row">
        <ShowPage
          v-for="momento in momentos"
          :key="momento.id"
          :momento="momento"
          @edit="onEditarClick(momento)"
          @delete="onEliminarClick(momento)"
          class="col-12 q-pa-md q-mb-sm"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Momento from "src/Models/Momento";
import ShowPage from "src/components/Momentos/Show.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const emit = defineEmits(["edit", "delete"]);

const props = defineProps({
  momentos: {
    type: Array,
    required: true,
  },
});

const loading = ref(false);
const items = ref([]);
const scrollContainer = ref(null);
const page = ref(0);
const pageSize = 20;

function onEditarClick(e) {
  emit("edit", e);
}
function onEliminarClick(e) {
  emit("delete", e);
}

const loadItems = async (direction) => {
  loading.value = true;
  // Simulate an API call
  const newItems = await new Promise((resolve) => {
    setTimeout(() => {
      const newItems = Array.from(
        { length: pageSize },
        (_, i) => `Item ${page.value * pageSize + i + 1}`
      );
      resolve(newItems);
    }, 1000);
  });

  if (direction === "bottom") {
    items.value.push(...newItems);
  } else {
    items.value.unshift(...newItems);
    scrollContainer.value.scrollTop += newItems.length * 20; // Adjust scroll position
  }

  loading.value = false;
};

const handleScroll = () => {
  const { scrollTop, scrollHeight, clientHeight } = scrollContainer.value;

  if (scrollTop === 0 && !loading.value) {
    page.value++;
    loadItems("top");
  } else if (scrollTop + clientHeight >= scrollHeight && !loading.value) {
    page.value++;
    loadItems("bottom");
  }
};

onMounted(() => {
  loadItems("bottom"); // Initial load
});

onBeforeUnmount(() => {
  // Cleanup if necessary
});
</script>

<style scoped>
.loading-indicator {
  text-align: center;
  padding: 10px;
}
</style>
