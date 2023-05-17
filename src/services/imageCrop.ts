import noImage from '../assets/Image Placeholder/no-image.webp'

export default (imageUrl:string)=>{
    if (!imageUrl) return noImage
    const index = imageUrl.indexOf('/media/')+ '/media/'.length
    return (
        imageUrl.slice(0,index)
        +'crop/600/400/'
        +imageUrl.slice(index)
        )
}