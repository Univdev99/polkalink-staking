export const contractAddresses = {
  erc20: {
    42: '0x9c55b6e6DE44b9D3D3d551C0cBB0Ee1c12A4b976',//kovan staking/ poll
    1: '0x9c55b6e6de44b9d3d3d551c0cbb0ee1c12a4b976', // mainnet staking poll
  },
  farm: {
    42: '0xC213071d1b98984a35fD9B79Db654110f20494F6', // kovan farm contract address 
    1: '0x4aad41710554eEFbc9d22F2e8FE74b1d0c391C77', // mainnet
  },
  weth: {
    42: '0xa050886815cfc52a24b9c4ad044ca199990b6690', 
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  }
}

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      42: '0x9c55b6e6DE44b9D3D3d551C0cBB0Ee1c12A4b976', // kovan staking / dai token address
      1: '0x9c55b6e6de44b9d3d3d551c0cbb0ee1c12a4b976',  //mainnet
    },
    tokenAddresses: {
      42: '0x9c55b6e6DE44b9D3D3d551C0cBB0Ee1c12A4b976', // kovan staking / poll
      1: '0x9c55b6e6de44b9d3d3d551c0cbb0ee1c12a4b976', //mainnet
    },
    name: 'POLL-POLL',
    symbol: 'POLL-POLL',
    tokenSymbol: 'POLL',
    icon: '',
    pool: '100%',
  }
]
