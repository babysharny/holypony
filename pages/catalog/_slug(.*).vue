<template lang="pug">
div
  .section
    Breadcrumbs(:crumbs="parents")

    h1.title Category page

    span route params:
    pre {{ $route.params }}

    span current category:
    pre {{ category }}

    span breadcrumbs:
    pre {{ parents }}
</template>

<script>
import Breadcrumbs from "~/components/Breadcrumbs";
export default {
  components: {Breadcrumbs},
  asyncData({ params, store }) {
    // console.log(params)
    const currentCategory = store.getters["catalog/getBySlug"](params.slug)
    const parents = store.getters["catalog/getParentsOfCategory"](currentCategory)
    return { parents }
  },
  computed: {
    category() {
      return this.$store.getters["catalog/getBySlug"](this.$route.params.slug)
    },
    categoryGroups() {
      return this.$store.getters["catalog/getGroups"]
    }
  }
}
</script>
