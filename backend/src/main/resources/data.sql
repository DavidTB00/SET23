-- Testkurs
INSERT INTO kurs (kurs_id, kurs_navn, beskrivelse)
VALUES (1, 'Treskjæring', 'Innføring i tradisjonell treskjæring');

-- Testgjennomføring
INSERT INTO kursgjennomforing (
    gjennomforing_id,
    kurs_id,
    starttidspunkt,
    sluttidspunkt,
    ordinar_pris,
    medlemspris,
    antall_plasser,
    sted,
    pameldingsfrist,
    status
)
VALUES (
           1,
           1,
           '2026-11-14 10:00:00',
           '2026-11-14 16:00:00',
           1200.00,
           950.00,
           12,
           'Fredrikstad',
           '2026-11-10 23:59:00',
           'APEN'
       );