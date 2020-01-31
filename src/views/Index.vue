<template>
    <div class="full-width full-height">
        <TopHeader class="header full-width"/>
        <PageRouterView class="view full-width"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Home from '@/views/Home.vue'
import TopHeader from '@/views/header/TopHeader.vue'
import PageRouterView from '@/views/page/PageRouterView.vue'

@Component({
  components: { PageRouterView, TopHeader, Home }
})
export default class Index extends Vue {
}
</script>

<style scoped lang="less">
@height: 80px;
.header {
    height: @height;
}

.view {
    height: calc(-@height + ~"100%")
}
</style>
