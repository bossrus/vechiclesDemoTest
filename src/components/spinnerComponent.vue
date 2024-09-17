<template>
	<div class="spinner"></div>
</template>

<style scoped>
.spinner {
	width: 80px;
	height: 80px;
	border-radius: 50%;
	animation: spin-scale 1s linear infinite;
	transform-origin: center center;
}

@keyframes spin-scale {
	0% {
		transform: rotate(0deg) scale(1);
	}
	50% {
		transform: rotate(180deg) scale(0.8);
	}
	100% {
		transform: rotate(360deg) scale(1);
	}
}

.spinner::before {
	content: '';
	position: absolute;
	top: -4px;
	left: -4px;
	right: -4px;
	bottom: -4px;
	border: 6px solid transparent;
	border-top-color: #f00;
	border-bottom-color: #00f;
	border-radius: 50%;
	animation: pulse 1s linear infinite;
}

@keyframes pulse {
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0.1;
	}
	100% {
		opacity: 1;
	}
}
</style>
