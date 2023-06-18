<template>
    <div id="rooter">
        <navigation></navigation>
        <severLogin></severLogin>
        <dataLogin></dataLogin>
        <ecologySever></ecologySever>
        <severInstitution></severInstitution>
        <node></node>
        <severArea></severArea>
        <foot></foot>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import severLogin from './severLogin.vue';
import navigation from './navigation.vue';
import dataLogin from './dataLogin.vue';
import ecologySever from './ecologySever.vue';
import severInstitution from './severInstitution.vue';
import node from './node.vue';
import severArea from './severArea.vue';
import foot from './foot.vue';
export default defineComponent({
    name: 'index',
    components: {
        severLogin,
        navigation,
        dataLogin,
        ecologySever,
        severInstitution,
        node,
        severArea,
        foot,
    },
    data() {
        return {
            activeName: 'second'
        };
    },

});
</script>
<style lang="less" scoped>
#rooter {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: #ffffff;
    overflow: auto;
}
</style>