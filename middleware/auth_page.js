export default defineNuxtRouteMiddleware((to, from) => {
    if (process.server) return; // Ignore middleware on the server-side

    const token = localStorage.getItem("token"); // ✅ Check if token exists

    if (!token) {
        return navigateTo("/login"); // 🔒 Redirect to login if no token
    }
});
