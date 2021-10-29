<template>
  <v-card class="white" flat>
    <v-row class="white" flat>
      <v-col cols="12" xs="6" sm="12" md="12" lg="6">
        <v-card v-if="cases.caseID == $route.params.detail" flat>
          <v-card-title class="headline">
            <v-icon size="40" color="grey darken-2"
              >mdi-clipboard-list-outline</v-icon
            >
            <strong>Case ID :</strong>&ensp;{{ cases.caseID }}
          </v-card-title>
          <v-card-text class="center subtitle-1 dark--text">
            <div class="text--primary pb-4">
              &ensp;&ensp;<strong>Submit Date :</strong>&ensp;{{
                cases.caseDate
              }}
            </div>
            <div
              class="text--primary pb-4"
              v-if="cases.statusID == 2 && receivers.receiverDate != null"
            >
              &ensp;&ensp;<strong>Receiver Date :</strong>&ensp;{{
                receivers.receiverDate
              }}
            </div>
            <div
              class="text--primary pb-4"
              v-if="cases.statusID == 3 && receivers.receiverDate != null"
            >
              &ensp;&ensp;<strong>Receiver Date :</strong>&ensp;{{
                receivers.receiverDate
              }}
            </div>

            <div class="text--primary pb-4">
              &ensp;&ensp;<strong>Case Type :</strong>&ensp;<v-chip
                :color="getTColor(cases.caseTypeID)"
              >
                {{ getTName(cases.caseTypeID) }}
              </v-chip>
            </div>
            <div class="text--primary pb-4">
              &ensp;&ensp;<strong>Priority :</strong>&ensp;<v-chip
                :color="getPColor(cases.priorityID)"
              >
                {{ getPName(cases.priorityID) }}
              </v-chip>
            </div>
            <div class="text--primary pb-4">
              &ensp;&ensp;<strong>Status :</strong>&ensp;
              <v-chip :color="getSColor(cases.statusID)">
                {{ getSName(cases.statusID) }}
              </v-chip>
            </div>
          </v-card-text>
          <div>
            <v-card-title class="headline">
              <strong>User Informer</strong>
            </v-card-title>
            <v-card-text class="center subtitle-1 dark--text">
              <div class="text--primary pb-2">
                <v-icon size="24" color="grey darken-2"
                  >mdi-account-tie-outline</v-icon
                >
                <strong>Name :</strong>&ensp;{{ informers.firstName }}&ensp;{{
                  informers.lastName
                }}
              </div>
              <div class="text--primary pb-2">
                <v-icon size="23" color="grey darken-2"
                  >mdi-email-outline</v-icon
                >
                <strong>Email :</strong>&ensp;{{ informers.email }}
              </div>
              <div class="text--primary pb-2">
                <v-icon size="23" color="grey darken-2">mdi-phone</v-icon>
                <strong>Phone :</strong>&ensp;{{ informers.phone }}
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" xs="6" sm="12" md="12" lg="6">
        <v-card v-if="cases" flat style="background-color:#EEEEEE">
          <div>
            <v-card-title class="headline">
              <strong>Case Informer</strong>
            </v-card-title>
            <v-card-text class="center subtitle-1 dark--text">
              <div class="text--primary pb-2">
                <v-icon size="24" color="grey darken-2"
                  >mdi-file-cog-outline</v-icon
                >
                <strong>System :</strong>&ensp;{{ cases.systemName }}
              </div>
              <div class="text--primary pb-2" v-if="cases.moduleID != null">
                <v-icon size="23" color="grey darken-2"
                  >mdi-vector-triangle</v-icon
                >
                <strong>Module :</strong>&ensp;{{ cases.moduleName }}
              </div>
              <div class="text--primary pb-2" v-if="cases.programID != null">
                <v-icon size="23" color="grey darken-2"
                  >mdi-application-brackets-outline</v-icon
                >
                <strong>Program ID :</strong>&ensp;{{ cases.programID }}
              </div>
              <div class="text--primary pb-2" v-if="cases.topic != null">
                <v-icon size="23" color="grey darken-2"
                  >mdi-book-outline</v-icon
                >
                <strong>Topic :</strong>&ensp;{{ cases.topic }}
              </div>
              <div class="text--primary pb-2 " v-if="cases.topicID != null">
                <v-icon size="23" color="grey darken-2"
                  >mdi-book-outline</v-icon
                >
                <strong>Topic :</strong>&ensp;{{ cases.topicName }}
              </div>
              <div class="text--primary pb-2">
                <v-icon size="23" color="grey darken-2"
                  >mdi-file-document-outline</v-icon
                >
                <strong>Description :</strong>&ensp;{{ cases.description }}
              </div>
              <div class="text--primary pb-2">
                <v-icon size="23" color="grey darken-2">mdi-paperclip</v-icon>
                <strong>File :</strong>&ensp;{{ cases.file }}
              </div>
              <div class="text--primary pb-2">
                <v-icon size="23" color="grey darken-2"
                  >mdi-note-outline</v-icon
                >
                <strong>Note :</strong>&ensp;{{ cases.note }}
              </div>
              <div class="text--primary pb-2">
                <v-icon size="23" color="grey darken-2"
                  >mdi-email-outline</v-icon
                >
                <strong>CC Mail :</strong>&ensp;{{ cases.ccMail }}
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card flat justify="center" align="center" v-if="cases.statusID == 1">
          <v-btn
            color="accent"
            @click="
              accept();
              refresh();
            "
            >Accept</v-btn
          >
          <v-btn color="primary">Home</v-btn>
          <v-btn color="error" @click="dialogCancel = true">Cancel</v-btn>
          <v-dialog v-model="dialogCancel" persistent max-width="600px">
            <v-card>
              <v-card-title>
                <span class="text-h5">Cancel Case</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <!-- <v-col cols="12" sm="12" md="12">
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
                    </v-col> -->
                    <v-col cols="12" sm="12" md="12">
                      <v-textarea
                        label="Cause cancel"
                        filled
                        solo
                        rows="4"
                        no-resize
                        class="height:50px"
                        required
                        v-model="form.reason"
                      >
                      </v-textarea>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="error" @click="dialogCancel = false">
                  Close
                </v-btn>
                <v-btn
                  text
                  color="success"
                  @click="
                    dialogCancel = false;
                    refresh();
                    cancelCase();
                    to = './case';
                  "
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
        <hr class="my-0" v-if="cases.statusID != 1" />
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
      dialogCancel: false,
      Imgdialog: false,
      form: {
        id: this.id,
        reason: ""
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
        .dispatch("receiver/update", { id: this.id })
        .then(response => {
          // Action Success

          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async cancelCase() {
      await this.$store
        .dispatch("case/update", this.form)
        .then(response => {
          // Action Success

          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getPColor(priorityID) {
      if (priorityID === 1) return "error";
      else if (priorityID === 2) return "warning";
      else if (priorityID === 3) return "info";
    },
    getSColor(statusID) {
      if (statusID === 1) return "info";
      else if (statusID === 2) return "warning";
      else if (statusID === 3) return "success";
      else if (statusID === 4) return "error";
    },
    getPColor(priorityID) {
      if (priorityID === 1) return "error";
      else if (priorityID === 2) return "warning";
      else if (priorityID === 3) return "info";
    },
    getSName(statusID) {
      if (statusID === 1) return "New Case";
      else if (statusID === 2) return "In Progress";
      else if (statusID === 3) return "Complete";
      else if (statusID === 4) return "Cancel";
    },
    getPName(priorityID) {
      if (priorityID === 1) return "High";
      else if (priorityID === 2) return "Medium";
      else if (priorityID === 3) return "Low";
    },
    getTColor(caseTypeID) {
      if (caseTypeID === 1) return "success";
      else return "secondary";
    },
    getTName(caseTypeID) {
      if (caseTypeID === 1) return "Incident";
      else return "Request";
    }
  }
};
</script>
