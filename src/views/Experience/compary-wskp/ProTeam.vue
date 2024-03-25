<template>
    <ProjectWrap class="pl-4" :title="t('team.name')" :btn-label="t('stack')" :description="t('team.wskpuiDesc')">
        <template #lib>
            <button class="my-btn info">Vue2</button>
            <button class="my-btn info">Vuex</button>
            <button class="my-btn info">Ucharts</button>
            <button class="my-btn info">Xlsx</button>
            <button class="my-btn info">Xlsx-Style</button>
        </template>
        <ListWrap :title="t('contributions')" :list="adminList" inner bold />

    </ProjectWrap>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ProjectWrap from '../../../components/ProjectWrap/ProjectWrap.vue'
import ListWrap from '../../../components/ListWrap/ListWrap.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const adminList = computed(() => [
    t('team.d1'),
    t('team.d2'),
    t('team.d3'),
    t('team.d4'),
    t('team.d5'),
])

// 难点 没有体现出来，老师建议去掉，也是，简历里避免这样的凑字数
// const hardList = computed(() => [
//   t('proAdmin.h1'),
//   t('proAdmin.h2'),
//   t('proAdmin.h3'),
//   t('proAdmin.h4'),
// ])
</script>