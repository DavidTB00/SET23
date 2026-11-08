-- Testkurs
INSERT INTO kurs (kurs_id, kurs_navn, beskrivelse)
VALUES
    (1, 'Treskjæring', 'Innføring i tradisjonell treskjæring'),
    (2, 'Grunnleggende strikking', 'Lær grunnleggende strikketeknikker'),
    (3, 'Veving for nybegynnere', 'Innføring i veving på vevstol'),
    (4, 'Keramikk', 'Form og dekorer egne keramikkprodukter'),
    (5, 'Tradisjonell søm', 'Lær tradisjonelle sømteknikker'),
    (6, 'Toving av ull', 'Lag produkter av ull med våttoving'),
    (7, 'Brodering', 'Innføring i tradisjonelt broderi'),
    (8, 'Pilfletting', 'Lær å flette kurver av pil'),
    (9, 'Plantefarging', 'Farg garn med naturlige fargestoffer'),
    (10, 'Knivmaking', 'Lag din egen tradisjonelle brukskniv');



-- Testgjennomføringer
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
VALUES
    (1, 1, '2026-12-10 10:00:00', '2026-12-10 16:00:00', 1200, 950, 12, 'Fredrikstad', '2026-12-07 23:59:00', 'APEN'),
    (2, 2, '2026-12-17 10:00:00', '2026-12-17 14:00:00', 450, 350, 15, 'Sarpsborg', '2026-12-14 23:59:00', 'APEN'),
    (3, 3, '2027-01-09 09:00:00', '2027-01-09 16:00:00', 1500, 1200, 8, 'Moss', '2027-01-06 23:59:00', 'APEN'),
    (4, 4, '2027-01-16 10:00:00', '2027-01-16 15:00:00', 950, 750, 10, 'Halden', '2027-01-13 23:59:00', 'APEN'),
    (5, 5, '2027-01-23 11:00:00', '2027-01-23 16:00:00', 700, 550, 12, 'Fredrikstad', '2027-01-20 23:59:00', 'APEN'),
    (6, 6, '2027-01-30 10:00:00', '2027-01-30 14:00:00', 550, 400, 15, 'Sarpsborg', '2027-01-27 23:59:00', 'APEN'),
    (7, 7, '2027-02-06 10:00:00', '2027-02-06 15:00:00', 650, 500, 10, 'Moss', '2027-02-03 23:59:00', 'APEN'),
    (8, 8, '2027-02-13 09:00:00', '2027-02-13 16:00:00', 1800, 1450, 8, 'Halden', '2027-02-10 23:59:00', 'APEN'),
    (9, 9, '2027-02-20 10:00:00', '2027-02-20 15:00:00', 850, 650, 12, 'Fredrikstad', '2027-02-17 23:59:00', 'APEN'),
    (10, 10, '2027-02-27 09:00:00', '2027-02-27 17:00:00', 1600, 1300, 8, 'Sarpsborg', '2027-02-24 23:59:00', 'APEN');
