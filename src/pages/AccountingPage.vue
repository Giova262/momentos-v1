<template>
  <q-page class="bg-grey-2 flex flex-center">
    <q-card class="q-pa-lg shadow-2">
      <q-card-section>
        <div class="text-h6 text-center">Calculadora de Finanzas</div>
        <div class="text-subtitle1 text-center text-primary q-mb-md">
          Bienvenido a tu calculadora financiera personalizada
        </div>
        <div class="text-h6 text-center q-mb-md text-grey-7 rounded-borders">
          Cálculos realizados para el mes de
          {{
            new Date().toLocaleString("es-ES", {
              month: "long",
              year: "numeric",
            })
          }}
        </div>
      </q-card-section>

      <q-card-section>
        <q-input
          v-model="sueldo"
          label="Ingrese su sueldo actual"
          type="number"
          outlined
          class=""
          @keydown.enter.prevent="calcularGastos"
        />
      </q-card-section>

      <q-card-actions class="justify-center q-mb-sm">
        <q-btn
          label="Calcular Gastos"
          color="primary"
          unelevated
          class="q-px-lg q-py-sm text-bold rounded-borders shadow-2"
          @click="calcularGastos"
        />
      </q-card-actions>

      <q-card-section
        v-if="resultado"
        class="bg-blue-1 q-pa-md rounded-borders"
      >
        <q-list dense>
          <q-item>
            <q-item-section>
              <q-item-label
                ><strong>Sueldo:</strong> $
                {{ formatearNumero(sueldo) }}</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label
                ><strong>Total Gastos Fijos:</strong> $
                {{ formatearNumero(totalGastosFijos) }}</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label
                ><strong>Total Deudas:</strong> $
                {{ formatearNumero(totalDeudas) }}</q-item-label
              >
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-separator class="q-my-md" color="grey-5" />
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label
                ><strong>Saldo Restante:</strong> $
                {{ formatearNumero(saldoRestante) }}</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { formatearNumero } from "src/Servicios/UtilsService";
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
const sueldo = ref(2000000);

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
      divisas: [
        {
          nombre: "Dolar MEP",
          simbolo: "USD",
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
      monto_real: 150000,
      moneda: "ARS",
      frecuencia_pago: "mensual",
      estado: "activo",
      historial: [
        {
          id: 1,
          fecha_pago: "2025-03-01",
          descripcion: "Alquiler de Marzo 2025",
          monto: 150000,
          estado_pago: "pagado",
        },
      ],
    },
    {
      id: 2,
      nombre: "Comida",
      categoria: "Alimentación",
      monto_real: 120000,
      moneda: "ARS",
      frecuencia_pago: "mensual",
      estado: "activo",
      historial: [
        {
          id: 1,
          fecha_pago: "2025-03-05",
          descripcion: "Supermercado",
          monto: 120000,
          estado_pago: "pagado",
        },
      ],
    },
    {
      id: 3,
      nombre: "Seguro del auto",
      categoria: "Transporte",
      monto_real: 65000,
      moneda: "ARS",
      frecuencia_pago: "mensual",
      estado: "activo",
      historial: [
        {
          id: 1,
          fecha_pago: "2023-03-05",
          descripcion: "Seguro de Marzo 2025",
          monto: 65000,
          estado_pago: "pagado",
        },
      ],
    },
  ],

  deudas: [
    {
      id: 1,
      nombre: "Volante Con Pedalera",
      monto_total: 578174.86,
      moneda: "ARS",
      cuotas_totales: 6,
      cuotas_pagadas: 4,
      cuota_mensual: 96362.43,
      interes_total: 0,
      tasa_interes_anual: 0,
      proximo_vencimiento: "2025/04/01",
      estado: "activa",
      pagos_realizados: [
        { fecha: "2024-12-01", monto: 96362.43, estado: "pagado" },
        { fecha: "2025-01-01", monto: 96362.43, estado: "pagado" },
        { fecha: "2025-02-01", monto: 96362.43, estado: "pagado" },
        { fecha: "2025-03-01", monto: 96362.43, estado: "pagado" },
      ],
      saldo_pendiente: 192724.86,
    },
    {
      id: 2,
      nombre: "Perspirex Strong",
      monto_total: 48723.84,
      moneda: "ARS",
      cuotas_totales: 3,
      cuotas_pagadas: 1,
      cuota_mensual: 16241.28,
      interes_total: 0,
      tasa_interes_anual: 0,
      proximo_vencimiento: "2025/04/01",
      estado: "activa",
      pagos_realizados: [
        { fecha: "2025-03-01", monto: 16241.28, estado: "pagado" },
      ],
      saldo_pendiente: 32482.56,
    },
    {
      id: 3,
      nombre: "VAR ( 2 Neumaticos Firestone 185/60 R15 84H )",
      monto_total: 385731.54,
      moneda: "ARS",
      cuotas_totales: 9,
      cuotas_pagadas: 1,
      cuota_mensual: 42859.06,
      interes_total: 0,
      tasa_interes_anual: 0,
      proximo_vencimiento: "2025/04/01",
      estado: "activa",
      pagos_realizados: [
        { fecha: "2025-03-01", monto: 42859.06, estado: "pagado" },
      ],
      saldo_pendiente: 342872.48,
    },
  ],

  cuentas: {
    banco_santander: { saldo: 0, moneda: "ARS" },
    mercadopago: { saldo: 0, moneda: "ARS" },
    paypal: { saldo: 0, moneda: "ARS" },
    efectivo: { saldo: 0, moneda: "ARS" },
  },
});

const resultado = ref(false);
const totalGastosFijos = ref(0);
const totalDeudas = ref(0);
const saldoRestante = ref(0);

const calcularGastos = () => {
  totalGastosFijos.value = planDeCuentas.value.gastos_fijos.reduce(
    (total, gasto) => total + gasto.monto_real,
    0
  );

  const mesActual = new Date().getMonth() + 1;
  const anioActual = new Date().getFullYear();

  console.log("mesActual");
  console.log(mesActual);
  console.log("anioActual");
  console.log(anioActual);

  totalDeudas.value = planDeCuentas.value.deudas.reduce((total, deuda) => {
    console.log("deuda");
    console.log(deuda.proximo_vencimiento);
    const mesVencimiento = new Date(deuda.proximo_vencimiento).getMonth() + 1;
    const anioVencimiento = new Date(deuda.proximo_vencimiento).getFullYear();
    console.log("mesVencimiento");
    console.log(mesVencimiento);
    console.log("anioVencimiento");
    console.log(anioVencimiento);
    if (mesVencimiento === mesActual && anioVencimiento === anioActual) {
      return total + deuda.cuota_mensual;
    }
    return total;
  }, 0);

  saldoRestante.value =
    sueldo.value - totalGastosFijos.value - totalDeudas.value;
  resultado.value = true;
};

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
