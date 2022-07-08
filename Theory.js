import { ExponentialCost, FreeCost, LinearCost } from "./api/Costs";
import { Localization } from "./api/Localization";
import { BigNumber } from "./api/BigNumber";
import { theory } from "./api/Theory";
import { Utils } from "./api/Utils";


var id = "99209";
var name = "Jatheory";
var description = "when so get!";
var authors = "Annontations6";
var version = "1.0.0";

var currency;

var init = () => {
    currency = theory.createCurrency();

    ///////////////////
    // Regular Upgrades

    // a1
    {
        let getDesc = (level) => "a_1=" + getA1(level).toString(0);
        a1 = theory.createUpgrade(0, currency, new FirstFreeCost(new ExponentialCost(10, Math.log2(1.5))));
        a1.getDescription = (_) => Utils.getMath(getDesc(a1.level));
        a1.getInfo = (amount) => Utils.getMathTo(getDesc(a1.level), getDesc(a1.level + amount));
    }

    // a2
    {
        let getDesc = (level) => "a_2=" + getA2(level).toString(0);
        a2 = theory.createUpgrade(1, currency, new ExponentialCost(110, Math.log2(1.5)));
        a2.getDescription = (_) => Utils.getMath(getDesc(a2.level));
        a2.getInfo = (amount) => Utils.getMathTo(getDesc(a2.level), getDesc(a2.level + amount));
    }

    // a3
    {
        let getDesc = (level) => "a_3=" + getA3(level).toString(0);
        a3 = theory.createUpgrade(2, currency, new ExponentialCost(1400, Math.log2(1.5)));
        a3.getDescription = (_) => Utils.getMath(getDesc(a3.level));
        a3.getInfo = (amount) => Utils.getMathTo(getDesc(a3.level), getDesc(a3.level + amount));
    }

    // a4
    {
        let getDesc = (level) => "a_4=" + getA4(level).toString(0);
        a4 = theory.createUpgrade(3, currency, new ExponentialCost(15000, Math.log2(1.5)));
        a4.getDescription = (_) => Utils.getMath(getDesc(a4.level));
        a4.getInfo = (amount) => Utils.getMathTo(getDesc(a4.level), getDesc(a4.level + amount));
    }

    // a5
    {
        let getDesc = (level) => "a_5=" + getA5(level).toString(0);
        a5 = theory.createUpgrade(4, currency, new ExponentialCost(1.7e6, Math.log2(1.5)));
        a5.getDescription = (_) => Utils.getMath(getDesc(a5.level));
        a5.getInfo = (amount) => Utils.getMathTo(getDesc(a5.level), getDesc(a5.level + amount));
    }

    // a6
    {
        let getDesc = (level) => "a_6=" + getA6(level).toString(0);
        a6 = theory.createUpgrade(5, currency, new ExponentialCost(1.8e7, Math.log2(1.5)));
        a6.getDescription = (_) => Utils.getMath(getDesc(a6.level));
        a6.getInfo = (amount) => Utils.getMathTo(getDesc(a6.level), getDesc(a6.level + amount));
    }

    // a7
    {
        let getDesc = (level) => "a_7=" + getA7(level).toString(0);
        a7 = theory.createUpgrade(6, currency, new ExponentialCost(1.8e7, Math.log2(1.5)));
        a7.getDescription = (_) => Utils.getMath(getDesc(a7.level));
        a7.getInfo = (amount) => Utils.getMathTo(getDesc(a7.level), getDesc(a7.level + amount));
    }

    // a8
    {
        let getDesc = (level) => "a_8=" + getA8(level).toString(0);
        a8 = theory.createUpgrade(7, currency, new ExponentialCost(1.8e9, Math.log2(1.5)));
        a8.getDescription = (_) => Utils.getMath(getDesc(a8.level));
        a8.getInfo = (amount) => Utils.getMathTo(getDesc(a8.level), getDesc(a8.level + amount));
    }

    // a9
    {
        let getDesc = (level) => "a_9=" + getA9(level).toString(0);
        a9 = theory.createUpgrade(8, currency, new ExponentialCost(2e10, Math.log2(1.5)));
        a9.getDescription = (_) => Utils.getMath(getDesc(a9.level));
        a9.getInfo = (amount) => Utils.getMathTo(getDesc(a9.level), getDesc(a9.level + amount));
    }

    /////////////////////
    // Permanent Upgrades
    theory.createPublicationUpgrade(0, currency, 1e10);
    theory.createBuyAllUpgrade(1, currency, 1e13);
    theory.createAutoBuyerUpgrade(2, currency, 1e30);

    ///////////////////////
    //// Milestone Upgrades
    theory.setMilestoneCost(new LinearCost(25, 25));

    /////////////////
    //// Achievements

    ///////////////////
    //// Story chapters
}

var tick = (elapsedTime, multiplier) => {
    currency.value += a1.level * 2
    currency.value += a2.level * 30
    currency.value += a3.level * 40
    currency.value += a4.level * 200
    currency.value += a5.level * 7000
    currency.value += a6.level * 1.1e5
    currency.value += a7.level * 9e5
    currency.value += a8.level * 4e6
    currency.value += a9.level * 3e7
}

var getPrimaryEquation = () => {
    let result = "\\dot{\\rho} = a_1";

    result += "a_2";

    result += "a_3";

    result += "a_4";

    result += "a_5";

    result += "a_6";

    result += "a_7";

    result += "a_8";

    result += "a_9";

    //result += "a_{10}";

    //result += "a_{11}";

    //result += "a_{12}";

    //result += "a_{13}";

    //result += "a_{14}";

    //result += "a_{15}";

    //result += "a_{16}";

    //result += "a_{17}";

    //result += "a_{18}";

    //result += "a_{19}";

    //result += "a_{20}";

    //result += "a_{21}";

    //result += "a_{22}";

    //result += "a_{23}";

    //result += "a_{24}";

    //result += "a_{25}";

    //result += "a_{26}";

    //result += "a_{27}";

    //result += "a_{28}";

    //result += "a_{29}";

    //result += "a_{30}";

    //result += "a_{31}";

    //result += "a_{32}";

    //result += "a_{33}";

    //result += "a_{34}";

    //result += "a_{35}";

    //result += "a_{36}";

    //result += "a_{37}";

    //result += "a_{38}";

    //result += "a_{39}";

    //result += "a_{40}";

    //result += "a_{41}";

    //result += "a_{42}";

    //result += "a_{43}";

    //result += "a_{44}";

    //result += "a_{45}";

    //result += "a_{46}";

    //result += "a_{47}";

    //result += "a_{48}";

    //result += "a_{49}";

    //result += "a_{50}";

    //result += "a_{51}";

    //result += "a_{52}";

    //result += "a_{53}";

    //result += "a_{54}";

    //result += "a_{55}";

    //result += "a_{56}";

    //result += "a_{57}";

    //result += "a_{58}";

    //result += "a_{59}";

    //result += "a_{60}";

    //result += "a_{61}";

    //result += "a_{62}";

    //result += "a_{63}";

    //result += "a_{64}";

    //result += "a_{65}";

    //result += "a_{66}";

    //result += "a_{67}";

    //result += "a_{68}";

    //result += "a_{69}";

    return result;
}