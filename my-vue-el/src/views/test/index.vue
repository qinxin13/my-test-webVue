<template>
    <div class="demo">
        <button v-for="tab in tabs" :key="tab" :class="['tab-button',{active:currentTab===tab}]" @click="currentTab=tab">{{ tab }}</button>
        <component :is="currentTab" class="tab"></component>
    </div>

</template>
<script lang="ts">
import { defineComponent } from "vue";
import Home from './Home.vue';
import Posts from './Posts.vue';
import Archive from "./Archive.vue";

export default defineComponent({
    name: 'test',
    components: {
        Home,
        Posts,
        Archive
    },
    data() {
        return {
            currentTab: 'Home',
            tabs: ['Home', 'Posts', 'Archive']
        }
    }
})
</script>

<style lang="less" scoped>
    .demo{
        font-family: sans-serif;
        border:1px solid #eee;
        border-radius: 2px;
        padding:20px 30px;
        margin-top:1em;
        margin-bottom: 40px;
        user-select: none;
        overflow: auto;
    }
    .tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
