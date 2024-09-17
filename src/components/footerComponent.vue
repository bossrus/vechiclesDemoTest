<script lang="ts" setup>
import { useCarsStore } from '@/stores/cars';
import PaginationComponent from '@/components/paginationComponent.vue';

const carsStore = useCarsStore();
</script>

<template>
	<div v-if="carsStore.realPerPage > 0" class="info">
		Showing {{ carsStore.realPerPage }} out of
		{{ carsStore.currentTotalCars }}
	</div>
	<div v-else class="info">Showing nothing</div>
	<div class="pagination">
		<PaginationComponent />
	</div>
</template>

<style scoped></style>
