<template>
	<p class="text-base text-white-300">
		<span>let {{ title }} = "</span>
		<input
			type="text"
			:value="modelValue"
			@input="updateValue($event?.target?.value)"
			class="animate-pulse max-w-full w-32 text-white-200 bg-background-100 focus:outline-0"
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

const updateValue = (value: string) => {
	emit('update:modelValue', value);
};
</script>
