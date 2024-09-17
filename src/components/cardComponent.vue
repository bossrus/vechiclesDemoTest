<script lang="ts" setup>
import DottedIcon from '@/components/icons/dottedIcon.vue';
import CheckIcon from '@/components/icons/checkIcon.vue';
import { useCarsStore } from '@/stores/cars';
import type { ICar } from '@/interfaces/car.interface';
import { calculateDate } from '../services/calculateDate';

const props = defineProps<{
	id: number;
}>();

const carsStore = useCarsStore();

const carFromState: ICar | undefined = carsStore.carById(props.id);
</script>

<template>
	<div v-if="carFromState" class="card">
		<div class="picture-place">
			<div class="picture">
				<img
					v-if="
						carFromState.photo &&
						carFromState.photo.status_name ==
							'фото успешно обработано и модерировано'
					"
					:alt="`${carFromState.brand} ${carFromState.model}`"
					:src="carFromState.photo.processed_url"
					width="354px"
				/>
			</div>
			<DottedIcon class="place-right" />
		</div>
		<div class="c-title">
			{{ carFromState.brand }} {{ carFromState.model }}
		</div>
		<div class="c-vin">{{ carFromState.vin }}</div>
		<div class="c-line"></div>
		<div class="c-info">
			<div
				:class="
					carFromState.photos_count >= 30
						? 'mystery-numbers'
						: 'mystery-numbers-process'
				"
			>
				<CheckIcon
					v-if="carFromState.photos_count >= 30"
					class="mn-check-icon"
				/>
				<div class="mn-text">{{ carFromState.photos_count }}/30</div>
			</div>
			<div class="c-to-end">
				{{ calculateDate(carFromState.created_at) }} days left
			</div>
		</div>
	</div>
</template>
