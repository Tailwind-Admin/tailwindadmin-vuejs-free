<template>


  <div class="p-5 lg:bg-transparent lg:dark:bg-transparent bg-lightprimary lg:fixed top-0 z-50 w-full">
    <FullLogo />
  </div>

  <!-- Main Layout -->
  <div class="relative overflow-hidden lg:h-screen">

    <div class="grid grid-cols-12 gap-3 lg:h-screen bg-white dark:bg-dark">

      <div
        class="xl:col-span-8 lg:col-span-7 col-span-12 bg-lightprimary dark:bg-lightprimary lg:block hidden relative overflow-hidden">
        <LeftSidebarPart />
      </div>


      <div class="xl:col-span-4 lg:col-span-5 col-span-12 sm:px-12 p-5">


        <div class="flex lg:h-screen items-center px-3 lg:justify-start justify-center">

          <div class="max-w-[420px] w-full mx-auto">

            <h3 class="text-2xl font-bold my-3">Forgot Password</h3>

            <p class="text-darklink text-sm font-medium">
              Please enter the email address associated with your account and
              we will email you a link to reset your password.
            </p>
            <AuthForgotPassword />
            <Button variant="lightprimary" asChild class="w-full mt-4 rounded-md">
              <RouterLink to="/auth/auth1/login">Back to Login </RouterLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
// Import child components
import AuthForgotPassword from "@/views/authentication/authforms/AuthForgotPassword.vue";
import FullLogo from "@/layouts/full/logo/Logo.vue";
import LeftSidebarPart from "../LeftSidebarPart.vue";
import Button from "@/components/ui/button/Button.vue";
import { RouterLink } from 'vue-router'

</script>
