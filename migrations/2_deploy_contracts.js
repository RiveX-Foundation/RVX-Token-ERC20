var TeamContract = artifacts.require("TeamContract");
var RVXToken = artifacts.require("RVXToken");
var USDT = artifacts.require("USDT");
var PrivateSaleContract = artifacts.require("PrivateSaleContract");
var EcosystemContract = artifacts.require("EcosystemContract");
var FoundationContract = artifacts.require("FoundationContract");
var PartnerContract = artifacts.require("PartnerContract");

module.exports = function(deployer) {
  var rvxowner = "0xFCa05682C05a7F251d4a36539F4c5E69F3b41bc7";
  var teamcreator = "0x99895bf4aa5055d81851c8fde1bf72c9743169e4";
  var foundationcreator = "0xb15ed1f34c228295a2d32ce6f2e1d3ad9afbca6f";
  var privatesalecreator = "0x22d0ea6Ba8842Ae1355F842a9fAc32F035F18Ca6";
  var ecosystemcreator = "0x1fcd62d5525de15e2dde1aa66fbc7709c6412e79";
  var partnerscreator = "0x288ce10d2afe3f24d99280806c7b87541f49d657";

  var beneficiaryplaceholder = "0xd92e469a62c48bf12b9d49e3dee98173c24bee88";


  var unlockdateteam = [1620568800,1623247200,1625839200,1628517600,1631196000,1633788000,1636466400,1639058400,1641736800,1644415200]; //specify unlock dates (ie. each month)
  var unlockdateprivate = [1594303200,1596981600,1599660000,1602252000,1604930400,1607522400]; //specify unlock dates (ie. each month)
  var unlockdateecosystem = [1620568800,1636466400,1652104800,1668002400,1683640800,1699538400];
  var unlockdatefoundation = [1620568800,1636466400,1652104800,1668002400];
  var unlockdatepartner = [1620568800,1623247200,1625839200,1628517600,1631196000,1633788000,1636466400,1639058400,1641736800,1644415200];
  
  var teamname="Team";
  var foundationname="Foundation";
  var privatesalename="Private Sale";
  var ecosystemanme = "Ecosystem";
  var partnersname = "Partners";

 deployer.deploy(RVXToken,rvxowner);
 deployer.deploy(PrivateSaleContract,privatesalecreator,beneficiaryplaceholder,unlockdateprivate,privatesalename);

 /*deployer.deploy(TeamContract,teamcreator,beneficiaryplaceholder,unlockdateteam,teamname);
 deployer.deploy(EcosystemContract,ecosystemcreator,beneficiaryplaceholder,unlockdateecosystem,ecosystemanme);
 deployer.deploy(FoundationContract,foundationcreator,beneficiaryplaceholder,unlockdatefoundation,foundationname);
 deployer.deploy(PartnerContract,partnerscreator,beneficiaryplaceholder,unlockdatepartner,partnersname);*/

};
