<script setup lang="ts">
import { ref } from "vue";
import Modal from './components/Modal.vue'
import {Folder} from './mock/folders'

const isModalOpen = ref(false)
const selectedItem = ref<Folder | null>(null)

const onOpenButton = (): void => {
  selectedItem.value = null
  isModalOpen.value = true
}

const closeModal = (): void => {
  isModalOpen.value = false
}

const onOk = (folder: Folder | null): void => {
  if(folder){
    selectedItem.value = folder
  }
  closeModal()
}

</script>

<template>
  <div>
    <header>
      <h2>Привет!</h2>
      <h5>
        В этом проекте реализована система для управления папками и файлами с возможностью их выбора, 
        отображения и навигации по уровням вложенности.
        <br>
        <br>
        Вы можете просмотреть структуру корневой папки этого веб приложения и выбрать ее. Благодаря реактивности Vue, она отобразится ниже
      </h5>
      <h5>Использованные технологии:</h5>
      <ul>
        <li>Vue.js (Composition API): для построения компонентного интерфейса с реактивными состояниями.</li>
        <li>TypeScript: для строгой типизации и улучшенной поддержки разработки.</li>
        <li>Также я сделала имитацию работы с API запросами</li>
      </ul>
      <h5>Основные особенности:</h5>
      <ul>
        <li>Древовидная структура папок с возможностью их сворачивания и разворачивания.</li>
        <li>Выбор папок с подсветкой текущей папки.</li>
      </ul>
    </header>

    <button @click="onOpenButton" :disabled="isModalOpen">Открыть</button>
    <h3 v-if="selectedItem" class="response">
      <span v-if="selectedItem?.children?.length">Выбранная вами папка </span>
      <span v-else>Выбранный вами файл </span>
      - {{ selectedItem?.name }}
    </h3>
    <p v-else class="response">Вы пока не выбрали папку</p>
    <Modal
      :title="'Тестовое задание'"
      :isOpen="isModalOpen"
      @close="closeModal"
      @ok="onOk"
    />
  </div>
</template>

<style scoped>
header{
  text-align: start;
  width: 80%;
}

.response{
  background-color: rgb(206, 194, 194);
  color: black;
  width: 80%;
  padding: 20px;
  font-weight: bold;
  font-size: large;
  border-radius: 4px;
}
</style>