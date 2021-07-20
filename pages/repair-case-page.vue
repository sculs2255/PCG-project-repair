<template>
  <v-container class=" lighten-5 pt-10 pa-0 ma-0" fix>
    <v-row no-gutters justify="center" max-height="550px">
      <v-col cols="8"  class="pa-4 " >
        <repairCase />
        
      </v-col>
      <v-col cols="2" > 
        <comment />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import repairCase from "/components/Case/repair-case.vue"
import comment from "/components/comment/comment.vue"

export default {
  components: {
    repairCase,
    comment,
  }
};
</script>
