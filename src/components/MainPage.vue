<script setup></script>

<template>
    <div class="main">
        <div class="main__name">
            <div class="main__name__title">Всем привет! Меня зовут Лилия.</div>
            <div class="main__name__description">Я начинающий frontend-разработчик. Здесь хочу представить вам свое портфолио</div>
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
    height: 100vh;

    @media screen and (max-width: 375px) {
        flex-direction: column;
    }

    &__name {
        background-color: $primary;
        flex-basis: 80%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 1200px) {
            text-align: center;
            padding: 20px;
        }

        &__title {
            font-size: 50px;
            font-weight: 600;
            color: $secondary;

            @media screen and (max-width: 768px) {
                font-size: 42px;
            }

            @media screen and (max-width: 375px) {
                font-size: 42px;
            }
        }

        &__description {
            font-size: 36px;
            font-weight: 400;
            font-style: italic;
            color: $secondary;
            text-align: center;

            @media screen and (max-width: 768px) {
                font-size: 30px;
            }

            @media screen and (max-width: 375px) {
                font-size: 30px;
            }
        }
    }

    &__nav {
        background-color: $secondary;
        flex-basis: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        @media screen and (max-width: 375px) {
            flex-basis: 50%;
            align-items: center;
            // justify-content: flex-start;
        }

        &__item {
            font-size: 28px;
            font-weight: 300;
            color: $primary;
            margin: 20px 40px;

            @media screen and (max-width: 768px) {
                font-size: 24px;
            }

            @media screen and (max-width: 375px) {
                font-size: 24px;
                margin: 20px 20px;
            }
        }
    }
}


</style>