<template max-height="auto">
  <v-row>
    <v-col cols="6">
      <v-card class="pa-3" flat>
        <div v-for="item in cases" :key="item.id">
          <v-card-title class="headline">
            ID Case : {{ item.id }}
          </v-card-title>
          <v-card-subtitle>
            {{ item.date }}
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
    <v-col cols="6">
      <v-card class="pa-3" flat>
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
  </v-row>
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
          description: "",
          date: "21-06-2021",
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
