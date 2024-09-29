export default defineNuxtRouteMiddleware((to, from) => {
  const { $router } = useNuxtApp();

  const matchedRoute = $router.resolve(to.fullPath).matched.length > 0;

  if (!matchedRoute) {
    return navigateTo('/');
  }
});
