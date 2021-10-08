<template>
  <v-card class="pa-2 rounded-lg elevation-4">
    <v-autocomplete
      cache-items
      flat
      hide-no-data
      hide-details
      label="Select User"
      solo-inverted
      class="ma-2 rounded-pill"
      style="width:40%"
    ></v-autocomplete>

    <v-data-table
      ref="form"
      :loading="loading_dts"
      :headers="headers"
      :items="userList.data"
      :options.sync="optionDataTables"
      :server-items-length="userList.totalItems"
      sort-by="id"
      class="datatable-listing-app"
      fixed-header
      height="550px"
      :items-per-page="filter.pageSize"
      hide-default-footer
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>User</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="ndialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
                >New Item</v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">User</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="form.id"
                        label="IdUser "
                        required

                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="form.firstName"
                        label="firstName"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="form.lastName"
                        label="firstName"
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="form.email"
                        label="Email"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="form.userName"
                        label="userName"
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="form.phoneNumber"
                        label="phoneNumber"
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

         <v-dialog v-model="dialog" max-width="700px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
                >Workplace</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">User ID :{{$auth.user.user.id}}</span>
                 <span class="headline">Name :{{$auth.user.user.firstName}}</span>
              </v-card-title>
              <v-card-text>
                <span class="headline">WorkPlace :_________________________</span>
                 <v-dialog v-model="wdialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
                >Add WorkPlace</v-btn
              >
            </template>
            <v-card>
              <v-card-title class="center">
                <span class="headline">ADD Workplace</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  Country :
                  <v-row>
                    <v-col cols="12" sm="6" md="8">

                       <v-combobox
                       v-model="select"
                      :items="items"
                       label="Country"
                       multiple
                       outlined
                        dense
                       ></v-combobox>
                    </v-col>
                     <v-col cols="12" sm="6" md="8">
                       Branch :
                       <v-combobox
                      v-model="select"
                      :items="items"
                      label="Branch"
                      multiple
                      outlined
                      dense
                       ></v-combobox>
                    </v-col>
                     <v-col cols="12" sm="6" md="8">
                       Department :
                      <v-combobox
                      v-model="select"
                      :items="items"
                      label="Department"
                      multiple
                      outlined
                      dense
                    ></v-combobox>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" @click="cancel1" text>Cancel</v-btn>
                <v-btn color="blue darken-1" @click="submit" text>Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

                <v-container>
              <v-row align="center">
        <v-checkbox
          v-model="denabled"
          hide-details
          class="shrink mr-2 mt-0"
        ></v-checkbox>
        <v-text-field
          :disabled="enabled"
          label="Thailland /Silom /MNG"
        ></v-text-field>

      </v-row>
       <v-row align="center">
        <v-checkbox
          v-model="includeFiles"
          hide-details
          class="shrink mr-2 mt-0"
        ></v-checkbox>
        <v-text-field
          :disabled="enabled"
          label="Sigapore / Granden By The bay / It"
        ></v-text-field>

      </v-row>
      <v-row align="center">
        <v-checkbox
          v-model="enabled"
          hide-details
          class="shrink mr-2 mt-0"
        ></v-checkbox>
        <v-text-field
          :disabled="enabled"
          label="China / China Tower / Accounting"
        ></v-text-field>

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
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      includeFiles: false,
      enabled: false,
      dialog: false,
      wialog: false,
      nialog: false,
      form: {
        id: "",
        firstName:"",
        lastName: "",
        phoneNumber:""
      },
      filter: {
        textSearch: "",
        pageSize: 10,
        pageNumber: 0,
        ID: 0
      },
      optionDataTables: {},
      loading_dts: false,
      headers: [
        { text: "user ID", value: "id", filterable: false },
        { text: "fristName", value: "firstName", filterable: false },
        { text: "LastName", value: "lastName", filterable: false },
        { text: "Email", value: "email", filterable: false },
        { text: "Phone", value: "phoneNumber", filterable: false },

        {
          text: "Details / Cancel active",
          value: "actions",
          filterable: false,
          sortable: false
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      userList: "user/list",
      edit_info: "user/info"
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
      getDataList: "user/getDataList",
      getInfoEdit: "user/getInfo"
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
      await this.getInfoEdit({ id: item.UserID });
      this.form.firstName = this.edit_info.data.firstName;
      this.form.lastName = this.edit_info.data.lastName;
      this.form.phoneNumber = this.edit_info.data.phoneNumber;
      this.dialog = true;
    },
    async submit() {
      if (this.action_form == "Edit") {
        await this.$store
          .dispatch("user/update", this.form)
          .then(response => {
            console.log(response);

          })
          .catch(error => {
            console.log(error);
          });
      } else {
        await this.$store
          .dispatch("user/create", this.form)
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
        .dispatch("user/delete", { id: item.id })
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
    },
    cancel1() {
      this.dialog = false;
    }
  },

  async fetch() {}
};
</script>
