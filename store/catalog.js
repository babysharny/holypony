// const URL = 'http://127.0.0.1:8080/data.json'
// const URL = 'http://127.0.0.1:8080/data2.json'
const URL = 'http://api.holypony.ru/catalog/categories?limit=0'

export const state = () => {
  return {
    showMenu: false,
    activeCategory: null,
    list: []
  }
}

export const getters = {

  getChildren: state => parent => {
    const parentId = parent ? parent.category_id : null
    const list = state.list.filter(c => c.parent_id === parentId)
    return list
  },

  getGroups: (state, getters) => {
    return getters.getParentsOfCategory(state.activeCategory)
  },

  getParentsOfCategory: state => category => {
    let activeCategory = category
    const categories = state.list

    const groups = [];
    while (activeCategory) {
      groups.unshift(activeCategory);
      activeCategory = categories.find(c => c.category_id === activeCategory.parent_id);
    }
    // TODO Remove this
    groups.unshift(null);
    return groups
  },

  getBySlug: state => slug => {
    return state.list.find(c => c.url === slug)
  }
}

export const actions = {

  async fetchCategories({ commit, state }) {
    if (state.list.length > 0) {
      return;
    }
    const { items } = await this.$axios.$get(URL)
    commit('setCategories', items)
  },

  selectCategory({ commit }, category) {
    commit('setActiveCategory', category)
  },

  switchMenu({ commit, state: { showMenu } }) {
    commit('setMenuShow', !showMenu)
  },
  closeMenu({ commit }) {
    commit('setMenuShow', false)
  },
  openMenu({ commit }) {
    commit('setMenuShow', true)
  }
}

export const mutations = {

  setCategories(state, payload) {
    state.list = payload
  },

  setActiveCategory(state, category) {
    state.activeCategory = category
  },

  setMenuShow(state, status) {
    state.showMenu = status
  }
}
