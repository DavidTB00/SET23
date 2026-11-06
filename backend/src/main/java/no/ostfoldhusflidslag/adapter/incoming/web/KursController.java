package no.ostfoldhusflidslag.adapter.incoming.web;

import no.ostfoldhusflidslag.application.KursService;
import no.ostfoldhusflidslag.adapter.incoming.web.dto.KursgjennomforingResponse;


import io.javalin.config.JavalinConfig;

public class KursController {

    private final KursService kursService;

    public KursController(KursService kursService) {
        this.kursService = kursService;
    }

    public void registerRoutes(JavalinConfig config) {

        config.routes.get("/api/kurs", ctx -> {
            ctx.json(
                    kursService.hentKommendeKursgjennomforinger()
                            .stream()
                            .map(KursgjennomforingResponse::fra)
                            .toList()
            );
        });

    }
}