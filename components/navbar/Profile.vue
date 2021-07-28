<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <v-card>
        <v-card-text>
          <h3>ID : 12435</h3>
          <p>UserName : Sitan Manob</p>
          <p>
            Password : ***********
            <v-dialog v-model="dialog1" width="400">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="ma" color="cyan" dark v-bind="attrs" v-on="on" x-small>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  <span class="text-h5">Chang Password</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="8">
                        <v-text-field
                          v-model="password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Normal with hint text"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="8">
                        <v-text-field
                          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show2 ? 'text' : 'password'"
                          name="input-10-2"
                          label="New password"
                          value="wqfasds"
                          class="input-group--focused"
                          @click:append="show2 = !show2"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="8" >
                        <v-text-field
                          :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show3 ? 'text' : 'password'"
                          name="input-10-2"
                          label="Comfirm password"
                         
                          value="wqfasds"
                          class="input-group--focused"
                          @click:append="show3 = !show3"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                  <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </p>
          <h3>Personal Information</h3>
          <p>Name : Sinit Manop</p>
          <p>Department : It Support</p>
          <p>Sex : Male</p>
          <p>
            Phone : 092-2297-0028
            <v-dialog v-model="dialog2" width="300">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="ma" color="cyan" dark v-bind="attrs" v-on="on" x-small>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  <span class="text-h5">Edit Phone</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field label="Edit Phone*" required></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                  <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </p>
          <p>
            Email : Sanit0892_@hotmail.com
            <v-dialog v-model="dialog3" width="300">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="ma" color="cyan" dark v-bind="attrs" v-on="on" x-small>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  <span class="text-h5">Edit Email</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field label="Edit Email*" required></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                  <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </p>

          <h3>Current Address</h3>
          <p>
            Country : Thailand
            <v-dialog v-model="dialog4" width="300">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="ma" color="cyan" dark v-bind="attrs" v-on="on" x-small>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  <span class="text-h5">Edit Country</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-autocomplete auto-select-first clearable filled rounded solo></v-autocomplete>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                  <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </p>
          <p>Address : 1 Empire Tower, South Sathorn Rd., Yannawa, Sathorn, Bangkok 10120</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "Password",
      rules: {
        required: value => !!value || "Required."
      },
      
    };
  }
};
</script>