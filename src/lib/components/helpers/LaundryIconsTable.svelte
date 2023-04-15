<script>
  import data from "$lib/data/laundryIcons.csv";
  //   console.log(data);
  // import test from '$lib/images/laundryIcons_svg/bleach.svg'
</script>

<div class="grid-icons">
  <!-- <img
  src= "{test}"
  alt= "test"
  /> -->
  {#each data as icon}
    <img src="images/laundryIcons_svg/{icon.svg_name}" alt={icon.icon_name} />
    <!-- <p>{icon.icon_instruction}</p> -->
  {/each}
</div>

<style>
  .grid-icons {
    grid-template-columns: 100px 50px 100px;
    grid-template-rows: 80px auto 80px;
    column-gap: 10px;
    row-gap: 15px;
  }
</style>
