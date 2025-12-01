// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const supabase = useNuxtApp().$supabase
  const user = useSupabaseUser()

  // Wenn kein User eingeloggt ist → redirect zur Landing Page
  if (!user.value) {
    return navigateTo('/')
  }

  // Beispiel: nur Admins dürfen /admin sehen
  // Angenommen, du hast in Supabase ein Feld "role" in der Tabelle "profiles"
  // mit Werten wie "admin" oder "villain"
  if (to.path.startsWith('/admin')) {
    const role = user.value?.user_metadata?.role
    if (role !== 'admin') {
      return navigateTo('/')
    }
  }
})
