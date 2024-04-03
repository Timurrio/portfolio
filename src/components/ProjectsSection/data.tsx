import React from "react";
import { projectData } from "../../types/projectData";
import imagePlaceholder from "../../assets/placeholder.jpg"
import gifPlaceholder from "../../assets/placeholderGif.gif"

import ecommercePreview from "../../assets/ecommerce/ecommercePreview.png"
import ecommerce1 from "../../assets/ecommerce/ecommerce1.png"
import ecommerce2 from "../../assets/ecommerce/ecommerce2.png"
import ecommerce3 from "../../assets/ecommerce/ecommerce3.png"
import ecommerce4 from "../../assets/ecommerce/ecommerce4.png"

import pokedexPreview from "../../assets/pokedex/pokedexPreview.jpg"
import pokedex1 from "../../assets/pokedex/pokedex1.png"
import pokedex2 from "../../assets/pokedex/pokedex2.png"
import pokedex3 from "../../assets/pokedex/pokedex3.png"
import pokedex4 from "../../assets/pokedex/pokedex4.png"


import easybankPreview from "../../assets/easybank/easybankPreview.png"
import easybank1 from "../../assets/easybank/easybank1.png"
import easybank2 from "../../assets/easybank/easybank2.png"
import easybank3 from "../../assets/easybank/easybank3.png"
import easybank4 from "../../assets/easybank/easybank4.png"


import todoPreview from "../../assets/todo/todoPreview.png"
import todo1 from "../../assets/todo/todo1.png"
import todo2 from "../../assets/todo/todo2.png"
import todo3 from "../../assets/todo/todo3.png"


// const DescriptionPlaceholder: React.FC = () => {
//     return (
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque ipsam, ipsum vitae facilis esse quis laboriosam numquam sed nulla quibusdam quod nostrum laudantium recusandae temporibus quia ex modi saepe.</p>
//     )
// }

const EcommerceDescription: React.FC = () => {
    return (
        <div>
            <p>
                This is a simple, minimalistic ecommerce website that has product pages, a shopping cart, and a category page.                
            </p>
            <br/>
            <p>
                The design was taken from <a target="_blank" href="https://github.com/Abderraouf-Rahmani">AUTHOR</a>
            </p>
            <p>
                DEMO WEBSITE: <a target="_blank" href="https://timurrio.github.io/raouf-commerce/#/">E-COMMERCE</a>
            </p>
            <p>
                GITHUB REPOSITORY: <a href="https://github.com/Timurrio/raouf-commerce" target="_blank">GITHUB</a>
            </p>
        </div>
    )
}

const PokedexDescription: React.FC = () => {
    return (
        <div>
            <p>
                The Pokedex is a website that allows you to search for information about any Pokemon using filters by type and search by name. There is also a quiz game in which the player needs to guess the name of a Pokemon based on its picture.
            </p>
            <br/>
            <p>
                Data is taken from <a href="https://pokeapi.co/" target="_blank">PokeAPI</a>
            </p>
            <p>
                DEMO WEBSITE: <a href="https://timurrio.github.io/pokemon-api/" target="_blank">POKEDEX</a>
            </p>
            <p>
                GITHUB REPOSITORY: <a href="https://github.com/Timurrio/pokemon-api" target="_blank">GITHUB</a>
            </p>
        </div>
    )
}

const EasybankDescription: React.FC = () => {
    return (
        <div>
            
            <p>
                The Easybank Landing Page is a user-friendly website designed to provide easy access to information.
            </p>
            <br/>
            <p>
                The project was created according to the design and idea from frontendmentor.io challenge: <a href="https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN" target="_blank">FRONTENDMENTOR</a>
            </p>
             <p>
                DEMO WEBSITE: <a href="https://timurrio.github.io/easybank-landing/" target="_blank">EASYBANK</a>
            </p>
            <p>
                GITHUB REPOSITORY: <a href="https://github.com/Timurrio/easybank-landing" target="_blank">GITHUB</a>
            </p>
        </div>
    )
}

const TodoDescription: React.FC = () => {
    return (
        <div>
            <p>
                A simple todo app with the ability to change color themes, add new tasks and remove old ones.
            </p>
            <br/>
            <p>
                The project was created according to the design and idea from frontendmentor.io challenge: <a href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW" target="_blank">FRONTENDMENTOR</a>
            </p>
            <p>
                DEMO WEBSITE: <a href="https://timurrio.github.io/todo-app/" target="_blank">TODO</a>
            </p>
            <p>
                GITHUB REPOSITORY: <a href="https://github.com/Timurrio/todo-app" target="_blank">GITHUB</a>
            </p>
        </div>
    )
}


export const data: projectData[] = [
    {
        previewImage: ecommercePreview,
        header: "E-commerce",
        images: [ecommerce1, ecommerce2, ecommerce3, ecommerce4],
        link: "https://timurrio.github.io/raouf-commerce/#/",
        description: <EcommerceDescription />
    },
    {
        previewImage: pokedexPreview,
        header: "Pokedex",
        images: [pokedex1, pokedex2, pokedex3, pokedex4],
        link: "https://timurrio.github.io/pokemon-api/",
        description: <PokedexDescription />
    },
    {
        previewImage: easybankPreview,
        header: "Bank Landing",
        images: [easybank1, easybank2, easybank3, easybank4],
        link: "https://timurrio.github.io/easybank-landing/",
        description: <EasybankDescription />
    },
    {
        previewImage: todoPreview ,
        header: "Todo App",
        images: [todo1, todo2, todo3],
        link: "https://timurrio.github.io/todo-app/",
        description: <TodoDescription />
    }
]

// export const data: projectData[] = [
//     {
//         previewImage: imagePlaceholder,
//         header: "PROJECT",
//         images: [gifPlaceholder, imagePlaceholder, imagePlaceholder, gifPlaceholder],
//         link: "https://react.dev/",
//         description: <DescriptionPlaceholder />
//     },
//     {
//         previewImage: imagePlaceholder,
//         header: "PROJECT",
//         images: [gifPlaceholder, imagePlaceholder, imagePlaceholder, gifPlaceholder],
//         link: "https://react.dev/",
//         description: <DescriptionPlaceholder />
//     },
//     {
//         previewImage: imagePlaceholder,
//         header: "PROJECT",
//         images: [gifPlaceholder, imagePlaceholder, imagePlaceholder, gifPlaceholder],
//         link: "https://react.dev/",
//         description: <DescriptionPlaceholder />
//     },
//     {
//         previewImage: imagePlaceholder,
//         header: "PROJECT",
//         images: [gifPlaceholder, imagePlaceholder, imagePlaceholder, gifPlaceholder],
//         link: "https://react.dev/",
//         description: <DescriptionPlaceholder />
//     },
//     {
//         previewImage: imagePlaceholder,
//         header: "PROJECT",
//         images: [gifPlaceholder, imagePlaceholder, imagePlaceholder, gifPlaceholder],
//         link: "https://react.dev/",
//         description: <DescriptionPlaceholder />
//     }
// ]