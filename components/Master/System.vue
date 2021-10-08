<template>
  <v-card class="pa-2 rounded-lg elevation-4">
    <v-autocomplete
      cache-items
      flat
      hide-no-data
      hide-details
      label="System"
      solo-inverted
      class="ma-2 rounded-pill"
      style="width:40%"
    ></v-autocomplete>

    <v-data-table
      ref="form"
      :loading="loading_dts"
      :headers="headers"
      :items="hdsystemList.data"
      :options.sync="optionDataTables"
      :server-items-length="hdsystemList.totalItems"
      :items-per-page="filter.pageSize"
      sort-by="id"
      class="datatable-listing-app"
      fixed-header
      height="550px"

      hide-default-footer
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>System</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
                >New Item</v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">System</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="form.SystemID"
                        label="IdSystem "
                        required

                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="form.SystemName"
                        label="System"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" @click="cancel" text>Cancel</v-btn>
                <v-btn color="blue darken-1" @click="submit" text>Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon class="mr-2" @click="edit(item)">
          mdi-pencil
        </v-icon>
        <v-icon @click="deleteData(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      dialog: false,
      form: {
        SystemID: '',
        SystemName: ""
      },
      filter: {
        textSearch: "",
        pageSize: 10,
        pageNumber: 0,
        SystemID: 0
      },
      optionDataTables: {},
      loading_dts: false,
      headers: [
        { text: "system ID", value: "systemID", filterable: false },
        { text: "system Name", value: "systemName", filterable: false },
        {
          text: "Details / Cancel system",
          value: "actions",
          filterable: false,
          sortable: false
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      hdsystemList: "hdsystem/list",
      edit_info: "hdsystem/info"
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
      getDataList: "hdsystem/getDataList",
      getInfoEdit: "hdsystem/getInfo"
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

    async edit(item) {
      this.action_form = "Edit";
      await this.getInfoEdit({ id: item.systemID });
      this.form.SystemID = this.edit_info.data.systemID;
      this.form.SystemName = this.edit_info.data.systemName;
      this.dialog = true;
    },
    async submit() {
      if (this.action_form == "Edit") {
        await this.$store
          .dispatch("hdsystem/update", this.form)
          .then(response => {
            console.log(response);

          })
          .catch(error => {
            console.log(error);
          });
      } else {
        await this.$store
          .dispatch("hdsystem/create", this.form)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      }
      this._getDataList();
      this.dialog = false;
    },
    async deleteData(item) {
      console.log(item);
      await this.$store
        .dispatch("hdsystem/delete", { id: item.systemID })
        .then(response => {
          this._getDataList();
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    cancel() {
      this.dialog = false;
    }
  },
  async fetch() {}
};
</script>
