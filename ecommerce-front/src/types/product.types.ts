export type TProduct = {
    id : number;
    title: string;
    title_ar: string;
    price: number;
    img: string;
    cat_prefix_ar?: string;
    cat_prefix?: string;
    quantity? : number;
    max: number;
    isLiked? : boolean;
    isAuthenticated? : boolean;
}