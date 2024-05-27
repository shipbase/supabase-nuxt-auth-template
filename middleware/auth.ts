export default defineNuxtRouteMiddleware(() => {
  const user = useSupabaseUser()

  console.log('defineNuxtRouteMiddleware', user.value);
  
  if (!user.value) {
    return navigateTo('/')
  }
})
