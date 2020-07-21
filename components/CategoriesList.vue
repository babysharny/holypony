<template lang="pug">
  .panel
    nuxt-link.panel-block(
      tag='a'
      v-for='c in categories'
      :key='c.category_id'
      :to="'/catalog/' + c.url"
      :class="{ 'is-active': activeId === c.category_id }"
      @click.native='closeMenu'
      @mouseover.native='select(c)'
      )
      | {{ c.name }}
</template>

<script>
export default {
  name: 'CategoriesList',
  props: {
    parent: Object
  },
  data() {
    return {
      activeId: null
    }
  },
  computed: {
    categories() {
      return this.$store.getters["catalog/getChildren"](this.parent)
    },
  },
  methods: {
    select(category) {
      this.activeId =  category.category_id
      this.$store.dispatch('catalog/selectCategory', category)
    },
    closeMenu() {
      this.$store.dispatch('catalog/switchMenu')
    }
  }
}
</script>

<style scoped>
.panel-block.is-active {
  color: green;
}
</style>
