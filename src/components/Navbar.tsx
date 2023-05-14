import styled from "styled-components";
import Avatar from '../assets/avatar.png'
import { ReactComponent as IconEmail } from '../assets/email.svg'
import { ReactComponent as IconLocation } from '../assets/location.svg'
import { ReactComponent as IconMenu } from '../assets/menu.svg'
import { ReactComponent as IconVerified } from '../assets/verified.svg'
import {useEffect, useRef, useState} from "react";

const Navbar = ({onVisible}:{onVisible:(visible:boolean)=>void}) => {
    const ref = useRef(null);
    const [isVisible,setIsVisible]=useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
                setIsVisible(entry.isIntersecting)
        },{threshold:0});
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(()=>{
        onVisible(isVisible)
    },[isVisible, onVisible])

    return (
        <NavbarWrapper ref={ref}>
            <ImageAvatar src={Avatar} alt={'avatar'}/>
            <UserContainer>
                <SectionName>
                    <NameWrapper>
                        <TextHeader>Melanie Tan</TextHeader>
                        <IconVerified/>
                    </NameWrapper>
                    <IconMenu/>
                </SectionName>
                <SectionDetail>Professional Food Photographer</SectionDetail>
                <SectionOther>
                    <DataWrapper>
                        <IconLocation/>
                        <TextNormal>Bangkok</TextNormal>
                    </DataWrapper>
                    <DataWrapper>
                        <IconEmail/>
                        <TextNormal>melanietan99@gmail.com</TextNormal>
                    </DataWrapper>
                </SectionOther>
            </UserContainer>
        </NavbarWrapper>
    );
};


const Flex =styled.div`
  display: flex;
`

const NavbarWrapper= styled(Flex)`
  padding: 36px 20px 17px 20px;
  gap: 19px;
`

const ImageAvatar = styled.img`
  width: 40px;
  height: 40px;
`

const UserContainer = styled(Flex)`
  flex-direction: column;
  flex-grow: 1;
`

const SectionName =styled(Flex)`
    justify-content: space-between;
  align-items: center;
`
const NameWrapper =styled(Flex)`
  gap: 8px;
  align-items: center;
`
const TextHeader = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: #031727;
`

const SectionDetail =styled(Flex)`
  font-weight: 500;
  font-size: 12px;
  color: #969696;
`

const SectionOther =styled(Flex)`
  gap: 15px;
  align-items: center;
`

const DataWrapper =styled(Flex)`
    gap: 11px;
  align-items: center;
`
const TextNormal =styled.p`
  font-weight: 400;
  font-size: 11px;
  color: #969696;
`
export default Navbar;