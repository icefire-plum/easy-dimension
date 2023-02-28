<template>
    <div class="demo">
        <div class="demo" id="easy-easyDimension"></div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$easyDimension.init('easy-easyDimension')
        const option = {
            center: [200, 200],
            radius: [100, 50],
            rotation: Math.PI * 0.5,
            startAngle: Math.PI * 1,
            periphery: {
                show: true
            },
            fill: {
                show: false
            }
        }
        this.$easyDimension.drawEllipse(option)
    }
}
</script>

<style lang="scss" scoped>
.demo {
    width: 80%;
    height: 400px;
    background: #eee; 
}
</style>