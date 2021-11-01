<template>
  <router-link
    v-for="category in categories"
    :key="category.id"
    :to="'/filter/'+category.id"
    class="navbar-item"
    >{{ category.name }}</router-link
  >
</template>

<script>
  import axios from "axios";
  import { toast } from "bulma-toast";

  export default {
    name: "CategoryMenu",
    data() {
      return {
        categories: [],
      };
    },
    mounted() {
      this.getCategories();
    },
    methods: {
      async getCategories() {
        this.$store.commit("setIsLoading", true);

        axios
          .get("/catalog/v1/brand/")
          .then((response) => {
            this.categories = response.data;
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
