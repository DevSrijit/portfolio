<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
const { locale } = useI18n()

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})

useSeoMeta({
  author: 'Srijit Ghosh',
  description: 'This is Srijit\'s personal website. Srijit is a student, developer, hardware lover and certified geek. He loves to build things that make a difference.',
  ogType: 'website',
  ogTitle: appConfig.appName,
  ogSiteName: 'Srijit&apos;s Personal Website',
  ogDescription: 'This is Srijit Ghosh\'s personal website. Srijit is a student, developer, and designer. He loves to build things that make a difference.',
  twitterDescription: 'This is Srijit Ghosh\'s personal website. Srijit is a student, developer, and designer. He loves to build things that make a difference.',
  ogUrl: () => runtimeConfig.public.siteUrl,
  ogLocale: () => locale.value,
  twitterTitle: appConfig.appName,
  twitterCard: 'summary_large_image',
  twitterSite: appConfig.twitterUsername,
  twitterCreator: appConfig.twitterUsername,
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style scoped>

</style>
