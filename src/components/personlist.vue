<template>
    <div class="personlist">
        <h1>Person List Page</h1>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <td>fio</td>
                    <td>birth</td>
                    <td>address</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in persons" :key="person.id">
                    <td>{{ person.fio }}</td>
                    <td>{{ person.birth }}</td>
                    <td>{{ person.address }}</td>
                </tr>
            </tbody>
        </table>
    </div>      
</template>

<script>


export default {
  name: 'page-auth',
  data () {
    return {
      msg: 'Welcome to Personlist',
    }
  },
  computed: {
      persons() {
          return this.$store.state.persons;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table {
    margin-top: 2rem;
    box-shadow: 1px 1px 32px 1px rgba(44,62,5,0.62);
  }
  thead {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
  }
  tbody > tr {
    cursor: pointer;
  }
</style>