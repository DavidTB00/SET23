
package no.ostfoldhusflidslag.domain;

public class Person {

    private int personId;
    private String fornavn;
    private String etternavn;
    private String epost;
    private String telefon;
    private String adresse;
    private String postnummer;
    private String poststed;

    public Person(int personId, String fornavn, String etternavn,
                  String epost, String telefon, String adresse,
                  String postnummer, String poststed) {
        this.personId = personId;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.epost = epost;
        this.telefon = telefon;
        this.adresse = adresse;
        this.postnummer = postnummer;
        this.poststed = poststed;
    }

    public int getPersonId() {
        return personId;
    }

    public String getFornavn() {
        return fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public String getEpost() {
        return epost;
    }

    public String getTelefon() {
        return telefon;
    }

    public String getAdresse() {
        return adresse;
    }

    public String getPostnummer() {
        return postnummer;
    }

    public String getPoststed() {
        return poststed;
    }
}
