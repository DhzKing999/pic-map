import { useQuery } from "@tanstack/react-query";
import { getImage, postImage } from "~/services/image-services";


export const useImageGet = () =>
{
    const { data, isLoading, isError } = useQuery({
        queryKey: ["image"],
        queryFn: () => getImage(),
    });

    return { data, isLoading, isError };
};
