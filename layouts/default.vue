<template lang="pug">
  .main
    Navbar
    CatalogMenuModal
    Nuxt
</template>

<script>
import Navbar from "@/components/Navbar";
import CatalogMenuModal from "@/components/CatalogMenuModal";

export default {
  components: {
    CatalogMenuModal,
    Navbar
  },
  async middleware({ store }) {
    await store.dispatch('catalog/fetchCategories')
  },
}
</script>

