<template>
  <v-container class=" lighten-5 pt-10 pa-0 ma-0" fix>
    <v-row no-gutters justify="center" max-height="550px">
      <v-col cols="12" xs="12" sm="12" md="8" lg="9" xl="8" class="pa-4 ">
        <repairCase />
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4" lg="3" xl="2" class="pa-4 ">
        <comment-case />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import repairCase from "/components/Case/RepairCase/repair-case.vue";
import comment from "/components/comment/comment-Case/comment-case.vue";



export default {
  components: {
    repairCase,
    comment
  },
  validate(data) {
    return /^\d+$/.test(data.caseID)
  },

};
</script>
