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
            // 内外半径, [ 40, 50]
            radius: 50,
            // 起始角，以弧度计算，默认从3点种方向开始
            startAngle: Math.PI * 0,
            // 结束角，以弧度计算，默认一周结束
            endAngle: Math.PI * 1,
            clockwise: true,
            periphery: {
                show: true,
                color: '#8B8878',
                lineWidth: 2,
                lineDash: []
            },
            fill: {
                show: true,
                color: '#00F5FF'
            }
        }
        this.$easyDimension.drawPie(option)
    }
}
</script>

<style lang="scss" scoped>
.demo {
    width: 800px;
    height: 400px;
    background: #eee; 
}
</style>