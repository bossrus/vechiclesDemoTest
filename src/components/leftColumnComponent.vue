<script lang="ts" setup>
import Vector from '@/assets/vectorGraph.vue';
import FakeMenuItem from '@/components/ui/fakeMenuItem.vue';
import { useCarsStore } from '@/stores/cars';

const carsStore = useCarsStore();
</script>

<template>
	<div class="left-column">
		<div class="title">Demo Test</div>
		<div class="links-block">
			<FakeMenuItem
				title="Profile"
				@click="carsStore.setShowModal(true)"
			/>
			<FakeMenuItem title="Vehicles" />
			<FakeMenuItem
				title="Setting"
				@click="carsStore.setShowModal(true)"
			/>
		</div>
		<div class="beauty">
			<Vector />
		</div>
	</div>
</template>
