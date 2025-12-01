// server/middleware/adminAuth.ts
export default defineEventHandler((event) => {
  const authHeader = event.req.headers['authorization']

  // Beispiel: einfache Prüfung auf festen Token
  if (!authHeader || authHeader !== 'Bearer geheim') {
    return new Response('Unauthorized', { status: 401 })
  }

  // Optional: Log für Debugging
  console.log('Admin-Zugriff erlaubt')
})
