
        <template>
  <div>
    <h1>Personnel</h1>

    <v-simple-table fixed-header height="300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Name</th>
            <th class="text-left">Status</th>
            <th class="text-left">Email</th>
            <th class="text-left">Phone</th>
            <th class="text-left">Country</th>
            <th class="text-left">Branch</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.Email }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.county }}</td>
            <td>{{ item.branch }}</td>
            <td>
              <v-btn depressed color="primary" elevation="2" x-small>Edit</v-btn>
              <v-btn depressed color="error" elevation="2" x-small>Delete</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
          branch: "Silom"
        },
        {
          name: "Ice cream sandwich",
          id: 237,
          status: " It",
          Email: "Ice_grem@hotmail.com",
          phone: "0897865461",
          county: "Thailand",
          branch: "Silom"
        },
        {
          name: "Eclair",
          id: 262,
          status: " User",
          Email: "Eclair_2@hotmail.com",
          phone: "0922970028",
          county: "Thailand",
          branch: "Silom"
        },
        {
          name: "Cupcake",
          id: 305,
          status: " It",
          Email: "CupCake12@hotmail.com",
          phone: "0922970028",
          county: "Thailand",
          branch: "Silom"
        },
        {
          name: "Gingerbread",
          id: 356,
          status: " User",
          Email: "Gingerbread872@hotmail.com",
          phone: "0922970028",
          county: "Thailand",
          branch: "Silom"
        },
        {
          name: "Jelly bean",
          id: 375,
          status: " User",
          Email: "Jelly_007@hotmail.com",
          phone: "0922970028",
          county: "Thailand",
          branch: "Silom"
        },
        {
          name: "Lollipop",
          id: 392,
          status: " User",
          Email: "Lollipop@hotmail.com",
          phone: "0922970028",
          county: "Thailand",
          branch: "Silom"
        },
        {
          name: "Honeycomb",
          id: 408,
          status: " It",
          Email: "HoneyComb@hotmail.com",
          phone: "0922970028",
          county: "Thailand",
          branch: "Silom"
        },
        {
          name: "Donut",
          id: 452,
          status: " User",
          Email: "Donut72@hotmail.com",
          phone: "0922970028",
          county: "Thailand",
          branch: "Silom"
        },
        {
          name: "KitKat",
          id: 518,
          status: " It",
          Email: "KITKAT_092@hotmail.com",
          phone: "0922970028",
          county: "Thailand",
          branch: "Silom"
        }
      ]
    };
  }
};
</script>
