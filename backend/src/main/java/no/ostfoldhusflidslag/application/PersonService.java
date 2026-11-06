
package no.ostfoldhusflidslag.application;

import no.ostfoldhusflidslag.domain.Person;
import no.ostfoldhusflidslag.port.outgoing.PersonRepository;

public class PersonService {

    private final PersonRepository personRepository;

    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public Person opprettPerson(Person person) {

        if (erTom(person.getFornavn()) ||
                erTom(person.getEtternavn())) {
            throw new IllegalArgumentException(
                    "Fornavn og etternavn er påkrevd."
            );
        }

        boolean harEpost = !erTom(person.getEpost());
        boolean harTelefon = !erTom(person.getTelefon());

        boolean harAdresse =
                !erTom(person.getAdresse()) &&
                        !erTom(person.getPostnummer()) &&
                        !erTom(person.getPoststed());

        if (!harEpost && !harTelefon && !harAdresse) {
            throw new IllegalArgumentException(
                    "Minst én kontaktmetode er påkrevd."
            );
        }

        return personRepository.opprettPerson(person);
    }

    private boolean erTom(String verdi) {
        return verdi == null || verdi.isBlank();
    }
}
