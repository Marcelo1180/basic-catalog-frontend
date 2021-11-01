<template>
  <div class="page-product">
    <div class="columns is-multiline">
      <div class="column is-9">
        <figure class="image mb-6">
          <img v-bind:src="product.image" />
        </figure>

        <h1 class="title">{{ product.name }}</h1>

        <p>{{ product.description }}</p>
      </div>

      <div class="column is-3">
        <h2 class="subtitle">Information</h2>

        <p><strong>Stock Keeping Unit: </strong>{{ product.sku }}</p>
        <p><strong>Price: </strong>${{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { toast } from "bulma-toast";

  export default {
    name: "Product",
    data() {
      return {
        product: {},
        quantity: 1,
      };
    },
    mounted() {
      this.getProduct();
    },
    methods: {
      async getProduct() {
        this.$store.commit("setIsLoading", true);

        const product_id = this.$route.params.product_id;

        await axios
          .get(`/catalog/v1/product/${product_id}/`)
          .then((response) => {
            this.product = response.data;

            document.title = this.product.name + " | Detail";
          })
          .catch((error) => {
            toast({
              message: "Something went wrong. Please try again.",
              type: "is-danger",
              dismissible: true,
              pauseOnHover: true,
              duration: 2000,
              position: "bottom-right",
            });
          });

        this.$store.commit("setIsLoading", false);
      },
    },
  };
</script>
