<template>
  <v-container class="lighten-5 pt-10 pa-0 ma-0" fix>
    <v-row no-gutters justify="center" max-height="550px">
      <v-col cols="12" xs="12" sm="12" md="8" lg="9" xl="8" class="pa-4">
        <v-stepper v-model="e1" alt-labels max-height="700px">
          <v-stepper-header>
            <v-stepper-step
              :complete="e1 > 1 || cases.statusID == 2"
              step="1"
              color="success"
            >
              New Case
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              :complete="e1 > 2 || cases.statusID == 3"
              step="2"
              color="success"
            >
              In Progress
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              step="3"
              color="success"
              :complete="e1 > 2 || cases.statusID == 3"
            >
              Complete
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-item>
            <v-stepper-content step="1" class="pa-0 pt-1" v-if="cases.statusID == 2">
              <v-card flat class="pt-1 pb-1">
                <FromCase
                  :id="id"
                  :cases="caseInfo"
                  :informers="informerInfo"
                />
              </v-card>
              <v-card
                flat
                justify="center"
                align="center"
                class="pa-3"
                color="grey lighten-3"
              >
                <v-btn
                  text
                  color="pri"
                  @click="
                    accept();
                    e1 = 2;
                  "
                >
                  Accept
                </v-btn>

                <v-btn text color="accent" to="./status-page">
                  <v-icon>mdi-home</v-icon> Home
                </v-btn>
                <v-btn
                  text
                  color="error"
                  depressed
                  @click="dialogCancel = true"
                >
                  Cancel
                </v-btn>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="2" max-height="500" class="pa-0 pt-1">
              <v-card flat class="pt-1 pb-1">
                <FromRepair
                  :id="id"
                  :cases="caseInfo"
                  :informers="informerInfo"
                  :receivers="receiverInfo"
                />
              </v-card>
              <v-card
                flat
                justify="center"
                align="center"
                class="pa-3"
                color="grey lighten-3"
              >
                <v-btn
                  text
                  color="pri"
                  @click="
                    accept();
                    e1 = 3;
                  "
                >
                  Continue
                </v-btn>

                <v-btn text color="accent" to="./status-page">
                  <v-icon>mdi-home</v-icon> Home
                </v-btn>
                <v-btn text color="error" @click="dialogCancel = true">
                  Cancel
                </v-btn>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="3" class="pa-0 pt-1">
              <v-card flat class="pt-1 pb-1">
                <FromComplete
                  :id="id"
                  :cases="caseInfo"
                  :informers="informerInfo"
                  :receivers="receiverInfo"
                />
              </v-card>
              <v-card
                flat
                justify="center"
                align="center"
                class="pa-3"
                color="grey lighten-3"
              >
                <v-btn text color="pri" to="./status-page"> Complete </v-btn>

                <v-btn
                  text
                  color="accent"
                  @click="
                    accept();
                    e1 = 2;
                  "
                >
                  Edit
                </v-btn>
              </v-card>
            </v-stepper-content>
          </v-stepper-item>

          <v-dialog v-model="dialogCancel" persistent max-width="600px">
            <v-card>
              <v-card-title>
                <span class="text-h5">Cancel Case</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-autocomplete
                        :items="[
                          'Skiing',
                          'Ice hockey',
                          'Soccer',
                          'Basketball',
                          'Hockey',
                          'Reading',
                          'Writing',
                          'Coding',
                          'Basejump',
                        ]"
                        label="Cause cancel List"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-textarea
                        label="Cause cancel"
                        filled
                        solo
                        rows="4"
                        no-resize
                        class="height:50px"
                        required
                      >
                      </v-textarea>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="error" @click="dialogCancel = false">
                  Close
                </v-btn>
                <v-btn
                  text
                  color="success"
                  @click="dialogCancel = false"
                  to="./status-page"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-stepper>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4" lg="3" xl="2" class="pa-4">
        <!-- <Comment /> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FromCase from "~/components/Case/from-case/from-case-repair.vue";
import FromRepair from "~/components/Case/from-case/from-repair-case.vue";
import FromComplete from "~/components/Case/from-case/from-complete.vue";
import Comment from "~/components/comment/comment-Case/comment-case.vue";

export default {
  components: {
    FromCase,
    FromRepair,
    FromComplete,
    Comment,
  },
  data() {
    return {
      id: "",
      cases: [],
      receivers: [],
      informers: [],
      dialogCancel: false,
      e1: 1,
    };
  },
  computed: {
    ...mapGetters({
      caseInfo: "case/info",
      receiverInfo: "receiver/info",
      informerInfo: "informer/info",
      commentInfo: "comment/info",
    }),
  },
  methods: {
    ...mapActions({
      getDataInfo: "case/getInfo",
      getDataReceiverInfo: "receiver/getInfo",
      getDataInformerInfo: "informer/getInfo",
      getDataCommentInfo: "comment/getInfo",
    }),

    async accept() {
      await this.$store
        .dispatch("receiver/update", { id: this.id })
        .then((response) => {
          // Action Success

          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async fetch() {
    this.id = this.$route.params.detail;

    await this.getDataInfo({ id: this.id });
    await this.getDataReceiverInfo({ id: this.id });
    await this.getDataInformerInfo({ id: this.id });
    // await this.getDataCommentInfo({ id: this.id });
    this.cases = this.caseInfo;
    this.receivers = this.receiverInfo;
    this.informers = this.informerInfo;
    //this.comments = this.commentInfo;

    //console.log("Comment : ", this.commentInfo);
    //console.log("Comment : ", this.comments);
    //console.log("GetComment : ", this.getDataCommentInfo);

    console.log("ReceiverInfo : ", this.receiverInfo);
    console.log("receivers : ", this.receivers);

    console.log("caseInfo : ", this.caseInfo);
    console.log("cases : ", this.cases);
    console.log(this.$route);
    console.log("ID : ", this.$route.params.detail);
    console.log("Type : ", this.$route.query.type);
  },
};
</script>
