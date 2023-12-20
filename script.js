// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock

// Jag ska kommentera vad och varför jag gör det jag gör i koden

/* Funktionen splitaNotan tar emot tre parametrar: summan, antalVänner och dricks */
function splitaNotan(summan, antalVänner, dricks) 
    if (summan mindre än 0 eller antalVänner mindre än eller lika med 0)
    return "Felaktig inmatning";
    end if
    
/* Definierar variabler för att kunna använda dem i funktionen */
    SET variabel summa = summan;
    SET variabel vänner = antalVänner;
    SET variabel dricksen = dricks;

    if (summa lika med eller mindre än 0)
    return "Notan är redan betald eller ni har inte beställt något";
    end if
    
/* Räknar ut summan per person och summan per person med dricks */
    SET variabel summaPerPerson = summa / vänner;
    SET variabel summaPerPersonMedDricks = summaPerPerson + (summaPerPerson * dricksen);
    
    return summaPerPersonMedDricks;

end function



// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock

function play()
/* Spel startas, ordbok, start och slutord sätts */
    SET variabel ordbok = [lista med alla engelska ord]; 
    SET variabel startOrd = "EYE";
    SET variabel slutOrd = "LID";
    SET variabel counter = 0;

/* Vid klick/ inmatning av nytt ord körs detta loop */
    while (varje omgång i antal omgångar, tills slutordet är nått)
        SET variabel nyttOrd = input från användaren;
        SET variabel föregåendeOrd = spelomgångens nuvarande ord;

/* Om användare byter mer än 1 bokstav eller skriver samma ord till exempel */
        if (nyttOrd skiljer mer än eller mindre än en bokstav från föregåendeOrd)
            return "Du måste skriva ett ord som skiljer sig med EN BOKSTAV från föregående ord";
        end if

/* Om användare skriver ogilltigt ord */
        if (nyttOrd inte finns i ordbok)
            return "Ordet du skrev finns inte i ordboken";
        end if

/* Counter är antal ord använda */
        counter += 1;

/* Om användare skriver slutordet */
        if (nyttOrd är lika med slutOrd)
            PRINT "Grattis! Du vann! Antal ord använda: " + counter;
        end if 
    end while

end function

/*


    ||::|:||   .--------,
    |:||:|:|   |_______ /       .-.
    ||::|:|| ."`  ___  `".   {\('v')/}
    \\\/\///:  .'`   `'.  ;___`(   )'____
     \====/ './  o   o  \|~     ^" "^   //
      \\//   |   ())) .  |      GOD     \
       ||     \ `.__.'  /|              //
       ||   _{``-.___.-'\|      JUL     \
       || _." `-.____.-'`|      ___     //
       ||`        __ \   |_____/   \_____\
     ."||        (__) \    \|     /
    /   `\/       __   vvvvv'\___/
    |     |      (__)        |
     \___/\                 /
       ||  |     .___.     |
       ||  |       |       |
       ||.-'       |       '-.
       ||          |          )
       ||----------'---------'


             *             ,
                       _/^\_
                      <     >
     *                 /.-.\         *
              *        `/&\`                   *                   
                      ,@.*;@,                                  
                     /_o.I %_\    *
        *           (`'--:o(_@;
                   /`;--.,__ `')             *
                  ;@`o % O,*`'`&\ 
            *    (`'--)_@ ;o %'()\      *                         OCH
                 /`;--._`''--._O'@;                           GOTT NYTT ÅR!
                /&*,()~o`;-.,_ `""`)                           
     *          /`,@ ;+& () o*`;-';\           *
               (`""--.,_0 +% @' &()\
               /-.,_    ``''--....-'`)  *
          *    /@%;o`:;'--,.__   __.'\
              ;*,&(); @ % &^;~`"`o;@();         *
              /(); o^~; & ().o@*&`;&%O\
              `"="==""==,,,.,="=="==="`
           __.----.(\-''#####---...___...-----._
         '`         \)_`"""""`
                 .--' ')
               o(  )_-\
                 `"""` `



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