<template lang="pug">
div
  section.hero.is-success
    .hero-body
      .container
        h1.title
          | {{ doc.title }}
        h2.subtitle
          | {{ doc.description }}
  section.my-6
    .container
      .content
        nuxt-content(:document="doc")

</template>
<script>
export default {
  async asyncData ({ $content }) {
    const doc = await $content('tz').fetch()
    return { doc }
  }
}
</script>
