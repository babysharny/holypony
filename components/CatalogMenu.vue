<template lang="pug">
  div
    h1 Catalog
    .columns
      .column.is-4(
        v-for='parent in getCategoryGroups'
        )
        CategoriesList(
          :key='parent && parent.category_id'
          :parent='parent'
          )
</template>

<script>
import CategoriesList from '~/components/CategoriesList'

export default {
  components: {
    CategoriesList
  },
  computed: {
    getCategoryGroups () {
      return this.$store.getters['catalog/getGroups']
    }
  }
}
</script>
