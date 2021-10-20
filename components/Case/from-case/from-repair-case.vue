<template>
  <v-responsive class="overflow-y-auto" max-height="500">
    <v-row>
      <v-col cols="12" xs="6" sm="12" md="12" lg="6">
        <v-card class="pa-3" flat>
          <div v-if="cases">
            <v-card-title class="headline">
              ID Case : {{ cases.caseID }}
            </v-card-title>
            <v-card-subtitle>
              <div>วันที่แจ้งแคส {{ cases.date }} -- {{ cases.time }}</div>
              <div>วันที่รับแคส {{ cases.date }} -- {{ cases.time }}</div>
            </v-card-subtitle>
            <v-card-text class="subheading">
              <div class="text--primary pb-4 text-h6">
                User Information
              </div>
              <div class="text--primary pb-4 text-body-1">
                name : {{ informers.firstName }} {{ informers.lastName }}
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" xs="6" sm="12" md="12" lg="6">
        <v-card class="pa-3" flat>
          <div v-if="cases">
            <v-card-text class="subheading">
              <div class="text--primary pb-4 text-h6">
                Case Information
              </div>
              <div class="text--primary pb-4 text-body-1">
                Type : {{ cases.caseTypeID }}
              </div>
              <div class="text--primary pb-4 text-body-1">
                System : {{ cases.systemID }}
              </div>
              <div class="text--primary pb-4 text-body-1">
                Module : {{ cases.moduleID }}
              </div>
              <div class="text--primary pb-4 text-body-1">
                Description : {{ cases.description }}
              </div>
              <div class="text--primary pb-4 text-body-1">
                Image :
                <v-dialog v-model="dialog" width="50%" height="50%">
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      v-bind="attrs"
                      v-on="on"
                      lazy-src="https://picsum.photos/id/11/10/6"
                      max-height="150"
                      max-width="250"
                      src="https://picsum.photos/id/11/500/300"
                    ></v-img>
                  </template>

                  <v-card>
                    <v-img
                      lazy-src="https://picsum.photos/id/11/10/6"
                      src="https://picsum.photos/id/11/500/300"
                    ></v-img>
                  </v-card>
                </v-dialog>
              </div>
              <div class="text--primary pb-4 text-body-1">
                Priority :
                <v-chip :color="getPColor(cases.priorityID)">
                  {{ getPName(cases.priorityID) }}
                </v-chip>
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" xs="6" sm="12" md="12" lg="6">
        <v-card class="pa-3" flat>
          <div v-if="cases">
            <div class="text--primary pb-4 text-h6">
              IT Support Recipient
            </div>
            <div class="text--primary pb-4 text-body-1">
              Name : {{ receivers.firstName }} {{ receivers.lastName }}
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" xs="6" sm="12" md="12" lg="6">
        <v-card class="pa-3" flat>
          <div>
            <div class="text--primary pb-4 text-h6">
              Repair Case Information
            </div>
            <v-card-text class="subheading">
              <div class="text--primary pb-4 text-body-1">
                System : {{ cases.systemID }}
              </div>
              <div class="text--primary pb-4 text-body-1">
                Module : {{ cases.moduleID }}
              </div>
              <div class="text--primary pb-4 text-body-1">
                Description :
                <v-textarea
                  label="Description"
                  filled
                  solo
                  rows="4"
                  no-resize
                  class="height:50px"
                  v-model="form.description"
                >
                </v-textarea>
              </div>
              <v-row>
                <v-col cols="12" xs="6" sm="12" md="12" lg="6">
                  <div class="text--primary pb-4 text-body-1">
                    Image :
                    <v-file-input
                      :rules="rules"
                      accept="image/png, image/jpeg, image/bmp"
                      placeholder="Pick an avatar"
                      prepend-icon="mdi-camera"
                      label="Image"
                    ></v-file-input>
                  </div>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <div class="text--primary pb-4 text-body-1 ">
                    File :
                    <v-file-input
                      truncate-length="10"
                      label="File Other"
                    ></v-file-input>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-responsive>
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
      form: [{
        description: "", }]
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
    getPColor(priorityID) {
      if (priorityID === 1) return "error";
      else if (priorityID === 2) return "warning";
      else if (priorityID === 3) return "info";
    },
    getPName(priorityID) {
      if (priorityID === 1) return "High";
      else if (priorityID === 2) return "Medium";
      else if (priorityID === 3) return "Low";
    }
  }
};
</script>
