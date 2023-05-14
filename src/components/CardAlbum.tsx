import { IImage} from "../api";
import styled from "styled-components";
// import {useEffect, useRef, useState} from "react";

const CardAlbum = ({album, onSelectAlbum, selected}:{album:IImage, onSelectAlbum:()=>void, selected:boolean}) => {

    // Still Buggy, so i choose to comment

    // const ref = useRef(null);
    // const [isVisible,setIsVisible]=useState(false)
    // useEffect(() => {
    //     const observer = new IntersectionObserver(([entry]) => {
    //         setTimeout(() =>
    //             setIsVisible(entry.isIntersecting), 750
    //         )
    //     },{threshold:1.0});
    //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //     // @ts-ignore
    //     observer.observe(ref.current);
    //     return () => observer.disconnect();
    // }, []);

    return (
        <CardWrapper onClick={onSelectAlbum} selected={selected}>
            <AlbumImage src={album.url} alt={album.title} selected={selected}/>
            <Text selected={selected}>{album.title}</Text>
        </CardWrapper>
    );
};

const CardWrapper= styled.div<{selected:boolean}>`
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  flex-direction: column;
  width: ${(props)=> props.selected ? '180px':'140px'};
  height: ${(props)=> props.selected ? '140px':'100px'};
  transition: all 500ms ease-in-out;
  background: ${(props)=> props.selected ? '#F89F1E':'transparent'};
  box-shadow: ${(props)=> props.selected ? '0px 5px 10px rgba(255, 151, 0, 0.3)':'none'};
  border-radius: 10px;
`

const AlbumImage = styled.img<{selected:boolean}>`
  object-fit: cover;
  width: ${(props)=> props.selected ? '180px':'140px'};
  height: 100px;
  transition: all 500ms ease-in-out;
  border-radius: ${(props)=> props.selected ? '10px 10px 0px 20px':'10px'};
`

const Text = styled.p<{selected:boolean}>`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 11px;
  transition: all 500ms ease-in-out;
  width: ${(props)=> props.selected ? '180px':'140px'};
  color:white;
  padding: 6px 10px;
`
export default CardAlbum;