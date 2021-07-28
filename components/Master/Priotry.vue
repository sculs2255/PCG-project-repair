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
      label="Priority"
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
        <v-chip :color="getColor(item.priority)" dark>
          {{ item.priority }}
        </v-chip>
      </template>
      <template #[`item.status`]="{ item }">
        <v-chip :color="getSColor(item.status)" dark>
          {{ item.status }}
        </v-chip>
      </template>
      <template #[`item.icon`]="">
         <v-dialog
      v-model="dialog"
      width="300"
    >
      <template v-slot:activator="{ on, attrs }">
        
       <v-btn
          class="ma-0"
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-wrench</v-icon>
          
        </v-btn>
      </template>

       <v-card>
        <v-card-title>
          <span class="text-h5">Edit Priorty</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                <v-col
                cols="12"
              >
                <v-text-field
                  label="Edit Priorty*"
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
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
        <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red "
          dark
          v-bind="attrs"
          v-on="on"
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
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
          <v-btn
            color="red"
            text
            @click="dialog = false"
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
        { text: "Description", value: "description" },
        { text: "Priority", value: "priority" },
        { text: "Action", value: "icon" },
        
      ],
      caseList: [
        {
          description:"Medium",
          priority: 2,
         
        },
        {
          description:"High",
          priority: 3,
         
        },
        {
         description:"low",
          priority: 1,
          
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
    getColor(priority) {
      if (priority == 1) return "error";
      else if (priority == 2) return "warning";
      else return "info";
    },
    getSColor(status) {
      if (status == 1) return "grey";
      else if (status == 2) return "blue lighten-1";
      else if (status == 3) return "error";
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
