<template>
  <div class="grid place-items-center min-h-screen">
    <KeyBindTable />
    <div v-if="fileApi" class="flex gap-4 justify-center">
      <Button text="Open File" @click="handleGetFileHandle" />
      <Button :disabled="!fileHandle" text="Apply Binds" @click="handleApplyKeyBinds" />
    </div>
    <div v-else class="text-light-50 text-4xl text-center px-12">
      File System Access API is not supported in your Browser. Check
      <a
        href="https://caniuse.com/?search=File%20System%20Access%20API"
        class="underline hover:(text-light-900) font-bold"
      >caniuse.com</a> for Browsers which support it.
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { readFile, writeFile, fileApiSupport, getFileHandle } from '@/helper/fs'
import { applyKeyBinds } from '@/helper/transforms'
import { KeyMapping } from '@/models/models'
import { get, set } from 'idb-keyval';

export default {
  name: 'Readdir',
  setup() {
    const fileContent = ref('')
    const fileHandle = ref<FileSystemFileHandle>()
    const keyMappings = ref([{
      id: 'CONTROLBAR:ConstructGondorArcherHorde',
      key: 'a',
    },
    {
      id: 'CONTROLBAR:ConstructMenStatue',
      key: 'b',
    },
    {
      id: 'CONTROLBAR:Bloodthirsty',
      key: 'c',
    },
    {
      id: 'CONTROLBAR:TooltipUpgradeAngmarDenLevel2',
      key: 'd'
    }
    ])

    const fileApi = fileApiSupport()

    const openFile = async (fileHandle: FileSystemFileHandle) => {
      try {
        fileContent.value = await readFile(fileHandle)
        console.log(fileContent.value)
      } catch (ex) {
        if (ex.name === 'AbortError') return;
        console.error('An error occured trying to open the file.', ex);
      }
    }

    const handleApplyKeyBinds = () => {
      if (!fileHandle.value) return
      const newContent = applyKeyBinds(fileContent.value, keyMappings.value)
      console.log(newContent)
      if (fileHandle.value) writeFile(fileHandle.value, newContent)
    }

    const handleGetFileHandle = async () => {
      const storedFileHandle = await get('file')
      fileHandle.value = await getFileHandle(storedFileHandle)
      if (fileHandle.value) {
        console.log([fileHandle.value])
        await set("file", fileHandle.value);
        openFile(fileHandle.value)
      } else {
        console.log('no filehandle')
      }
    }

    return { fileHandle, fileContent, fileApi, keyMappings, handleApplyKeyBinds, handleGetFileHandle };
  },
}
</script>
