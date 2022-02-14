function StartPayments() {
    comm = document.getElementById("tenderType_Payments").value;
    transType = document.getElementById("transType_Payments").value;
    amtinfo = AMOUNTINFOMATION();
    accountinfo = "";
    traceinfo = TRACEINFOMATION();

    avsinfo = "";
    cashierinfo = "";
    commercialinfo = "";
    motoecommerce = "";
    additionalinfo = document.getElementById("extData_Payments").value;
    posEchoData = "";

    result = "";
    if (comm == "T00"){
        // for test purpose. need to delete later
        // ---start---
        
        additionalinfo = "REPORTSTATUS=1" + us + "TIPREQ=1" + us + "GETSIGN=1" + us + "SIGN=1";
        version = "1.44";
        transType = "01";
        amtinfo = "1299" + us + us + us + us + us;
        traceinfo = "15155029" + us + us + us + us + us + us;
        
        // --- end ---
        result = stx + comm + fs + version + fs + transType + fs + amtinfo + fs
            + accountinfo + fs + traceinfo + fs + avsinfo + fs + cashierinfo + fs
            + commercialinfo + fs + motoecommerce + fs + additionalinfo + fs
            + posEchoData + etx;
    }
    else if (comm == "T10")
        result = stx + comm + fs + version + fs + transType + fs + amtinfo + fs
            + traceinfo + fs + cashierinfo + fs + additionalinfo + etx;
    else
        result = stx + comm + fs + version + fs + transType + fs + amtinfo + fs
            + accountinfo + fs + traceinfo + fs + cashierinfo + fs + additionalinfo + etx;
    
    
    console.log(getlrc(result).charCodeAt(0));
    str = toBase64(result + getlrc(result));
    
    st = result + getlrc(result);
    console.log(st);
    
    return str;
}

function AMOUNTINFOMATION() {
    amt = document.getElementById("amount_Payments").value;
    tip = document.getElementById("tip_Payments").value;
    cashback = document.getElementById("cashbackAmt_Payments").value;
    merchantfee = document.getElementById("merchantFee_Payments").value;
    tax = document.getElementById("tax_Payments").value;
    fuel = document.getElementById("fuel_Payments").value;

    result = amt + us + tip + us + cashback + us + merchantfee + us + tax + us + fuel;
    return result;

}
function TRACEINFOMATION() {
    refNum = document.getElementById("ercRefNum_Payments").value;
    inv = document.getElementById("inv_Payments").value;
    auth = document.getElementById("authCode_Payments").value;
    transNum = "";
    timeStamp = "";
    erctransid = document.getElementById("ercTransID_Payments").value;
    origECRRefNum = document.getElementById("origRefNum_Payments").value;

    result = refNum + us + inv + us + auth + us + transNum + us + timeStamp + us + erctransid + us + origECRRefNum;
    return result;
}