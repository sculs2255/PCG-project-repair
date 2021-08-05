<template>
  <v-app>
    <v-app-bar  fixed app  color="pcgColor white--text">
      <v-img
        max-height="150"
        max-width="150"
        :src="require('@/assets/pcg_logo2.png')"
      >
      </v-img>
      <v-toolbar-title style="width:350px" class="pa-1" v-text="title" />
      <v-spacer></v-spacer>
      <v-tabs align-with-title color="white"  dark>
        <v-spacer></v-spacer>
        <v-tab to="/my-case" >My case</v-tab>
        <v-tab to="/status-page">Status Case</v-tab>
        <v-menu offset-y transition="scroll-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-tab color="primary" dark v-bind="attrs" v-on="on">Master</v-tab>
          </template>
          <v-list>
            <v-list-item v-for="item in items" :key="item" :to="item.to">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-spacer />
        <v-spacer />

        <AvatarButton />
      </v-tabs>
      <v-spacer />
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app class="pri">
      <span class="bartext" @click="drawer = false">
        PCG &copy; {{ new Date().getFullYear() }}
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import AvatarButton from "~/components/navbar/AvatarButton.vue";
export default {
  components: {
    AvatarButton
  },
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "Password",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`
      },

      items: [
        {
          title: "Personnel",
          to: "/Id_master",
          component: "master"
        },
        {
          title: "Branch",
          to: "/Id_branch"
        },
        {
          title: "Country",
          to: "/Id_country"
        },
        {
          title: "Status",
          to: "/Id_status"
        },
        {
          title: "Priotry",
          to: "/Id_priotry"
        },
        {
          title: "System",
          to: "/Id_system"
        },
        {
          title: "Module",
          to: "/Id_module"
        }
      ],
      title: "Help Desk IT Support"
    };
  }
};
</script>
<style lang="scss" scoped>
.v-application {
  background-color: #eeeeee !important;
}
.sidetext {
  color: #eeeeee;
  font-weight: bold;
}

.bartext {
  color: white !important;
}
</style>
