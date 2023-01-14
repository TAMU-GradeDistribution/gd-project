<template>
  <main class="bg-[var(--light-1)] dark:bg-[var(--dark-1)]" flex flex-col text-center text-gray-700 dark:text-gray-200 min-h-screen>
    <Header />
    <div md:hidden dark:bg-op-50 bg-red>
      <div flex flex-row w-fit mx-auto>
        <div i-carbon:warning-alt my-auto />
        &nbsp;This website is optimized for larger screens.
      </div>
    </div>
    <RouterView />
    <Footer />
  </main>
</template>
