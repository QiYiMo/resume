<template>
    <Section :title="t('contact.title')" icon="lianxi">
        <RowContent :label="t('contact.r1')" text="13834118329" />
        <RowContent :label="t('contact.r2')" text="1094397223@qq.com" />
        <RowContent link label="Github" text="https://github.com/QiYiMo" />
        <!-- <RowContent link :label="t('contact.r4')" text="http://blog.fridolph.top" /> -->
    </Section>
</template>

<script setup lang="ts">
import Section from '../../components/Layout/Section.vue'
import RowContent from '../../components/RowContent/RowContent.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>