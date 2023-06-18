<template>
    <div :class="classObject">222</div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return {
            isActive: true,
            error: null
        }
    },
    computed: {
        classObject() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
})
</script>
<style></style>
