<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> JOSUE GIOVANNI VALDIVIA DEV </q-item-label>

        <q-item
          v-for="menu in lista_de_menues"
          :key="menu.name"
          clickable
          @click="() => $router.push(menu.route)"
        >
          <q-item-section avatar>
            <q-icon :name="menu.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label> {{ menu.name }} </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const leftDrawerOpen = ref(false);
const lista_de_menues = ref([
  {
    name: "Home",
    icon: "home",
    route: "/",
  },
  {
    name: "Scroll Infinite",
    icon: "view_list",
    route: "/infinite-scroll",
  },
  {
    name: "Momentos",
    icon: "event",
    route: "/momentos",
  },
  {
    name: "Cuentas",
    icon: "account_balance",
    route: "/cuentas",
  },
  {
    name: "Categorías",
    icon: "category",
    route: "/categorias",
  },
  {
    name: "Transacciones",
    icon: "attach_money",
    route: "/transacciones",
  },
  {
    name: "Reportes",
    icon: "insert_chart",
    route: "/reportes",
  },
  {
    name: "Configuración",
    icon: "settings",
    route: "/configuracion",
  },
]);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
