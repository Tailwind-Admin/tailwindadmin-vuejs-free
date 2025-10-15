<script setup>
import { RouterLink } from 'vue-router'


import FullLogo from '@/layouts/full/logo/Logo.vue'

import LeftSidebarPart from '../LeftSidebarPart.vue'
import SocialButtons from '../authforms/SocialButtons.vue'
import AuthRegister from '../authforms/AuthRegister.vue'
</script>

<template>

    <!-- Top logo bar -->
    <div class="p-5 lg:bg-transparent lg:dark:bg-transparent bg-lightprimary lg:fixed top-0 z-50 w-full">
      <FullLogo />
    </div>

    <!-- Main content -->
    <div class="relative overflow-hidden lg:h-screen">
      <div class="grid grid-cols-12 gap-3 lg:h-screen bg-white dark:bg-dark">
        
        <!-- Left sidebar (hidden on smaller screens) -->
        <div class="xl:col-span-8 lg:col-span-7 col-span-12 bg-lightprimary dark:bg-lightprimary lg:block hidden relative overflow-hidden">
          <LeftSidebarPart />
        </div>

        <!-- Register form area -->
        <div class="xl:col-span-4 lg:col-span-5 col-span-12 sm:px-12 p-5">
          <div class="flex lg:h-screen items-center px-3 lg:justify-start justify-center">
            <div class="max-w-[420px] w-full mx-auto">
              <h3 class="text-2xl font-bold">Welcome to TailwindAdmin</h3>
              <p class="text-darklink text-sm font-medium">Your Admin Dashboard</p>
              
              <SocialButtons title="or sign in with" />
              <AuthRegister />
              
              <div class="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-center">
                <p>Already have an Account?</p>
                <RouterLink
                  to="/auth/auth1/login"
                  class="text-primary text-sm font-medium"
                >
                  Sign In
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>

</template>
