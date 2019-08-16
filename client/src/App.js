import React from 'react';



var my_images = [
    { id: 0, alt: "bob", src: "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014" },
    { id: 1, alt: "krabs", src: "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131" },
    { id: 2, alt: "squid", src: "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626" },
    { id: 3, alt: "onim", src: "https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png" }
]
class App extends React.Component {
    state = {
        score: 0,
        images: my_images,
        images_clicked: [],
        message: "Click a Picture"
    }




}
export default App;