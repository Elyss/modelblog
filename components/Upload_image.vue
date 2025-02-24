<template>
  <div>
    <form action="">
      <input type="file" @change="upload_image">
    </form>
    <div v-if="image_to_upload">
      <img :src="image_to_upload_url" alt="" class="preview">
      <button @click="upload" class="btn-primary"><i class="material-icons">upload</i>Upload</button>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const image_to_upload = ref(null)
const image_to_upload_url = ref(null)

const upload_image = (event)=>{
  image_to_upload.value = event.target.files[0]
  image_to_upload_url.value = URL.createObjectURL(image_to_upload.value)
}

const upload = async()=>{
  if(image_to_upload){
    try {
      const formData =  new FormData()
      formData.append("file",image_to_upload.value)
      const response = await fetch("/api/gallery/upload",{
        method:"POST",
        body:formData,
      })

      const data = await response.json()
      console.log(data)
      
    } catch (error) {
      console.log("upload failed",error)
    }
  }
}

</script>

<style scoped>

.preview{
  max-width: 100%;
  max-height: 100%;
}
</style>