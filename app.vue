<template>
  <NuxtLayout>
    <NuxtPage />

    <ClientOnly>
      <NuxtSnackbar />
    </ClientOnly>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}

.page-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>
