<script setup>
import { ElIcon } from 'element-plus'
import { Search } from '@element-plus/icons-vue'; 

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = now.getDate();
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');

const searchQuery = ref('');
const weatherData = ref(null);
const error404 = ref(false);
const error429 = ref(false);


async function searchWeather(city) {
    if (!searchQuery.value.trim()) return;
    const { data } = await useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=746a25784992af3193ff1dc3cdda49b1`, {
        method: 'GET',
        onResponseError({ response }) {
            if (response.status === 404) {
                error404.value = true;
            } 
            if (response.status === 429) {
                error429.value = true; 
            } 
        }
    })
    weatherData.value = data.value;
}
</script>

<template>
    <div class="weather">
        <div class="weather__button">
             <NuxtLink to="/projects"><span class="weather__button_item">Назад</span></NuxtLink>
             <NuxtLink to="/"><span class="weather__button_item">На главную</span></NuxtLink>
        </div>
        <div class="weather__title">Прогноз погоды на сегодня</div>
        <div class="weather__description">
            <div class="weather__form">
                <div class="weather__form__search">
                    <el-input v-model="searchQuery" @keyup.enter="searchWeather(searchQuery)" placeholder='Введите название города, например, "Москва"'></el-input>
                    <el-icon class="search__icon" @click="searchWeather(searchQuery)"><Search /></el-icon>
                </div>
            </div>
            <div v-if="error404 && weatherData === null">
                <div class="weather__content weather__content__top">Возможно, вы неверно ввели название города</div>
            </div>
             <div v-if="error429 && weatherData === null">
                <div class="weather__content weather__content__top">Извините, лимит получения данных о погоде на сегодня исчерпан. Попробуйет завтра</div>
            </div>
            <div v-if="weatherData !== null" class="weather__content">
                <div class="weather__content__top">
                    <div class="weather-card">
                        <h2 class="weather-card__name">
                        {{ weatherData?.name }}
                        </h2>
                        <span class="weather-card__date">{{ day + "." + month + "." + year}}г.</span>
                        <span class="weather-card__date">{{ hours + ":" + minutes }}</span>
                    </div>
                    <div class="weather-conditions">
                        <div><img class="weather-conditions__icon" :src="`http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`" :alt="`${weatherData?.weather[0].main}`"></div>
                        <div>
                            <div class="weather-conditions__top">
                                <div class="weather-conditions__temp">{{ (weatherData?.main.temp - 273.15).toFixed(1) }}°C, </div>
                                <div class="weather-conditions__temp">{{ weatherData?.weather[0].description }}</div>  
                            </div>
                        <div class="weather-conditions__temp">Ощущается как: {{ (weatherData?.main.feels_like - 273.15).toFixed(1) }}°C</div>  
                        </div>
                    </div>
                </div>
                <div class="weather__content__bottom">
                    <div class="weather__item">
                        <div class="weather__item-label">Давление, мм рт.ст.</div>
                        <div class="weather__item-value">{{ (weatherData?.main.pressure * 0.75).toFixed(0)}}</div>
                    </div>
                    <div class="weather__item">
                        <div class="weather__item-label">Влажность, %</div>
                        <div class="weather__item-value weather__item-value_xs">{{ weatherData?.main.humidity }}</div>
                    </div>
                    <div class="weather__item">
                        <div class="weather__item-label">Облачность, %</div>
                        <div class="weather__item-value">{{ weatherData?.clouds.all }}</div>
                    </div>
                    <div class="weather__item">
                        <div class="weather__item-label">Ветер, м/с</div>
                        <div class="weather__item-value">{{ weatherData?.wind.speed }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.weather {
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

    &__form {
        display: flex;
        gap: 40px;

        &__search {
            width: 50%;
            display: flex;
            margin-bottom: 20px;
            position: relative;

            @media screen and (max-width: 375px) {
                width: 100%;
            }
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 20px 20px;
        box-shadow: 0 2px 16px #0000001f;
        background-color: white;

        &__top {
            display: flex;
            align-items: center;
            color: $secondary;
            font-size: 24px;

            @media screen and (max-width: 375px) {
                flex-direction: column;
                gap: 20px;
            }
        }

        &__bottom {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 10px;

            @media screen and (max-width: 375px) {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                column-gap: 5px;
            }
        }
    }

    &__item {
        font-size: 24px;

        @media screen and (max-width: 375px) {
            font-size: 20px;
            text-align: center;
        }

        &-label {
            color: grey;
        }

        &-value {
            color: $secondary;
            text-align: center;
            margin: 5px;

            &_xs {
                @media screen and (max-width: 375px) {
                    padding-top: 20px;
                }
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

.weather-card {
    justify-self: start;

    @media screen and (max-width: 375px) {
        align-self: flex-start;;
    }

  &__name {
    color: $secondary;
    font-size: 48px;
    font-weight: 600;
    margin: 0px;
    margin-bottom: 5px;


    @media screen and (max-width: 375px) {
        font-size: 36px;
    }
  }

  &__date {
    color: $secondary;
    margin-right: 5px;


    @media screen and (max-width: 375px) {
        font-size: 24px;
    }
  }
}

.weather-conditions {
  display: flex;
  gap: 5px;
  font-size: 30px;
  font-weight: lighter;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin: 0;

  &__temp {
    color: $secondary;

    @media screen and (max-width: 375px) {
        font-size: 24px;
        text-align: center;
    }
  }

  &__top {
    display: flex;
    gap: 10px;
    font-size: 30px;
    font-weight: lighter;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 375px) {
        font-size: 24px;
        flex-direction: column;
        gap: 5px;
    }
  }

  &__icon {
    height: 100px;
    width: 100px;
  }
}
</style>