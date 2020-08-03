<template> 
    <div class="page">
        <base-peak></base-peak>
    </div>
</template>

<script>
export default {
    name: "dog",
    components: {
        basePeak: () => import("@/common/components/base-peak.vue"),
    },
    data() {
        return {
        };
    },
};
</script>

<style lang="scss" scoped>
</style>
