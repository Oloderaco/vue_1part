// SPA - Single Page Application
// {{ }} - интерполяция
// все атрибуты которые  начинаются на v- назся директивами


const app = {
    data() {
        return {
            count: 0,
            color: 'red',
            view: true,
            text: '',
            word: '',
            number: ''
        }
    },
    methods: {
        addCount() {
            this.count++
        },
    }
}

Vue.createApp(app).mount('#app')