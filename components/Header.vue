<template>
    <header class="w-full h-10 mt-5 flex items-center justify-between md:mt-10 lg:h-16">
		<p class="w-10 h-10 transition duration-500 lg:w-16 lg:h-16" :class="{'hover:scale-110': route.path !== '/'}">
			<component
				:is="route.path === '/' ? 'span' : nuxtlink"
				:to="route.path === '/' ? undefined : '/'"
			>
				<NuxtImg src="/img/logo.webp" class="h-full aspect-square rounded-full" alt="Maxime LEGRAND portfolio"/>
			</component>
		</p>

		<button @click="toggleMenu">
			<p class="text-base lg:text-desk-base">toggleMenu<span class="text-white-300">( )</span></p>
		</button>
		<Menu :isVisible="isVisible" @close="toggleMenu"/>
    </header>
</template>

<script setup lang="ts">
const route = useRoute();
const nuxtlink = resolveComponent('NuxtLink');

const isVisible = ref(false);
const toggleMenu = () => {
	isVisible.value = !isVisible.value;
};
</script>
