<template>
  <v-card class="white" v-if="cases.caseID == $route.params.detail" flat>
    <v-row class="white" flat>
      <v-col cols="12" xs="6" sm="12" md="12" lg="6">
        <v-card flat>
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
        <v-card style="background-color:#EEEEEE">
          <div>
            <v-card-title class="headline">
              <strong v-if="cases.statusID == 3">Case Repair Information </strong>
                <strong v-if="cases.statusID == 4">Case Cancel Information </strong>
            </v-card-title>
            <v-card-text class="subheading">
              <div class="text--primary pb-2" v-if="cases.statusID == 3">
                <v-icon size="23" color="grey darken-2"
                  >mdi-file-document-outline</v-icon
                >
                <strong>Description :</strong>&ensp;{{ receivers.description }}
              </div>
              <div class="text--primary pb-2" v-if="cases.statusID == 4">
                <v-icon size="23" color="grey darken-2"
                  >mdi-file-document-outline</v-icon
                >
                <strong>Reason :</strong>&ensp;{{ cancels.reason }}
              </div>
              <div class="text--primary pb-2" v-if="cases.statusID == 3">
                <v-icon size="23" color="grey darken-2">mdi-paperclip</v-icon>
                <strong>File :</strong>&ensp;{{ receivers.file }}
              </div>
              <!-- <div class="text--primary pb-4 text-body-1">
                Image :
                <v-chip
                  v-if="image"
                  class="ma-2"
                  close
                  outlined
                  color="blue"
                  @click:close="image = false"
                >
                  Image 1
                </v-chip>
              </div>

              <div class="text--primary pb-4 text-body-1 ">
                File :
                <v-chip
                  v-if="file"
                  class="ma-2"
                  close
                  color="green"
                  outlined
                  @click:close="file = false"
                >
                  file 1
                </v-chip>
              </div> -->
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card flat justify="center" align="center" v-if="cases.statusID == 3 || cases.statusID == 4">
          <v-btn
          v-if="cases.statusID == 3"
            color="success"
            @click="
              accept();
              refresh();
            "
            >Edit</v-btn
          >
          <v-btn color="red white--text">Close</v-btn>
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
    receivers: { type: Object, default: () => {} },
    cancels: { type: Object, default: () => {} }
  },
  data() {
    return {
      image: true,
      file: true
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
        .dispatch("receiver/update", { id: this.id })
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
