<script></script>

<template>
    <div class="projects">
        <div class="projects__title">Мои проекты</div>
        <NuxtLink to="/projects/library"><div class="projects__description">Библиотека компонентов на HTML и CSS</div></NuxtLink>
        <div class="projects__description">Учебный проект: сайт на JavaScript</div>
    </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.projects {
    background-color: $primary;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 30px;

    &__title {
        font-size: 48px;
        font-weight: 600;
        color: $secondary;
        padding: 40px;
        align-self: center;
    }

    &__description {
        font-size: 28px;
        font-weight: 400;
        color: $secondary;
        align-self: flex-start;
        padding-left: 50px;
    }
}
</style>