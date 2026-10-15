# Feußner PWA + Android-App – Ergänzungspaket

Dieses Paket ergänzt das vorhandene Repository `Totalstoned/Feussner-`. Es enthält:
- einen robusteren Service Worker mit Offline-Fallback und aktualisiertem Cache,
- eine Android-WebView-App als separates Android-Projekt,
- einen GitHub Actions Workflow, der bei Push eine APK baut.

## Wichtig vor dem Build
Die Website muss öffentlich per HTTPS erreichbar sein. Der Projekt-Link ist derzeit das GitHub-Repository, keine Website-Adresse. Wenn GitHub Pages aktiviert ist, lautet die übliche Adresse:
`https://totalstoned.github.io/Feussner-/`

Prüfe zuerst, ob diese Adresse wirklich lädt. Falls du eine andere Domain nutzt, ändere `WEBSITE_URL` in `android/app/src/main/java/de/feussner/app/MainActivity.java`.

## Dateien einfügen
Entpacke dieses Paket und kopiere dessen Inhalte in den Stammordner deines bestehenden Repositorys. Überschreibe `sw.js` und füge die Ordner `.github/` und `android/` hinzu. Bestehende Website-Dateien bleiben erhalten.

## PWA veröffentlichen
1. Öffne das Repository auf GitHub.
2. Gehe zu **Settings → Pages**.
3. Wähle **Deploy from a branch**, Branch `main`, Ordner `/ (root)`, dann Save.
4. Warte, bis GitHub Pages die Website veröffentlicht hat.
5. Öffne die veröffentlichte URL auf Android in Chrome.
6. Chrome-Menü → **App installieren** bzw. **Zum Startbildschirm hinzufügen**.

Die PWA braucht HTTPS. Die Offline-Funktion kann nur Dateien anzeigen, die bereits erfolgreich geladen und zwischengespeichert wurden. Externe Inhalte (z. B. Tailwind-CDN und das Anfrageformular) funktionieren ohne Internet nicht vollständig.

## Android-APK bauen
Nach dem Hochladen der Dateien:
1. Öffne **Actions** im GitHub-Repository.
2. Starte **Build Feussner Android APK** über **Run workflow** oder pushe einen Commit.
3. Öffne den erfolgreichen Workflow-Lauf.
4. Lade unter **Artifacts** das Paket `feussner-debug-apk` herunter und entpacke es.
5. Installiere `app-debug.apk` auf Android. Falls Android fragt, erlaube deinem Browser/Dateimanager die Installation unbekannter Apps.

Die erzeugte APK ist eine Debug-APK zum privaten Testen, nicht für den Play Store. Für Play Store-Veröffentlichung sind ein signierter Release-Build, eine dauerhaft verwahrte Signatur und zusätzliche Richtlinien-/Listing-Arbeiten nötig.

## Grenzen
Ich kann nicht direkt in dein GitHub-Konto schreiben oder dort die Dateien committen. Dieses Paket ist so vorbereitet, dass du es in dein Repository hochladen kannst. Die APK entsteht anschließend in GitHub Actions.
