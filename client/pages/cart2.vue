<template>
  <!--MAIN-->
  <main>
    <h1>Hello World</h1>
  </main>
  <!--/MAIN-->
</template>

<script>

export default {
  async asyncData({$axios}) {

    try {
      let cartResponse = await $axios.$get(
      "http://127.0.0.1:8000/api/order/carts/"
    )
    console.log(cartResponse)
    } catch (err) {
      console.log(err)
    }
    
  }
}
</script>


