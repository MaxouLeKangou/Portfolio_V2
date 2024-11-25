<template>
	<p class="text-base text-white-300">
		<span>let {{ title }} = "</span>
		<input
			type="text"
			:value="modelValue"
			@input="$emit('update:modelValue', $event?.target?.value)"
			class="animate-pulse max-w-full w-32 text-white-100 bg-background-100 focus:outline-0"
		/>
		<span>"</span>
	</p>
</template>

<script setup lang="ts">
defineProps({
	title: String,
	modelValue: String,
});

const emit = defineEmits(['update:modelValue']);
</script>
