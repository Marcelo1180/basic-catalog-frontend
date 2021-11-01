<template>
    <div class="page-search">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Search</h1>

                <h2 class="is-size-5 has-text-grey">Search term: "{{ query }}"</h2>
            </div>

            <ProductBox 
                v-for="product in products"
                v-bind:key="product.id"
                v-bind:product="product" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ProductBox from '@/components/ProductBox.vue'

export default {
    name: 'Search',
    components: {
        ProductBox
    },
    data() {
        return {
            products: [],
            query: ''
        }
    },
    mounted() {
        document.title = 'Search | Products'
        this.performSearch()
    },
    watch: {
        $route(to, from) {
            if (to.name === 'Search') {
                this.performSearch()
            }
        }
    },
    methods: {
        async performSearch() {
            this.query = this.$route.params.search_query
            this.$store.commit('setIsLoading', true)

            await axios
            .get(`/catalog/v1/search/product/?query=${this.query}`)
                .then(response => {
                  this.products = response.data
                })
                .catch(error => {
                  toast({
                    message: "Something went wrong. Please try again.",
                    type: "is-danger",
                    dismissible: true,
                    pauseOnHover: true,
                    duration: 2000,
                    position: "bottom-right",
                  });
                })

            this.$store.commit('setIsLoading', false)
        }
    }
}
</script>
