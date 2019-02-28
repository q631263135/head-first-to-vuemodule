new Vue({
    el: '#mount_point',
    data: {
        meet_words: 'Hello Vue.',
        feelings: 'Nice'
    },
    template: '<p style="color: #fff;">{{feelings}}</p>'
});