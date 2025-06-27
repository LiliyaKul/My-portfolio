<script></script>

<template>
    <div class="projects">
        <NuxtLink class="projects__button" to="/"><span>На главную</span></NuxtLink>
        <div class="projects__title">Мои проекты</div>
        <NuxtLink to="/projects/library"><div class="projects__description">Библиотека компонентов на HTML и CSS</div></NuxtLink>
        <div class="projects__description">Учебный проект: сайт на JavaScript</div>
        <NuxtLink to="/projects/weather"><div class="projects__description">Прогноз погоды на сегодня</div></NuxtLink>
        <NuxtLink to="/projects/toDoList"><div class="projects__description">Список дел и задач</div></NuxtLink>
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

    &__button{
        align-self: flex-start;
        color: $secondary;
        margin: 10px;
    }

    &__title {
        font-size: 48px;
        font-weight: 600;
        color: $secondary;
        padding: 40px;
        align-self: center;

        @media screen and (max-width: 768px) {
            font-size: 42px;
        }
    }

    &__description {
        font-size: 28px;
        font-weight: 400;
        color: $secondary;
        align-self: flex-start;
        padding-left: 50px;

        @media screen and (max-width: 768px) {
            font-size: 24px;
        }
    }
}
</style>