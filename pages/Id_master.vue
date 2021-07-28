<template>
  <v-container class=" lighten-5 pt-10 pa-0 ma-0" fix>
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12"  sm="8" md="10" class="pa-4 ">
        <idadmin />
      </v-col>
      <v-col cols="12"  sm="4" md="2"> 
        <comment />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import idadmin from "/components/Master/master.vue"
import comment from "/components/comment/comment.vue"

export default {
  components: {
    idadmin,
    comment,
  }
};
</script>
