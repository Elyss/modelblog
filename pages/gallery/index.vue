<template>
  <Header></Header>
  <div>
    <input type="text" v-model="category">
    <br>
    <Modal>
      <img v-for="image in images" :src="image.filepath" alt="">
    </Modal>
    
  </div>
</template>

<script setup>

import {ref, onMounted, watch} from 'vue'

const category =ref('')
const images = ref([])

const {data,pending,error} = useFetch("/api/gallery/fetch_images",{
  query:{category},
  server:false
})

watch(data,()=>{
    images.value = data.value
},{immediate:true})

</script>

<style scoped>

img{
  max-width: 20%;
}

</style>