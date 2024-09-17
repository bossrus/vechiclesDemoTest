<script lang="ts" setup>
import { onUnmounted, ref, watch } from 'vue';
import { useCarsStore } from '@/stores/cars';

const isModalVisible = ref(false);
const animationName = ref('');
const animationNames = ['fade', 'slide', 'rotate', 'scale', 'corner'];

const carsStore = useCarsStore();
let timer: number | undefined;

const hideModal = () => {
	carsStore.setShowModal(false);
};

watch(
	() => carsStore.showModal,
	(newShowModal) => {
		animationName.value =
			animationNames[Math.floor(Math.random() * animationNames.length)];
		if (newShowModal) {
			timer = setTimeout(hideModal, 3000);
		}
		isModalVisible.value = newShowModal;
	},
	{ immediate: true },
);

onUnmounted(() => {
	if (timer) {
		clearTimeout(timer);
	}
});
</script>

<template>
	<transition :name="animationName" appear>
		<div v-if="isModalVisible" class="modal-overlay">
			<div class="modal">
				Клик на данном элементе не работает, в связи с отсутствием
				описания действия такового клика в ТЗ тестового задания.
			</div>
		</div>
	</transition>
</template>

<style scoped>
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal {
	background-color: #fff;
	width: 300px;
	padding: 20px;
	border-radius: 15px;
	border: 3px solid red;
	position: relative;
	box-shadow: 8px 0 10px rgba(0, 0, 0, 0.8);
	font-size: xx-large;
	color: red;
	font-weight: 800;
	text-align: center;
	transition: opacity 0.5s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.corner-enter-active,
.corner-leave-active {
	transition:
		transform 0.5s ease-in-out,
		opacity 0.5s ease-in-out;
}

.corner-enter-from,
.corner-leave-to {
	transform: scale(1%) translate(100%, 100%) rotate(360deg);
	opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
	transition: transform 0.5s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
	transform: translateX(100%);
}

.rotate-enter-active,
.rotate-leave-active {
	transition: transform 0.5s ease-in-out;
}

.rotate-enter-from,
.rotate-leave-to {
	transform: rotate(360deg) scale(0.1);
}

.scale-enter-active,
.scale-leave-active {
	transition: transform 0.5s ease-in-out;
}

.scale-enter-from,
.scale-leave-to {
	transform: scale(0.1);
}
</style>
