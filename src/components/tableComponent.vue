<script lang="ts" setup>
import CardComponent from '@/components/cardComponent.vue';
import { onMounted } from 'vue';
import { useCarsStore } from '@/stores/cars';
import SpinnerComponent from '@/components/spinnerComponent.vue';

const carsStore = useCarsStore();

const loadCars = () => {
	carsStore.loadCars();
};

onMounted(() => {
	loadCars();
});
</script>

<template>
	<div v-if="!carsStore.isLoading" class="three-column-table">
		<CardComponent
			v-for="car in carsStore.paginatedCars"
			:id="car.id"
			:key="car.id"
		/>
	</div>
	<div v-else class="center">
		<SpinnerComponent />
	</div>
</template>
