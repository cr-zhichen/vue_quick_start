<script setup>
import {globalState} from "@/global/globalState.js";
import {getThemeName, toggleTheme, getTheme} from "@/tool/themeChange.js";
import {ref} from "@vue/reactivity";
import {useGoToNotFound} from "@/router/goToRouter.js";

const theme = ref(getThemeName());

const swatchTheme = () => {
    toggleTheme();
    theme.value = getThemeName();
}
const goToNotFound = useGoToNotFound();

</script>

<template>
    <div id="homePage">
        <h1>{{ globalState.homePageText }}</h1>
        <el-button @click="swatchTheme">{{ theme }}</el-button>
        <el-button @click="goToNotFound">404页面</el-button>
    </div>
</template>

<style scoped>

</style>