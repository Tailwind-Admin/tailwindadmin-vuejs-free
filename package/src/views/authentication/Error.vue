


<template>
  <div className="h-screen flex items-center justify-center bg-white dark:bg-dark">
      <div className="text-center">
        <Vue3Lottie :animationData="error404page" :height="500" :width="500" />
        <h1 className="text-ld text-4xl mb-6">Opps!!!</h1>
        <h6 className="text-xl text-ld">
          This page you are looking for could not be found.
        </h6>
       <RouterLink to="/">
        <Button variant="default" class="mt-6  mx-auto rounded-md" >Go Back to Home</Button>
      </RouterLink>
      </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import  Button  from '../../components/ui/button/Button.vue' 
import { Vue3Lottie } from  'vue3-lottie'
import error404page from '../../assets/images/animation/error404page.json'
</script>
