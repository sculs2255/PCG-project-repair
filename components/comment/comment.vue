<template>
  <v-card flat color="#eeeeee">
    <v-card
      class="d-flex rounded-t-xl pa-3"
      color="#eeeeee"
      style="height:50px"
    >
      <v-spacer></v-spacer>
      <h3 class="ml-5">Notification</h3>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon color="blue">mdi-message-text</v-icon>
      </v-btn>
    </v-card>
    <v-card class="rounded-b-lg pa-1" fixed height="550px">
      <v-responsive class="overflow-y-auto " max-height="100%">
        <v-card class="rounded-0 ma-1 mx-auto" flat>
          <v-list two-line>
            <v-list-item-group active-class="blue--text">
              <template v-for="(item, index) in items">
                <v-list-item :key="item.system">
                  <template>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item.system"
                      ></v-list-item-title>

                      <v-list-item-subtitle
                        class="text--primary"
                        v-text="item.support"
                      ></v-list-item-subtitle>

                      <v-list-item-subtitle
                        v-text="item.topic"
                      ></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-list-item-action-text
                        v-text="item.timedate"
                      ></v-list-item-action-text>
                      <v-list-item-action-text
                        v-text="item.time"
                      ></v-list-item-action-text>
                    </v-list-item-action>
                  </template>
                </v-list-item>

                <v-divider
                  v-if="index < items.length - 1"
                  :key="index"
                ></v-divider>
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-responsive>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          system: "System Error",
          support: "Incident",
          topic: "Topic",
          timedate: "15/07/2564",
          time: "12:30"
        },
        {
          system: "System Error",
          support: "Incident",
          topic: "Topic",
          timedate: "15/07/2564"
        },
        {
          system: "System Error",
          support: "Incident",
          topic: "Topic",
          timedate: "15/07/2564"
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
      ]
    };
  }
};
</script>
