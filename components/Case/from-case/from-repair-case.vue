<template>
  <v-card class="white" flat>
    <v-row class="white" flat>
      <v-col cols="12" xs="6" sm="12" md="12" lg="6">
        <v-card v-if="cases.caseID == $route.params.detail" flat>
          <v-card-title class="headline">
            <strong>IT Support Recipient</strong>
          </v-card-title>
          <v-card-text class="center subtitle-1 dark--text">
            <div class="text--primary pb-2">
              <v-icon size="24" color="grey darken-2"
                >mdi-account-tie-outline</v-icon
              >
              <strong>Name :</strong>&ensp;{{ receivers.firstName }}&ensp;{{
                receivers.lastName
              }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="6" sm="12" md="12" lg="6">
        <v-card flat>
          <v-card-title class="headline">
            <strong>Case Repair Information </strong>
          </v-card-title>
          <v-card-text class="subheading">
            <v-textarea
              v-model="form.description"
              label="Description"
              filled
              solo
              rows="4"
              no-resize
              class="height:50px"
            >
            </v-textarea>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <div class="text--primary pb-4 text-body-1">
                  <v-file-input
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick an avatar"
                    prepend-icon="mdi-camera"
                    label="Image"
                  ></v-file-input>
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <div class="text--primary pb-4 text-body-1 ">
                  <v-file-input
                    truncate-length="10"
                    label="File Other"
                  ></v-file-input>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card flat justify="center" align="center" v-if="cases.statusID == 2">
          <v-btn
            color="accent"
            @click="
              accept();
              refresh();
            "
            >Continue</v-btn
          >
          <v-btn color="primary">Home</v-btn>
          <v-btn color="error">Cancel</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    id: { type: String, default: "" },
    cases: { type: Object, default: () => {} },
    informers: { type: Object, default: () => {} },
    receivers: { type: Object, default: () => {} }
  },
  data() {
    return {
      form: {
        id: this.id,
        description: ""
      }

      // cases: [
      //   {
      //     id: "1",
      //     name: "Apichai",
      //     type: "Incident",
      //     system: "System Error",
      //     module: "Module Error",
      //     description:
      //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nobis a at voluptates culpa optio amet! Inventore deserunt voluptatem maxime a veniam placeat, eos impedit nulla quos? Officiis, aperiam ducimus.",
      //     date: "21-06-2021",
      //     time: "12:30",
      //     priority: "1",
      //     status: "1"
      //   }
      // ]
    };
  },
  methods: {
    refresh() {
      setTimeout(function() {
        location.reload();
      }, 1);
    },
    async accept() {
      await this.$store
        .dispatch("receiver/update", this.form)
        .then(response => {
          // Action Success

          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
