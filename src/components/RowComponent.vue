<template>
    <div class="flex flex-wrap space-x-4 justify-center mb-4">
        <!-- some books do not have the isbn info. so i had tried using title but that didn't work either -->
        <!-- The issue lies here.                         👇 -->
        <card-component v-for="(obj, i) in rowCards" :key="obj['title']" :bookTitle="obj.title" :price="obj.price"
            :description="obj.description" :author="obj.author" available="100" :imgSrc="images[i]"></card-component>
    </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue'

export default {
    name: 'RowComponent',
    props: ['rowCards'],
    components: {
        CardComponent
    },
    data() {
        return {
            // Just a random array which is initialized to sume numberss.
            // Later we would set it to contain the image links of the 4 books in the row
            images: [0, 1, 2, 3]
        }
    },
    methods: {
        async fetchCoverImages() {
            // in each row, there are 4 books.
            // so we make 4 API calls to fetch the cover of the book
            for (let i = 0; i < 4; i++) {
                try {
                    const requestOptions = {
                        method: 'GET',
                        redirect: 'follow'
                    };
                    const URL = import.meta.env.VITE_GOOGLE_BOOKS_URL;
                    const title = encodeURIComponent(this.rowCards[i].title)
                    const response = await fetch(`${URL}/volumes?q=${title}`, requestOptions);
                    if (!response.ok) {
                        throw new Error("Error fetching Google Books cover image")
                    }
                    const result = await response.json();
                    const imgLink = result['items'][0]['volumeInfo']['imageLinks']
                    let imgSrc = null;
                    if (typeof imgLink === 'undefined') {
                        imgSrc = "book.jpg"
                    } else {
                        imgSrc = imgLink['thumbnail']
                    }
                    this.images[i] = imgSrc
                } catch (error) {
                    console.log('error', error);
                }
            }
        }
    },
    watch: {
        async rowCards() {
            await this.fetchCoverImages()
        }
    },
    async created() {
        await this.fetchCoverImages()
    }
}
</script>