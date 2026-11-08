package no.ostfoldhusflidslag;

import io.javalin.Javalin;
import no.ostfoldhusflidslag.adapter.incoming.web.KursController;
import no.ostfoldhusflidslag.adapter.outgoing.database.MySqlKursRepository;
import no.ostfoldhusflidslag.application.KursService;
import no.ostfoldhusflidslag.config.DatabaseInitializer;
import no.ostfoldhusflidslag.port.outgoing.KursRepository;

public class Main {

    public static void main(String[] args) throws Exception {

        // Opprett databasetabellene før serveren starter
        String dbType = System.getenv().getOrDefault("DB_TYPE", "h2");

        if (dbType.equalsIgnoreCase("h2")) {
            DatabaseInitializer.initialize();
        }


        KursRepository repository = new MySqlKursRepository();

        KursService kursService = new KursService(repository);

        KursController kursController = new KursController(kursService);

        Javalin app = Javalin.create(config -> {

            // Tillat forespørsler fra React under lokal utvikling
            config.bundledPlugins.enableCors(cors -> {
                cors.addRule(rule -> {
                    rule.allowHost("http://localhost:5173");
                });
            });

            kursController.registerRoutes(config);
        });

        app.start(7070);
    }
}