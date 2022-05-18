module.exports = {

    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],

    theme: {
        extend: {
            with: {
                150: "150px",
                190: "190px",
                225: "225",
                275: "275",
                300: "300px",
                340: "340px",
                350: "350px",
                375: "375px",
                460: "460px",
                656: "656px",
                880: "880px",
                508: "508px",
            },
            height: {
                80: "80px",
                150: "150px",
                225: "255px",
                300: "300px",
                340: "340px",
                370: "370px",
                420: "420px",
                510: "510px",
                600: "600px",
                685: "685px",
                800: "800px",
                "90vh": "90vh",
            },
            minWidth: {
                210: "210px",
                350: "350px",
                620: "620px",
            },
            screens: {
                sm: "640px",
                md: "768px",
                g1: "1024px",
                x1: "1280px",
                "2x1": "1536px",
            },
            colors: {
                headingColor: "#2e2e2e",
                textColor: "#515151",
                cartNumBg: "#e80013",
                primary: "#f5f3f3",

            },
        },
    },
    plugins: [],
}