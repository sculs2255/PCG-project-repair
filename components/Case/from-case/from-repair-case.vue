<template>
  <v-row>
    <v-col cols="6">
      <v-card class="pa-3" flat>
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
    <v-col cols="6">
      <v-card class="pa-3" flat>
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
              Description :
              <v-textarea
                label="Description"
                filled
                solo
                rows="4"
                no-resize
                class="height:50px"
              >
              </v-textarea>
            </div>
            <v-row>
              <v-col cols="6"
                ><div class="text--primary pb-4 text-body-1">
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
              <v-col cols="6">
                <div class="text--primary pb-4 text-body-1 ">
                  File :
                  <v-file-input
                    truncate-length="10"
                    label="File Other"
                  ></v-file-input>
                </div>
              </v-col>
            </v-row>
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
