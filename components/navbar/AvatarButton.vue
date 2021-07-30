<template>
  <div class="text-center">
    <v-menu offset-y min-width="200px" rounded="lg">
      <template #activator="{ on, attrs }">
        <v-btn icon x-large class="ma-1" v-bind="attrs" v-on="on">
          <v-avatar color="accent" size="40">
            <span class="white--text text-h5">
              {{ firstname.substring(0, 1) }}{{ lastname.substring(0, 1) }}
            </span>
          </v-avatar>
        </v-btn>
        {{ firstname }}
      </template>
      <v-card>
        <v-list-item-content class="justify-center">
          <div class="mx-auto text-center">
            <h3>{{ firstname }} {{ lastname }}</h3>
            <p class="text-caption mt-1">{{ email }}</p>
            <div v-for="item in menus" :key="item.title">
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text :to="item.to">
                {{ item.title }}
                <v-icon right>{{ item.icon }}</v-icon>
              </v-btn>
            </div>
          </div>
        </v-list-item-content>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { title: "Profile", to: "/id_profile", icon: "mdi-account-multiple" },
        { title: "Logout", to: "", icon: "mdi-logout" }
      ],
      // User
      firstname: "SunSunday",
      lastname: "SubPORT",
      email: "Sunday_0289@gmail.com"
    };
  }
};
</script>
