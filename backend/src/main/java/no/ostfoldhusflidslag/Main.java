package no.ostfoldhusflidslag;

import io.javalin.Javalin;
import no.ostfoldhusflidslag.adapter.incoming.web.KursController;
import no.ostfoldhusflidslag.adapter.outgoing.database.MySqlKursRepository;
import no.ostfoldhusflidslag.application.KursService;
import no.ostfoldhusflidslag.port.outgoing.KursRepository;

public class Main {

    public static void main(String[] args) {

        KursRepository repository = new MySqlKursRepository();

        KursService kursService = new KursService(repository);

        KursController kursController = new KursController(kursService);

        Javalin app = Javalin.create(config -> {
            kursController.registerRoutes(config);
        });

        app.start(7070);
    }
}