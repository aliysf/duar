import styled from "styled-components";

const Footer = () => {
    return (
        <FooterWrapper>
            <ButtonAdd>
                +
            </ButtonAdd>
        </FooterWrapper>
    );
};

const FooterWrapper= styled.div`
  position: fixed;
  bottom: 0;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(255, 255, 255));
  width: min(100%, 360px);
  text-align: right;
`

const ButtonAdd= styled.button`
  width: 60px;
  height: 60px;
  background: #E71D35;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  outline: none;
  border: none;
  font-size: 20px;
  color: white;
  margin-bottom: 20px;
`

export default Footer;