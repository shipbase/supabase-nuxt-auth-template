<script lang="ts" setup>
import { Button } from '@/components/ui/button'

definePageMeta({
  middleware: ['auth'],
})

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const loading = ref(false)
const signOut = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    navigateTo('/login', { replace: true })
  } catch (err) {
    alert(err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <header class="flex px-4 py-2">
      <h1 class="text-xl font-semibold">Dashboard</h1>
      <Button
        class="ml-auto"
        size="sm"
        variant="secondary"
        :disabled="loading"
        @click="signOut"
      >
        {{ loading ? 'Loading...' : 'Sign Out' }}
      </Button>
    </header>
    <main class="px-4">
      <p>Welcome</p>
      <pre>{{ JSON.stringify(user, null, 2) }}</pre>
    </main>
  </div>
</template>
