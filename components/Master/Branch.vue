<template>
  <v-card class="pa-2 rounded-lg elevation-4 " >
      <v-card class="d-flex " flat>
    <v-autocomplete
       :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      flat
      hide-no-data
      hide-details
      label="Branch"
      solo-inverted
      class="ma-2 rounded-pill"
      style="width:400px"
    ></v-autocomplete>
    <v-dialog
      v-model="adialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
       <v-btn
          class="ma-3"
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
          elevation="3"
        >
          <v-icon>mdi-plus-thick</v-icon>
        </v-btn>
      </template>
       <v-card>
        <v-card-title>
          <span class="text-h5">Add Status</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Add Status*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text
            @click="adialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="green"
            text
            @click="adialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-card>


    <!-- Table-->
    <v-data-table
      fixed-header
      height="550px"
      :loading="loading_dts"
      :headers="headers"
      :items="caseList.data"
      :options.sync="optionDataTables"
      :server-items-length="caseList.totalItems"
       sort-by="id"
      class="datatable-listing-app"
      :items-per-page="-1"
      hide-default-footer
    >
     <template #[`item.icon`]="" >
   <v-btn
          class="ma-0"
          color="#1E88E5"
          dark
          v-bind="attrs"
          v-on="on"
          x-small
          elevation="3"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
         <v-dialog
      v-model="bdialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red "
          dark
          v-bind="attrs"
          v-on="on"
          x-small
          elevation="3"
        >
            <v-icon> mdi-cancel</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h4 red" color="red">

          Do you want to delete?

        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green"
            text
            @click="bdialog = false"
          >
            I accept
          </v-btn>
          <v-btn
            color="red"
            text
            @click="bdialog = false"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
        pageSize: 10,
        pageNumber: 0,
        caseTypeID: 0
      },
      optionDataTables: {},
      loading_dts: false,
      headers: [
        { text: "Branch ID", value: "branchID", filterable: false },
        { text: "CountryID ", value: "countryID", filterable: false },
        { text: "BranchName", value: "branchName", filterable: false },
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
      branchList: "branch/list"
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
