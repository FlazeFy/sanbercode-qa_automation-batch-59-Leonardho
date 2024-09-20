const square_root = (x) => {
    if (x < 0) {
        return "Tidak bisa input bilangan negatif"
    } else if (x % 2 != 0) {
        return "Tidak bisa input bilangan ganjil"
    } else {
        return Math.sqrt(x)
    }
}

console.log(`Bilangan negatif\n${square_root(-2)}\n`)
console.log(`Bilangan ganjil\n${square_root(9)}\n`)
console.log(`Bilangan valid\n${square_root(16)}\n`)