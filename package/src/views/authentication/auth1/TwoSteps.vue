<template>
  <div>
  
    <div class="p-5 lg:bg-transparent lg:dark:bg-transparent bg-lightprimary lg:fixed top-0 z-50 w-full">
      <FullLogo />
    </div>


    <div class="relative overflow-hidden lg:h-screen ">
      <div class="grid grid-cols-12 gap-3 h-full bg-white dark:bg-dark">

 
        <div class="xl:col-span-8 lg:col-span-7 col-span-12 bg-lightprimary hidden lg:block relative">
          <LeftSidebarPart />
        </div>

      
        <div class="xl:col-span-4 lg:col-span-5 col-span-12 sm:px-12 p-5">
          <div class="flex lg:h-screen items-center px-3 lg:justify-start justify-center">
            <div class="max-w-[420px] w-full mx-auto">
              <h3 class="text-2xl font-bold my-3">Two Steps Verification</h3>
              <p class="text-darklink text-sm font-medium">
                We sent a verification code to your mobile. Enter the code from the mobile in the field below.
              </p>
              <h6 class="text-sm font-bold my-4">******1234</h6>

          
              <AuthTwoSteps />

          
              <div class="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-left">
                <p>Didn't get the code?</p>
                <RouterLink to="/" class="text-primary text-sm font-medium">
                  Resend
                </RouterLink>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import FullLogo from '@/layouts/full/logo/Logo.vue'
import LeftSidebarPart from '../LeftSidebarPart.vue'
import AuthTwoSteps from '@/views/authentication/authforms/AuthTwoSteps.vue'
import { RouterLink } from 'vue-router'

</script>
