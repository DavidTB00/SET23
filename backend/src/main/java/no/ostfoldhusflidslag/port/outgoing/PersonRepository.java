
package no.ostfoldhusflidslag.port.outgoing;

import no.ostfoldhusflidslag.domain.Person;

public interface PersonRepository {

    Person opprettPerson(Person person);

}
