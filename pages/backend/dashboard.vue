<script setup lang="ts">

    // ข้อมูลกราฟแท่ง (Bar Chart) 12 เดือน
    const barChartOptions = ref({
    chart: {
        type: "bar",
        height: 350,
    },
    plotOptions: {
        bar: {
        horizontal: false,
        columnWidth: "55%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    yaxis: {
        title: {
        text: "Sales (in thousands)",
        },
    },
    fill: {
        opacity: 1,
    },
    })

    const barSeries = ref([
    {
        name: "Sales",
        data: [10, 20, 15, 30, 25, 35, 40, 45, 30, 50, 55, 60],
    },
    ])

    // ข้อมูลกราฟวงกลม (Pie Chart)
    const pieChartOptions = ref({
    chart: {
        type: "pie",
        height: 350,
    },
    labels: ["Product A", "Product B", "Product C", "Product D"],
    responsive: [{
        breakpoint: 480,
        options: {
        chart: {
            width: 200
        },
        legend: {
            position: 'bottom'
        }
        }
    }]
    })

    const pieSeries = ref([44, 33, 54, 45]) // ข้อมูลสัดส่วนสินค้าตัวอย่าง

    // ข้อมูลกราฟเส้น (Line Chart) 12 เดือน
    const lineChartOptions = ref({
    chart: {
        type: "line",
        height: 350,
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    yaxis: {
        title: {
        text: "Revenue (in thousands)",
        },
    },
    })

    const lineSeries = ref([
    {
        name: "Revenue",
        data: [20, 30, 25, 35, 50, 40, 60, 70, 55, 80, 65, 85],
    },
    ])

    definePageMeta({
        layout: 'backend',
    })

    useHead({
        title: 'Dashboard',
        meta: [
        { 
            name: 'keywords', 
            content: 'Dashboard, Nuxt 3, Backend'
        },
        {
            name: 'Description',
            content: 'Dashboard Nuxt 3,  IT Genius Engineering'
        }
        ]
    })

</script>

<template>
    <div>
        <h2 class="text-2xl font-bold mb-6">Dashboard</h2>
        
        <!-- กราฟแท่ง -->
        <div class="bg-white p-6 rounded-lg shadow-md mb-6">
            <apexchart type="bar" height="350" :options="barChartOptions" :series="barSeries" />
        </div>

        <!-- กราฟวงกลม และกราฟเส้น -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- กราฟวงกลม -->
            <div class="bg-white p-6 rounded-lg shadow-md">
                <apexchart type="pie" height="350" :options="pieChartOptions" :series="pieSeries" />
            </div>

            <!-- กราฟเส้น -->
            <div class="bg-white p-6 rounded-lg shadow-md">
                <apexchart type="line" height="350" :options="lineChartOptions" :series="lineSeries" />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>