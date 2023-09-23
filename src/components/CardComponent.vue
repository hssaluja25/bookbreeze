<template>
    <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img :src="imgSrc" class="h-full w-full object-cover" />
        </div>
        <div class="p-6">
            <div class="flex items-center justify-between">
                <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                    {{ bookTitle }}
                </p>
                <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                    Rs {{ price }}
                </p>
            </div>
            <strong
                class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                {{ author }}
            </strong>
            <strong
                class="ml-2 rounded-full border border-green-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-green-600">
                {{ available }} copies
            </strong>
            <p class="mt-2 block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['bookTitle', 'price', 'description', 'author', 'imgSrc', 'available']
}
</script>