<template>
  <v-responsive class="overflow-y-auto" max-height="500">
    <v-row>
      <v-col cols="12" xs="6" sm="12" md="12" lg="6">
        <v-card class="pa-3 ma-5" flat>
          <div v-for="item in cases" :key="item.id">
            <v-card-title class="headline">
              ID Case : {{ item.id }}
            </v-card-title>
            <v-card-subtitle>
              <div>วันที่แจ้งแคส {{ item.date }} -- {{ item.time }}</div>
              <div>วันที่รับแคส {{ item.date }} -- {{ item.time }}</div>
            </v-card-subtitle>
            <v-card-text class="subheading">
              <div class="text--primary pb-4 text-h6">
                User Information
              </div>
              <div class="text--primary pb-4 text-body-1">
                name : {{ item.name }}
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" xs="6" sm="12" md="12" lg="6">
        <v-card class="pa-3 ma-5" style="background-color:#EEEEEE">
          <div v-for="item in cases" :key="item.id">
            <v-card-text class="subheading">
              <div class="text--primary pb-4 text-h6">
                Case Information
              </div>
              <div class="text--primary pb-4 text-body-1">
                Type : {{ item.type }}
              </div>
              <div class="text--primary pb-4 text-body-1">
                System : {{ item.system }}
              </div>
              <div class="text--primary pb-4 text-body-1">
                Module : {{ item.module }}
              </div>
              <div class="text--primary pb-4 text-body-1">
                Description : {{ item.description }}
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
                <v-chip :color="getPColor(item.priority)">
                  {{ getPName(item.priority) }}
                </v-chip>
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" xs="6" sm="12" md="12" lg="6">
        <v-card class="pa-3 ma-5" flat>
          <div v-for="item in cases" :key="item.id">
            <div class="text--primary pb-4 text-h6">
              IT Support Recipient
            </div>
            <div class="text--primary pb-4 text-body-1">
              Name : {{ item.name }}
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" xs="6" sm="12" md="12" lg="6">
        <v-card class="pa-3 ma-5" style="background-color:#EEEEEE">
          <div v-for="item in cases" :key="item.id">
            <div class="text--primary pb-4 text-h6">
              Repair Case Information
            </div>
            <v-card-text class="subheading">
              <div class="text--primary pb-4 text-body-1">
                System : {{ item.system }}
              </div>
              <div class="text--primary pb-4 text-body-1">
                Module : {{ item.module }}
              </div>
              <div class="text--primary pb-4 text-body-1">
                Description : {{ item.module }}
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
  data() {
    return {
      image: true,
      file: true,
      cases: [
        {
          id: "1",
          name: "Apichai",
          type: "Incident",
          system: "System Error",
          module: "Module Error",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nobis a at voluptates culpa optio amet! Inventore deserunt voluptatem maxime a veniam placeat, eos impedit nulla quos? Officiis, aperiam ducimus.",
          date: "21-06-2021",
          time: "12:30",
          priority: "1",
          status: "1"
        }
      ]
    };
  },
  methods: {
    getPColor(priority) {
      if (priority === "1") return "error";
      else if (priority === "2") return "warning";
      else return "info";
    },
    getPName(priority) {
      if (priority === "1") return "High";
      else if (priority === "2") return "Medium";
      else return "Low";
    }
  }
};
</script>
