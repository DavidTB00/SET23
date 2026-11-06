package no.ostfoldhusflidslag.config;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

public class DatabaseInitializer {

    public static void initialize() throws Exception {

        try (Connection connection = DatabaseConnection.getConnection()) {

            // Opprett tabellene
            runSqlFile(connection, "schema.sql");

            // Sjekk om databasen allerede inneholder kurs
            boolean harKurs;

            try (Statement statement = connection.createStatement();
                 ResultSet result = statement.executeQuery(
                         "SELECT COUNT(*) FROM kurs")) {

                result.next();
                harKurs = result.getInt(1) > 0;
            }

            // Legg inn testdata bare hvis kurs-tabellen er tom
            if (!harKurs) {
                runSqlFile(connection, "data.sql");
                System.out.println("Testdata er lagt inn!");
            }

            System.out.println("Databasen er initialisert!");
        }
    }

    private static void runSqlFile(Connection connection, String filename)
            throws Exception {

        InputStream inputStream = DatabaseInitializer.class
                .getClassLoader()
                .getResourceAsStream(filename);

        if (inputStream == null) {
            throw new IllegalStateException("Fant ikke " + filename);
        }

        String sql;

        try (inputStream) {
            sql = new String(
                    inputStream.readAllBytes(),
                    StandardCharsets.UTF_8
            );
        }

        try (Statement statement = connection.createStatement()) {

            for (String command : sql.split(";")) {
                if (!command.isBlank()) {
                    statement.execute(command.trim());
                }
            }
        }
    }
}