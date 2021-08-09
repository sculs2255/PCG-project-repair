<template>
  <div class="container">
    <form @submit="onSubmit">
      <v-col cols="10">
        <v-text-field v-model="first" label="User Name" outlined></v-text-field>
      </v-col>

      <v-col cols="10">
        <v-text-field v-model="last" label="Password" outlined></v-text-field>
      </v-col>
      <v-btn elevation="2" cols="10" >Login</v-btn>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
