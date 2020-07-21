<template lang="pug">
  section.catalog-menu-modal(v-show='showMenu')
    .container
      CategoryMenu
</template>

<script>
import CategoryMenu from '@/components/CatalogMenu'
export default {
  components: { CategoryMenu },
  computed: {
    showMenu () {
      return this.$store.state.catalog.showMenu
    }
  }
}
</script>
<style lang="scss" scoped>
.catalog-menu-modal {
  position: absolute;
  top: 3.35rem;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: white;
  padding-top: 1rem;
  padding-bottom: 2rem;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15);
}
</style>
