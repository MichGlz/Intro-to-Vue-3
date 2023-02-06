app.component('product-detail', {
    props: {
        details: {
            type: String,
            required: true
        }
    },
    template:
        /*html*/
        `
    <div class='detail-wrapper'>
        <p>{{details}}</p>
    </div>       
    `,
    data() {

    }
})