<template>
  <v-responsive class="overflow-y-auto" max-height="500">
    <v-row>
      <v-col cols="12" xs="6" sm="12" md="12" lg="6">
        <v-card class="pa-3 ma-5" flat>
          <div v-if="cases">
            <v-card-title class="headline">
              ID Case : {{ cases.caseID }}
            </v-card-title>
            <v-card-subtitle>
              <!-- <div>วันที่แจ้งแคส {{ cases.date }} -- {{ cases.time }}</div>
              <div>วันที่รับแคส {{ cases.date }} -- {{ cases.time }}</div> -->
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
        <v-card class="pa-3 ma-5" style="background-color:#EEEEEE">
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
                <v-img
                  lazy-src="https://picsum.photos/id/11/10/6"
                  max-height="100"
                  max-width="150"
                  src="https://picsum.photos/id/11/500/300"
                ></v-img>
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
        <v-card class="pa-3 ma-5" flat>
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
        <v-card class="pa-3 ma-5" style="background-color:#EEEEEE">
          <div v-if="cases">
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
                Description : {{ cases.description }}
              </div>

              <div class="text--primary pb-4 text-body-1">
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
              </div>
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
      image: true,
      file: true,
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
      else return "info";
    },
    getPName(priorityID) {
      if (priorityID === 1) return "High";
      else if (priorityID === 2) return "Medium";
      else return "Low";
    }
  }
};
</script>
