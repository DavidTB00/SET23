package no.ostfoldhusflidslag.adapter.incoming.web.dto;

import no.ostfoldhusflidslag.domain.Kursgjennomforing;

public record KursgjennomforingResponse(
        int gjennomforingId,
        int kursId,
        String kursNavn,
        String starttidspunkt,
        String sluttidspunkt,
        java.math.BigDecimal ordinarPris,
        java.math.BigDecimal medlemspris,
        int antallPlasser,
        String sted,
        String pameldingsfrist,
        String status
) {

    public static KursgjennomforingResponse fra(Kursgjennomforing kg) {
        return new KursgjennomforingResponse(
                kg.getGjennomforingId(),
                kg.getKursId(),
                kg.getKursNavn(),
                kg.getStarttidspunkt().toString(),
                kg.getSluttidspunkt().toString(),
                kg.getOrdinarPris(),
                kg.getMedlemspris(),
                kg.getAntallPlasser(),
                kg.getSted(),
                kg.getPameldingsfrist().toString(),
                kg.getStatus()
        );
    }
}