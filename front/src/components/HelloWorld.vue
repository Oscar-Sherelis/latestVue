<template>
  <div class="hello">
    <button @click="$store.dispatch('COLLECT_DATA')">Show data</button>
    <form v-for="person of $store.state.personModule.people" :key="person.id">
      <input v-model="person.name">
      <input v-model="person.age">
      <input v-model="person.email">
      <input v-model="person.password">

      <button class="delete" @click.prevent="$store.dispatch('DELETE_PERSON', id = person._id)">Delete</button>
      <button class="update" @click.prevent="$store.dispatch('UPDATE_PERSON', { _id: person._id, name: person.name, age: person.age, password: person.password})">Update</button>
    </form>
    <span>{{$store.state.personModule.deleteUpdate}}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

input,
button {
  padding: 10px;
}

.delete,
.update {
  border: none;
  border-radius: 5px;
}

.delete {
  background-color: rgb(185, 1, 1)
}

.update {
  background-color: rgb(5, 143, 143);
}
</style>
