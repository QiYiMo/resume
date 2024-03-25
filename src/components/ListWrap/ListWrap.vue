<template>
    <dl v-if="type === 'dl'" class="mb-3" :class="{ 'ml-3': inner }">
        <dt v-if="title" class="mb-2" :class="titleClass">{{ title }}</dt>
        <dd class="pl-3 before:content-[attr(data-index)] before:mr-2 before:text-sm before:mb-2"
            :data-index="`${index + 1}`" v-for="(item, index) in list" :key="index" v-html="item"></dd>
    </dl>
    <ul v-if="type === 'ul'" class="mb-3" :class="{ 'ml-3': inner }">
        <li v-if="title" class="mb-2" :class="titleClass">{{ title }}</li>
        <li class="pl-3 before:content-['•'] before:mr-2 before:text-sm before:font-bold before:mb-2"
            :data-index="`${index + 1}`" v-for="(item, index) in list" :key="index" v-html="item">
        </li>
    </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ListWrapProps } from './types'
const props = withDefaults(defineProps<ListWrapProps>(), {
    type: 'dl',
    bold: false,
    inner: false,
    titleSize: 'base'
})

const titleClass = computed(() => {
    let ret: string[] = []
    if (props.bold) ret.push('font-bold')
    if (props.titleSize === 'sm') ret.push('text-sm')
    if (props.titleSize === 'lg') ret.push('text-lg')
    if (props.titleSize === 'xl') ret.push('text-xl')
    if (props.titleSize === '2xl') ret.push('text-2xl')
    if (props.titleSize === 'base') ret.push('text-base')
    return ret
})
</script>

<style scoped></style>