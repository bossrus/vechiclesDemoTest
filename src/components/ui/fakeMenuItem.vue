<script lang="ts" setup>
import { computed } from 'vue';
import UserIcon from '@/components/icons/userIcon.vue';
import VehiclesIcon from '@/components/icons/vehiclesIcon.vue';
import SettingsIcon from '@/components/icons/settingsIcon.vue';

const props = defineProps<{
	title: 'Profile' | 'Vehicles' | 'Setting';
}>();

const iconComponent = computed(() => {
	switch (props.title) {
		case 'Profile':
			return UserIcon;
		case 'Vehicles':
			return VehiclesIcon;
		case 'Setting':
			return SettingsIcon;
		default:
			return null;
	}
});
</script>

<template>
	<div :class="['fake-menu-item', { active: props.title === 'Vehicles' }]">
		<component :is="iconComponent" />
		<div class="fmi-title">{{ props.title || 'Profile' }}</div>
	</div>
</template>
