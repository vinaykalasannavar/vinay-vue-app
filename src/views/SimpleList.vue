<template>
  <div class="big-list">
    You can list here!
    <div class="display-in-centre">
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
        <tr v-for="item in list" :key="item.id" class="tamatar" :class="item.class">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "1 boy", class: "list" },
        { id: 2, name: "2 boy", class: "lost" },
        { id: 3, name: "3 boy", class: "list" },
        { id: 4, name: "4 boy", class: "lost" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.big-list {
  border: 1px solid brown;

  .list {
    background: rgb(91, 91, 141);
  }
  .lost {
    background: rgb(206, 179, 179);
  }

  .tamatar {
    color: tomato;
  }
}

.display-in-centre {
    margin: auto;
    width: 5%;
    // padding: 0;
}
</style>