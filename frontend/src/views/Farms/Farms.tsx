import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from 'use-wallet'

import chef from '../../assets/img/POLL_logo.png'

import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import WalletProviderModal from '../../components/WalletProviderModal'

import useModal from '../../hooks/useModal'

import useFarms from '../../hooks/useFarms'
import Farm from '../Farm'

import FarmCards from './components/FarmCards'

const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  const [farms] = useFarms()
  const farmId = farms && farms[0]?.id

  return (
    <Switch>
      <Page>
        {(!!account && farmId) ? (
          <>
            <Route exact path={path}>
              <PageHeader
                icon={<img src={chef} height="120" />}
                subtitle="Earn POLL tokens by staking POLL Tokens."
                title="Select Your Favorite Dishes"
              />
              <FarmCards />
            </Route> 
            <Route path={'/'}>
                <Farm farmId={farmId}/>
            </Route>
          </>
        ) : (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={onPresentWalletProviderModal}
              text="🔓 Unlock Wallet"
              size="md"
            />
          </div>
        )}
      </Page>
    </Switch>
  )
}

export default Farms
