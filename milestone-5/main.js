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
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis harum accusantium veniam repudiandae fugiat perferendis sit sapiente temporibus nesciunt cumque commodi, reprehenderit doloribus nostrum sunt, quaerat minus sint? Temporibus quisquam recusandae facilis veniam placeat saepe alias minima explicabo voluptatem harum?',
                    status: 'received'
                    },
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
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quo quibusdam, unde suscipit at rerum earum ipsam voluptatem dicta beatae adipisci, vitae rem expedita. Earum voluptatibus neque recusandae voluptates eveniet dolore aliquam? Iusto incidunt magni aperiam quidem nam molestias dolores quo laborum. Distinctio vitae quas molestias ea voluptatum possimus minima.',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        text: 'Alla faccia del messaggino!',
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
    date: dayjs().format('HH:mm'),  
    search: "",
    
    //MS4
    
    // MS5
    pointer: -1, // !0 per evitare che venga selezionato sempre il primo messaggio
    index: 0,    
    active: "active",
    alert: false,
    }, 


    methods: {
    //MS2 - Filtra la chat che corrisponde all'utente selezionato
        chatFilter: function(name, list){
            list.forEach((element, index) => {
                if (element.name === name) {
                    //ricavo l'indice dall'array filtrata 
                    return this.counter = index;
                }
             });
        
    //MS2 - Aggiorna il valore per mostrarlo sull'header della chat 
        this.userName = this.contacts[this.counter].name;
        this.userAvatar =  this.contacts[this.counter].avatar; 
        },
    //MS3 - Quando richiamata fa comparire il messaggio inserito nella chat
        sendMessage: function(text){
           if(text !== ""){
               this.message = {date: dayjs().format('DD/MM/YYYY HH:mm:ss') , text: text, status: "sent"};
               //Il messaggio in <input> viene eliminato appena premuto [enter]
               this.typing = "";
               this.contacts[this.counter].messages.push(this.message);
               //MS3 - Risposta automatica dopo un secondo
               setTimeout(this.autoResponse, 1000);
               setTimeout(this.scrollToEnd, 10);
           }
        },
        autoResponse: function(){
            this.message = {date: dayjs().format('DD/MM/YYYY HH:mm:ss'), text: "ok", status: "received"};
            this.contacts[this.counter].messages.push(this.message);
            // Il ritardo è necessario per il corretto funzionamento della funzione scrollToEnd
            setTimeout(this.scrollToEnd, 10);
        },
    //MS4 - Ricerca l'utente tra le conversazioni
        convFilter: function(text){
            this.alert = true;
            this.contacts.forEach((element) => {
                if(text.length > 0){
                    text = text.toLowerCase();
                    const searchName = element.name.toLowerCase();
                    if(searchName.includes(text,0)){
                        element.visible = true;
                        this.alert = false;
                    }
                    else{
                        element.visible = false;
                    }
                }
                else{
                    element.visible = true;
                    this.alert = false;
                }      
            });
            
        },
    // MS5 - Funzione che passa il valore di index del v-for
        menuShow: function(index){
            this.index = index;   
        },
    // MS5 - Rimuove i messaggi selezionati con menu a tendina
        removeMsg: function(index){
            this.contacts[this.counter].messages.splice(index, 1);
        },
    // Bonus - Posiziona automaticamente la scroll bar in basso all'inserimento dei messaggi.
        scrollToEnd: function() {    	
            const chat = document.querySelector(".chat");
            chat.scrollTop = chat.scrollHeight;
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
    },   
});