<template>
  <v-app >
    <v-app-bar :clipped-left="clipped" fixed app  class="pcgColor">
      <v-toolbar-title style="width:50%" v-text="title" />
      <v-tabs align-with-title >
        <v-tab to="/" >My case</v-tab>
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
      </v-tabs>
      <v-spacer />
    </v-app-bar>
    
    <v-main>
      <v-container >
        <Nuxt />
      </v-container>
    </v-main>
     <v-footer :absolute="!fixed" app class="primary">
      <span class="bartext" @click="drawer = false">
        PCG &copy; {{ new Date().getFullYear() }}
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Personnel",
          to: "/master",
          component: "master"
        },
        {
          title: "Branch",
          to: "/Branch"
        },
        {
          title: "Country",
          to: "/Country"
        },
        {
          title: "Status",
          to: "/Status_master"
        },
        {
          title: "Priotry",
          to: "/Priotry"
        },
        { title: "Master", to: "/master" }
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
  color: #18315a;
  font-weight: bold;
}

</style>