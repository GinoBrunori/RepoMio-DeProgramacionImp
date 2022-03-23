function anterior (num) {
    return num - 1;
}

function triple (num) {
    return num * 3;
}

function anteriorDelTriple (num){
    let tri = triple(num)
    return anterior (tri);
}

function anteriorDelTriple2 (num){
    return anterior (triple(num));
}


console.log(anteriorDelTriple(5));

