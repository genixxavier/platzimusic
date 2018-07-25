<template>
    <li>
        <a :href="artista.url" target="_blank">{{artista.name}}</a>
        <img :src="artista.image[2]['#text']">
    </li>
</template>
<script>
    export default{
        name: 'artista',
        props: ['artista']
    }
</script>