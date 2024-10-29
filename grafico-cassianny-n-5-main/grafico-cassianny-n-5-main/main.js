const grafico = document.getElementById("meuGrafico").getContext("2d");
const meuGrafico = new Chart (grafico, {
    type: "pie",
    data: {
        labels: [
            "Instagram",
            "WhatsApp",
            "Facebook",
            "WeChat",
            "TikTok",
            "DouYin",
            "Twitter",
            "Telegram",
            "FB Messenger",
            "LINE"
        ],
        datasets : [{
            data [
                16.5,
                16.1,
                12.8,
                "rgb( 175, 238, 238)",
                12.8,
                7.4,
                6.6,
                3.2,
                2.4,
                2.3,
                1.7,
            ],
            backgroundColor: [
                "rgb( 255, 250, 205)",
                "rgb( 211, 211, 211)",
                "rgb( 176, 196, 222)",
                "rgb( 221, 160, 221)",
                "rgb( 255, 192, 203)",
                "rgb( 253, 245, 230)",
                "rgb( 255, 228, 225)",
                "rgb( 230, 230, 250)",
                "rgb( 216, 191, 216)",
                "rgb( 175, 238, 238)",    
            ]

        }

        ]
    }

}

)