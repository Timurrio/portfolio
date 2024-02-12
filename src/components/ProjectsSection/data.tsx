import React from "react";
import { projectData } from "../../types/projectData";
import imagePlaceholder from "../../assets/placeholder.jpg"
import gifPlaceholder from "../../assets/placeholderGif.gif"

const DescriptionPlaceholder: React.FC = () => {
    return (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque ipsam, ipsum vitae facilis esse quis laboriosam numquam sed nulla quibusdam quod nostrum laudantium recusandae temporibus quia ex modi saepe.</p>
    )
}

export const data: projectData[] = [
    {
        previewImage: imagePlaceholder,
        header: "PROJECT",
        images: [gifPlaceholder, imagePlaceholder, imagePlaceholder, gifPlaceholder],
        link: "https://react.dev/",
        description: <DescriptionPlaceholder />
    },
    {
        previewImage: imagePlaceholder,
        header: "PROJECT",
        images: [gifPlaceholder, imagePlaceholder, imagePlaceholder, gifPlaceholder],
        link: "https://react.dev/",
        description: <DescriptionPlaceholder />
    },
    {
        previewImage: imagePlaceholder,
        header: "PROJECT",
        images: [gifPlaceholder, imagePlaceholder, imagePlaceholder, gifPlaceholder],
        link: "https://react.dev/",
        description: <DescriptionPlaceholder />
    },
    {
        previewImage: imagePlaceholder,
        header: "PROJECT",
        images: [gifPlaceholder, imagePlaceholder, imagePlaceholder, gifPlaceholder],
        link: "https://react.dev/",
        description: <DescriptionPlaceholder />
    },
    {
        previewImage: imagePlaceholder,
        header: "PROJECT",
        images: [gifPlaceholder, imagePlaceholder, imagePlaceholder, gifPlaceholder],
        link: "https://react.dev/",
        description: <DescriptionPlaceholder />
    }
]