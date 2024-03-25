<template>
    <div class="flex item-center justify-center hover:text-sky-400 dark:transition">
        <Iconfont name="xiazai" :size="22" @click="download" />
    </div>
</template>

<script setup lang="ts">
import Iconfont from '../../Iconfont/Iconfont.vue'
//@ts-ignore
import down from '/public/段菲-2年-本科-前端开发工程师.pdf'
const download = () => {
    const a = document.createElement('a')
    a.href = down
    a.target = '_blank'
    a.download = '段菲-2年-本科-前端开发工程师.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
</script>