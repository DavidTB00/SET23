
package no.ostfoldhusflidslag.adapter.outgoing.database;

import no.ostfoldhusflidslag.config.DatabaseConnection;
import no.ostfoldhusflidslag.domain.Person;
import no.ostfoldhusflidslag.port.outgoing.PersonRepository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class H2PersonRepository implements PersonRepository {

    @Override
    public Person opprettPerson(Person person) {

        String sql = """
                INSERT INTO person (
                    fornavn, etternavn, epost, telefon,
                    adresse, postnummer, poststed
                )
                VALUES (?, ?, ?, ?, ?, ?, ?)
                """;

        try (Connection connection = DatabaseConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(
                     sql, Statement.RETURN_GENERATED_KEYS)) {

            statement.setString(1, person.getFornavn());
            statement.setString(2, person.getEtternavn());
            statement.setString(3, person.getEpost());
            statement.setString(4, person.getTelefon());
            statement.setString(5, person.getAdresse());
            statement.setString(6, person.getPostnummer());
            statement.setString(7, person.getPoststed());

            statement.executeUpdate();

            try (ResultSet keys = statement.getGeneratedKeys()) {
                if (keys.next()) {
                    return new Person(
                            keys.getInt(1),
                            person.getFornavn(),
                            person.getEtternavn(),
                            person.getEpost(),
                            person.getTelefon(),
                            person.getAdresse(),
                            person.getPostnummer(),
                            person.getPoststed()
                    );
                }
            }

            throw new SQLException("Kunne ikke hente person_id.");

        } catch (SQLException e) {
            throw new RuntimeException("Kunne ikke opprette person.", e);
        }
    }
}
