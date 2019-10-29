<template>
  <div class="about">
    <form autocomplete="off">
      <input v-model="added.name" type="text" placeholder="Enter name" required>
      <input v-model="added.age" type="number" placeholder="Enter age">
      <input v-model="added.email" type="email" placeholder="Enter email" required>
      <input v-model="added.password" type="password" placeholder="Enter password" pattern=".{6}" required>

      <input type="submit" @click.prevent="$store.dispatch('ADD_PERSON', added)">
    </form>
    <span>{{ $store.state.personModule.message }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      added: {
        name: '',
        age: Number,
        email: '',
        password: ''
        }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
