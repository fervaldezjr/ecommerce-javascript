function hola(x) {
    if (x===1) return x;
    if (x % 2 === 0) return hola(x/2) + 'a';
    return 'b' + hola(3*x+1);
}

console.log(hola(3));

arr = [1,-1,-1,-1,2,1,-1,1,1]

function chau(arr) {
    return arr.reduce((acc, val) => acc + val ** 3.0)
}

console.log(chau(arr))

// const a = [1,2,3,4]
// const b = a
// b.push(6)
// b = [4,3,2,1]
// b.shift()
// console.log(b[0])

const dict1 = {a:2,b:4,c:6,d:8}
const dict2 = {c:2,d:4,e:6,f:8}

const list = Object.entries(dict1).map(k => dict2.hasOwnProperty(k[0]) ? k[0] : null)
const shortlist = list.filter(a => a);
const dict3 = shortlist.reduce((acc,val) => ({...acc,[val]: dict2[val]}), {})

console.log(dict3)