const { SpCoinClassModules } = require("./spcoinModules/spCoin_JS_Modules");
const { WETHMethods } = require("./wethModule/wethMethods");

class AccessModules {
    constructor(_spCoinABI, _spCoinAddress, _signer, _dump = true) {
    this.pCoinClassModules = new SpCoinClassModules(_spCoinAddress, _spCoinABI, _signer);
    this.wethMethods = new WethMethods( _weth9Address, _weth9ABI, _signer, _dump )
  }
}

module.exports =  {
    AccessModules,
    SpCoinClassModules,
    WETHMethods
}