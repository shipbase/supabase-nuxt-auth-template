<script lang="ts" setup>
import { Button } from '@/components/ui/button'

definePageMeta({
  middleware: ['auth'],
})

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) {
  }
  navigateTo('/login', { replace: true })
}
</script>

<template>
  <div>
    <header class="flex px-4 py-2">
      <h1 class="text-xl font-semibold">Dashboard</h1>
      <Button class="ml-auto" size="sm" variant="secondary" @click="signOut">
        SignOut
      </Button>
    </header>
    <main class="px-4">Welcome
      <p>
        <pre>
          {{ JSON.stringify(user, null, 2) }}
        </pre>
      </p>
    </main>
  </div>
</template>
