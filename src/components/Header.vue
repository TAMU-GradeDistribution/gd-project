<script setup lang="ts">
const { t, locale, availableLocales } = useI18n()

const showSettings = ref(false)
const toggleSettings = () => showSettings.value = !showSettings.value
const setLocale = (selection: string) => locale.value = selection
</script>

<template>
  <header>
    <div class="flex border-b-1 bg-light dark:bg-dark border-stone-700 px-5 mb-3">
      <div alt="GDProject {{ t('header.logo') }}" class="text-2xl my-1 sm:text-4xl sm:my-2" i-carbon-subflow />
      <div class="text-2xl my-auto mx-5 font-900 sm:text-4xl">
        The GDProject
      </div>
      <div class="grow" />
      <button class="icon-btn !outline-none m-auto ml-5 sm:text-xl" :title="t('header.toggle_dark')" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>
      <button class="icon-btn !outline-none m-auto ml-5 sm:text-xl" :title="t('header.toggle_settings')" @click="toggleSettings()">
        <div i-carbon-settings />
      </button>
    </div>

    <!-- TODO: finish making the settings pane -->
    <div v-if="showSettings" class="flex absolute left-0 top-0 w-screen h-screen bg-opacity-50 bg-black items-center justify-center" @click="toggleSettings()">
      <div class="relative justify-center w-66.66vw h-66.66vh rd-4 outline outline-dark dark:outline-light outline-1 bg-light dark:bg-dark" @click.stop="">
        <button class="absolute icon-btn !outline-none text-2xl top-2 right-2" :title="t('header.toggle_settings')" @click="toggleSettings()">
          <div i-carbon-close />
        </button>
        <div class="text-3xl font-bold my-10">
          {{ t('settings.settings') }}
        </div>
        <div class="my-5">
          <!-- FIXME: need to lock scrolling while settings are open -->
          <!--
          <VSelect
            v-model="locale"
            class="inline-block align-middle w-50"
            :items="availableLocales"
            :label="t('settings.select_lang')"
            prepend-inner-icon="i-carbon-language"
            variant="outlined"
            @update:model-value="setLocale"
          />
          -->
        </div>
      </div>
    </div>
  </header>
</template>
