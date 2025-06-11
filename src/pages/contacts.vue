<script setup>
import img1 from '@/assets/images/image.jpg'
import img2 from '@/assets/images/image2.jpg'
import img3 from '@/assets/images/image3.jpg'

const items = [ {'contact': 'Мобильный телефон: +7 (900) 600-19-69', 'image': img1},
 {'contact': 'Электронная почта: lilyusha-kul@yandex.ru', 'image': img2},
{'contact': 'Телеграмм: @LiliyaKul95', 'image': img3}]
console.log(items)
</script>

<template>
    <div class="contacts">
        <NuxtLink class="contacts__button" to="/"><span>На главную</span></NuxtLink>
        <div class="contacts__title">Контакты</div>
        <div class="contacts__carousel">
            <el-carousel>
                <el-carousel-item v-for="item in items" :key="item">
                    <div class="slide">
                        <div class="slide__text" text="2xl">{{ item.contact }}</div>
                        <img class="slide__image" :src="`${item.image}`" alt="Изображение" >
                    </div>
                </el-carousel-item>
            </el-carousel>
            <div class="postscript">*Изображения были созданы с помощью нейросети</div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.slide {
    &__image {
        object-fit: cover;
        position: relative;
        max-width: 100%;
    }

    &__text {
        position: absolute;
        top: 40px;
        left: 25%;
        z-index: 2;
        font-size: 28px;
        font-weight: 700;
        color: $secondary;

        @media screen and (max-width: 768px) {
            font-size: 24px;
        }

        @media screen and (max-width: 375px) {
            font-size: 18px;
            top: 20px;
            left: 5%;
        }
    }
}

.contacts {
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

        @media screen and (max-width: 375px) {
            font-size: 36px;
        }
    }    
}

.el-carousel {
    width: 1000px;

    @media screen and (max-width: 768px) {
        width: 700px;
        height: 350px;
    }

    @media screen and (max-width: 375px) {
        width: 370px;
        height: 200px;
    }
}

.postscript {
    @media screen and (max-width: 375px) {
        font-size: 12px;
    }
}
</style>