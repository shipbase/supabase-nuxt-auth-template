<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

definePageMeta({
  layout: 'auth',
})

const formData = reactive({
  email: '',
  password: '',
})
const loading = ref(false)

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const config = useRuntimeConfig();

const singInWithPassword = async (e: Event) => {
  e.preventDefault()
  try {
    loading.value = true
    const { data, error } = await supabase.auth.signInWithPassword(formData)
    if (error) throw error
    console.log('🚀 ~ singInWithPassword ~ data:', data)
  } catch (err) {
    alert(err)
  } finally {
    loading.value = false
  }
}

const signInWithGithub = async (e: Event) => {
  e.preventDefault()
  try {
    loading.value = true
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${config.public.sitURL}/confirm`,
      },
    })
    if (error) throw error
    console.log('🚀 ~ signInWithGithub ~ data:', data)
  } catch (err) {
    alert(err)
  } finally {
    loading.value = false
  }
}

watchEffect(async () => {
  if (user.value) {
    navigateTo('/dashboard', { replace: true })
  }
})
</script>

<template>
  <Card class="mx-auto max-w-sm">
    <CardHeader>
      <CardTitle class="text-2xl"> Login </CardTitle>
      <CardDescription>
        Enter your email below to login to your account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form @submit="singInWithPassword">
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a href="#" class="ml-auto inline-block text-sm underline">
                Forgot your password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              v-model="formData.password"
              required
            />
          </div>
          <Button :disabled="loading" type="submit" class="w-full">
            {{ loading ? 'Loading...' : 'Login' }}
          </Button>
          <Button
            :disabled="loading"
            variant="outline"
            class="w-full"
            @click="signInWithGithub"
          >
            {{ loading ? 'Loading...' : 'Login with Github' }}
          </Button>
        </div>
      </form>
      <div class="mt-4 text-center text-sm">
        Don't have an account?
        <a href="/register" class="underline"> Sign up </a>
      </div>
    </CardContent>
  </Card>
</template>
