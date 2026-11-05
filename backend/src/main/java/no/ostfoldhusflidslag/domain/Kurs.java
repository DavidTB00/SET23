package no.ostfoldhusflidslag.domain;

public class Kurs {

    private int kursId;
    private String kursNavn;
    private String beskrivelse;

    public Kurs(int kursId, String kursNavn, String beskrivelse) {
        this.kursId = kursId;
        this.kursNavn = kursNavn;
        this.beskrivelse = beskrivelse;
    }

    public int getKursId() {
        return kursId;
    }

    public String getKursNavn() {
        return kursNavn;
    }

    public String getBeskrivelse() {
        return beskrivelse;
    }
}
