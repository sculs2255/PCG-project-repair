<template>
  <v-card class="pa-2 rounded-lg elevation-4">
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      flat
      hide-no-data
      hide-details
      label="What state are you from?"
      solo-inverted
      class="ma-2 rounded-pill"
      style="width:25%"
    ></v-autocomplete>

    <v-data-table
      fixed-header
      height="550px"
      :search="select"
      :headers="headers"
      :items="caseList"
      :items-per-page="-1"
      hide-default-footer
    >
      <template #[`item.priority`]="{ item }">
        <v-chip :color="getPColor(item.priority)" dark>
          {{ getPName(item.priority) }}
        </v-chip>
      </template>
      <template #[`item.status`]="{ item }">
        <v-chip :color="getSColor(item.status)" dark>
          {{ getSName(item.status) }}
        </v-chip>
      </template>
      <template #[`item.icon`]="{ item }">
        <v-btn
          icon
          elevation="3"
          fab
          x-small
          color="info"
          to="./repair-case-page"
        >
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "name", value: "name" },
        { text: "Name Recipent", value: "nameRecipent" },
        { text: "Topic", value: "topic" },
        { text: "Priority", value: "priority" },
        { text: "Status", value: "status" },
        { text: "IT Recipent", value: "itRecipent" },
        { text: "Date", value: "dateTime" },
        { text: "Log", value: "icon" }
      ],
      caseList: [
        {
          id: "3",
          name: "Apichai",
          nameRecipent: "",
          topic: "Incedent",
          priority: 1,
          status: 3,
          itRecipent: "Supaporn Jaila",
          dateTime: "15/07/2564 12:30",
          icon: "mdi-post"
        },
        {
          id: "4",
          name: "Apichai",
          nameRecipent: "",
          topic: "Incedent",
          priority: 1,
          status: 4,
          itRecipent: "Supaporn Jaila",
          dateTime: "15/07/2564 12:30",
          icon: "mdi-post"
        }
      ]
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    }
  },
  methods: {
    getPColor(priority) {
      if (priority == 1) return "error";
      else if (priority == 2) return "warning";
      else return "info";
    },
    getPName(priority) {
      if (priority == 1) return "High";
      else if (priority == 2) return "Medium";
      else return "Low";
    },
    getSColor(status) {
      if (status == 1) return "grey";
      else if (status == 2) return "blue lighten-1";
      else if (status == 3) return "error";
      else return "success";
    },
    getSName(status) {
      if (status == 1) return "New Case";
      else if (status == 2) return "In Progrees";
      else if (status == 3) return "Cancel";
      else return "Complete";
    },
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.caseList.filter(e => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    }
  }
};
</script>
