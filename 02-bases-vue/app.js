/* console.log(Vue) */

const app = Vue.createApp({

   /*  template: `
        <h1>Hola Mundo</h1>
        <p>Desde index.html</p>
    ` */
    
    data() {
        return {
            quote: "Soy batman",
            author: "Bruce Wayne"
        }
    },
    methods: {
        changeQuote() {
            console.log("clic");
        }
    }

})

app.mount('#myApp')