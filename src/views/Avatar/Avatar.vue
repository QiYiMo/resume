<template>
    <div class="w-full flex jusitfy-center items-center mx-auto my-5 flex-col">
        <div
            class="avatar-wrap overflow-hidden relative rounded-full w-[220px] pb-[220px] mb-5 ring-1 ring-zinc-400 *:absolute *:left-0 *:top-0 *:size-[220px]">
            <div class="">
                <img src="/public/avatar.png" alt="">
            </div>
            <div class="bg-me"></div>
        </div>

        <div class="group leading-none tracking-tight text-center mb-2">
            <span class="my-text-clip cursor-help">{{ t('avatar.p1') }}</span>
        </div>
        <div class="group leading-none tracking-tight text-center text-zinc-300">
            <span class="my-text-clip cursor-progress from-sky-400 to-violet-800">{{
                t('avatar.p2')
            }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.avatar-warp {
    perspective: 1000px;
    position: relative;
}

.avatar-warp>div {
    /* 指定嵌套元素如何在3D空间中呈现 */
    transform-style: preserve-3d;
    /* 隐藏被旋转的div元素的背面 */
    backface-visibility: hidden;
    transition: 0.7s ease-in-out;
}

.avatar-warp>div:first-child {
    transform: rotateY(0);
    z-index: 2;
}

.avatar-wrap:hover div:first-child {
    transform: rotateY(-180deg);
}

.avatar-wrap>div:last-child {
    transform: rotateY(180deg);
    z-index: 1;
}

.avatar-wrap:hover div:last-child {
    transform: rotateY(0);
    z-index: 1;
}

.bg-me {
    background: url('/public/avatar.png') no-repeat;
    background-size: 100%;
}
</style>