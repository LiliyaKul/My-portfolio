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
            <div>*Изображения были созданы с помощью нейросети</div>
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
    }
}

.contacts {
    background-color: $primary;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
        font-size: 48px;
        font-weight: 600;
        color: $secondary;
        text-align: center;
        padding: 40px;
    }    
}

.el-carousel {
    width: 1000px;
}
</style>