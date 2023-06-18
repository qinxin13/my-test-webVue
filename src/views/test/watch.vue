<template>
    <p>shshshsshhs</p>
   <input ref='input'/>ss
</template>
<script>

import { defineComponent } from 'vue';
    export default defineComponent({
        name:'watch',
       mounted(){
        this.$refs.input.focus()
       }
    })
</script>

