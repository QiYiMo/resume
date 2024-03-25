<template>
    <ProjectWrap class="pl-4" :title="t('proWeixin.name')" :btn-label="t('stack')"
        :description="t('proWeixin.description')">
        <template #lib>
            <button class="my-btn info">Uni-app</button>
            <button class="my-btn info">Vue2</button>
            <button class="my-btn info">Vuex</button>
            <button class="my-btn info">UNI-UI</button>
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
    t('proWeixin.c1'),
    t('proWeixin.c2'),
    t('proWeixin.c3'),
    t('proWeixin.c4'),
    t('proWeixin.c5'),
    t('proWeixin.c6'),
])

// 难点 没有体现出来，老师建议去掉，也是，简历里避免这样的凑字数
// const hardList = computed(() => [
//   t('proWeixin.h1'),
//   t('proWeixin.h2'),
//   t('proWeixin.h3'),
//   t('proWeixin.h4'),
// ])
</script>../../../components/ProjectWrap/ProjectWrap.vue