<script setup lang="ts">
const { t } = useI18n()
const router = useRouter()

const selectedUniversity = ref('')
const universities = ref([] as Object[])
universities.value.push({ label: 'University of California, Berkeley', value: 'UCB' })
const selectUniversity = (choice: { label: string; value: string }) => { selectedUniversity.value = choice.value; console.log(choice) }
const goToUniversity = () => {
  if (selectedUniversity.value) {
    console.log('begin search for ', selectedUniversity.value)
    router.push(encodeURIComponent(selectedUniversity.value))
  }
}
</script>

<template>
  <div class="flex flex-col grow justify-evenly px-2">
    <div class="flex flex-col p-2 mb-3">
      <div class="mx-auto">
        <span class="text-lg font-900">{{ t('index.what_university') }}</span>
        <br>
        <VSelect
          class="style-chooser w-fit min-w-80 mx-auto"
          :option:selected="selectUniversity"
          :options="universities"
          :placeholder="t('index.select_university')"
        />
        <button class="mt-2 btn text-lg font-900 w-fit">
          <div class="flex" @click="goToUniversity">
            {{ t('button.go') }} <div class="text-2xl my-auto" i-carbon-caret-right />
          </div>
        </button>
      </div>
    </div>
    <div class="p-2 mb-3">
      <span class="text-lg font-900">{{ t('index.not_sure') }}</span>
      <br>
      This website lets you check out the grade distribution of courses at your university.
      <br>
      There are a ton of good reasons to do this before picking a class or professor.
      <br>
      For more information check out the
      <RouterLink class="icon-btn" to="/about" :title="t('link.about')">
        about <div class="inline-block vertical-middle" i-carbon-help />
      </RouterLink>
      page.
    </div>
    <div class="p-2 mb-3">
      <span class="text-lg font-900">Don't see your university?</span>
      <br>
      Request it
      <!-- TODO: link directly to issue template -->
      <a class="icon-btn" title="Request University" href="https://github.com/GDProject/gd-website/issues/">
        here. <div class="inline-block vertical-middle" i-carbon-request-quote />
      </a>
    </div>
  </div>
</template>

<style>
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu,
.style-chooser .vs__selected {
  background: rgb(34, 34, 34);
  border: 1px solid;
  border-color: white;
  color: rgb(246, 246, 246);
}
.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: rgb(246, 246, 246);
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
