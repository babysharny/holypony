<template lang="pug">
  nav.navbar(role='navigation' aria-label='main navigation')
    .navbar-brand
      nuxt-link.navbar-item(to="/" tag="a")
        img(src='https://bulma.io/images/bulma-logo.png' width='112' height='28')
    .navbar-menu
      .navbar-end
        .navbar-item.is-hoverable
          a.navbar-link(@click="switchCatalogMenu")
            | Каталог
</template>
<script>
export default {
  methods: {
    switchCatalogMenu () {
      this.$store.dispatch('catalog/switchMenu')
    }
  }
}
</script>
