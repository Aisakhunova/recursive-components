<script setup lang="ts">
import {Folder} from '../mock/folders'
import {ref} from 'vue'
import ArrowDown from '../assets/icons/down.svg';
import ArrowUp from '../assets/icons/up.svg';

const props = defineProps({
  folders: {
    type: Array as () => Folder[],
    required: true
  },
  level: {
    type: Number,
    default: 0, 
  },
  selectedFolder: {
    type: Object as () => Folder | null,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'select', folder: Folder): void;
}>();

const openFolders = ref<number[]>([])

const toggleFolder = (id: number): void => {
  if(openFolders.value.includes(id)) {
    openFolders.value = openFolders.value.filter(folderId => folderId !== id)
  } else{
    openFolders.value.push(id)
  }
}

const handleSelect = (folder: Folder) => {
  if(props.selectedFolder?.id === folder.id || folder === null) {
    return
  }
  emit('select', folder)
}

</script>

<template>
  <div v-for="folder in props.folders" 
    :key="folder.id" 
    :style="{ marginLeft: `${level * 7}px` }"
  >
    <div class="parent" 
      :class="{ selected: props.selectedFolder && props.selectedFolder?.id === folder.id }" 
      @click="handleSelect(folder)"
    >
      <p class="name">{{folder.name}}</p>
      <button v-if="folder.children.length" 
        @click.stop="toggleFolder(folder.id)">
        <img 
          :src="openFolders.includes(folder.id) ? ArrowDown : ArrowUp" 
          alt="arrow" 
          class="arrow"
        />
      </button>
    </div>
    <FolderTree 
      v-if="openFolders.includes(folder.id)" 
      :folders="folder.children" 
      :level="level + 1" 
      :selectedFolder="props.selectedFolder"
      @select="handleSelect" 
    />
  </div>
</template>

<style scoped>
.parent{
  background-color: rgb(176, 132, 132);
  color: black;
  font-weight: bold;
  padding: 5px;
  padding-left: 20px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  border-radius: 4px;
}

.parent p{
  display: inline-block;
}

.parent:hover {
  border: 3px solid black
}

.parent.selected{
  background-color: black;
  color: white;
}

</style>