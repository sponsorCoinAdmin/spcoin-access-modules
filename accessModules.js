const { SpCoinClassModules } = require("./spcoinModules/spCoin_JS_Modules");
const {
  WethMethods,
  ETHEREUM,
  POLYGON,
  HARDHAT,
  BURN_ADDRESS,
} = require("./wethModule/wethMethods");
  
class AccessModules {
    constructor( _signer, _spCoinABI, _spCoinAddress, _dump = true) {
    this.pCoinClassModules = new SpCoinClassModules(_spCoinAddress, _spCoinABI, _signer);
    this.wethMethods = new WethMethods( _weth9Address, _weth9ABI, _signer, _dump )
  }
}

module.exports =  {
  AccessModules,
  SpCoinClassModules,
  WethMethods,
  BURN_ADDRESS,
  ETHEREUM,
  POLYGON,
  HARDHAT
}
