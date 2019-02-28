import hello from './HelloVue.js'

// Vue.component('hellovue', hello); // 全局组件

new Vue({
    el: '#mount_point',
    components: {
        hellovue: hello
    }
});