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
      label="Personnal"
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
      <template #[`item.status`]="{ item }">
        <v-chip :color="getSColor(item.status)" dark>
          {{ item.status }}
        </v-chip>
      </template>
      <template #[`item.icon`]="">
        <v-dialog v-model="adialog" width="700">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="ma-0" color="green" dark v-bind="attrs" v-on="on">
              <v-icon>mdi-wrench</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="text-h5">Edit Personnal</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="ID*" required></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="10" md="8">
                    <v-text-field label=" Name*" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="10" md="8">
                    <v-text-field label=" Status*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Email*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Phone*" required></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Country*" required></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label=" Branch*" required></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" text @click="adialog = false">
                Close
              </v-btn>
              <v-btn color="green" text @click="adialog = false">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="bdialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="red " dark v-bind="attrs" v-on="on">
              <v-icon> mdi-cancel</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h4 red" color="red">
              Do you want to delete?
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green" text @click="bdialog = false">
                I accept
              </v-btn>
              <v-btn color="red" text @click="bdialog = false">
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
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Status", value: "status" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phone" },
        { text: "Country", value: "country" },
        { text: "Branch", value: "branch" },

        { text: "Action", value: "icon" }
      ],
      caseList: [
        {
          id: "1",
          name: "Apichai",
          status: "IT",
          email: "Systemap@hotmail.com",
          phone: "092-297-0028",
          country: "Thailand",
          branch: "Silom"
        },
        {
          id: "2",
          name: "Apinan",
          status: "User",
          email: "Apinan02@hotmail.com",
          phone: "092-675-4621",
          country: "Thailand",
          branch: "Silom"
        },
        {
          id: "3",
          name: "Somphong",
          status: "User",
          email: "somphong73@hotmail.com",
          phone: "081-827-5363",
          country: "Thailand",
          branch: "Silom"
        },
        {
          id: "4",
          name: "Manob nob",
          status: "IT",
          email: "Manob_nob2@hotmail.com",
          phone: "089-768-5433",
          country: "Thailand",
          branch: "Silom"
        },
        {
          id: "5",
          name: " Aakchai",
          status: "User",
          email: "Aakchai29@hotmail.com",
          phone: "091-927-5363",
          country: "Thailand",
          branch: "Silom"
        },
        {
          id: "6",
          name: "Banramee",
          status: "IT",
          email: "barn168_@hotmail.com",
          phone: "098-765-4567",
          country: "Thailand",
          branch: "Silom"
        },
        {
          id: "7",
          name: " Savinee",
          status: "IT",
          email: "KITKAT_092@hotmail.com",
          phone: "089-786-5461",
          country: "Thailand",
          branch: "Silom",

          icon: "mdi-post"
        },
        {
          id: "8",
          name: "Frozen Yogurt",
          status: "User",
          email: "Frozen Yogurt_p@hotmail.com",
          phone: "092-276-2876",
          country: "Thailand",
          branch: "Silom"
        },
        {
          id: "9",
          name: "Kriason",
          status: "IT",
          email: "Kriason_21p@hotmail.com",
          phone: "085-803-7767",
          country: "Thailand",
          branch: "Silom"
        },
        {
          id: "10",
          name: "NaNew",
          status: "User",
          email: "NaNew02881@hotmail.com",
          phone: "087-662-5041",
          country: "Thailand",
          branch: "Silom"
        },
        {
          id: "11",
          name: "Ko Ko",
          status: "IT",
          email: "KKKooo13@hotmail.com",
          phone: "089-756-4532",
          country: "Thailand",
          branch: "Silom"
        },
        {
          id: "12",
          name: "Nengko",
          status: "IT",
          email: "Nengko_22@hotmail.com",
          phone: "089-803-6643",
          country: "Thailand",
          branch: "Silom"
        },
        {
          id: "13",
          name: "Kamonnob",
          status: "IT",
          email: "nobnobb.@hotmail.com",
          phone: "089-134-5674",
          country: "Thailand",
          branch: "Silom"
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
