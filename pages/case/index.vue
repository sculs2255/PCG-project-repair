<template>
  <v-card class="pa-2 rounded-lg elevation-4">
    <v-autocomplete
      cache-items
      flat
      hide-no-data
      hide-details
      label="Select Case"
      solo-inverted
      class="ma-2 rounded-pill"
      style="width:40%"
    ></v-autocomplete>

    <v-data-table
      :loading="loading_dts"
      :headers="headers"
      :items="caseList.data"
      :options.sync="optionDataTables"
      :server-items-length="caseList.totalItems"
      :items-per-page="filter.pageSize"
      sort-by="id"
      class="datatable-listing-app"
      fixed-header
      height="100%"
      hide-default-footer
    >
      <template #[`item.caseTypeID`]="{ item }">
        {{ getTName(item.caseTypeID) }}
      </template>
      <template #[`item.priorityID`]="{ item }">
        <v-chip :color="getPColor(item.priorityID)" dark>
          {{ getPName(item.priorityID) }}
        </v-chip>
      </template>
      <template #[`item.statusID`]="{ item }">
        <v-chip :color="getSColor(item.statusID)" dark>
          {{ getSName(item.statusID) }}
        </v-chip>
      </template>

      <template #[`item.button`]="{ item }">
        <v-btn
          small
          elevation="3"
          color="info"
          @click="ClickDetail(item.caseID, item.caseTypeID)"
        >
          <v-icon>mdi-card-search-outline</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      filter: {
        textSearch: "",
        pageSize: 1000,
        pageNumber: 0,
        caseTypeID: 0
      },
      optionDataTables: {},
      loading_dts: false,
      headers: [
        { text: "Case ID", value: "caseID" },
        { text: "Type", value: "caseTypeID" },
        { text: "Topic", value: "topic" },
        {
          text: "Date",
          value: "caseDate",
          sortable: false
        },
        { text: "Informer", value: "userName" },
        { text: "Receiver", value: "reName" },
        { text: "Priority", value: "priorityID" },
        { text: "Status", value: "statusID" },
        {
          text: "Details ",
          value: "button",
          sortable: false
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      caseList: "case/list"
    })
  },
  watch: {
    optionDataTables: {
      handler() {
        this._getDataList();
      }
    },
    deep: true
  },
  methods: {
    ...mapActions({
      getDataList: "case/getDataList"
    }),
    async _getDataList() {
      const { page, itemsPerPage, sortBy, sortDesc } = this.optionDataTables;
      this.filter.sortOrder = sortBy;
      if (sortDesc == "true") {
        this.filter.sortOrder = sortBy + "_desc";
      }
      this.filter.pageSize = itemsPerPage;
      this.filter.pageNumber = page;
      this.loading_dts = true;
      await this.getDataList(this.filter);
      this.loading_dts = false;
    },
    ClickDetail(caseID, caseTypeID) {
      this.$router.push({
        path: "/case/" + caseID,
        params: {
          detail: caseID
        },
        query: {
          type: caseTypeID
        }
      });
    },
    getPColor(priorityID) {
      if (priorityID === 1) return "error";
      else if (priorityID === 2) return "warning";
      else if (priorityID === 3) return "info";
    },
    getPName(priorityID) {
      if (priorityID === 1) return "High";
      else if (priorityID === 2) return "Medium";
      else if (priorityID === 3) return "Low";
    },
    getSColor(statusID) {
      if (statusID == 1) return "grey";
      else if (statusID == 2) return "blue lighten-1";
      else if (statusID == 3) return "success";
      else return "error";
    },
    getSName(statusID) {
      if (statusID == 1) return "New Case";
      else if (statusID == 2) return "In Progrees";
      else if (statusID == 3) return "Complete";
      else return "Cancel";
    },
    getTName(caseTypeID) {
      if (caseTypeID === 1) return "Incident";
      else return "Request";
    }
  },
  async fetch() {}
};
</script>
