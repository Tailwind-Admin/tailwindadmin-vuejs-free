<script setup lang="ts">
import { RouterLink } from 'vue-router'
import  {Button}  from '@/components/ui/button' 
import {Vue3Lottie } from  'vue3-lottie'
import maintenance from '@/assets/images/animation/maintenance.json'
</script>

<template>
<div class="h-screen flex items-center  justify-center bg-white dark:bg-darkgray ">
        <div class="text-center">
          <div class="max-w-3xl">
            <Vue3Lottie :animationData=maintenance  />;
          </div>
          <h1 class="text-dark dark:text-white text-4xl mb-6">Maintenance Mode!!!</h1>
          <h6 class="text-xl text-dark dark:text-white">
            Website is Under Construction. Check back later!
          </h6>
          <Button asChild class="mt-6 mx-auto">
            <RouterLink to="/">Go Back to Home</RouterLink>
          </Button>
        </div>
      </div>
</template>