<template>
  <q-page class="bg-grey-2">
    <div class="q-pa-md text-center">
      <h1 class="text-h4">ACCIONES3</h1>
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
  ref
} from "vue";

const emit = defineEmits(["incrementar"]);

const planDeCuentas = ref({
  ingresos: {
    activos: [
      {
        id: 1,
        nombre: "Salario",
        categoria: "Trabajo",
        monto_estimado: 3000,
        monto_real: 3000,
        moneda: "USD",
        frecuencia_pago: "mensual",
        fecha_inicio: "2021-01-01",
        fecha_fin: "2024-12-31",
        estado: "activo",
        saldo_pendiente: 0,
        fuente: "Empresa XYZ",
        historial: [
          {
            id: 1,
            fecha_pago: "2021-09-01",
            descripcion: "Salario de septiembre",
            monto: 3000,
            estado_pago: "recibido",
          },
        ],
      },
    ],
    pasivos: [],
    inversiones: {
      acciones: [
        {
          nombre: "Apple Inc. (AAPL)",
          precio_actual: 175,
          estado: "activa",
          cantidad: 120,
          valor_actual: 21000,
          rendimiento_promedio: 0.12,
          ganancia_total: 2400,
          comisiones_totales: { compra: 27, venta: 0 },
          compras: [
            { id: 1, precio: 150, cantidad: 50, total: 7500, fecha: "2023-01-15", estado: "activa", ganancia: 1250, comision: 10 },
            { id: 2, precio: 160, cantidad: 30, total: 4800, fecha: "2023-03-10", estado: "activa", ganancia: 450, comision: 8 },
            { id: 3, precio: 165, cantidad: 40, total: 6600, fecha: "2023-06-25", estado: "activa", ganancia: 400, comision: 9 },
          ],
        },
      ],
      criptomonedas: [
        {
          nombre: "Bitcoin (BTC)",
          precio_actual: 42000,
          cantidad: 1.5,
          valor_actual: 63000,
          rendimiento_promedio: 0.15,
          ganancia_total: 8200,
          compras: [
            { id: 1, precio: 30000, cantidad: 1, total: 30000, fecha: "2022-05-10", estado: "activa", ganancia: 12000 },
            { id: 2, precio: 40000, cantidad: 0.5, total: 20000, fecha: "2023-08-15", estado: "activa", ganancia: 2000 },
          ],
        },
      ],
      bonos: [
        {
          nombre: "Bono del Tesoro USA",
          tasa_interes: 5,
          valor_nominal: 1000,
          cantidad: 10,
          valor_actual: 10500,
          fecha_vencimiento: "2030-12-31",
          estado: "activo",
          rendimiento_promedio: 0.05,
        },
      ],
    },
  },

  gastos_fijos: [
    {
      id: 1,
      nombre: "Alquiler",
      categoria: "Vivienda",
      monto_estimado: 200,
      monto_real: 200,
      moneda: "USD",
      frecuencia_pago: "mensual",
      fecha_inicio: "2021-09-01",
      fecha_fin: "2024-09-01",
      estado: "activo",
      historial: [
        { id: 1, fecha_pago: "2021-09-05", descripcion: "Alquiler de septiembre", monto: 200, estado_pago: "pagado" },
      ],
    },
    {
      id: 2,
      nombre: "Comida",
      categoria: "Alimentación",
      monto_estimado: 200,
      monto_real: 50,
      moneda: "USD",
      frecuencia_pago: "mensual",
      estado: "activo",
      historial: [
        { id: 1, fecha_pago: "2021-09-05", descripcion: "Supermercado", monto: 50, estado_pago: "pagado" },
      ],
    },
    {
      id: 3,
      nombre: "Seguro del auto",
      categoria: "Transporte",
      monto_estimado: 150,
      monto_real: 150,
      moneda: "USD",
      frecuencia_pago: "mensual",
      estado: "activo",
      historial: [
        { id: 1, fecha_pago: "2021-09-05", descripcion: "Seguro de septiembre", monto: 150, estado_pago: "pagado" },
      ],
    },
  ],

  deudas: [
    {
      id: 1,
      nombre: "Préstamo Banco X",
      monto_total: 5000,
      moneda: "USD",
      cuotas_totales: 24,
      cuotas_pagadas: 6,
      cuota_mensual: 250,
      interes_total: 500,
      tasa_interes_anual: 10,
      proximo_vencimiento: "2024-04-01",
      estado: "activa",
      pagos_realizados: [
        { fecha: "2023-10-01", monto: 250, estado: "pagado" },
        { fecha: "2023-11-01", monto: 250, estado: "pagado" },
      ],
      saldo_pendiente: 4000,
    },
    {
      id: 2,
      nombre: "Tarjeta de Crédito Banco Y",
      monto_total: 2000,
      moneda: "USD",
      cuotas_totales: 12,
      cuotas_pagadas: 3,
      cuota_mensual: 200,
      interes_total: 200,
      tasa_interes_anual: 10,
      proximo_vencimiento: "2024-04-01",
      estado: "activa",
      pagos_realizados: [
        { fecha: "2023-10-01", monto: 200, estado: "pagado" },
        { fecha: "2023-11-01", monto: 200, estado: "pagado" },
      ],
      saldo_pendiente: 1600,
    },
  ],

  cuentas: {
    banco_santander: { saldo: 0, moneda: "USD" },
    mercadopago: { saldo: 0, moneda: "USD" },
    paypal: { saldo: 0, moneda: "USD" },
    efectivo: { saldo: 0, moneda: "USD" },
  },
});


defineProps({
  titulo: String,
});

onBeforeMount(async () => {
  console.info("Componente a punto de montarse");
});

onMounted(() => {
  console.info("¡Componente montado!");
  console.log(planDeCuentas.value);
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
