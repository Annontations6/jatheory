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
        a8 = theory.createUpgrade(7, currency, new ExponentialCost(1.8e7, Math.log2(1.5)));
        a8.getDescription = (_) => Utils.getMath(getDesc(a8.level));
        a8.getInfo = (amount) => Utils.getMathTo(getDesc(a8.level), getDesc(a8.level + amount));
    }
}