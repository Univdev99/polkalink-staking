import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getAvailableStaked, getFarmContract } from '../farm/utils'
import useYam from './useYam'
import useBlock from './useBlock'

const useAvailableWithdrawBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const yam = useYam()
  const farmContract = getFarmContract(yam)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getAvailableStaked(farmContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, yam])

  useEffect(() => {
    if (account && yam) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, yam])

  return balance
}

export default useAvailableWithdrawBalance
