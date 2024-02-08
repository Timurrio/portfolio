import React from "react";
import { projectData } from "../../types/projectData";
import imagePlaceholder from "../../assets/placeholder.jpg"
import gifPlaceholder from "../../assets/placeholderGif.gif"

const DescriptionPlaceholder: React.FC = () => {
    return (
        <p>TEXT</p>
    )
}

export const data: projectData[] = [
    {
        previewImage: imagePlaceholder,
        header: "PROJECT",
        images: [gifPlaceholder, imagePlaceholder, imagePlaceholder, gifPlaceholder],
        link: "https://react.dev/",
        description: <DescriptionPlaceholder />
    }
]