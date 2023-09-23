<template>
    <div class="flex flex-wrap space-x-4 justify-center mb-4">
        <card-component bookTitle="A Game of Thrones" price="400"
            description="A Game of Thrones” by George R.R. Martin tells the tale of various clashing households and their quest to conquer control over the seven kingdoms."
            author="George R.R. Martin" available="100"
            imgSrc="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6a6e6e84844273.5d69685326acc.jpg"></card-component>
        <card-component bookTitle="A Game of Thrones" price="400"
            description="A Game of Thrones” by George R.R. Martin tells the tale of various clashing households and their quest to conquer control over the seven kingdoms."
            author="George R.R. Martin" available="100"
            imgSrc="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6a6e6e84844273.5d69685326acc.jpg"></card-component>
        <card-component bookTitle="A Game of Thrones" price="400"
            description="A Game of Thrones” by George R.R. Martin tells the tale of various clashing households and their quest to conquer control over the seven kingdoms."
            author="George R.R. Martin" available="100"
            imgSrc="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6a6e6e84844273.5d69685326acc.jpg"></card-component>
        <card-component bookTitle="A Game of Thrones" price="400"
            description="A Game of Thrones” by George R.R. Martin tells the tale of various clashing households and their quest to conquer control over the seven kingdoms."
            author="George R.R. Martin" available="100"
            imgSrc="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6a6e6e84844273.5d69685326acc.jpg"></card-component>
    </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue'

export default {
    name: 'RowComponent',
    props: {
        rowCards: {
            type: Array
        }
    },
    components: {
        CardComponent
    }
}
</script>