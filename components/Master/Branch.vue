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
      label="Brunch"
      solo-inverted
      class="ma-2 rounded-pill"
      style="width:40%"
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

     <template #[`item.icon`]="">
         <v-dialog
      v-model="bdialog"
      width="300"
    >
      <template v-slot:activator="{ on, attrs }">

       <v-btn
          class="ma-0"
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
          x-small
          elevation="3"

        >
          <v-icon>mdi-wrench</v-icon>

        </v-btn>
      </template>

       <v-card>
        <v-card-title class= "grey lighten-2">
          <span class="text-h5">Edit Brunch</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"

              >
                <v-text-field
                  label="Edit Brunch"
                  required
                ></v-text-field>
              </v-col>
                <v-col
                cols="12"
              >
                <v-text-field
                  label="Edit Country"
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
            @click="bdialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="green"
            text
            @click="bdialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>

     <v-dialog
      v-model="adialog"
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
            @click="adialog = false"
          >
            I accept
          </v-btn>
          <v-btn
            color="red"
            text
            @click="adialog = false"
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
export default {
  data() {
    return {

      headers: [
        { text: "Branch", value: "branch" },

        { text: "Branch", value: "branch" },
        { text: "", value: "descri" },
        { text: "", value: "descri" },
        { text: "", value: "descri" },

        { text: "Action", value: "icon" },

      ],
      caseList: [
        {

          branch: "Silom",
           country: "Thailand",

        },
        {

          branch: "Empire Tower",
           country: "Thailand",
        },
        {

          branch: "Samutprakarn",
           country: "Thailand",
        },

      ]
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    }
  },
  methods: {

    getSColor(status) {
      if (status == "User") return "grey";
      else if (status == "It") return "blue lighten-1";

      else return "success";
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
