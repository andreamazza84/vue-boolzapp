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
        ],
    // MS2
    //valori al caricamento della pagina.    
    counter: 0,
    userName: "Michele",
    userAvatar: "_1",
    userMsg: [{
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
        }],
    
    userObj: {},
    
    // MS3 
    typingMsg: "",
    inputMsg: "",
    sentMessages: [],
    responseMsg: "ok",

    }, //data

    methods: {
    //MS2
    //Filtrare tra le chat soltanto quelle che corrispondono all'utente selezionato
        chatFilter: function(name, list){
            list.forEach((element, index) => {
                if (element.name === name) {
                    //ricavo l'oggetto e l'indice dall'array filtrata 
                    app.counter = index;
                    return app.userObj = element;
                }
             });
        //userObj = filteredList[0];
        //console.log(userObj);
        //aggiorna il valore per mostrarlo sull'header della chat 
        app.userName = app.userObj.name;
        app.userAvatar =  app.userObj.avatar;
        app.userMsg = app.userObj.messages;
        return app.userObj;
        },
    //MS3   
    //Quando richiamata fa comparire il messaggi inserito nella chat
        sendMessage: function(text){
           if(text !== ""){
               app.inputMsg = {date: "10:00" , text: text, status: "sent"};
               //Il messaggio in <input> viene eliminato appena premuto [enter]
               app.typingMsg = "";
               //app.sentMessages.push(app.inputMsg);
               app.contacts[app.counter].messages.push(app.inputMsg);
               //app.contacts[username][]
           }
           //console.log(app.sentMessages);
           console.log(app.contacts[app.counter].messages);
           //setTimeout
           return app.contacts;
        },
    },

});