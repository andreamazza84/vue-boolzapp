let app = new Vue({
    el: '.container',
    data:{
        contacts: [
                {
            name: 'Michele', //contact
            avatar: '_1',
            visible: true,
            messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                    }
                        ],
                },
                {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                    }
                ],
            },
            {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                    }
                ],
            },
            {
            name: 'Luigi',
            avatar: '_4',
            visible: true,
            messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Sì, ma preferirei andare al cinema',
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Marco', //contact
                avatar: '_5',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                        }
                            ],
                    },
                    {
                name: 'Marina',
                avatar: '_6',
                visible: true,
                messages: [
                        {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                        }
                    ],
                },
                {
                name: 'Giacomo',
                avatar: '_7',
                visible: true,
                messages: [
                        {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        },
                        {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                        }
                    ],
                },
                {
                name: 'Tizio',
                avatar: '_8',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        text: 'Sì, ma preferirei andare al cinema',
                        status: 'received'
                        }
                    ],
                },
        ],
        
    // MS2
    //valori al caricamento della pagina.    
    counter: 0,
    userName: "Michele",
    userAvatar: "_1",
       
    // MS3 
    typing: "", //cache messaggi
    message: "",
    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),  
    search: "",

    // MS5
    pointer: -1,    
    active: "active",
    show: false,
    }, 


    methods: {
    //MS2
    //Filtrare tra le chat soltanto quelle che corrispondono all'utente selezionato
        chatFilter: function(name, list){
            list.forEach((element, index) => {
                if (element.name === name) {
                    //ricavo l'indice dall'array filtrata 
                    return app.counter = index;
                }
             });
        
        //aggiorna il valore per mostrarlo sull'header della chat 
        app.userName = app.contacts[app.counter].name;
        app.userAvatar =  app.contacts[app.counter].avatar;
        },
    //MS3   
    //Quando richiamata fa comparire il messaggi inserito nella chat
        sendMessage: function(text){
           if(text !== ""){
               app.message = {date: dayjs().format('DD/MM/YYYY HH:mm:ss') , text: text, status: "sent"};
               //Il messaggio in <input> viene eliminato appena premuto [enter]
               app.typing = "";
               app.contacts[app.counter].messages.push(app.message);
           }
           //MS3 - Risposta automatica dopo un secondo
           setTimeout(app.autoResponse, 1000);
        },
        autoResponse: function(){
            app.message = {date: dayjs().format('DD/MM/YYYY HH:mm:ss'), text: "ok", status: "received"};
            app.contacts[app.counter].messages.push(app.message);
        },
    //MS4 
    //Ricerca utente tra le conversazioni
        convFilter: function(text){
            app.contacts.forEach((element) => {
                if(text.length > 0){
                    text = text.toLowerCase();
                    const searchName = element.name.toLowerCase();
                    //console.log(searchName);
                    if(searchName.includes(text,0)){
                        element.visible = true;
                    }
                    else{
                        element.visible = false;
                    }
                }
                else{
                    element.visible = true;
                }      
            });
            
        },
        menuShow: function(index){
            //console.log(index);
            // if (app.pointer !== index) {
            //     app.pointer = index;
            // }
            // else{
            //     //valore di default
            //     app.pointer = -1;
            // }   
        },    
    },
    mounted(){
        document.addEventListener(('click'), function(e) {
            //const arrowElement = document.querySelector('.arrow-down');
        
            //if(e.target === arrowElement){
                const arrowList = document.querySelectorAll('.arrow-down');
                arrowList.forEach((element, index) => {              
                    
                    if(element === e.target){
                        if(app.pointer !== index){
                            app.pointer = index;
                        }
                        else if(app.pointer === index){
                            app.pointer = -1
                        }
                    } 
                });
                //console.log(app.pointer);
            //}
            //else{
            //    app.pointer = -1;  
            //}
        });
    }   

});