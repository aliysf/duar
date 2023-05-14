export interface IImage {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

export interface IAlbum {
    id: number,
    firstPhoto:IImage,
    photos:IImage[]
}

export const fetchImage= async ():Promise<[IAlbum[],number]>=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const jsonData = await response.json() as IImage[];
        const albumData:IAlbum[]=[]
        let firstId=-1;
        jsonData.forEach((data)=>{
            if(albumData[data.albumId]){
                albumData[data.albumId].photos.push(data)
            }
            else{
                if(firstId===-1) firstId=data.albumId
                albumData[data.albumId]={
                    id:data.albumId,
                    firstPhoto: data,
                    photos:[]
                }
            }
        })
        return [albumData,firstId];
    }
    catch (e){
        console.error('Api Fail');
        return [[],0]
    }
}