import { ReactElement } from "react";

export interface projectData {
    previewImage: string,
    images: string[],
    header: string,
    link: string,
    description: ReactElement
}