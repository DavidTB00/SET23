Backenden krever Java JDK 25 og Maven. IntelliJ kan laste ned Java og har Maven innebygd. 
Dersom dere bruker VS Code, må dere sørge for at Java 25 og Maven er installert og tilgjengelige fra terminalen.
Jeg har brukt 25 så fint om dere også bruker det så ikke vi får uventede bugs. Dersom dere
bruker IntelliJ så er det veldig enkelt å laste ned java.

Hent siste versjon av prosjektet fra GitHub. Dersom dere ikke har prosjektet lokalt, 
må dere klone det først. Opprett deretter en egen branch for arbeidet, 
slik at endringene kan merges inn i main når dere er ferdige.

Naviger til backend-mappen.
For å starte applikasjonen:
mvn compile exec:java -Dexec.mainClass="no.ostfoldhusflidslag.Main"

H2 brukes som standarddatabase.

Ved første oppstart opprettes følgende automatisk:
-data-mappen
-H2-databasen
-Databasetabellene fra schema.sql
-Testdata fra data.sql

Databasefilene lagres lokalt i backend/data, forutsatt at arbeidsmappen er backend.

Backenden starter på http://localhost:7070 mens dette er endepunktet dere kommer til å jobbe på http://localhost:7070/api/kurs
API'et returnerer kursgjennomføringer som JSON.

React-frontenden kan hente kursdata med:

fetch("http://localhost:7070/api/kurs");.
Koden er også konfigurert til å tillate forespørsler på http://localhost:5173.
Dersom dere benytter en annen port så må dere endre det i koden selv i klassen: Main.java.

Backenden må kjøre for at React skal kunne hente kursdata.

Databasefilene som opprettes lokalt, skal ikke pushes til GitHub. 
Hvert gruppemedlem får sin egen lokale H2-database ved oppstart.