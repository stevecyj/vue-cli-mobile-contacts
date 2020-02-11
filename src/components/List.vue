<template>
    <div id="list">
        <ul class="list_user" ref="listUser" @touchmove="bMove = true">
            <li v-for="item in userData" :key="item.index">
                <p>{{ item.index }}</p>
                <ul>
                    <li @touchend="showTel(user.tel)" v-for="user in item.users" :key="user.name">
                        {{ user.name }}
                    </li>
                </ul>
            </li>
        </ul>
        <ul class="list_index" ref="listIndex">
            <li @touchstart="setScroll" v-for="(item, index) in userIndex" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'my-list',
        props: {
            'user-data': {
                type: Array,
                default: function() {
                    return []
                }
            }
        },
        data: function() {
            return {
                bMove: false
            }
        },
        computed: {
            userIndex: function() {
                return this.filterIndex(this.userData)
            }
        },
        methods: {
            filterIndex: function(data) {
                var result = []
                for (var i = 0; i < data.length; i++) {
                    if (data[i].index) {
                        result.push(data[i].index)
                    }
                }
                return result
            },
            setListIndexPos: function() {
                var iH = this.$refs.listIndex.offsetHeight
                this.$refs.listIndex.style.marginTop = -iH / 2 + 'px'
            },
            setScroll: function(ev) {
                var aP = this.$refs.listUser.getElementsByTagName('p')
                for (var i = 0; i < aP.length; i++) {
                    // console.log(document.body.scrollTop);
                    if (aP[i].innerHTML == ev.target.innerHTML) {
                        document.documentElement.scrollTop = aP[i].offsetTop
                    }
                }
            }
            // showTel: function(tel) {
            //     if (!this.bMove) {
            //         console.log(tel);
            //         myAlert({
            //             title: '呼叫',
            //             body: tel,
            //             confirm: function() {
            //                 alert(1)
            //             },
            //             cancel: function() {
            //                 alert(2)
            //                 document.body.removeChild(document.getElementById('alert'))
            //             }
            //         })
            //     } else {
            //         this.bMove = false
            //     }
            // }
        },
        // 右側索引垂直置中
        mounted: function() {
            this.setListIndexPos()
        }
    }
</script>

<style lang="css">
    #list {
        position: relative;
        top: 40px;
        overflow: hidden;
    }

    #list .list_user p {
        background: #ccc;
        padding-left: 10px;
    }

    #list .list_user ul li {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px #ccc solid;
        padding-left: 10px;
    }

    #list .list_index {
        position: fixed;
        right: 10px;
        top: 50%;
        font-size: 20px;
    }

    #list .list_index li {
        margin: 5px 0;
    }
</style>
