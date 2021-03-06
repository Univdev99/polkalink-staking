import React from 'react'
import styled from 'styled-components'
import {contractAddresses} from '../../../farm/lib/constants';
import {getEthChainInfo} from "../../../utils/getEthChainInfo";
import githubLogo from '../../../assets/img/github.png'
import tgLogo from '../../../assets/img/Telegram.png'
import twLogo from '../../../assets/img/Twitter.png'
import {GITHUB, TELEGRAM, TWITTER} from '../../../constants/config';

const {
    ethscanType,
    chainId
} = getEthChainInfo();

const contractAddressesTemp = contractAddresses as {[index: string]:any};

const Nav: React.FC = () => {
    return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href={TELEGRAM}
      >
        <img src={tgLogo} height="100" />
      </StyledLink>
      <StyledLink
        target="_blank"
        href={TWITTER}
      >
        <img src={twLogo} height="100" />
      </StyledLink>
      {/* <StyledLink
        target="_blank"
        href={GITHUB}
      >
        <img src={githubLogo} />
      </StyledLink> */}
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  img {
    height: 30px;
  }
`

export default Nav
