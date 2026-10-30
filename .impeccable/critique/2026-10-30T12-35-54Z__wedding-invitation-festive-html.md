---
target: wedding_invitation_festive.htm
total_score: 21
max_score: 36
na_heuristics: 10
p0_count: 0
p1_count: 2
target_identity: "file:/home/user/SergTerentev/wedding_invitation_festive.html"
target_fingerprint: "sha256:3282113b0e1afe41e2ccee9aafad0bba1de6ca93e37e1a42a85ef55eff81223d"
target_path: /home/user/SergTerentev/wedding_invitation_festive.html
timestamp: 2026-10-30T12-35-54Z
slug: wedding-invitation-festive-html
---
Method: dual-agent (A: design review · B: detector + browser)

## Heuristics (21/36, 58%, Acceptable; #10 n/a)
1 Visibility 3 — success note under a blank reset form
2 Real world 3 — hero CTA presumes "yes"
3 Control 2 — no recap / change of answer after submit
4 Consistency 3 — map buttons worded differently; "+" vs "и" in names
5 Error prevention 2 — yes→fill extras→no still submits extras; whitespace-only name accepted
6 Recognition 2 — date and time ~1000px apart
7 Flexibility 1 — no add-to-calendar, no "Где и когда" jump
8 Aesthetic 3 — beautiful, but marquee/collage/calendar/countdown precede the time
9 Error recovery 2 — native bubbles one at a time; error text points to non-existent contacts
10 Help n/a

## Design specificity
Authored visuals (childhood polaroids, «Узнали?», one ribbon/bow line-art collection, arched calendar, embossed oval); generic section order and some generic copy.
Detector: 8 findings, none actionable — 5 cramped-padding false positives (absolute decorations; browser detector did not confirm), cream-palette + marquee ×2 = owner decisions in PRODUCT.md. No overflow, all targets ≥44px, contrast ≥6:1, no page errors.

## Priority issues
- [P1] Logistics buried: time/place ~3300px down; date below the fold in Telegram 375×640. Fix: "суббота · начало в 16:00" under hero date; "Где и когда ↓" link; times above calendar. layout, clarify
- [P1] RSVP has no closing moment + hidden extras leak when switching yes→no + whitespace name. Fix: personal thank-you card (yes/no) with recap and «Изменить ответ»; clear extras on "no"; trim name. harden, delight
- [P2] Dress-code info only inside image; image palette contradicts swatches; copy says «в цветах нашей свадьбы». Fix: live text for style + men; tap-to-zoom; owner decides palette. clarify
- [P2] Error message points to contacts that do not exist. Fix: «Проверьте интернет и нажмите ещё раз — ваши ответы сохранены». clarify
- [P3] Corner sprigs touch «Места встречи» heading at 375–390px. polish

## Persona red flags
First-timer: only "Буду с вами" on hero; no time in «Наш день»; unnamed swatches; dead-end error.
One-handed: map iframes may catch scroll; blank form after success.
Stress tester: extras leak; whitespace name.
Telegram in-app guest: names/date below fold at 640px; Yandex web links open in webview.

## Minor
Empty ~150px at bottom of «Узнали?»; desktop dress-code text crosses oval beads; ticking seconds; no og:image.

## Questions
1. What should a guest remember from the first screen alone?
2. Is the month calendar + ticking countdown worth ~700px?
3. Can the "yes" moment be as personal as the childhood photos?
