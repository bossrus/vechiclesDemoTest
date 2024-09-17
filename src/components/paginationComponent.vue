<script lang="ts" setup>
import NextIcon from '@/components/icons/nextIcon.vue';
import PredIcon from '@/components/icons/predIcon.vue';
import { useCarsStore } from '@/stores/cars';
import { ref, watch } from 'vue';

const predClass = ref<string>('');
const nextClass = ref<string>('');
const carsStore = useCarsStore();

type IIncomingType = 'pred' | 'next';

const inputPage = ref<string>(carsStore.page.toString());

watch(
	() => carsStore.page,
	(newPage) => {
		if (newPage <= 1) {
			predClass.value = 'disabled';
		} else {
			predClass.value = 'usual';
		}
		if (newPage >= carsStore.totalPages) {
			nextClass.value = 'disabled';
		} else {
			nextClass.value = 'usual';
		}
		inputPage.value = newPage.toString();
	},
	{ immediate: true },
);

const handleMouseEnter = (type: IIncomingType) => {
	if (type == 'pred' && carsStore.page > 1) {
		predClass.value = 'active';
	}
	if (type == 'next' && carsStore.page < carsStore.totalPages) {
		nextClass.value = 'active';
	}
};

const handleMouseLeave = (type: IIncomingType) => {
	if (type == 'pred' && carsStore.page > 1) {
		predClass.value = 'usual';
	}
	if (type == 'next' && carsStore.page < carsStore.totalPages) {
		nextClass.value = 'usual';
	}
};

const goToPage = (incomingPage: number | string) => {
	const page = +(incomingPage as string);
	if (!isNaN(page)) {
		carsStore.setPage(page).then((newPage) => {
			inputPage.value = newPage.toString();
		});
	} else {
		inputPage.value = carsStore.page.toString();
	}
};
</script>

<template>
	<div
		:class="predClass"
		class="pagination-icon-pred"
		@click="goToPage(carsStore.page - 1)"
		@mouseenter="handleMouseEnter('pred')"
		@mouseleave="handleMouseLeave('pred')"
	>
		<PredIcon />
	</div>
	<input
		v-model="inputPage"
		class="input-number"
		type="text"
		@change="goToPage(inputPage)"
	/>
	<div class="just-of">of</div>
	<input
		:value="carsStore.totalPages"
		class="input-number"
		disabled
		max="256"
		min="1"
		type="text"
	/>
	<div
		:class="nextClass"
		class="pagination-icon-next"
		@click="goToPage(carsStore.page + 1)"
		@mouseenter="handleMouseEnter('next')"
		@mouseleave="handleMouseLeave('next')"
	>
		<NextIcon />
	</div>
</template>

<style scoped></style>
