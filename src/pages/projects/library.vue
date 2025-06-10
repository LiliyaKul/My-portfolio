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
    // max-width: 1200px;
    // margin: 0 auto;

    &__title {
        font-size: 48px;
        font-weight: 600;
        color: $secondary;
        padding: 50px;
    }

    &__description {
        width: 60%;
    }

    &__content {
        display: flex;
        // gap: 200px;

        &__items {
            display: flex;
            flex-direction: column;
            gap: 20px;
            flex-basis: 50%;
        }

        &__item {
            font-size: 24px;
            font-weight: 600;
            color: $secondary;
        }

        &__description {
            height: 300px;
            width: 100%;
        }
    }

    &__form {
        display: flex;
        gap: 40px;

        &__search {
            width: 30%;
            display: flex;
            margin-bottom: 20px;
            position: relative;
        }
    }
}

.search__icon {
    color: $secondary;
    z-index: 100;
    position: absolute;
    right: 6px;
    top: 8px;
}

.cursor-pointer {
  cursor: pointer;
}
</style>