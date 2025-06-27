<script setup>
import { VueDraggableNext } from 'vue-draggable-next'
import { ElIcon } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'; 
import { Close } from '@element-plus/icons-vue'; 

const list = ref([]);
const task = ref(false);
const taskForm = ref('');


function addForm() {
    task.value = true;
    taskForm.value = "";
}

function deleteForm() {
    task.value = false;
}

function addTask() {
    list.value.push(taskForm.value);
    task.value = false;
}

function deleteTask() {
    list.value.pop('')
}

const onChange = event => {
  console.log('List change:', event);
};
// const onDragStart = (ev, itemIndex) => {
//   ev.dataTransfer.setData('itemIndex', itemIndex);
// };

// // Обработчик события завершения перетаскивания
// const onDrop = (ev) => {
//   const index = parseInt(ev.dataTransfer.getData('itemIndex'));
//   // Перемещаем элемент внутри массива
//   const removedItem = list.value.splice(index, 1)[0];
//   list.value.push(removedItem); // Или делаем insert куда-то ещё
// };
</script>

<template>
    <div class="to-do-list">
        <div class="to-do-list__button">
            <NuxtLink to="/projects"><span class="to-do-list__button_item">Назад</span></NuxtLink>
            <NuxtLink to="/"><span class="to-do-list__button_item">На главную</span></NuxtLink>
        </div>
        <div class="to-do-list__title">Список дел и задач</div>
        <div class="to-do-list__description">
            <div class="list__nav">
                <div class="list__nav-item" @click="addForm">+ Добавить задачу</div>
                <div class="list__nav-item" @click="deleteTask">- Удалить задачу</div>
            </div>
            <div class="list__content container">
            <!-- <div class="list__content container" @drop.prevent="onDrop($event)" @dragover.prevent> -->
                <div class="list__form" v-if="task">
                    <el-input v-model="taskForm" placeholder="Введите задачу" @keyup.enter="addTask"></el-input>
                    <el-icon class="list__form_icon-plus" @click="addTask"><Plus /></el-icon>
                    <el-icon class="list__form_icon-close" @click="deleteForm"><Close /></el-icon>
                </div>
                <!-- <div v-for="(item, idx) in list" :key="idx" 
                    draggable="true" 
                    @dragstart="onDragStart($event, idx)"
                    class="draggable-item list__content-item">{{ item }}</div> -->
                <!-- <VueDraggableNext tag="ul" list="list" handle=".handle"> -->
                    <draggable @change="onChange">
                        <div class="list__content-item handle" v-for="item in list" :key="item.id">{{ item }}</div>
                    </draggable>
                <!-- </VueDraggableNext> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.to-do-list {
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
    }

    &__description {
        width: 60%;
        display: flex;
        padding: 20px 20px;
        box-shadow: 0 2px 16px #0000001f;
        background-color: white;
    }
}

.list {

    &__nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-right: 3px solid $secondary;
    padding: 10px;
    flex-basis: 20%;

        &-item {
            color: $secondary;
            font-size: 24px;
            cursor: pointer;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 10px 30px;
        flex-basis: 80%;

         &-item {
            color: $secondary;
            font-size: 24px;
            cursor: pointer;
        }
    }

    &__form {
        display: flex;
        position: relative;
        width: 100%;
        
        &_icon-plus {
            color: $secondary;
            position: absolute;
            right: 26px;
            top: 8px;
        }
         &_icon-close {
            color: $secondary;
            position: absolute;
            right: 6px;
            top: 8px;
        }
    }
}

    

    </style>