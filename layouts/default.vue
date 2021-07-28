<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app class="blue lighten-1">
      <v-img
        max-height="60"
        max-width="60"
        src="https://www.perfectcompanion.com/wp-content/uploads/2020/07/download.png"
      ></v-img>
      <v-toolbar-title style="width:50%" v-text="title" />
      <v-tabs align-with-title>
        <v-tab to="/">My case</v-tab>
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
    <v-footer :absolute="!fixed" app class="blue lighten-1">
      <span class="bartext" @click="drawer = false">PCG &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import AvatarButton from '~/components/navbar/AvatarButton.vue'
export default {
   components: {
    AvatarButton,
  },
  data() {
    return {

      show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
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
