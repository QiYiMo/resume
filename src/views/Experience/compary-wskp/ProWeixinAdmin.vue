<template>
    <ProjectWrap class="pl-4" :title="t('proWeixinAdmin.name')" :btn-label="t('stack')"
        :description="t('proWeixinAdmin.description')">
        <template #lib>
            <button class="my-btn info">Vue3</button>
            <button class="my-btn info">Uni-app</button>
            <button class="my-btn info">Pinia</button>
            <button class="my-btn info">UNI-UI</button>
            <button class="my-btn info">Ucharts</button>
            <button class="my-btn info">TypeScript</button>
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
    t('proWeixinAdmin.d1'),
    t('proWeixinAdmin.d2'),
    t('proWeixinAdmin.d3'),
    t('proWeixinAdmin.d4'),
])

// 难点 没有体现出来，老师建议去掉，也是，简历里避免这样的凑字数
// const hardList = computed(() => [
//   t('proAdmin.h1'),
//   t('proAdmin.h2'),
//   t('proAdmin.h3'),
//   t('proAdmin.h4'),
// ])
</script>