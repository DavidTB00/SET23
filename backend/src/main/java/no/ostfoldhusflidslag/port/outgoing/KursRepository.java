package no.ostfoldhusflidslag.port.outgoing;

import no.ostfoldhusflidslag.domain.Kurs;
import no.ostfoldhusflidslag.domain.Kursgjennomforing;

import java.util.List;

public interface KursRepository {

    List<Kurs> hentAlleKurs();

    List<Kursgjennomforing> hentKommendeKursgjennomforinger();
}