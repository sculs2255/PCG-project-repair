<template>
  <v-container class=" lighten-5 pt-10 pa-0 ma-0" fix>
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12" xs="12" sm="12" md="8" lg="9" xl="8" class="pa-3 " >
        <iduser/>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4" lg="3" xl="2" class="pa-3 ">
        <comment />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import iduser from "/components/Master/user.vue"
import comment from "/components/comment/comment.vue"

export default {
  components: {
    iduser,
    comment,
  }
};
</script>
