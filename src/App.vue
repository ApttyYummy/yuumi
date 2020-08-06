<template>
    <div id="app">
        <transition name="slide-left">
            <keep-alive>
                <router-view v-show="$route.meta.keepAlive" />
            </keep-alive>
        </transition>

        <transition name="slide-left">
            <router-view v-show="!$route.meta.keepAlive" />
        </transition>
    </div>
</template>

<style lang="scss">
body {
    margin: 0;
}
</style>
