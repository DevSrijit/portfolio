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
  title: 'Srijit Ghosh - Developer & Technologist',
  meta: [
    {
      name: 'description',
      content: 'Srijit Ghosh is a student, developer, and designer. He loves to build things that make a difference.',
    },
    {
      name: 'keywords',
      content: 'srijit, srijit ghosh, srijit ghosh developer, srijit developer, srijit ghosh coder, srijit coder, srijit ghosh teenager, srijit teenager, srijit .life, srijit ghosh .life, teenager srijit, teenager srijit ghosh, srijit hackclub, srijit ghosh hackclub, srijit ghosh hackclubber, srijit hackclubber, srijit codeday, srijit ghosh codeday, srijit codeday kolkata, srijit ghosh codeday kolkata, codeday kolkata, codeday, hackclub, the code cafe, the code cafe leaders, the code cafe hackclub, the code cafe founder',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      httpEquiv: 'Content-Type',
      content: 'text/html; charset=utf-8',
    },
    {
      name: 'language',
      content: 'English',
    },
    {
      name: 'author',
      content: 'Srijit Ghosh',
    },
    {
      property: 'og:title',
      content: 'Srijit Ghosh - Developer & Technologist',
    },
    {
      property: 'og:description',
      content: 'Srijit Ghosh is a student, developer, and designer. He loves to build things that make a difference.',
    },
    {
      property: 'og:image',
      content: 'https://cloud-fx6bgjeux-hack-club-bot.vercel.app/0portfolio.png',
    },
    {
      property: 'og:url',
      content: 'https://srijit.co',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ],
})

useSeoMeta({
  title: 'Srijit Ghosh - Developer & Technologist',
  ogTitle: 'Srijit Ghosh - Developer & Technologist',
  description: 'Srijit Ghosh is a student, developer, and designer. He loves to build things that make a difference.',
  ogDescription: 'Srijit Ghosh is a student, developer, and designer. He loves to build things that make a difference.',
  ogImage: 'https://cloud-fx6bgjeux-hack-club-bot.vercel.app/0portfolio.png',
  ogUrl: 'https://srijit.co',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Srijit Ghosh - Developer & Technologist',
  twitterDescription: 'Srijit Ghosh is a student, developer, and designer. He loves to build things that make a difference.',
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style scoped>

</style>
