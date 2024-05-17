const app = Vue.createApp({
    data(){
        return{
            title: 'Hundred years of solitude',
            author: 'Gabriel garcia marquez',
            rating: 5,
            showBooks: true,
            x: 0,
            y: 0
        }
    },

    methods:{
        changeTitle(){
            this.title='Wings of fire',
            this.author='Dr.APJ Abdul kalam'
        },

        toggleshowBooks(){
            this.showBooks=!this.showBooks
        },

        handleEvent(e){
            console.log(e.type)
        },

        handleMouseMove(e){
            console.log(e.type)
            this.x=e.offsetX,
            this.y=e.offsetY
        }

    }
})

app.mount('#app')