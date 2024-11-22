<script setup lang="ts">
import { onMounted, ref } from "vue";
import {fetchFolders} from '../fakeApi/folders'
import FolderTree from "./FolderTree.vue";
import {Folder} from '../mock/folders'

const props = defineProps({
  title: String,
  isOpen: Boolean
})

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'ok', folder: Folder | null): void;
}>();

const folders = ref<Folder[]>([]);
const isLoading = ref<boolean>(true);
const selectedFolder = ref<Folder | null>(null);

const selectFolder = (folder: Folder) => {
  selectedFolder.value = folder
}

onMounted(async () => {
  try{
    folders.value = await fetchFolders()
  } catch (error) {
    alert("Не удалось загрузить папки. Попробуйте позже.");
  } finally{
    isLoading.value = false
  }
})

const handleOk = () => {
  emit('ok', selectedFolder.value)
  selectedFolder.value = null
}

const handleClose = () => {
  emit('close')
  selectedFolder.value = null
}

</script>

<template>
  <div class="modal-backdrop" v-if="isOpen" @click="handleClose">
    <div class="modal" @click.stop>
      <header class="modal-header">
        <h3>{{ title }}</h3>
      </header>
      <div class="modal-body">
        
        <div v-if="isLoading">loading .. </div>
        <FolderTree v-else 
          :folders="folders"
          :selectedFolder="selectedFolder"
          @select="selectFolder"
        />
      </div>
      <footer class="modal-footer">
        <button @click="handleOk" class="modal-button">Ок</button>
        <button @click="handleClose" class="modal-button">Закрыть</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: rgb(229, 219, 219);
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  color: black;
  height: 700px;
  overflow: hidden;
  overflow-y: auto;
}

.modal-footer{
  display: flex;
  justify-content: flex-end;
}

.modal-button{
  margin: 5px;
  background-color: rgba(10, 9, 9, 0.323);
  color: black;
  border: 1px solid black;
  font-weight: bold;
}

.modal-button:hover{
  background-color: black;
  color: white;
}
</style>
