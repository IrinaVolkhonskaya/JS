const fruits = [
    {id: 1, title: 'Яблоки', price: 20, img: ''},
    {id: 2, title: 'Апельсины', price: 30, img: ''},
    {id: 3, title: 'Манго', price: 40, img: ''}
];

const modal = $.modal( {
    title: 'Irina Modal',
    closable: true,
    content: `
        <h4>Modal is working</h4>
        <p>Lorem ipsum dolor sit. </p>
        `,
        width: '400px',
        footerButtons: [
            {text: 'Ok', type: 'primary', handler(){
                console.log('Primary btn clicked')
                modal.close()
            }},
            {text: 'Cancel', type: 'danger', handler(){
                console.log('Danger btn clicked')
                modal.close()
            }}
        ]
})