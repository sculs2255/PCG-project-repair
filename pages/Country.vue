<template>
  <v-container class="lighten-5 pt-10 pa-0 ma-0" fix>
    
    <v-row no-gutters justify="center" align>
      <v-col cols="8" sm="8" md="9" class="pa-4">
        <v-card class="pa-2 rounded-lg">
          <v-autocomplete
            v-model="select"
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            cache-items
            class="ma-2 rounded-pill"
            style="width:25%"
            flat
            hide-no-data
            hide-details
            label="Select Country"
            solo-inverted
          ></v-autocomplete>

          <v-simple-table fixed-header height="350px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Country</th>
                <th class="text-left">Branch</th>
                <th class="text-left">Description</th>
                <th class="text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.county }}</td>
                <td>{{ item.branch }}</td>
                <td>{{ item.d}}</td>
                  <td>
                    <v-btn depressed color="primary" elevation="2" x-small>Edit</v-btn>
                    <v-btn depressed color="error" elevation="2" x-small>Delete</v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
      
      <v-col cols="4" md="2">
        <v-card flat>
          <v-card class="d-flex rounded-t-xl pa-3" color="grey lighten-2" style="height:50px">
            <v-spacer></v-spacer>
            <h3 class="ml-5">Notification</h3>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon color="blue">mdi-message-text</v-icon>
            </v-btn>
          </v-card>
          <v-card class="rounded-b-xl pa-1" fixed height="650px">
            <v-responsive class="overflow-y-auto" max-height="100%">
              <v-card v-for="item in dataNotification" :key="item" class="rounded-0 ma-1">
                <v-row class no-gutters>
                  <v-col cols="2">
                    <v-card flat>
                      <v-icon size="40">mdi-file-document-outline</v-icon>
                    </v-card>
                  </v-col>
                  <v-col col-md-5>
                    <v-card class="pa-2" flat>
                      <h5>{{ item.system }}</h5>
                    </v-card>
                  </v-col>
                  <v-col col-md-6>
                    <v-card class="pa-2" flat>
                      <h5>{{ item.support }}</h5>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="2"></v-col>
                  <v-col col-md-5>
                    <v-card class="pa-2" flat>
                      <h5>{{ item.topic }}</h5>
                    </v-card>
                  </v-col>
                  <v-col col-md-6>
                    <v-card class="pa-2" flat>
                      <h6>{{ item.timedate }}</h6>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-responsive>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dataNotification: [
        {
          system: "System Error",
          support: "Incident",
          topic: "Topic",
          timedate: "15/07/2564 12:32"
        },
        {
          system: "System Error",
          support: "Incident",
          topic: "Topic",
          timedate: "15/07/2564 12:32"
        },
        {
          system: "System Error",
          support: "Incident",
          topic: "Topic",
          timedate: "15/07/2564 12:32"
        },
        {
          system: "System Error",
          support: "Incident",
          topic: "Topic",
          timedate: "15/07/2564 12:32"
        },
        {
          system: "System Error",
          support: "Incident",
          topic: "Topic",
          timedate: "15/07/2564 12:32"
        },
        {
          system: "System Error",
          support: "Incident",
          topic: "Topic",
          timedate: "15/07/2564 12:32"
        },
        {
          system: "System Error",
          support: "Incident",
          topic: "Topic",
          timedate: "15/07/2564 12:32"
        },
        {
          system: "System Error",
          support: "Incident",
          topic: "Topic",
          timedate: "15/07/2564 12:32"
        },
        {
          system: "System Error",
          support: "Incident",
          topic: "Topic",
          timedate: "15/07/2564 12:32"
        },
        {
          system: "System Error",
          support: "Incident",
          topic: "Topic",
          timedate: "15/07/2564 12:32"
        },
        {
          system: "System Error",
          support: "Incident",
          topic: "Topic",
          timedate: "15/07/2564 12:32"
        },
        {
          system: "System Error",
          support: "Incident",
          topic: "Topic",
          timedate: "15/07/2564 12:32"
        }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          id: 159,
          status: " It",
          Email: "Boat0289@hotmail.com",
          phone: "0922970028",
          county: "Thailand",
          branch: "Silom",
          d:"Silom , Empire , Samutprakan",
        },
        {
          name: "Ice cream sandwich",
          id: 237,
          status: " It",
          Email: "Ice_grem@hotmail.com",
          phone: "0897865461",
          county: "Malaysia",
          
        },
        {
          name: "Eclair",
          id: 262,
          status: " User",
          Email: "Eclair_2@hotmail.com",
          phone: "0922970028",
          county: "India",
          
        },
         {
          name: "Eclair",
          id: 262,
          status: " User",
          Email: "Eclair_2@hotmail.com",
          phone: "0922970028",
          county: "China",
          
        },
         {
          name: "Eclair",
          id: 262,
          status: " User",
          Email: "Eclair_2@hotmail.com",
          phone: "0922970028",
          county: "Singapore",
          
        },
        
      ]
    };
  }
};
</script>
