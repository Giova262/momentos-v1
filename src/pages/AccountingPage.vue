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
  ref,
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
        moneda: "ARS",
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
          nombre: "Apple Inc. (CEDEAR)",
          simbolo: "AAPL",
          precio_actual: 175,
          cantidad: 120,
          valor_actual: 21000,
          rendimiento_promedio: 0.12,
          ganancia_total: 2400,
          comisiones_totales: { compra: 27, venta: 0 },
          compras: [
            {
              id: 1,
              precio: 150,
              cantidad: 50,
              total: 7500,
              fecha: "2023-01-15",
              estado: "activa",
              ganancia: 1250,
              comision: 10,
            },
            {
              id: 2,
              precio: 160,
              cantidad: 30,
              total: 4800,
              fecha: "2023-03-10",
              estado: "activa",
              ganancia: 450,
              comision: 8,
            },
            {
              id: 3,
              precio: 165,
              cantidad: 40,
              total: 6600,
              fecha: "2023-06-25",
              estado: "activa",
              ganancia: 400,
              comision: 9,
            },
          ],
        },
        {
          nombre: "J.P. Morgan & Chase Co. (CEDEAR)",
          simbolo: "JPM",
          precio_actual: 140,
          cantidad: 50,
          valor_actual: 7000,
          rendimiento_promedio: 0.12,
          ganancia_total: 2400,
          comisiones_totales: { compra: 27, venta: 0 },
          compras: [
            {
              id: 1,
              precio: 150,
              cantidad: 50,
              total: 7500,
              fecha: "2023-01-15",
              estado: "activa",
              ganancia: 1250,
              comision: 10,
            },
            {
              id: 2,
              precio: 160,
              cantidad: 30,
              total: 4800,
              fecha: "2023-03-10",
              estado: "activa",
              ganancia: 450,
              comision: 8,
            },
            {
              id: 3,
              precio: 165,
              cantidad: 40,
              total: 6600,
              fecha: "2023-06-25",
              estado: "activa",
              ganancia: 400,
              comision: 9,
            },
          ],
        },
        {
          nombre: "Microsoft Corp. (CEDEAR)",
          simbolo: "MSFT",
          precio_actual: 310,
          cantidad: 30,
          valor_actual: 9300,
          rendimiento_promedio: 0.12,
          ganancia_total: 2400,
          comisiones_totales: { compra: 27, venta: 0 },
          compras: [
            {
              id: 1,
              precio: 150,
              cantidad: 50,
              total: 7500,
              fecha: "2023-01-15",
              estado: "activa",
              ganancia: 1250,
              comision: 10,
            },
            {
              id: 2,
              precio: 160,
              cantidad: 30,
              total: 4800,
              fecha: "2023-03-10",
              estado: "activa",
              ganancia: 450,
              comision: 8,
            },
            {
              id: 3,
              precio: 165,
              cantidad: 40,
              total: 6600,
              fecha: "2023-06-25",
              estado: "activa",
              ganancia: 400,
              comision: 9,
            },
          ],
        },
        {
          nombre: "Qualcomm Inc. (CEDEAR)",
          simbolo: "QCOM",
          precio_actual: 120,
          cantidad: 40,
          valor_actual: 4800,
          rendimiento_promedio: 0.12,
          ganancia_total: 2400,
          comisiones_totales: { compra: 27, venta: 0 },
          compras: [
            {
              id: 1,
              precio: 150,
              cantidad: 50,
              total: 7500,
              fecha: "2023-01-15",
              estado: "activa",
              ganancia: 1250,
              comision: 10,
            },
            {
              id: 2,
              precio: 160,
              cantidad: 30,
              total: 4800,
              fecha: "2023-03-10",
              estado: "activa",
              ganancia: 450,
              comision: 8,
            },
            {
              id: 3,
              precio: 165,
              cantidad: 40,
              total: 6600,
              fecha: "2023-06-25",
              estado: "activa",
              ganancia: 400,
              comision: 9,
            },
          ],
        },
        {
          nombre: "NVIDIA Corporation (CEDEAR)",
          simbolo: "NVDA",
          precio_actual: 450,
          cantidad: 20,
          valor_actual: 9000,
          rendimiento_promedio: 0.12,
          ganancia_total: 2400,
          comisiones_totales: { compra: 27, venta: 0 },
          compras: [
            {
              id: 1,
              precio: 150,
              cantidad: 50,
              total: 7500,
              fecha: "2023-01-15",
              estado: "activa",
              ganancia: 1250,
              comision: 10,
            },
            {
              id: 2,
              precio: 160,
              cantidad: 30,
              total: 4800,
              fecha: "2023-03-10",
              estado: "activa",
              ganancia: 450,
              comision: 8,
            },
            {
              id: 3,
              precio: 165,
              cantidad: 40,
              total: 6600,
              fecha: "2023-06-25",
              estado: "activa",
              ganancia: 400,
              comision: 9,
            },
          ],
        },
        {
          nombre: "ETF SPDR S&P 500 (CEDEAR)",
          simbolo: "SPY",
          precio_actual: 400,
          cantidad: 15,
          valor_actual: 6000,
          rendimiento_promedio: 0.12,
          ganancia_total: 2400,
          comisiones_totales: { compra: 27, venta: 0 },
          compras: [
            {
              id: 1,
              precio: 150,
              cantidad: 50,
              total: 7500,
              fecha: "2023-01-15",
              estado: "activa",
              ganancia: 1250,
              comision: 10,
            },
            {
              id: 2,
              precio: 160,
              cantidad: 30,
              total: 4800,
              fecha: "2023-03-10",
              estado: "activa",
              ganancia: 450,
              comision: 8,
            },
            {
              id: 3,
              precio: 165,
              cantidad: 40,
              total: 6600,
              fecha: "2023-06-25",
              estado: "activa",
              ganancia: 400,
              comision: 9,
            },
          ],
        },
        {
          nombre: "Intel Corporation (CEDEAR)",
          simbolo: "INTC",
          precio_actual: 35,
          cantidad: 100,
          valor_actual: 3500,
          rendimiento_promedio: 0.12,
          ganancia_total: 2400,
          comisiones_totales: { compra: 27, venta: 0 },
          compras: [
            {
              id: 1,
              precio: 150,
              cantidad: 50,
              total: 7500,
              fecha: "2023-01-15",
              estado: "activa",
              ganancia: 1250,
              comision: 10,
            },
            {
              id: 2,
              precio: 160,
              cantidad: 30,
              total: 4800,
              fecha: "2023-03-10",
              estado: "activa",
              ganancia: 450,
              comision: 8,
            },
            {
              id: 3,
              precio: 165,
              cantidad: 40,
              total: 6600,
              fecha: "2023-06-25",
              estado: "activa",
              ganancia: 400,
              comision: 9,
            },
          ],
        },
        {
          nombre: "American Express Co. (CEDEAR)",
          simbolo: "AXP",
          precio_actual: 160,
          cantidad: 25,
          valor_actual: 4000,
          rendimiento_promedio: 0.12,
          ganancia_total: 2400,
          comisiones_totales: { compra: 27, venta: 0 },
          compras: [
            {
              id: 1,
              precio: 150,
              cantidad: 50,
              total: 7500,
              fecha: "2023-01-15",
              estado: "activa",
              ganancia: 1250,
              comision: 10,
            },
            {
              id: 2,
              precio: 160,
              cantidad: 30,
              total: 4800,
              fecha: "2023-03-10",
              estado: "activa",
              ganancia: 450,
              comision: 8,
            },
            {
              id: 3,
              precio: 165,
              cantidad: 40,
              total: 6600,
              fecha: "2023-06-25",
              estado: "activa",
              ganancia: 400,
              comision: 9,
            },
          ],
        },
      ],
      criptomonedas: [
        {
          nombre: "Bitcoin",
          simbolo: "BTC",
          precio_actual: 42000,
          cantidad: 1.5,
          valor_actual: 63000,
          rendimiento_promedio: 0.15,
          ganancia_total: 8200,
          compras: [
            {
              id: 1,
              precio: 30000,
              cantidad: 1,
              total: 30000,
              fecha: "2022-05-10",
              estado: "activa",
              ganancia: 12000,
            },
            {
              id: 2,
              precio: 40000,
              cantidad: 0.5,
              total: 20000,
              fecha: "2023-08-15",
              estado: "activa",
              ganancia: 2000,
            },
          ],
        },
        {
          nombre: "USD Coin",
          simbolo: "USDC",
          precio_actual: 42000,
          cantidad: 1.5,
          valor_actual: 63000,
          rendimiento_promedio: 0.15,
          ganancia_total: 8200,
          compras: [
            {
              id: 1,
              precio: 30000,
              cantidad: 1,
              total: 30000,
              fecha: "2022-05-10",
              estado: "activa",
              ganancia: 12000,
            },
            {
              id: 2,
              precio: 40000,
              cantidad: 0.5,
              total: 20000,
              fecha: "2023-08-15",
              estado: "activa",
              ganancia: 2000,
            },
          ],
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
      moneda: "ARS",
      frecuencia_pago: "mensual",
      fecha_inicio: "2021-09-01",
      fecha_fin: "2024-09-01",
      estado: "activo",
      historial: [
        {
          id: 1,
          fecha_pago: "2021-09-05",
          descripcion: "Alquiler de septiembre",
          monto: 200,
          estado_pago: "pagado",
        },
      ],
    },
    {
      id: 2,
      nombre: "Comida",
      categoria: "Alimentación",
      monto_estimado: 200,
      monto_real: 50,
      moneda: "ARS",
      frecuencia_pago: "mensual",
      estado: "activo",
      historial: [
        {
          id: 1,
          fecha_pago: "2021-09-05",
          descripcion: "Supermercado",
          monto: 50,
          estado_pago: "pagado",
        },
      ],
    },
    {
      id: 3,
      nombre: "Seguro del auto",
      categoria: "Transporte",
      monto_estimado: 150,
      monto_real: 150,
      moneda: "ARS",
      frecuencia_pago: "mensual",
      estado: "activo",
      historial: [
        {
          id: 1,
          fecha_pago: "2021-09-05",
          descripcion: "Seguro de septiembre",
          monto: 150,
          estado_pago: "pagado",
        },
      ],
    },
  ],

  deudas: [
    {
      id: 1,
      nombre: "Volante Con Pedalera",
      monto_total: 5000,
      moneda: "ARS",
      cuotas_totales: 6,
      cuotas_pagadas: 4,
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
      nombre: "Perspirex Strong",
      monto_total: 2000,
      moneda: "ARS",
      cuotas_totales: 3,
      cuotas_pagadas: 1,
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
    {
      id: 3,
      nombre: "2 Neumaticos",
      monto_total: 2000,
      moneda: "ARS",
      cuotas_totales: 9,
      cuotas_pagadas: 1,
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
    banco_santander: { saldo: 0, moneda: "ARS" },
    mercadopago: { saldo: 0, moneda: "ARS" },
    paypal: { saldo: 0, moneda: "ARS" },
    efectivo: { saldo: 0, moneda: "ARS" },
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
