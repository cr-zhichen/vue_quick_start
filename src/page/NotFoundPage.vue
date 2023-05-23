<script setup>

import {useGoToHome} from "@/router/goToRouter.js";
import {ref} from "@vue/reactivity";
import {onMounted} from "vue";

const goToHome = useGoToHome();

</script>

<template>
    <div id="notFoundPage">
        <h1>404NotFound</h1>
        <el-button @click="goToHome">回到主页</el-button>
    </div>
</template>

<style scoped>

</style>