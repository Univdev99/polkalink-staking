import React from 'react'
import styled from 'styled-components'

import Link from './components/Link'
import Nav from './components/Nav'
import imagePOLL from '../../assets/img/polkalinkstake_logo.png'

const Footer: React.FC = () => (
  <StyledFooter>
    <StyledTitle>
      <img src={imagePOLL} height="40" style={{ marginTop: 30, marginBottom: 10 }} />
      <p className="paragraph-light">DeFi <span>ecosystem</span> &amp; <span>crypto-asset</span> booster</p>
    </StyledTitle>
    <StyledFooterInner>
      <Link />
    </StyledFooterInner>
    <StyledFooterInner>
      <Nav />
    </StyledFooterInner>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: rgb(0,0,0);
  flex-direction: column;
`

const StyledTitle = styled.title`
  align-items: center;
  display: flex;
  justify-content: center;
  color: rgba(255,255,255,.5);
  flex-direction: column;
`

const StyledFooterInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: ${props => props.theme.topBarSize}px;
  max-width: ${props => props.theme.siteWidth}px;
  width: 100%;
  font-weight: 300;
`

export default Footer
