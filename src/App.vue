<template>
    <my-header custom-title="通訊錄" custom-fixed>
        <button @touchstart="backBtn" slot="left">返回</button>
        <button @touchstart="homeBtn" slot="right">主頁</button>
    </my-header>
    <!-- <my-list :user-data="userData"></my-list> -->
</template>

<script>
    var userData = [
        {
            index: 'A',
            users: [
                { name: 'a1', tel: '0912111111' },
                { name: 'a2', tel: '0912111112' },
                { name: 'a3', tel: '0912111113' },
                { name: 'a4', tel: '0912111114' },
                { name: 'a5', tel: '0912111115' },
                { name: 'a6', tel: '0912111116' }
            ]
        },
        {
            index: 'B',
            users: [
                { name: 'b1', tel: '0912111114' },
                { name: 'b2', tel: '0912111115' },
                { name: 'b3', tel: '0912111116' },
                { name: 'b4', tel: '0912111117' },
                { name: 'b5', tel: '0912111118' },
                { name: 'b6', tel: '0912111119' }
            ]
        },
        {
            index: 'C',
            users: [
                { name: 'c1', tel: '0912111117' },
                { name: 'c2', tel: '0912111118' },
                { name: 'c3', tel: '0912111119' },
                { name: 'c4', tel: '0912111117' },
                { name: 'c5', tel: '0912111118' },
                { name: 'c6', tel: '0912111119' }
            ]
        },
        {
            index: 'D',
            users: [
                { name: 'd1', tel: '0912111121' },
                { name: 'd2', tel: '0912111122' },
                { name: 'd3', tel: '0912111123' },
                { name: 'd4', tel: '0912111121' },
                { name: 'd5', tel: '0912111122' },
                { name: 'd6', tel: '0912111123' }
            ]
        },
        {
            index: 'E',
            users: [
                { name: 'e1', tel: '0912111124' },
                { name: 'e2', tel: '0912111125' },
                { name: 'e3', tel: '0912111126' },
                { name: 'e4', tel: '0912111124' },
                { name: 'e5', tel: '0912111125' },
                { name: 'e6', tel: '0912111126' }
            ]
        },
        {
            index: 'F',
            users: [
                { name: 'f1', tel: '0912111127' },
                { name: 'f2', tel: '0912111128' },
                { name: 'f3', tel: '0912111129' },
                { name: 'f4', tel: '0912111127' },
                { name: 'f5', tel: '0912111128' },
                { name: 'f6', tel: '0912111129' }
            ]
        }
    ]
    export default {
        name: 'app',
        data() {
            return {
                userData: userData
            }
        }
    }
</script>

<style lang="scss"></style>
