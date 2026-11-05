package no.ostfoldhusflidslag.application;

import no.ostfoldhusflidslag.port.outgoing.KursRepository;
import no.ostfoldhusflidslag.domain.Kurs;
import no.ostfoldhusflidslag.domain.Kursgjennomforing;
import java.util.List;

public class KursService {

    private final KursRepository kursRepository;

    public KursService(KursRepository kursRepository) {
        this.kursRepository = kursRepository;
    }

    public List<Kurs> hentAlleKurs() {
        return kursRepository.hentAlleKurs();
    }

    public List<Kursgjennomforing> hentKommendeKursgjennomforinger() {
        return kursRepository.hentKommendeKursgjennomforinger();
    }
}