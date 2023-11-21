window.onload = function () {
    //mi történik ha betöltődött az oldal
    drawPascal(10);
}

var drawPascal = function (sorszam) {
    //itt történik a Pascal háromszög DOM elemeinek létrehozása és elhelyezése
    var pascalDiv = document.getElementById('pascal');

    for (var sor = 0; sor < sorszam; sor++) {
        //új div létrehozása az új sornak
        var ujSorDiv = document.createElement('div');

        //új div osztálylistájához add hozzá a "sor"-t
        ujSorDiv.classList.add('sor');

        //új div-et add hozzá a "pascal" gyermekeihez
        pascalDiv.appendChild(ujSorDiv);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            //új div létrehozása az új elemnek
            var ujElem = document.createElement('div');

            //új elem div osztálylistájához add hozzá az "elem"-et
            ujElem.classList.add('elem');

            //legyen az innerHTML a megfelelő szám
            ujElem.innerText = faktorialis(sor) / (faktorialis(oszlop) * faktorialis(sor - oszlop));

            //új elem div-et vedd fel a sor elemei közé
            ujSorDiv.appendChild(ujElem);
        }
    }
}

var faktorialis = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}





