<template>
	<section class="flex flex-col gap-14">
		<div class="flex flex-col gap-5">
			<h2 class="sticky top-[4.375rem] text-center">RECENTLY WORK</h2>
			<div class="flex flex-col gap-[25vh]">
				<NuxtLink :to="`/works/${work.uid}`" v-for="work of documents" class="sticky top-28 w-full aspect-[335/490] max-h-[70vh]">
					<div class="flex flex-col gap-1.5 absolute bottom-5 left-5">
						<h3 class="text-xl font-anton uppercase">{{ work?.data?.name }}</h3>
						<ul class="flex gap-2 text-sm ">
							<li v-for="tag of work?.data?.tags">
								<p class="py-1.5 px-5 bg-background-100/20 rounded-full backdrop-blur-sm">{{ tag.tag }}</p>
							</li>
						</ul>
					</div>
					<NuxtImg :src="work?.data?.meta_image?.url" class="w-full h-full object-cover rounded-[1.25rem]"/>
				</NuxtLink>
			</div>
		</div>

		<p class="flex justify-center">
			<NuxtLink to="/works" class="link-container bg-background-200 rounded-full flex gap-3 items-center py-3.5 px-5 ">
				<div class="circle w-5 h-5 bg-primary rounded-full"></div>
				<span class="text-base uppercase">VIEW ALL PROJECTS</span>
			</NuxtLink>
		</p>
	</section>
</template>

<script setup lang="ts">
const prismic = usePrismic();
const { data: documents } = await useAsyncData('work', () => 
	prismic.client.getAllByType('work', { pageSize: 5 })
);
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