<script setup></script>

<template>
    <div class="main">
        <div class="main__name">
            <div class="main__name__title">Кулишова Лилия</div>
            <div class="main__name__description">Frontend-разработчик</div>
        </div>
        <div class="main__nav">
            <NuxtLink to="/about"><div class="main__nav__item">Обо мне</div></NuxtLink>
            <NuxtLink to="/projects"><div class="main__nav__item">Мои проекты</div></NuxtLink>
            <NuxtLink to="/contacts"><div class="main__nav__item">Контакты</div></NuxtLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.main {
    display: flex;
    flex-grow: 1;
    height: 100vh;

    &__name {
        background-color: $primary;
        flex-basis: 80%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;

        &__title {
            font-size: 50px;
            font-weight: 600;
            color: $secondary;
        }

        &__description {
            font-size: 36px;
            font-weight: 400;
            font-style: italic;
            color: $secondary;
        }
    }

    &__nav {
        background-color: $secondary;
        flex-basis: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        &__item {
            font-size: 28px;
            font-weight: 300;
            color: $primary;
            margin: 20px 40px;
        }
    }
}


</style>