package no.ostfoldhusflidslag.domain;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class Kursgjennomforing {

    private int gjennomforingId;
    private int kursId;
    private String kursNavn;
    private LocalDateTime starttidspunkt;
    private LocalDateTime sluttidspunkt;
    private BigDecimal ordinarPris;
    private BigDecimal medlemspris;
    private int antallPlasser;
    private String sted;
    private LocalDateTime pameldingsfrist;
    private String status;

    public Kursgjennomforing(
            int gjennomforingId,
            int kursId,
            String kursNavn,
            LocalDateTime starttidspunkt,
            LocalDateTime sluttidspunkt,
            BigDecimal ordinarPris,
            BigDecimal medlemspris,
            int antallPlasser,
            String sted,
            LocalDateTime pameldingsfrist,
            String status) {

        this.gjennomforingId = gjennomforingId;
        this.kursId = kursId;
        this.kursNavn = kursNavn;
        this.starttidspunkt = starttidspunkt;
        this.sluttidspunkt = sluttidspunkt;
        this.ordinarPris = ordinarPris;
        this.medlemspris = medlemspris;
        this.antallPlasser = antallPlasser;
        this.sted = sted;
        this.pameldingsfrist = pameldingsfrist;
        this.status = status;
    }
    public int getGjennomforingId() {
        return gjennomforingId;
    }

    public int getKursId() {
        return kursId;
    }

    public String getKursNavn() {
        return kursNavn;
    }

    public LocalDateTime getStarttidspunkt() {
        return starttidspunkt;
    }

    public LocalDateTime getSluttidspunkt() {
        return sluttidspunkt;
    }

    public BigDecimal getOrdinarPris() {
        return ordinarPris;
    }

    public BigDecimal getMedlemspris() {
        return medlemspris;
    }

    public int getAntallPlasser() {
        return antallPlasser;
    }

    public String getSted() {
        return sted;
    }

    public LocalDateTime getPameldingsfrist() {
        return pameldingsfrist;
    }

    public String getStatus() {
        return status;
    }
}