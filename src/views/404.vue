<template> 
    <div class="page">
        <base-peak></base-peak>
    </div>
</template>

<script>
export default {
    components: {
        basePeak: () => import("@/common/components/base-peak.vue"),
    },
    data() {
        return {
        };
    },
    methods: {
    },
};
</script>

<style lang="scss" scoped>
</style>