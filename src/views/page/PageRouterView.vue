<template>
    <div>
        <div class="w-2-7 full-height">
            <router-view name="left"/>
        </div>
        <div class="w-3-7 full-height">
            <router-view name="center"/>
        </div>
        <div class="w-2-7 full-height">
            <router-view name="right"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PageRouterView extends Vue {
}
</script>

<style scoped>

</style>
