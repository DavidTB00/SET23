package no.ostfoldhusflidslag.config;

import java.nio.file.Files;
import java.nio.file.Path;
import java.io.IOException;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {

    private static final String DB_TYPE =
            System.getenv().getOrDefault("DB_TYPE", "h2");

    public static Connection getConnection() throws SQLException {

        if (DB_TYPE.equalsIgnoreCase("mysql")) {

            String url = "jdbc:mysql://localhost:3306/ostfold_husflidslag";
            String user = "root";
            String password = System.getenv("DB_PASSWORD");

            return DriverManager.getConnection(url, user, password);

        } else if (DB_TYPE.equalsIgnoreCase("h2")) {

            // Opprett data-mappen automatisk hvis den mangler
            try {
                Files.createDirectories(Path.of("./data"));
            } catch (IOException e) {
                throw new SQLException("Kunne ikke opprette data-mappen", e);
            }

            String url = "jdbc:h2:file:./data/ostfold_husflidslag";
            String user = "sa";
            String password = "";

            return DriverManager.getConnection(url, user, password);

        } else {
            throw new SQLException("Ukjent databasetype: " + DB_TYPE);
        }
    }
}