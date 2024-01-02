import { useMemo } from "react";


function useImages(){
    const adminImages = useMemo(()=>fetchImages('staff'), [])
    const otherImages = useMemo(()=>fetchImages(''), [])


    function fetchImages(folder){
        const avoid = ['logo', 'bg', 'wave']
        function contains(str, array){array.some(item => !str.includes(item));}
        function importAll(r) {
            let images = [];
            r.keys().map(item => {
                if(item.includes("logo"))return 
                if(item.includes("bg"))return 
                return images.push(r(item)) 
            });
            return images;
        }
        const images1 = importAll(require.context(`../images/staff`, false, /\.(webp|png|jpe?g)$/));
        const images2 = importAll(require.context(`../images`, false, /\.(webp|png|jpe?g)$/));
        if(folder === 'staff') return images1 
        return images2
    }


    return {adminImages, otherImages}
}

export default useImages