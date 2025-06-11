<script setup>
import { ElIcon } from 'element-plus'
import { Search } from '@element-plus/icons-vue'; 

const items = ref ([
    {'name': 'Кнопка', 'title': 'ButtonComponent', 'haveAnimation': 'without-animation'},
    {'name': 'Аккордеон', 'title': 'Accordeon', 'haveAnimation': 'with-animation'},
    {'name': 'Гистограмма', 'title': 'Histogram', 'haveAnimation': 'without-animation'},
    {'name': 'Скелетон', 'title': 'Skeleton', 'haveAnimation': 'with-animation'},
    {'name': 'Подсказка', 'title': 'Tooltip', 'haveAnimation': 'without-animation'},
    {'name': 'Модальное окно', 'title': 'Modal','haveAnimation': 'without-animation'},
    {'name': 'Календарь', 'title': 'Calendar','haveAnimation': 'without-animation'},
    {'name': 'Аватар', 'title': 'Avatar','haveAnimation': 'without-animation'},
    {'name': 'Чекбокс', 'title': 'Checkbox', 'haveAnimation': 'without-animation'},
    {'name': 'Радио-кнопка', 'title': 'Radio', 'haveAnimation': 'without-animation'},
    {'name': 'Переключатель', 'title': 'Toggler', 'haveAnimation': 'with-animation'},
    {'name': 'Поле ввода', 'title': 'Input', 'haveAnimation': 'without-animation'},
])

let currentComponent = shallowRef(null);

const componentsMap = new Map();
async function loadComponent(name) {
    if (!componentsMap.has(name)) {
        const component = await import(`../../components/${name}.vue`);
        componentsMap.set(name, component.default || component);
    }
    return componentsMap.get(name);
}

const selectComponent = async (name) => {
    try {
        currentComponent.value = await loadComponent(name);
    } catch(e) {
        console.error('Error loading component:', e);
    }
};

const filterByAnimation = ref('all');
const searchQuery = ref('');

const filteredComponents = computed(() => {
    let result = items.value;

    if (searchQuery.value.trim() !== '') {
        result = result.filter((item) => item.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
    }

    if (filterByAnimation.value !== 'all') {
        result = result.filter((item) => item.haveAnimation === filterByAnimation.value);
    }

    return result;
});


</script>

<template>
    <div class="library">
        <div class="library__button">
             <NuxtLink to="/projects"><span class="library__button_item">Назад</span></NuxtLink>
             <NuxtLink to="/"><span class="library__button_item">На главную</span></NuxtLink>
        </div>
        <div class="library__title">Библиотека компонентов</div>
        <div class="library__description">
            <div class="library__form">
                <div class="library__form__search">
                    <el-input v-model="searchQuery" placeholder="Введите название компонента"></el-input>
                    <el-icon class="search__icon"><Search /></el-icon>
                </div>
                <div class="library__form__radio">
                    <el-radio-group v-model="filterByAnimation">
                        <el-radio value="all">Все</el-radio>
                        <el-radio value="with-animation">С анимацией</el-radio>
                        <el-radio value="without-animation">Без анимации</el-radio>
                    </el-radio-group>
                </div>
            </div>
            <div class="library__content">
                <div class="library__content__items">
                    <div 
                        v-for="item in filteredComponents" 
                        class="library__content__item cursor-pointer" 
                        @click="selectComponent(item.title)"
                    >{{ item.name }}</div>
                </div>
                <div v-if="currentComponent" class="library__content__description">
                    <component :is="currentComponent"/>
                </div>
                <div v-else>
                    <div class="library__content__item">Здесь вы можете посмотреть мои компоненты</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.library {
    background-color: $primary;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__button {
        align-self: flex-start;
        display: flex;
        gap: 10px;
        margin: 10px;

        &_item {
            color:  $secondary;
        }
    }

    &__title {
        font-size: 48px;
        font-weight: 600;
        color: $secondary;
        padding: 50px;

        @media screen and (max-width: 768px) {
            font-size: 42px;
        }

        @media screen and (max-width: 375px) {
            font-size: 40px;
            padding: 30px;
            text-align: center;
        }
    }

    &__description {
        width: 60%;

        @media screen and (max-width: 1200px) {
            width: 90%;
        }
    }

    &__content {
        display: flex;

        @media screen and (max-width: 375px) {
            flex-direction: column;
            gap: 40px;
        }

        &__items {
            display: flex;
            flex-direction: column;
            gap: 20px;
            flex-basis: 50%;

            @media screen and (max-width: 768px) {
                flex-basis: 30%;
            }

            @media screen and (max-width: 375px) {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr;
                column-gap: 10px;
                row-gap: 5px;
            }
        }

        &__item {
            font-size: 24px;
            font-weight: 600;
            color: $secondary;

            @media screen and (max-width: 768px) {
                font-size: 20px;
            }

            @media screen and (max-width: 375px) {
                font-size: 16px;
            }
        }

        &__description {
            height: 300px;
            width: 100%;

            @media screen and (max-width: 768px) {
                width: 75%;
            }

            @media screen and (max-width: 768px) {
                width: 100%;
            }
        }
    }

    &__form {
        display: flex;
        gap: 40px;

        @media screen and (max-width: 375px) {
            flex-direction: column;
            gap:10px;
        }

        &__search {
            width: 30%;
            display: flex;
            margin-bottom: 20px;
            position: relative;

            @media screen and (max-width: 768px) {
                width: 40%;
            }

            @media screen and (max-width: 375px) {
                width: 90%;
                margin-bottom: 0px;
            }
        }

        &__radio {
            @media screen and (max-width: 375px) {
                margin-bottom: 20px;
            }
        }    
    }
}

.search__icon {
    color: $secondary;
    position: absolute;
    right: 6px;
    top: 8px;
}

.cursor-pointer {
  cursor: pointer;
}
</style>