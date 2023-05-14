import {useCallback, useEffect, useState} from "react";
import {fetchImage, IAlbum} from "./api";
import Navbar from "./components/Navbar.tsx";
import CardAlbum from "./components/CardAlbum.tsx";
import CardPhoto from "./components/CardPhoto.tsx";
import styled from "styled-components";
import Footer from "./components/Footer.tsx";

function App() {
    const [album,setAlbum]=useState<IAlbum[]>([])
    const [selectedAlbum, setSelectedAlbum] = useState<IAlbum | null>(null)
    const [navbarVisible,setNavbarVisible] =useState(true)
    const getAllImage=async()=>{
        const [resp,firstId]= await fetchImage()
        setAlbum(resp)
        setSelectedAlbum(resp[firstId])
    }
    useEffect(()=>{
        getAllImage()

    },[])

    const onNavbarVisible= useCallback((isVisible:boolean)=>{
        setNavbarVisible(isVisible)
    },[])

    const changeAlbum =(data:IAlbum)=>{
        setSelectedAlbum(data)
        scrollTo({
            top:100,
            behavior:'smooth'
        })
    }

  return (
      <SafeWrapper>
          <Navbar onVisible={onNavbarVisible}/>
          <PaginationWrapper>
              <AlbumWrapper id={'album'} $navbarVisible={navbarVisible}>
                  {album && album.map((data)=>
                      <CardAlbum key={data.id} album={data.firstPhoto} selected={data.id===selectedAlbum?.id}
                                 onSelectAlbum={()=>changeAlbum(data)}/>
                  )}
              </AlbumWrapper>
              <Pagination>{selectedAlbum?.id} of {album.length-1}</Pagination>

          </PaginationWrapper>
          <PhotoWrapper>
              {selectedAlbum && selectedAlbum.photos.map((data)=>
                  <CardPhoto key={data.id} image={data}/>
              )}
          </PhotoWrapper>
          <Footer/>
      </SafeWrapper>
  )
}

const SafeWrapper= styled.div`   
  max-width: 360px;
  margin: auto;
  background: white;
`

const AlbumWrapper= styled.div<{$navbarVisible:boolean}>`
  display: flex;
  height: ${(props)=> props.$navbarVisible ? '160px':'200px'};
  padding-top: ${(props)=> props.$navbarVisible ? '0px':'40px'};
  padding-bottom: 20px;
  overflow: scroll;
  position: sticky;
  top: 0;
  background: white;
  scroll-snap-type: x mandatory;
  gap: 20px;
  scroll-padding: 40px;
  transition: all 100ms ease-in-out;
  align-items: center;
  > div:first-child{
    margin-left: 20px;
  }
`

const PhotoWrapper = styled.div`
  min-height: calc(100vh - 100px);
  display: grid;
  grid-template: auto auto / auto auto;
  gap:10px;
  padding: 0 20px;
`

const Pagination = styled.div`
  position: sticky;
  font-weight: 500;
  font-size: 9px;
  line-height: 14px;
  color: #969696;
  margin-bottom: 35px;
  margin-top: -35px;
  display: flex;
  justify-content: end;
  padding-right: 80px;
`

const PaginationWrapper= styled.div`
    position: sticky;
  top: 0;
`

export default App
