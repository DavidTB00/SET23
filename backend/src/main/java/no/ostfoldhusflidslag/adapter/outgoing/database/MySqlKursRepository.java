package no.ostfoldhusflidslag.adapter.outgoing.database;

import no.ostfoldhusflidslag.config.DatabaseConnection;
import no.ostfoldhusflidslag.domain.Kurs;
import no.ostfoldhusflidslag.domain.Kursgjennomforing;
import no.ostfoldhusflidslag.port.outgoing.KursRepository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MySqlKursRepository implements KursRepository {

    @Override
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

                Kurs kurs = new Kurs(
                        kursId,
                        kursNavn,
                        beskrivelse
                );

                kursListe.add(kurs);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return kursListe;
    }


    @Override
    public List<Kursgjennomforing> hentKommendeKursgjennomforinger() {

        List<Kursgjennomforing> gjennomforinger = new ArrayList<>();

        String sql = """
                SELECT kg.*, k.kurs_navn
                FROM kursgjennomforing kg
                JOIN kurs k ON kg.kurs_id = k.kurs_id
                WHERE kg.sluttidspunkt >= NOW()
                  AND kg.status != 'AVLYST'
                ORDER BY kg.starttidspunkt
                """;

        try (Connection connection = DatabaseConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql);
             ResultSet resultSet = statement.executeQuery()) {

            while (resultSet.next()) {

                Kursgjennomforing gjennomforing =
                        new Kursgjennomforing(
                                resultSet.getInt("gjennomforing_id"),
                                resultSet.getInt("kurs_id"),
                                resultSet.getString("kurs_navn"),
                                resultSet.getTimestamp("starttidspunkt").toLocalDateTime(),
                                resultSet.getTimestamp("sluttidspunkt").toLocalDateTime(),
                                resultSet.getBigDecimal("ordinar_pris"),
                                resultSet.getBigDecimal("medlemspris"),
                                resultSet.getInt("antall_plasser"),
                                resultSet.getString("sted"),
                                resultSet.getTimestamp("pameldingsfrist").toLocalDateTime(),
                                resultSet.getString("status")
                        );

                gjennomforinger.add(gjennomforing);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return gjennomforinger;
    }
}