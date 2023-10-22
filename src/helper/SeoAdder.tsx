"use clinet"
import { FC } from "react"
interface ISeo {
    title: string;
    description: string;
    tags: string;
}

const SeoAdder: FC<ISeo> = ({ title, description, tags }) => {
    return (
        <>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta name="keywords" content={tags} />
        </>
    );
};

export default SeoAdder;