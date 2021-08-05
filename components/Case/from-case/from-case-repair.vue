<template>
  <v-responsive class="overflow-y-auto" height="500">
    <v-row>
      <v-col cols="12" xs="6" sm="12" md="12" lg="6">
        <v-card class="pa-3" flat>
          <div v-for="item in cases" :key="item.id">
            <v-card-title class="headline">
              ID Case : {{ item.id }}
            </v-card-title>
            <v-card-subtitle>
              <div>วันที่แจ้งแคส {{ item.date }} -- {{ item.time }}</div>
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
        <v-card class="pa-3" flat>
          <div v-for="item in cases" :key="item.id">
            <v-card-title class="headline">
               Case Information
            </v-card-title>
            <v-card-text class="subheading">
              <div class="primary--text pb-4 text-body-1 font-weight-black d-flex">
                Type :  <div>  {{ item.type }} </div> 
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
                <v-chip :color="getPColor(item.priority)">
                  {{ getPName(item.priority) }}
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
          time:"12:30",
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
      else if (priority === "3") return "info";
    },
    getPName(priority) {
      if (priority === "1") return "High";
      else if (priority === "2") return "Medium";
      else if (priority === "3") return "Low";
    }
  }
};
</script>
