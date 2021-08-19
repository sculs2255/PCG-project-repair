<template>
  <v-container class=" lighten-5 pt-10 pa-0 ma-0" fix>
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12"  sm="8" md="10" class="pa-4 ">
        <idprofile/>
      </v-col>
     
    </v-row>
  </v-container>
</template>

<script>

import idprofile from "/components/navbar/Profile.vue"


export default {
  components: {
    idprofile,
    
  }
};
</script>
