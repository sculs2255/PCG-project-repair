<template>
  <div id="Employe-from">
    <label>Emp</label>
    <input type="text" />
    <label>Email</label>
    <input type="text" />
    <button>add emp</button>
  </div>
</template>

<script>
export default {
name:'Employe-from',
data() {
  return {
        emp:{
          name:'',
          email:''
        }
    }

  }

}
</script>
