<template >
  <div>
    <tr>
      <td>
        <h1>Priotry</h1>
      </td>
      <td>
        <input type="text" name="search" placeholder="Search.." />
        <v-btn elevation="2">Search</v-btn>
      </td>
    </tr>
    <br />
    <tr>
      <v-sheet color="white" elevation="11" height="300" width="800">
        <v-simple-table fixed-header height="300" width="1000">
          <template v-slot:default>
            <thead>
              <tr>
                  <th class="text-left">Priotry</th>
                
                <th class="text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.Priotry}}</td>
                
                

                <td>
                  <v-btn depressed color="primary" elevation="2" x-small>Edit</v-btn>
                  <v-btn depressed color="error" elevation="2" x-small>Delete</v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-sheet>
      <td>
        <h1>รอใส่ noti</h1>
      </td>
    </tr>
  </div>
</template>


<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          id: 159,
          status: " It",
          Email: "Boat0289@hotmail.com",
          phone: "0922970028",
          county: "Thailand",
          branch: "Silom",
          d:"Silom , Empire , Samutprakan",
          statuscase:"New Case",
          Priotry:"High",
        },
        {
          name: "Ice cream sandwich",
          id: 237,
          status: " It",
          Email: "Ice_grem@hotmail.com",
          phone: "0897865461",
          county: "Malaysia",
          statuscase:"In Process",
           Priotry:"Medium",
        },
        {
          name: "Eclair",
          id: 262,
          status: " User",
          Email: "Eclair_2@hotmail.com",
          phone: "0922970028",
          county: "India",
          statuscase:"Complete",
           Priotry:"Low",
          
        },
       
        
      ]
    };
  }
};
</script>