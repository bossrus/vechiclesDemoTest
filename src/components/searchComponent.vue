<script lang="ts" setup>
import SearchIcon from '@/components/icons/searchIcon.vue';
import { ref } from 'vue';
import { useCarsStore } from '@/stores/cars';

const carsStore = useCarsStore();
const searchQuery = ref(carsStore.search);

const handleSearch = () => {
	carsStore.setSearch(searchQuery.value);
	carsStore.setPage(1);
};
</script>

<template>
	<input
		v-model="searchQuery"
		class="search-input"
		placeholder="Search VIN"
		type="text"
		@change="handleSearch"
	/>
	<SearchIcon class="search-icon" @click="handleSearch" />
</template>

<style scoped></style>
