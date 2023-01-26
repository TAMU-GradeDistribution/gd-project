<template>
  <header flex m-3>
    <RouterLink
      to="/"
      title="Logo"
    >
      <div i-carbon:subflow text-2xl sm:text-4xl />
    </RouterLink>
    <div grow />
    <nav flex my-auto gap-x5 sm:text-xl>
      <RouterLink
        to="/"
        title="Home"
        icon-btn
      >
        <div i-carbon:home />
      </RouterLink>
      <RouterLink
        to="/about"
        title="About"
        icon-btn
      >
        <div i-carbon:help />
      </RouterLink>
      <a
        href="https://github.com/GDProject/gd-website"
        target="_blank"
        title="GitHub"
        icon-btn
      >
        <div i-carbon:logo-github />
      </a>
      <button
        title="Toggle Dark Mode"
        icon-btn
        @click="toggleDark()"
      >
        <div i="carbon-sun dark:carbon-moon" />
      </button>
    </nav>
  </header>
</template>
