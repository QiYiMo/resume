<template>
    <ProjectWrap class="pl-4" :title="t('team.name')" :btn-label="t('stack')" :description="t('team.wskpuiDesc')">
        <template #lib>
            <button class="my-btn info">Vue2</button>
            <button class="my-btn info">Vue-Cli</button>
            <button class="my-btn info">Element-ui</button>
            <button class="my-btn info">Vuex</button>
            <button class="my-btn info">Vue-Router</button>
            <button class="my-btn info">Xlsx</button>
            <button class="my-btn info">Xlsx-Style</button>
            <button class="my-btn info">Typesciprt</button>
        </template>

        <ListWrap type="ul" :title="t('contributions')" :list="growList" inner bold />
    </ProjectWrap>
</template>

<script setup lang="ts">
import ProjectWrap from '../../../components/ProjectWrap/ProjectWrap.vue'
import ListWrap from '../../../components/ListWrap/ListWrap.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
const { t } = useI18n()

const growList = computed(() => [
    t('team.d1'),
    t('team.d2'),
    t('team.d3'),
    t('team.d4'),
    t('team.d5'),
])
</script>../../../components/ListWrap/ListWrap.vue../../../components/ProjectWrap/ProjectWrap.vue