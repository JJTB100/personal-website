document.getElementById("bitButton").addEventListener("click", () => {
    var bitCountersExp = document.getElementById("bitsNumExp").value;
    var bitCountersMan = document.getElementById("bitsNumMan").value;
    genBits(bitCountersExp, "exponent-bits", "e_");
    genBits(bitCountersMan, "mantissa-bits", "m_");
});

function toggleBit(target) {
    if (target.innerText == 0) {
        target.innerText = 1;
    }
    else {
        target.innerText = 0;
    }
    updateFloatingPointValue()
}

function genBits(bitCount, target, prefix) {
    var html = ""

    for (let i = bitCount - 1; i >= 0; i--) {
        html += '<span class="bit" id="' + prefix + 'bit_' + i + '" onclick="toggleBit(this);">0</span>\n'
    }
    
    var e = document.getElementById(target);
    e.innerHTML = html;
}

function updateFloatingPointValue(){
    var bitCountersExp = document.getElementById("bitsNumExp").value;
    var bitCountersMan = document.getElementById("bitsNumMan").value;
    var exponent = 0;
    for(i=0; i<bitCountersExp; i++){
        var bitValue = 2**i;
        if(i== bitCountersExp-1){
            bitValue*=-1;
        }
        bitValue *= parseInt(document.getElementById("e_bit_"+i).innerText);
        exponent += bitValue;    
    }
    var mantissa = 0;
    for (i = 0; i < bitCountersMan; i++) {
        var bitValue = 1/(2 ** (bitCountersMan -i -1));
        if (i == bitCountersMan - 1) {
            bitValue *= -1;
        }
        bitValue *= parseInt(document.getElementById("m_bit_" + i).innerText);
        mantissa += bitValue;
    }
    var value = mantissa*(2**exponent);
    console.log(value);
    document.getElementById("explanation").innerHTML = "Mantissa: " + mantissa + "<br>Exponent: " + exponent + "<br>Value: " + value}