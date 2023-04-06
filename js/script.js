const { createApp } = Vue;

createApp({
    data() {
        return {
            filterChat: "",
            newMessage: "",
            currItem: {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            currItemIndex: "",
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
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
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
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
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            //emoj picker 
            "People": {
                "smile": "😄",
                "smiley": "😃",
                "grinning": "😀",
                "blush": "😊",
                "wink": "😉",
                "heart_eyes": "😍",
                "kissing_heart": "😘",
                "kissing_closed_eyes": "😚",
                "kissing": "😗",
                "kissing_smiling_eyes": "😙",
                "stuck_out_tongue_winking_eye": "😜",
                "stuck_out_tongue_closed_eyes": "😝",
                "stuck_out_tongue": "😛",
                "flushed": "😳",
                "grin": "😁",
                "pensive": "😔",
                "relieved": "😌",
                "unamused": "😒",
                "disappointed": "😞",
                "persevere": "😣",
                "cry": "😢",
                "joy": "😂",
                "sob": "😭",
                "sleepy": "😪",
                "disappointed_relieved": "😥",
                "cold_sweat": "😰",
                "sweat_smile": "😅",
                "sweat": "😓",
                "weary": "😩",
                "tired_face": "😫",
                "fearful": "😨",
                "scream": "😱",
                "angry": "😠",
                "rage": "😡",
                "triumph": "😤",
                "confounded": "😖",
                "laughing": "😆",
                "yum": "😋",
                "mask": "😷",
                "sunglasses": "😎",
                "sleeping": "😴",
                "dizzy_face": "😵",
                "astonished": "😲",
                "worried": "😟",
                "frowning": "😦",
                "anguished": "😧",
                "imp": "👿",
                "open_mouth": "😮",
                "grimacing": "😬",
                "neutral_face": "😐",
                "confused": "😕",
                "hushed": "😯",
                "smirk": "😏",
                "expressionless": "😑",
                "man_with_gua_pi_mao": "👲",
                "man_with_turban": "👳",
                "cop": "👮",
                "construction_worker": "👷",
                "guardsman": "💂",
                "baby": "👶",
                "boy": "👦",
                "girl": "👧",
                "man": "👨",
                "woman": "👩",
                "older_man": "👴",
                "older_woman": "👵",
                "person_with_blond_hair": "👱",
                "angel": "👼",
                "princess": "👸",
                "smiley_cat": "😺",
                "smile_cat": "😸",
                "heart_eyes_cat": "😻",
                "kissing_cat": "😽",
                "smirk_cat": "😼",
                "scream_cat": "🙀",
                "crying_cat_face": "😿",
                "joy_cat": "😹",
                "pouting_cat": "😾",
                "japanese_ogre": "👹",
                "japanese_goblin": "👺",
                "see_no_evil": "🙈",
                "hear_no_evil": "🙉",
                "speak_no_evil": "🙊",
                "skull": "💀",
                "alien": "👽",
                "hankey": "💩",
                "fire": "🔥",
                "sparkles": "✨",
                "star2": "🌟",
                "dizzy": "💫",
                "boom": "💥",
                "anger": "💢",
                "sweat_drops": "💦",
                "droplet": "💧",
                "zzz": "💤",
                "dash": "💨",
                "ear": "👂",
                "eyes": "👀",
                "nose": "👃",
                "tongue": "👅",
                "lips": "👄",
                "thumbs_up": "👍",
                "-1": "👎",
                "ok_hand": "👌",
                "facepunch": "👊",
                "fist": "✊",
                "wave": "👋",
                "hand": "✋",
                "open_hands": "👐",
                "point_up_2": "👆",
                "point_down": "👇",
                "point_right": "👉",
                "point_left": "👈",
                "raised_hands": "🙌",
                "pray": "🙏",
                "clap": "👏",
                "muscle": "💪",
                "walking": "🚶",
                "runner": "🏃",
                "dancer": "💃",
                "couple": "👫",
                "family": "👪",
                "couplekiss": "💏",
                "couple_with_heart": "💑",
                "dancers": "👯",
                "ok_woman": "🙆",
                "no_good": "🙅",
                "information_desk_person": "💁",
                "raising_hand": "🙋",
                "massage": "💆",
                "haircut": "💇",
                "nail_care": "💅",
                "bride_with_veil": "👰",
                "person_with_pouting_face": "🙎",
                "person_frowning": "🙍",
                "bow": "🙇",
                "tophat": "🎩",
                "crown": "👑",
                "womans_hat": "👒",
                "athletic_shoe": "👟",
                "mans_shoe": "👞",
                "sandal": "👡",
                "high_heel": "👠",
                "boot": "👢",
                "shirt": "👕",
                "necktie": "👔",
                "womans_clothes": "👚",
                "dress": "👗",
                "running_shirt_with_sash": "🎽",
                "jeans": "👖",
                "kimono": "👘",
                "bikini": "👙",
                "briefcase": "💼",
                "handbag": "👜",
                "pouch": "👝",
                "purse": "👛",
                "eyeglasses": "👓",
                "ribbon": "🎀",
                "closed_umbrella": "🌂",
                "lipstick": "💄",
                "yellow_heart": "💛",
                "blue_heart": "💙",
                "purple_heart": "💜",
                "green_heart": "💚",
                "broken_heart": "💔",
                "heartpulse": "💗",
                "heartbeat": "💓",
                "two_hearts": "💕",
                "sparkling_heart": "💖",
                "revolving_hearts": "💞",
                "cupid": "💘",
                "love_letter": "💌",
                "kiss": "💋",
                "ring": "💍",
                "gem": "💎",
                "bust_in_silhouette": "👤",
                "speech_balloon": "💬",
                "footprints": "👣"
            },
            emojShow: false
              
        }
    },
    methods: {
        setCurrItem(item, index) {
            for (const key in item.messages) {
                item.messages[key].popUpStatus = false;
            }
            this.currItem = item;
            this.currContacIndex = index;
        },
        sendMessage(item) {
            //vorrei prendere la data del messagio
            let currentDate = new Date().toLocaleString("en-GB");
            if (this.newMessage !== "") {
                item.messages.push({
                    date: currentDate,
                    message: this.newMessage,
                    status: 'sent'
                });
                setTimeout(() => {
                    item.messages.push({
                        date: currentDate,
                        message: "Viva Boolean, viva JS!",
                        status: 'received'
                    });
                }, 1500);

                this.newMessage = "";
            }
        },
        foundChat() {
            for (index in this.contacts) {
                let currentItem = this.contacts[index];
                let currentItemName = currentItem.name.toLowerCase();

                currentItem.visible = currentItemName.includes(this.filterChat.toLowerCase());
            }
        },
        openChatMenu(item) {
            if (!item.popUpStatus) {
                for (const index in this.contacts) {
                    let currContact = this.contacts[index];
                    for (const key in currContact.messages) {
                        currContact.messages[key].popUpStatus = false;
                    }
                }
            }
            item.popUpStatus = !item.popUpStatus;
        },
        deleteChat(item, index) {
            item.messages.splice(index, 1);
        },
        scrollToEnd() {
            const container = this.$refs.scroll;
            const scrollHeigth = container.scrollHeight;
            container.scrollTop = scrollHeigth;
        },
        insertEmoj(elem) {
            this.newMessage += elem;
        }
    },
    mounted() {
        this.scrollToEnd();
    },
    updated() {
        this.scrollToEnd();
    }
}).mount("#app");
