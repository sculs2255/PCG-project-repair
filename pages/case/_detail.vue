<template>
  <v-container class="lighten-5 pa-0 ma-0" fix
    ><v-card class="headline pt-1 pb-1 grey lighten-3 " flat>
      <v-icon size="42" color="grey darken-3"
        >mdi-file-document-edit-outline</v-icon
      >
      รายละเอียดการแจ้ง</v-card
    >
    <hr class="my-0" />
    <v-row no-gutters justify="center">
      <v-col cols="12" xs="12" sm="12" md="8" lg="9" xl="8" class="pa-4">
        <v-card
          class="pt-1 pb-1 grey lighten-4"
          v-if="cases.statusID == '1' || cases.statusID == '4'"
        >
          <FromCase :id="id" :cases="caseInfo" :informers="informerInfo" />
        </v-card>

        <v-card flat class="pt-1 pb-1" v-if="cases.statusID == '2'">
          <FromCase
            :id="id"
            :cases="caseInfo"
            :informers="informerInfo"
            :receivers="receiverInfo"
          />
          <FromRepair
            :id="id"
            :cases="caseInfo"
            :informers="informerInfo"
            :receivers="receiverInfo"
          />
        </v-card>

        <v-card flat class="pt-1 pb-1" v-if="cases.statusID == '3'">
          <FromCase
            :id="id"
            :cases="caseInfo"
            :informers="informerInfo"
            :receivers="receiverInfo"
          />
          <FromComplete
            :id="id"
            :cases="caseInfo"
            :informers="informerInfo"
            :receivers="receiverInfo"
          />
        </v-card>

        <v-card flat class="pt-1 pb-1" v-if="cases.statusID == '4'">
          <FromComplete
            :id="id"
            :cases="caseInfo"
            :informers="informerInfo"
            :receivers="receiverInfo"
            :cancels="cancelInfo"
          />
        </v-card>
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
    Comment
  },
  data() {
    return {
      id: "",
      cases: [],
      receivers: [],
      informers: [],
      cancels: [],
      dialogCancel: false
    };
  },
  computed: {
    ...mapGetters({
      caseInfo: "case/info",
      receiverInfo: "receiver/info",
      informerInfo: "informer/info",
      cancelInfo: "cancel/info",
      commentInfo: "comment/info"
    })
  },
  methods: {
    ...mapActions({
      getDataInfo: "case/getInfo",
      getDataReceiverInfo: "receiver/getInfo",
      getDataInformerInfo: "informer/getInfo",
      getDataCancelInfo: "cancel/getInfo",
      getDataCommentInfo: "comment/getInfo"
    }),

    async accept() {
      await this.$store
        .dispatch("receiver/update", { id: this.id })
        .then(response => {
          // Action Success

          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  async fetch() {
    this.id = this.$route.params.detail;

    await this.getDataInfo({ id: this.id });
    await this.getDataReceiverInfo({ id: this.id });
    await this.getDataInformerInfo({ id: this.id });
    await this.getDataCancelInfo({ id: this.id });
    // await this.getDataCommentInfo({ id: this.id });
    this.cases = this.caseInfo;
    this.receivers = this.receiverInfo;
    this.informers = this.informerInfo;
    this.cancels = this.cancelInfo;
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
  }
};
</script>
