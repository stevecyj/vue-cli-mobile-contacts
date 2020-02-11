import Vue from 'vue'
import Alert from './components/Alert.vue'

var myAlert = (function() {
    var defaults = {
        title: '彈窗',
        body: '',
        confirm: null,
        cancel: null
    }

    var MyComponent = Vue.extend(Alert)

    //接受配置，把配置覆蓋給預設
    return function(opts) {
        for (var attr in opts) {
            defaults[attr] = opts[attr]
        }
        var vm = new MyComponent({
            el: document.createElement('div'),
            data: {
                customTitle: defaults.title,
                customBody: defaults.body,
                confirm: defaults.confirm,
                cancel: defaults.cancel
            }
        })
        document.body.appendChild(vm.$el)
    }
})()

export default myAlert
