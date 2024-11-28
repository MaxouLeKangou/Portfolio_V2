<template>
	<section class="flex flex-col gap-14 xl:gap-28">
		<div class="flex flex-col gap-5">
			<h2 class="sticky top-[4.375rem] text-center">RECENTLY WORK</h2>
			<div class="flex flex-col gap-[50vh]">
				<NuxtLink :to="`/works/${work.uid}`" v-for="work of documents" :key="work.uid" class="sticky top-28 w-full aspect-[335/490] max-h-[75vh] md:aspect-video">
					<div class="flex flex-col gap-1.5 absolute bottom-5 left-5 md:bottom-10 md:left-10 xl:bottom-20 xl:px-20 xl:left-0 xl:flex-row xl:w-full xl:justify-between xl:items-end">
						<h3 class="text-xl font-anton uppercase lg:text-desk-xl">{{ work?.data?.name }}</h3>
						<ul class="flex gap-2 text-sm xl:text-desk-sm xl:mb-5">
							<li v-for="tag of work?.data?.tags">
								<p class="py-1.5 px-5 bg-background-100/20 rounded-full backdrop-blur-md lg:py-2 lg:px-8">{{ tag.tag }}</p>
							</li>
						</ul>
					</div>
					<NuxtImg :src="work?.data?.meta_image?.url || ''" class="w-full h-full object-cover rounded-[1.25rem]"/>
				</NuxtLink>
			</div>
		</div>

		<p v-if="isClient" class="flex justify-center">
			<NuxtLink to="/works" class="link-container bg-background-200 rounded-full flex gap-3 items-center py-3.5 px-5 lg:py-4 lg:px-8">
				<div class="circle w-5 h-5 bg-primary rounded-full lg:w-7 lg:h-7"></div>
				<span class="text-base uppercase lg:text-desk-base">VIEW ALL WORKS</span>
			</NuxtLink>
		</p>
	</section>
</template>

<script setup lang="ts">
const prismic = usePrismic();
const { data: documents } = await useAsyncData('works', () => 
	prismic.client.getAllByType('work', { pageSize: 5 })
);

const isClient = ref(false);
onMounted(() => {
	isClient.value = true;
});
</script>

<style scoped>
.link-container {
	position: relative;
	overflow: hidden;
	transition: color 0.3s;
	cursor: pointer;
}

.link-container span {
	position: relative;
	transition: color 0.3s;
	z-index: 2;
}

.circle {
	transition: transform 0.5s ease-in-out, background-color 0.3s;
	z-index: 1;
	border-radius: 50%;
}

.link-container:hover .circle {
	transform: translateY(-50%) scale(20);
}

.link-container:hover span {
	@apply text-background-100;
}
</style>