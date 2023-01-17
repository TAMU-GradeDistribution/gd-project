<template>
  <div
    class="bg-[var(--light-1)] dark:bg-[var(--dark-1)]"
    flex flex-col min-h-screen text-gray-700 dark:text-gray-200
  >
    <Header />
    <div md:hidden dark:bg-op-50 bg-red>
      <div flex w-fit mx-auto>
        <div i-carbon:warning-alt my-auto />
        &nbsp;This website is optimized for larger screens.
      </div>
    </div>
    <RouterView />
    <Footer />
  </div>
</template>
