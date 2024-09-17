<script lang="ts" setup>
import ButtonPlus from '@/components/ui/buttonPlus.vue';
import EnFlagIcon from '@/components/icons/enFlagIcon.vue';
import ObjectManager from '@/components/objectManagerComponent.vue';
import TableComponent from '@/components/tableComponent.vue';
import FooterComponent from '@/components/footerComponent.vue';
import { useCarsStore } from '@/stores/cars';

const carsStore = useCarsStore();
</script>

<template>
	<div class="right-column">
		<div class="header">
			<div class="title">
				Vehicles
				<div class="counter">
					{{ carsStore.totalCars }}
				</div>
			</div>
			<div class="settings">
				<div class="plus-button">
					<ButtonPlus @click="carsStore.setShowModal(true)" />
				</div>
				<div class="photo">
					<img alt="John Doe" src="@/assets/photoJohnDoe.png" />
				</div>
				<div class="name">John Doe</div>
				<div class="lang">
					<EnFlagIcon />
					<select class="language-list">
						<option>En</option>
						<option disabled>Ru</option>
					</select>
				</div>
			</div>
		</div>
		<div class="body">
			<ObjectManager />
			<TableComponent />
		</div>
		<div class="footer">
			<FooterComponent />
		</div>
	</div>
</template>
