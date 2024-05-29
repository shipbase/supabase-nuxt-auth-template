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

const loading = ref(false)

const supabase = useSupabaseClient()
const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
})

const signUp = async (e: Event) => {
  e.preventDefault()
  try {
    loading.value = true
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          firstName: formData.firstName,
          lastName: formData.lastName,
        },
      },
    })
    if (error) throw error
    console.log('🚀 ~ signUp ~ data:', data)
  } catch (err) {
    alert(err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <Card class="mx-auto max-w-sm">
    <CardHeader>
      <CardTitle class="text-xl"> Sign Up </CardTitle>
      <CardDescription>
        Enter your information to create an account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form @submit="signUp">
        <div class="grid gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="grid gap-2">
              <Label for="first-name">First name</Label>
              <Input
                id="firstName"
                placeholder="Max"
                required
                v-model="formData.firstName"
              />
            </div>
            <div class="grid gap-2">
              <Label for="last-name">Last name</Label>
              <Input
                id="lastName"
                placeholder="Robinson"
                required
                v-model="formData.lastName"
              />
            </div>
          </div>
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              v-model="formData.email"
            />
          </div>
          <div class="grid gap-2">
            <Label for="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              v-model="formData.password"
            />
          </div>
          <Button type="submit" class="w-full"> Create an account </Button>
          <Button variant="outline" class="w-full">
            Sign up with GitHub
          </Button>
        </div>
      </form>
      <div class="mt-4 text-center text-sm">
        Already have an account?
        <a href="/login" class="underline"> Sign in </a>
      </div>
    </CardContent>
  </Card>
</template>
