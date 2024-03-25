<template>
    <Section anchor="Experience" :title="t('work')" icon="gongzuoxinxi">
        <CompanyWskp />
    </Section>
</template>

<script setup lang="ts">
import Section from '../../components/Layout/Section.vue'
import CompanyWskp from './compary-wskp/index.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>