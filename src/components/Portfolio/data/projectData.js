const projectData = [
    {
        id: 1,
        img: "SitKrit.png",
        caption: "Bestimmung der Fahreraufmerksamkeit durch ML-Verfahren",
        text: "Aufgrund der stetigen Entwicklung im Bereich des Infotainments und Entertainments kann es schnell dazukommen, dass ein Fahrzeugführer sich schnell ablenken lässt, bspw. durch das Bedienen des Navigationssystems oder das Tippen auf dem Smartphone. Um solche Situationen zu identifizieren und dem entgegenzuwirken habe ich gemeinsam mit der Carmeq GmbH in diesem Bereich im Rahmen einer Masterarbeit geforscht. Um den Fahrer mithilfe der Assistenzsystemen frühzeitig warnen zu können, ist die Aufmerksamkeit in potenziellen Gefahrensituationen besonders interessant. Aus den realen, gemessenen Fahrzeugdaten wurden zunächst Metriken entwickelt und Grenzwerte bestimmt, die es uns erlauben, Situationen interpretieren und auswerten zu können. Die resultierenden Labels dienen als Input für die Prädiktion der Aufmerksamkeit. Aus dem Bereich des Deep Learnings werden zwei unterschiedliche Verfahren untersucht - das Fully Connected Network (FCN) und das Long-Short Term Memory (LSTM).",
        tools: ["C++", "Python, pandas, scikit-learn", "Matlab", "Tensorflow/Keras", "FCN, LSTM, Auto-ML (TPOT)", "ADTF, CarScope, CMake"]
    },
    {
        id: 2,
        img: "BildKhang.jpg",
        caption: "Image Super-Resolution mittels Deep Neural Network",
        text: "Die Hochauflösung von Bildern ist ein hochaktuelles Forschungsgebiet im Bereich Computer Vision. Anwendung findet die Aufgabenstellung insbesondere in den Bereichen der Muster- und Bilderkennung bspw. im Automobilbereich, in der Objekt- und Personensicherheit mithilfe von Kameraaufnahmen und auch im Medizinbereich. Im Rahmen einer Bachelorarbeit habe ich am Fachgebiet Nachrichtenübertragung der Technischen Universität Berlin in diesem Gebiet geforscht. Der Megaface-Datensatz, welcher ausschließlich das Gesicht eines Menschen abbildet und über 1 Millionen Bildern umfasst, wurde für die Lernphase des KNNs genutzt. Ausgangspunkt war das Modell eines Autoencoders. Die einzelnen Schichten wurden systematisch und sukzessiv durch Convolutional und Deconvolutional-Layer ersetzt. Die Metriken PSNR und SSIM wurden für den Vergleich zwischen dem KNN und den herkömmlichen Interpolationsalgorithmen, wie die bilineare und bikubische Interpolation, genutzt.",
        tools: ["Python, scikit-learn", "Matlab", "Caffe", "Autoencoder, FCN, CNN, DCNN"]
    },
    {
        id: 3,
        img: "TradedexLogo.png",
        caption: "Tradedex 2.0",
        text: "Die plattformübergreifende Mobile-App Tradedex 2.0 wurde explizit für das Spiel Pokémon Go entwickelt. Pokémon Go ist ein AR-Spiel für Mobilgeräte, in dem die Spieler Fantasiewesen (Pokémon) fangen, entwickeln und sammeln können. Im Sommer 2018 wurde die Tauschfunktion implementiert, sodass die Spieler angefangen haben, eine Vielzahl an unterschiedlichen Listen auf Papier oder mithilfe einer .docx erstellt haben. Um große, unübersichtliche Tabellen zu ersetzen, können die Spieler Tradedex nutzen. Die App bietet die Erstellung von Listen mit einer Taste. Die einzelnen Pokémon wurden zudem mit den originalen Pokémon Go Bildern (Sprites) hinterlegt, sodass die App eine direkte Abhängigkeit zum Spiel verdeutlicht. Data Miner haben spielinterne Daten veröffentlicht und anhand dieser wurden ebenso tauschunabhängige Daten und Bilder verarbeitet. Um das bestmögliche Tauscherlebnis zu garantieren, ist es möglich, Freunde anhand einer eindeutigen ID in die Kontaktliste hinzuzufügen, in der man deren Listen direkt öfnnen kann. Ein Knopfdruck und schon werden die Pokémon in das Clipboard kopiert; in Pokémon Go kann man den String einsetzen und die gesuchten Pokémon des Freundes werden im eigenen Beutel angezeigt.",
        tools: ["Flutter", "Dart", "Python", "JSON", "Google Firebase, Firestore, Sign-In", "NoSQL"],
        url_android: "https://play.google.com/store/apps/details?id=trade.dex&hl=de",
        url_ios: "https://apps.apple.com/de/app/tradedex/id1454931038"
    },
    {
        id: 4,
        img: "KD.png",
        caption: "Homepage",
        text: 'Die Homepage startete als privates Projekt, da ich mich seit langem für die Web-Entwicklung interessiert habe. Angefangen wurden die Komponenten prototypisch mit Vanilla HTML5 und CSS3 entwickelt. Schnell war klar, dass die Homepage redesigned und neu geschrieben werden muss - eingebettet in einem modernen Frontend-Framework. Nach Recherche über moderne Frameworks habe ich mich für React entschieden, da mir das Konzept des virtuellen DOMs und die Vorteile bereits durch die App-Entwicklung mit Flutter vertraut war. Zusätzlich bietet das verwandte React Native die Möglichkeit zur plattformunabhängigen Mobile-App Entwicklung, welche ich für potenzielle zukünftige Projekte offen halten möchte. Ergänzend zu meinem Lebenslauf werden die einzelnen Projekte vorgestellt und die erworbenen Kenntnisse aufgeschlüsselt.',
        tools: ["HTML", "CSS", "JavaScript", "React", "Mobile-First", "Responsive Design"]
    }
]

export default projectData