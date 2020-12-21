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
    
    //MS4
    alert: "",

    // MS5
    pointer: -1,
    index: 0,    
    active: "active",
    }, 


    methods: {
    //MS2 - Filtra tra le chat soltanto quelle che corrispondono all'utente selezionato
        chatFilter: function(name, list){
            list.forEach((element, index) => {
                if (element.name === name) {
                    //ricavo l'indice dall'array filtrata 
                    return app.counter = index;
                }
             });
        
    //MS2 - Aggiorna il valore per mostrarlo sull'header della chat 
        app.userName = app.contacts[app.counter].name;
        app.userAvatar =  app.contacts[app.counter].avatar;
        },
    //MS3 - Quando richiamata fa comparire il messaggi inserito nella chat
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
    //MS4 - Ricerca l'utente tra le conversazioni
        convFilter: function(text){
            app.alert = "Nessun utente con questo nome"
            app.contacts.forEach((element) => {
                if(text.length > 0){
                    text = text.toLowerCase();
                    const searchName = element.name.toLowerCase();
                    if(searchName.includes(text,0)){
                        element.visible = true;
                        app.alert = "";
                    }
                    else{
                        element.visible = false;
                    }
                }
                else{
                    element.visible = true;
                    app.alert = "";
                }      
            });
            
        },
        // MS5 - Funzione che passa il valore di index del v-for
        menuShow: function(index){
            app.index = index;   
        },
        removeMsg: function(index){
            app.contacts[app.counter].messages.splice(index, 1);
        },
        scrollToElement() {
            const el = this.$el.getElementsByClassName('scroll-to-me')[0];
        
            if (el) {
              el.scrollIntoView();
            }
        }    
    },
    mounted(){
        // MS5 - Cliccando sull'icona il menu appare. Cliccandoci una seconda volta o in un altro punto, il menù scompare.
        document.addEventListener(('click'), function(e) {
            const arrowList = document.querySelectorAll('.arrow-down');
            if(e.target === arrowList[app.index]){
                if(app.pointer !== app.index){
                    app.pointer = app.index;
                }
                else if(app.pointer === app.index){
                    app.pointer = -1
                }
            }
            else{
                app.pointer = -1;
            }
           
        });
    }   

});