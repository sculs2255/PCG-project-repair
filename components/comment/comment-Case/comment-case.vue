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
      <v-btn icon @click="Adialog(item)">
        <v-icon color="blue">mdi-comment-edit-outline</v-icon>
      </v-btn>
    </v-card>

    <v-card
      class="rounded-b-lg pa-1"
      fixed
      height="550px"
      cols="12"
      sm="6"
      md="6"
    >
      <v-responsive class="overflow-y-auto " max-height="100%">
        <v-card class="rounded-0 ma-1 mx-auto" flat>
          <v-list two-line>
            <v-list-item-group>
              <template v-for="(item, i) in items">
                <v-list-item :key="item.system" v-model="dialog">
                  <template v-bind="attrs" v-on="on">
                    <v-list-item-content>
                      <v-list-item-title
                        class="pcgColor--text"
                        v-text="item.system"
                      ></v-list-item-title>

                      <v-list-item-subtitle
                        class="info--text"
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

                <v-divider v-if="i < items.length - 1" :key="i"></v-divider>
              </template>
            </v-list-item-group>

            <v-dialog v-model="Adddialog" width="500" persistent>
              <v-card>
                <v-card-title class="pcgColor lighten-5">
                  <span class="text-h5">New Comment</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-select
                      :items="listQuestion"
                      label="List Question"
                      multiple
                      required
                    ></v-select>
                    <v-textarea
                      label="Description"
                      filled
                      solo
                      rows="4"
                      no-resize
                      class="height:50px"
                    >
                    </v-textarea>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="success" text @click="Adddialog = false">
                    Confirm
                  </v-btn>
                  <v-btn color="error" text @click="Adddialog = false">
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="dialog" max-width="1000" scrollable>
              <v-card>
                <v-card-title
                  class="text-h5 blue darken-2 white--text"
                  justify-center
                >
                  Comment
                  <v-spacer></v-spacer>

                  <v-btn
                    color="pcgColor"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    @click="Adialog(item)"
                  >
                    <v-icon class="pa-1">mdi-comment-edit-outline</v-icon>
                    New Comment
                  </v-btn>
                </v-card-title>

                <v-card-text class="pa-3">
                  <v-row>
                    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
                      <v-card class="pa-3" flat>
                        <div v-for="item in cases" :key="item.id">
                          <v-card-title class="headline">
                            ID Case : {{ item.id }}
                          </v-card-title>
                          <v-card-subtitle>
                            {{ item.date }}
                          </v-card-subtitle>
                          <v-card-text class="subheading">
                            <div class="text--primary pb-4 text-h6">
                              User Information
                            </div>
                            <div class="text--primary pb-4 text-body-1">
                              name : {{ item.name }}
                            </div>
                          </v-card-text>
                        </div>
                      </v-card>
                    </v-col>
                    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
                      <v-card class="pa-3 " style="background-color:#EEEEEE">
                        <v-card-text
                          class="subheading"
                          v-for="item in cases"
                          :key="item.id"
                        >
                          <div class="text--primary pb-4 text-h6">
                            Case Information
                          </div>
                          <div class="text--primary pb-4 text-body-1">
                            Type : {{ item.type }}
                          </div>
                          <div class="text--primary pb-4 text-body-1">
                            System : {{ item.system }}
                          </div>
                          <div class="text--primary pb-4 text-body-1">
                            Module : {{ item.module }}
                          </div>
                          <div class="text--primary pb-4 text-body-1">
                            Description : {{ item.description }}
                          </div>
                          <div class="text--primary pb-4 text-body-1">
                            Image :
                            <v-img
                              lazy-src="https://picsum.photos/id/11/10/6"
                              max-height="100"
                              max-width="150"
                              src="https://picsum.photos/id/11/500/300"
                            ></v-img>
                          </div>
                          <div class="text--primary pb-4 text-body-1">
                            Priority :
                            <v-chip :color="getPColor(item.priority)">
                              {{ getPName(item.priority) }}
                            </v-chip>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <div v-for="item in cases" :key="item.id">
                    <v-card-title class="headline">
                      Comment : {{ item.id }} : {{ item.name }}
                      <v-spacer></v-spacer>
                      <v-card-subtitle>
                        {{ item.date }} {{ item.time }}
                      </v-card-subtitle>
                    </v-card-title>
                    <v-card-text class="subheading">
                      <div class="text--primary  text-body-1">
                        message :
                        <div
                          class="text--primary  text-body-1"
                          v-for="i in listQuestion"
                          :key="i"
                        >
                          {{ i }}
                        </div>
                      </div>
                    </v-card-text>
                  </div>
                </v-card-text>
              </v-card>
            </v-dialog>
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
      Adddialog: false,
      dialog: false,
      cases: [
        {
          id: "1",
          name: "Apichai",
          type: "Incident",
          system: "System Error",
          module: "Module Error",
          description: "",
          date: "21-06-2021",
          time: "12:30",
          priority: "1",
          status: "1"
        }
      ],
      items: [
        {
          system: "System Error",
          support: "Incident",
          topic: "Topic",
          timedate: "15/07/2564",
          time: "12:30"
        }
      ],
      listQuestion: ["I need file", "I need image"]
    };
  },
  methods: {
    getPColor(priority) {
      if (priority === "1") return "error";
      else if (priority === "2") return "warning";
      else return "info";
    },
    getPName(priority) {
      if (priority === "1") return "High";
      else if (priority === "2") return "Medium";
      else return "Low";
    },
    Adialog(item) {
      this.Adddialog = true;
    }
  }
};
</script>
