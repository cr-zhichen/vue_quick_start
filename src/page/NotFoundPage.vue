<script setup>

import {useGoToHome} from "@/router/goToRouter.js";
import {ref} from "@vue/reactivity";
import {onMounted} from "vue";

onMounted(() => {
    countDown();
})

const goToHome = useGoToHome();
const remaining_seconds = ref(6);

//倒计时
const countDown = () => {
    if (remaining_seconds.value > 1) {
        remaining_seconds.value--;
        setTimeout(countDown, 1000);
    } else {
        goToHome();
    }
}

</script>

<template>
    <div id="notFoundPage">
        <h1>页面未找到，将在{{ remaining_seconds }}秒后跳转到主页面</h1>
        <el-button @click="goToHome">回到主页</el-button>
    </div>
</template>

<style scoped>

</style>