<template lang="pug">
nav.breadcrumb(aria-label='breadcrumbs')
  ul
    li(
      v-for="(crumb, i) in crumbs"
      :class="{'is-active': i === crumbs.length - 1}"
    )
      nuxt-link(
        v-if="!crumb"
        tag="a"
        to="/"
      ) Главная
      nuxt-link(
        v-else
        tag="a"
        :to="'/catalog/' + crumb.url"
      ) {{ crumb.name }}
</template>

<script>
export default {
  props: {
    crumbs: Array
  }
}
</script>
