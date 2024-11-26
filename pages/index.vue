<template>
    <main class="flex flex-col gap-40">
        <HomeHero/>
        
        <section id="about" class="flex flex-col gap-24">
            <BlocContent :data="content?.about"/>
            <HomeSkills/>
        </section>

        <section id="experience" class="flex flex-col gap-24">
            <BlocContent :data="content?.experience"/>
            <HomeHistory/>
        </section>

        <section id="work" class="flex flex-col gap-24">
            <HomeWork/>
        </section>
    </main>
</template>

<script setup lang="ts">
import { toWords } from "number-to-words";

const birthday = () => {
    const today = new Date();
    const birthday = new Date("2004-05-05");

    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();
    const dayDiff = today.getDate() - birthday.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return toWords(age);
};

const content = ref({
    about: {
        title: 'About me',
        content: `Hey! I’m Maxime, ${birthday()} years old {job}. I make beautiful websites that will help achieve your goals!`,
        letTitle: 'job',
        letValue: 'front-end developer'
    },
    experience: {
        title: 'Experience',
        content: `Now, nearly {years} of experience in designing and envisioning projects. Currently only within my education :(`,
        letTitle: 'time',
        letValue: 'two years'
    }
})
</script>