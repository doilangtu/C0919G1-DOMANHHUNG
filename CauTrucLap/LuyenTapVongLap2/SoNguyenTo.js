let number = 500;
let dem = 0;
let i = 2;
while (true) {
    if (i == 2||i==3) {
        dem++;
        i++;
        continue;
    }
    if (checkSNT(i)) {
        dem++;
    }
    if (dem === number) {
        break;
    }
    i = i + 2;
}