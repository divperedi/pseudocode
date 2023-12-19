// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock

function splitaNotan(summan, antalVänner, dricks) {
    if (summan mindre än 0 eller antalVänner mindre än eller lika med 0)
    return "Felaktig inmatning";
    end if
    
    SET variabel summa = summan;
    SET variabel vänner = antalVänner;
    SET variabel dricksen = dricks;

    if (summa lika med 0)
    return "Notan är redan betald eller ni har inte beställt något";
    end if
    
    SET variabel summaPerPerson = summa / vänner;
    SET variabel summaPerPersonMedDricks = summaPerPerson + (summaPerPerson * dricksen);

    if (summaPerPersonMedDricks mindre än eller lika med 0)
    return "Dricksen är för hög eller notan är redan betald";
    end if
    
    return summaPerPersonMedDricks;
}



// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock

function play()
    SET variabel ordbok = [lista med alla engelska ord]; 
    SET variabel startOrd = "EYE";
    SET variabel slutOrd = "LID";
    SET variabel counter = 0;

    while (varje omgång i antal omgångar, tills slutordet är nått)
        SET variabel nyttOrd = input från användaren;
        SET variabel föregåendeOrd = spelomgångens nuvarande ord;

        if (nyttOrd skiljer mer än eller mindre än en bokstav från föregåendeOrd)
            return "Du måste skriva ett ord som skiljer sig med EN BOKSTAV från föregående ord";
        end if

        if (nyttOrd inte finns i ordbok)
            return "Ordet du skrev finns inte i ordboken";
        end if

        counter += 1;

        if (nyttOrd är lika med slutOrd)
            PRINT "Grattis! Du vann! Antal ord använda: " + counter;
        end if 
    end while

end function

/*

function play()
    SET variabel ordbok = [..., ..., ...]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutordOrd till "FIVE";


end function

function isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0;


    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
end function

*/