
package no.ostfoldhusflidslag.adapter.incoming.web.dto;

public record OpprettPersonRequest(
        String fornavn,
        String etternavn,
        String epost,
        String telefon,
        String adresse,
        String postnummer,
        String poststed
) {
}
