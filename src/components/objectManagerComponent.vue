<script lang="ts" setup>
import { ref } from 'vue';
import PlusIcon from '@/components/icons/plusIcon.vue';
import { useCarsStore } from '@/stores/cars';
import SearchComponent from '@/components/searchComponent.vue';

const itemsPerPage = ref(9);
const itemsPerPageOptions = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

const carsStore = useCarsStore();

const changeCountOnPage = () => {
	carsStore.setPerPage(itemsPerPage.value);
	carsStore.setPage(1);
};
</script>

<template>
	<div class="three-column">
		<div class="search-bar">
			<SearchComponent />
		</div>
		<div class="items-per-page">
			<div class="ipp-title">Select vehicles per page:</div>
			<select
				v-model="itemsPerPage"
				class="ipp-select"
				@change="changeCountOnPage"
			>
				<option
					v-for="option in itemsPerPageOptions"
					:key="option"
					:value="option"
				>
					{{ option }}
				</option>
			</select>
		</div>
		<div class="third-column">
			<button class="add-button" @click="carsStore.setShowModal(true)">
				<PlusIcon class="ab-icon" />
				<span class="ab-title">Add Vechicle</span>
			</button>
		</div>
	</div>
</template>
