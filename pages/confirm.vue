<script lang="ts" setup>
const user = useSupabaseUser()

watch(
  user,
  () => {
    if (user.value) navigateTo('/dashboard')
  },
  { immediate: true },
)
</script>

<template>
  <div>Logging in...</div>
</template>
