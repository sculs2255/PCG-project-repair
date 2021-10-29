<template>
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
                  'Basejump'
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
</template>
