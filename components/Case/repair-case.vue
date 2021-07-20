<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        New Case
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        In Progress
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        Complete
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-item class="max-height:550px">
      <v-stepper-content step="1">
        <v-card flat>
          <fromCase />
        </v-card>
        <v-card flat justify="center" align="center" >
          <v-btn color="primary" @click="e1 = 2">
          Accept
        </v-btn>

        <v-btn text to="./status-page">
          Cancel
        </v-btn>
        </v-card>
        
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card flat>
          <fromRepair />
        </v-card>
<v-card flat justify="center" align="center" >
          <v-btn color="primary" >
          Continue
        </v-btn>

        <v-btn text @click="e1 = 1">
          Cancel
        </v-btn>
        </v-card>
      </v-stepper-content>
    </v-stepper-item>
  </v-stepper>
</template>
<script>
import fromCase from "/components/Case/from-case/from-case-repair.vue";
import fromRepair from "/components/Case/from-case/from-repair-case.vue";
export default {
  components: {
    fromCase,
    fromRepair
  },
  data() {
    return {
      e1: 1
    };
  }
};
</script>
