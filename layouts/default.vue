<template>
  <v-app dark>

      
    <v-app-bar :clipped-left="clipped" fixed app class="blue lighten-1">
      <v-img
        max-height="60"
        max-width="60"
        src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.6435-9/225043930_4271671072913131_1136427142730689445_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeGNQANdHf4RorSJ5_mUrq5fjm3jiCJY7J-ObeOIIljsnwnZVN8dPK9i9X894aqkiqXJOCYlP2CsNuz8FZTE31ty&_nc_ohc=LL_A6tI74QUAX-qCxqj&tn=RcKZ3Qv40AIwuFMu&_nc_ht=scontent.fbkk22-3.fna&oh=4fe958a4d639d81f44497cba6a4a0340&oe=61284D6E"
      ></v-img>
      <v-toolbar-title style="width:50%" v-text="title" />
      <v-tabs align-with-title>
        <v-tab to="/my-case">My case</v-tab>

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
