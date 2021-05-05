import React from 'react'
import styled from 'styled-components'
import {contractAddresses} from '../../../farm/lib/constants';
import {getEthChainInfo} from "../../../utils/getEthChainInfo";
import githubLogo from '../../../assets/img/github.png'
import {GITHUB} from '../../../constants/config';

const {
    ethscanType,
    chainId
} = getEthChainInfo();

const contractAddressesTemp = contractAddresses as {[index: string]:any};

const Link: React.FC = () => {
    return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href={`https://boost.polkalink.io`}
      >
        Polkalink Boost
      </StyledLink>
      <StyledLink
        target="_blank"
        href={`https://www.polkalink.io#Ecosystem`}
      >
        Ecosystem
      </StyledLink>
      <StyledLink
        target="_blank"
        href={`https://www.polkalink.io/about-us`}
      >
        Team
      </StyledLink>
      <StyledLink
        target="_blank"
        href={`https://www.polkalink.io/about-us`}
      >
        About Us
      </StyledLink>
      <StyledLink
        target="_blank"
        href={`https://www.polkalink.io#FAQ`}
      >
        FAQs
      </StyledLink>
      <StyledLink
        target="_blank"
        href={`mailto:admin@polkalink.io`}
      >
        Contact
      </StyledLink>
      <StyledLink
        target="_blank"
        href={GITHUB}
      >
        <img src={githubLogo} />
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: #edc900;
  font-size: 16px;
  font-weight: 400;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  img {
    height: 19px;
  }
`

export default Link
