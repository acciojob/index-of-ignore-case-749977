function indexOfIgnoreCase(str, subStr) {
    return str.toLowerCase().indexOf(subStr.toLowerCase());
}

function findIndex() {
    let mainStr = document.getElementById("mainString").value;
    let subStr = document.getElementById("subString").value;

    let index = indexOfIgnoreCase(mainStr, subStr);
    document.getElementById("result").innerText = "Index: " + index;
}
