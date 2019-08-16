import React from 'react';
import Image from "./components/Image";



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
    clickme = (id) => {

        if (this.state.images_clicked.indexOf(id) === -1) {
            // image doesnt exist
            this.setState({
                score: this.state.score + 1,
                images_clicked: [...this.state.images_clicked, id],
                images: this.state.images.sort(() => Math.random() - 0.5)

            })
        } else {
            this.setState({
                score: 0,
                images_clicked: [],
                images: this.state.images.sort(() => Math.random() - 0.5)
            })

        }

    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <div>scroe: {this.state.score}</div>
                {this.state.images.map((img) => (<Image id={img.id} alt={img.alt} src={img.src} key={img.id} clickme={this.clickme} />))}
            </div>
        )
    }
}


export default App;