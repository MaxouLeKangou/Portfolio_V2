<template>
	<button aria-label="close menu" @click="closeMenu" class="fixed z-40 w-screen inset-0 bg-[#000000]/50 transition-all duration-300" :class="isVisible ? 'translate-x-0' : 'translate-x-full'"></button>
	<section class="fixed z-50 w-96 max-w-full top-0 right-0 bottom-0 flex flex-col bg-background-100 pt-5 pr-5 pb-10 pl-10 transition-all duration-300 lg:w-[500px] lg:pt-10 lg:pr-10 lg:pb-14" :class="isVisible ? 'translate-x-0' : 'translate-x-full'">
		<div class="flex-grow">
			<div class="flex gap-2 flex-wrap justify-between items-center h-10">
				<p>
					<NuxtLink :to="`https://bff.ecoindex.fr/redirect/?url=${siteUrl}`" target="_blank">
						<NuxtImg :src="`https://bff.ecoindex.fr/badge/?theme=light&url=${siteUrl}`" alt="Ecoindex Badge" class="h-8"/>
					</NuxtLink>
				</p>
				<button @click="closeMenu">
					<p class="text-base text-white-300 lg:text-desk-sm">menuVisible = <span class="animate-pulse text-white-100 font-medium">true</span></p>
				</button>
			</div>
			<div class="my-16 text-base flex flex-col gap-3 lg:text-desk-sm">
				<span class="text-white-300">const menu = [</span>
				<nav class="pl-5 lg:pl-8">
					<ul class="animation inline-flex flex-col gap-3 text-lg font-semibold lg:text-xl">
						<li>
							<p>
								<component
									@click="route.path !== '/' ?? closeMenu"
									:is="route.path === '/' ? 'span' : nuxtlink"
									:to="route.path === '/' ? undefined : '/'"
								>
									Home,
								</component>
							</p>
						</li>
						<li>
							<p>
								<component
									@click="route.path !== '/works' ?? closeMenu"
									:is="route.path === '/works' ? 'span' : nuxtlink"
									:to="route.path === '/works' ? undefined : '/works'"
								>
									Works,
								</component>
							</p>
						</li>
						<li>
							<p>
								<component
									@click="route.path !== '/secret' ?? closeMenu"
									:is="route.path === '/secret' ? 'span' : nuxtlink"
									:to="route.path === '/secret' ? undefined : '/secret'"
								>
									Secret
								</component>
							</p>
						</li>
					</ul>
				</nav>
				<span class="text-white-300">]</span>
			</div>
		</div>

		<div class="flex gap-1.5">
			<span class="mt-0.5">
				<LazyIconsCheck class="text-primary"/>
			</span>
			<div class="flex flex-col gap-1.5 text-base lg:text-desk-sm">
				<p class="text-primary font-semibold tracking-first">WEBSITE</p>
				<div class="flex flex-col text-white-300 font-light">
					<p>Successfully built website at</p>
					<p class="flex gap-2">
						<span>{{ date.date }}</span>
						<span>{{ date.time }}</span>
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const route = useRoute();
const nuxtlink = resolveComponent('NuxtLink');

const siteUrl = useRuntimeConfig().public.siteUrl;

defineProps({
	isVisible: Boolean,
});


const date = ref({
	date: '',
	time: '',
});

onMounted(() => {
	const now = new Date();
	date.value.date = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`
	date.value.time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`
});

const emit = defineEmits(['close']);
const closeMenu = () => emit('close');
</script>