<template>
  <v-stepper v-model="e1" alt-labels max-height="700px" >
    <v-stepper-header >
      <v-stepper-step :complete="e1 > 1" step="1" class="success--text">
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

    <v-stepper-item v-model="dialog">
      <v-stepper-content step="1" class="pa-0 pt-1">
        <v-card flat class="pt-1 pb-1">
          <fromCase />
        </v-card>
        <v-card
          flat
          justify="center"
          align="center"
          class="pa-3"
          color="grey lighten-3"
        >
          <v-btn color="pri" @click="e1 = 2">
            Accept
          </v-btn>

          <v-btn color="accent" to="./status-page"> <v-icon>mdi-home</v-icon> Home </v-btn>
          <v-btn color="error" depressed @click="dialog = true">
            Cancel
          </v-btn>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="2" max-height="500" class="pa-0 pt-1">
        <v-card flat class="pt-1 pb-1">
          <fromRepair />
        </v-card>
        <v-card
          flat
          justify="center"
          align="center"
          class="pa-3"
          color="grey lighten-3"
        >
          <v-btn color="pri"  @click="e1 = 3">
            Continue
          </v-btn>

          <v-btn  color="accent" to="./status-page"> <v-icon>mdi-home</v-icon> Home </v-btn>
          <v-btn color="error" @click="dialog = true">
            Cancel
          </v-btn>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="3" class="pa-0 pt-1">
        <v-card flat class="pt-1 pb-1">
          <fromComplete />
        </v-card>
        <v-card
          flat
          justify="center"
          align="center"
          class="pa-3"
          color="grey lighten-3"
        >
          <v-btn color="pri" to="./status-page">
            Complete
          </v-btn>

          <v-btn color="accent" @click="e1 = 2"> Edit </v-btn>
        </v-card>
      </v-stepper-content>
    </v-stepper-item>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Cancel Case</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-autocomplete
                  :items="[
                    'Skiing',
                    'Ice hockey',
                    'Soccer',
                    'Basketball',
                    'Hockey',
                    'Reading',
                    'Writing',
                    'Coding',
                    'Basejump'
                  ]"
                  label="Cause cancel List"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-textarea
                  label="Cause cancel"
                  filled
                  solo
                  rows="4"
                  no-resize
                  class="height:50px"
                  required
                >
                </v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="primary" @click="dialog = false" to="./status-page">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-stepper>
</template>
<script>
import fromCase from "/components/Case/from-case/from-case-repair.vue";
import fromRepair from "/components/Case/from-case/from-repair-case.vue";
import fromComplete from "/components/Case/from-case/from-complete.vue";

export default {
  components: {
    fromCase,
    fromRepair,
    fromComplete
  },
  data() {
    return {
      dialog: false,
      e1: 1
    };
  }
};
</script>
