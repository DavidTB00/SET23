
package no.ostfoldhusflidslag.adapter.incoming.web;

import io.javalin.config.JavalinConfig;
import no.ostfoldhusflidslag.application.PersonService;
import no.ostfoldhusflidslag.domain.Person;
import no.ostfoldhusflidslag.adapter.incoming.web.dto.OpprettPersonRequest;

import java.util.Map;

public class PersonController {

    private final PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    public void registerRoutes(JavalinConfig config) {

        config.routes.post("/api/personer", ctx -> {

            try {
                OpprettPersonRequest request =
                        ctx.bodyAsClass(OpprettPersonRequest.class);

                Person person = new Person(
                        0,
                        request.fornavn(),
                        request.etternavn(),
                        request.epost(),
                        request.telefon(),
                        request.adresse(),
                        request.postnummer(),
                        request.poststed()
                );

                Person lagretPerson =
                        personService.opprettPerson(person);

                ctx.status(201);
                ctx.json(Map.of(
                        "personId", lagretPerson.getPersonId(),
                        "melding", "Person opprettet."
                ));

            } catch (IllegalArgumentException e) {
                ctx.status(400);
                ctx.json(Map.of(
                        "feil", e.getMessage()
                ));
            }
        });
    }
}
