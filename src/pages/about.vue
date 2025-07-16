<script></script>

<template>
    <div class="about">
        <NuxtLink class="about__button" to="/"><span>На главную</span></NuxtLink>
        <div class="about__title">Информация обо мне</div>
        <div class="about__description">
            <div class="about__description_title">Образование</div>
            <div class="about__description_content">Федеральное государственное бюджетное образовательное учреждение высшего образования «Курский государственный медицинский университет» Министерства здравоохранения Российской Федерации
2020</div>
            <div class="about__description_title">Курсы</div>
            <div class="about__description_content">
                <div>"Основы соврeменной верстки" JavaScript.ru 2025</div>
                <div>"JavaScript/DOM/Интерфейсы" для новичков JavaScript.ru 2024</div>
                <div>"Vue.js" JavaScript.ru 2024</div>
            </div>
            <div class="about__description_title">Сфера интересов</div>
            <div class="about__description_content">
                <div>HTML, CSS ( БЭМ, CSS Flexbox, CSS Grid Layout, немного Tailwind CSS, Bootstrap, верстала макеты из Figma)</div>
                <div>JavaScript</div>
                <div>Vue 2,3 (Composition API, Options API, Vue router, Vuex, Pinia, Nuxt 2, Nuxt 3)</div>
                <div>Git (знаю как сделать fork репозитория, создать ветку, создать commit, сделать Pull Request, посмотреть историю коммитов, узнать незакоммиченнные файлы, мой профиль на github: https://github.com/LiliyaKul)</div>
                <div>REST API (выводила данные с backend, делала запросы с помощью fetch и axios, пробовала работать с Postman, Swagger);</div>
                <div>Devtools</div>
                <div>Еще много планов на будущее...</div>
            </div>
            <div class="about__description_title">Английский язык</div>
            <div class="about__description_content">В1 (Intermediate)</div>
            <div class="about__description_title">Опыт работы</div>
            <div class="about__description_content">С марта 2025г. в проекте https://in-story.club/</div>
            <div class="about__description_title">Хобби</div>
            <div class="about__description_content">
                <div>Пешие прогулки</div>
                <div>Популярная психология</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.about {
    background-color: $primary;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__button{
        align-self: flex-start;
        color: $secondary;
        margin: 10px;
    }

    &__title {
        font-size: 48px;
        font-weight: 600;
        color: $secondary;
        text-align: center;
        padding: 40px;

        @media screen and (max-width: 768px) {
            font-size: 42px;
        }

        @media screen and (max-width: 768px) {
            font-size: 36px;
        }
    }

    &__description {
        max-width: 1200px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        align-content: flex-start;
        column-gap: 200px;
        row-gap: 20px;

        @media screen and (max-width: 1200px) {
            max-width: 1100px;
        }

        @media screen and (max-width: 768px) {
            max-width: 700px;
        }

        @media screen and (max-width: 375px) {
            max-width: 350px;
            grid-template-columns: 1fr;
        }

        &_title {
            font-size: 28px;
            font-weight: 500;
            color: $secondary;

            @media screen and (max-width: 768px) {
                font-size: 24px;;
            }

            @media screen and (max-width: 375px) {
                font-size: 26px;
            }
        }

        &_content {
            font-size: 20px;
            font-weight: 400;
            color: $secondary;

            @media screen and (max-width: 768px) {
                font-size: 18px;;
            }

            @media screen and (max-width: 375px) {
                margin-bottom: 20px;
            }
        }
    }
}

</style>