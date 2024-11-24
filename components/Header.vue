<template>
    <header class="w-full mt-5 flex justify-between">
		<p class="w-10 h-10">
			<component
				:is="route.path === '/' ? 'span' : nuxtlink"
				:to="route.path === '/' ? undefined : '/'"
			>
				<NuxtImg src="/img/logo.webp" class="rounded-full"/>
			</component>
		</p>

		<button>
			<p class="text-base">toggleMenu<span class="text-white-300">( )</span></p>
		</button>
    </header>
</template>

<script setup lang="ts">
const route = useRoute();
const nuxtlink = resolveComponent('NuxtLink');

const menuVisible = ref(false);
const toggleMenu = () => {
	menuVisible.value = !menuVisible.value;
};
</script>
