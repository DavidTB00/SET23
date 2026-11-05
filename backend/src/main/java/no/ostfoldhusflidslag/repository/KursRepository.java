package no.ostfoldhusflidslag.repository;

import no.ostfoldhusflidslag.config.DatabaseConnection;
import no.ostfoldhusflidslag.domain.Kurs;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.ArrayList;
import java.util.List;

public class KursRepository {

    public List<Kurs> hentAlleKurs() {

        List<Kurs> kursListe = new ArrayList<>();

        String sql = "SELECT * FROM kurs";

        try (Connection connection = DatabaseConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql);
             ResultSet resultSet = statement.executeQuery()) {

            while (resultSet.next()) {

                int kursId = resultSet.getInt("kurs_id");
                String kursNavn = resultSet.getString("kurs_navn");
                String beskrivelse = resultSet.getString("beskrivelse");

                Kurs kurs = new Kurs(kursId, kursNavn, beskrivelse);

                kursListe.add(kurs);
            }

        } catch (SQLException e) {
            e.printStackTrace();

        }

        return kursListe;
    }
}
