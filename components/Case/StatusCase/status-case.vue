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
      height="550px"
      hide-default-footer
    >
      <template #[`item.priorityID`]="{ item }">
        <v-chip :color="getPColor(item.priorityID)" dark>
          {{ getPName(item.priorityID) }}
        </v-chip>
      </template>

      <template #[`item.button`]="{ item }">
        <v-btn small elevation="3" color="info"  @click="ClickDetail(item.caseID,item.caseTypeID)">
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
        { text: "Case ID", value: "caseID", filterable: false },
        { text: "Type", value: "caseTypeID", filterable: false },
        { text: "Topic", value: "topic", filterable: false },
        {
          text: "Submit Date",
          value: "caseDate",
          filterable: false,
          sortable: false
        },
        { text: "Informer", value: "informer", filterable: false },
        { text: "Receiver", value: "receiver", filterable: false },
        { text: "Priority", value: "priorityID", filterable: false },
        { text: "Status", value: "statusID", filterable: false },
        {
          text: "Details / Cancel Case",
          value: "button",
          filterable: false,
          sortable: false
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      caseList: "case/list",
      edit_info: "case/info"
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
      getDataList: "case/getDataList",
      getInfoEdit: "case/getInfo"
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
     ClickDetail(caseID,caseTypeID) {
      this.$router.push({

        path: '/case/'+caseID,
        params: {
          detail: caseID
        },query: {
          type: caseTypeID,
        },
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
    }
  },
  async fetch() {}
};
</script>
