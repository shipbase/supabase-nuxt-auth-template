<script lang="ts" setup>
import { IconGitHub } from '@/components/ui/icons'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="container flex h-20 items-center justify-between py-4">
      <span class="text-xl">Supabase Auth Template</span>

      <Button variant="secondary" size="sm" @click="navigateTo('/login')"
        >Login</Button
      >
    </header>
    <main class="flex-1">
      <section class="py-6 md:py-12 lg:py-24">
        <div class="flex flex-col items-center gap-4">
          <h1
            class="font-heading bg-gradient-to-br from-foreground from-30% to-foreground/40 bg-clip-text text-center text-3xl text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span>Supabase Auth</span><br /><span>Template</span>
          </h1>
          <p
            class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          >
            A supabase auth starter template build with nuxt, shadcn-vue, and
            more
          </p>
          <div class="flex gap-2">
            <Button @click="navigateTo('/dashboard')">Get Started</Button>
          </div>
        </div>
      </section>
    </main>
    <footer
      class="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0"
    >
      <div
        class="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"
      >
        <p class="text-center text-sm leading-loose md:text-left">
          Built by
          <a
            target="_blank"
            rel="noreferrer"
            class="font-medium underline underline-offset-4"
            >iamdin</a
          >. The source code is available on
          <a
            target="_blank"
            rel="noreferrer"
            class="font-medium underline underline-offset-4"
            >GitHub </a
          >.
        </p>
      </div>
      <!-- Theme Toggle -->
    </footer>
  </div>
</template>
