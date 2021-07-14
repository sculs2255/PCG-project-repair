
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
          
          <td>{{ item.calories }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
           <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
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
          calories: 159
        },
        {
          name: "Ice cream sandwich",
          calories: 237
        },
        {
          name: "Eclair",
          calories: 262
        },
        {
          name: "Cupcake",
          calories: 305
        },
        {
          name: "Gingerbread",
          calories: 356
        },
        {
          name: "Jelly bean",
          calories: 375
        },
        {
          name: "Lollipop",
          calories: 392
        },
        {
          name: "Honeycomb",
          calories: 408
        },
        {
          name: "Donut",
          calories: 452
        },
        {
          name: "KitKat",
          calories: 518
        }
      ]
    };
  }
};
</script>
