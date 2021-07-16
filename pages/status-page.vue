<template>
  <v-container class=" lighten-5 pt-10 pa-0 ma-0" fix>
    <v-row no-gutters justify="center" align="center">
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
            label="Select Case"
            solo-inverted
          ></v-autocomplete>
          <v-simple-table fixed-header height="650px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Id</th>
                  <th class="text-left">Name</th>
                  <th class="text-left">Name Represent</th>
                  <th class="text-left">Topic</th>
                  <th class="text-left">Priority</th>
                  <th class="text-left">Status</th>
                  <th class="text-left">IT Recipient</th>
                  <th class="text-left">Date</th>
                  <th class="text-left">Log</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.calories }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                  <td>
                    <v-btn>
                      <v-icon> {{ item.icon }}</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-col cols="4" md="2">
        <v-card flat>
          <v-card
            class="d-flex rounded-t-xl pa-3"
            color="grey lighten-2"
            style="height:50px"
          >
            <v-spacer></v-spacer>
            <h3 class="ml-5">Notification</h3>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon color="blue">mdi-message-text</v-icon>
            </v-btn>
          </v-card>
          <v-card class="rounded-b-xl pa-1" fixed height="650px">
            <v-responsive class="overflow-y-auto " max-height="100%">
              <v-card
                v-for="item in dataNotification"
                :key="item"
                class="rounded-0 ma-1"
              >
                <v-row class="" no-gutters>
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
                  <v-col cols="2"> </v-col>
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
          calories: 159,
          icon: "mdi-post"
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          icon: "mdi-post"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          icon: "mdi-post"
        },
        {
          name: "Eclair",
          calories: 262,
          icon: "mdi-post"
        },
        {
          name: "Cupcake",
          calories: 305,
          icon: "mdi-post"
        },
        {
          name: "Gingerbread",
          calories: 356,
          icon: "mdi-post"
        },
        {
          name: "Jelly bean",
          calories: 375,
          icon: "mdi-post"
        },
        {
          name: "Lollipop",
          calories: 392,
          icon: "mdi-post"
        },
        {
          name: "Honeycomb",
          calories: 408,
          icon: "mdi-post"
        },
        {
          name: "Donut",
          calories: 452,
          icon: "mdi-post"
        },
        {
          name: "KitKat",
          calories: 518,
          icon: "mdi-post"
        },
        {
          name: "KitKat",
          calories: 518,
          icon: "mdi-post"
        },
        {
          name: "KitKat",
          calories: 518,
          icon: "mdi-post"
        },
        {
          name: "KitKat",
          calories: 518,
          icon: "mdi-post"
        }
      ]
    };
  }
};
</script>
