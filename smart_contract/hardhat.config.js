// https://eth-ropsten.alchemyapi.io/v2/hw-EGrrsd7aFbTW389yb44kE1Yklu3Bm

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/hw-EGrrsd7aFbTW389yb44kE1Yklu3Bm',
      accounts: ['70d7512958876eaef3497c30a2a2da780588879232f1704694692bd352a03dbd']
    }
  }
}