<template>
  <div
    class="row"
    @scroll="handleScroll"
    ref="scrollContainer"
    style="height: 40vh !important; overflow-y: auto"
  >
    <div class="col-12 bg-grey-2 q-pa-sm">
      <ShowPage
        v-for="momento in items"
        :key="momento.id"
        :momento="momento"
        @edit="onEditarClick(momento)"
        @delete="onEliminarClick(momento)"
        class="col-12 q-pa-md q-mb-sm"
      />
    </div>
  </div>
</template>

<script setup>
import { Loading } from "quasar";
import ShowPage from "src/components/Momentos/Show.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const emit = defineEmits(["edit", "delete", "load-more", "load-more-top"]);

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const loading = ref(false);
const scrollContainer = ref(null);
const page = ref(0);

function onEditarClick(e) {
  emit("edit", e);
}
function onEliminarClick(e) {
  emit("delete", e);
}

const loadItems = async (direction) => {
  if (direction === "bottom") {
    emit("load-more");
  } else {
    emit("load-more-top");
    setTimeout(() => {
      scrollContainer.value.scrollTop += props.items.length * 20; // Adjust scroll position
    }, 500);
  }

  Loading.show();
  setTimeout(() => {
    Loading.hide();
  }, 300);
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
