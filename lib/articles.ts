// Bundled Tagesschau snapshot from 13 September 2026. Every story is
// independently rewritten at four reading levels so changing concentration
// never cuts text off mid-sentence.
export type Article = {
  id: string;
  section: string;
  headline: string;
  /** Level 0: one sentence that carries the whole story. */
  gist: string;
  /** Level 1: the story as a handful of short points. */
  keyPoints: string[];
  /** Level 2: one summarised paragraph. */
  short: string;
  /** Level 3: a detailed version based on the source feed. */
  full: string[];
};

export const ARTICLES: Article[] = [
  {
    id: 'anthropic-ki-risiken',
    section: 'Technologie',
    headline: 'KI-Bosse in den USA wollen Entwicklung bremsen',
    gist: 'Der Anthropic-Chef fordert wegen schwer kontrollierbarer Risiken eine langsamere KI-Entwicklung und strengere Regeln; Unterstützung kommt von Sam Altman und Elon Musk.',
    keyPoints: [
      'Der Anthropic-Chef warnt vor schwer kontrollierbaren Risiken leistungsfähiger KI.',
      'Er fordert, die Entwicklung zu verlangsamen und stärker zu regulieren.',
      'OpenAI-Chef Sam Altman unterstützt die Forderung.',
      'Auch Tech-Unternehmer Elon Musk spricht sich für mehr Vorsicht aus.',
    ],
    short:
      'Führende Vertreter der US-Technologiebranche fordern mehr Vorsicht bei der Entwicklung künstlicher Intelligenz. Der Chef von Anthropic warnt vor Risiken, die sich nur schwer kontrollieren ließen, und verlangt eine langsamere Entwicklung sowie staatliche Regulierung. Unterstützung erhält er von OpenAI-Chef Sam Altman und Tech-Unternehmer Elon Musk.',
    full: [
      'Der Chef des US-KI-Unternehmens Anthropic warnt vor Risiken, die durch immer leistungsfähigere künstliche Intelligenz entstehen können. Aus seiner Sicht muss die Entwicklung dringend verlangsamt werden.',
      'Neben einem geringeren Tempo fordert er klare Regulierungen. Damit soll verhindert werden, dass neue Systeme schneller auf den Markt kommen, als ihre möglichen Folgen verstanden und kontrolliert werden können.',
      'Unterstützung erhält die Forderung von OpenAI-Chef Sam Altman und Tech-Unternehmer Elon Musk. Damit sprechen sich mehrere prominente Stimmen der US-Technologiebranche öffentlich für einen vorsichtigeren Kurs aus.',
    ],
  },
  {
    id: 'schweden-wahl-2026',
    section: 'Europa',
    headline: 'Richtungswahl in Schweden: Regierungswechsel oder Rechtsruck?',
    gist: 'Schweden wählt ein neues Parlament; die Sozialdemokraten führen in Umfragen, während die rechtspopulistischen Schwedendemokraten so einflussreich werden könnten wie nie zuvor.',
    keyPoints: [
      'In Schweden wird ein neues Parlament gewählt.',
      'Der Ausgang der Wahl gilt als offen.',
      'Die Sozialdemokraten liegen in Umfragen vorn.',
      'Die Schwedendemokraten könnten einen historischen Einfluss erreichen.',
    ],
    short:
      'In Schweden entscheiden die Wähler über ein neues Parlament. Die Sozialdemokraten führen zwar in den Umfragen, doch der Wahlausgang ist offen. Im Mittelpunkt steht die Frage, ob es zu einem Regierungswechsel oder zu einem deutlichen Rechtsruck kommt. Die rechtspopulistischen Schwedendemokraten könnten nach der Wahl so viel Einfluss haben wie nie zuvor.',
    full: [
      'Schweden wählt ein neues Parlament. Vor der Abstimmung lässt sich kein klarer Sieger absehen, der Ausgang gilt als offen.',
      'In den Umfragen liegen die Sozialdemokraten vorn. Das allein entscheidet jedoch noch nicht, welche Parteien anschließend eine Regierung bilden können.',
      'Besondere Aufmerksamkeit gilt den rechtspopulistischen Schwedendemokraten. Sie könnten durch das Wahlergebnis einen größeren politischen Einfluss erhalten als jemals zuvor. Die Wahl wird deshalb als Entscheidung zwischen Regierungswechsel und Rechtsruck betrachtet.',
    ],
  },
  {
    id: 'kommunalwahl-niedersachsen-2026',
    section: 'Deutschland',
    headline: 'Mehr als sechs Millionen Menschen wählen in Niedersachsen',
    gist: 'Bei der Kommunalwahl in Niedersachsen bestimmen mehr als sechs Millionen Wahlberechtigte Bürgermeister, Landräte und Kommunalvertretungen neu.',
    keyPoints: [
      'In Niedersachsen findet die Kommunalwahl statt.',
      'Mehr als sechs Millionen Menschen sind wahlberechtigt.',
      'Gewählt werden Bürgermeister, Landräte und Kommunalvertretungen.',
      'Die Abstimmung gilt ein Jahr vor der Landtagswahl als Stimmungstest.',
    ],
    short:
      'Mehr als sechs Millionen Menschen sind in Niedersachsen zur Kommunalwahl aufgerufen. Sie entscheiden über Bürgermeister, Landräte und die Zusammensetzung der Kommunalvertretungen. Weil die nächste Landtagswahl in einem Jahr stattfindet, wird das Ergebnis auch als politischer Stimmungstest gewertet.',
    full: [
      'In Niedersachsen sind die Wahllokale für die Kommunalwahl geöffnet. Mehr als sechs Millionen Menschen können ihre Stimme abgeben.',
      'Auf kommunaler Ebene werden Bürgermeister und Landräte sowie die Vertretungen in Städten, Gemeinden und Kreisen neu bestimmt.',
      'Die Abstimmung hat auch über die einzelnen Orte hinaus Bedeutung. Ein Jahr vor der nächsten Landtagswahl gilt sie als Stimmungstest für die politische Lage im Bundesland.',
    ],
  },
  {
    id: 'erbpacht-familien',
    section: 'Verbraucher',
    headline: 'Wie eine explodierende Erbpacht Familien überfordern kann',
    gist: 'Erbpacht kann den Weg ins Eigenheim erleichtern, wird bei stark steigenden Pachtzahlungen für Familien aber schnell zur finanziellen Falle.',
    keyPoints: [
      'Bei Erbpacht wird das Grundstück nicht gekauft, sondern langfristig gepachtet.',
      'Das Modell soll Familien den Zugang zum Eigenheim erleichtern.',
      'Eigentümer des Grundstücks können zum Beispiel Städte sein.',
      'Stark steigende Pachtzahlungen können Haushalte finanziell überfordern.',
    ],
    short:
      'Erbpacht soll Familien helfen, ein Eigenheim zu finanzieren: Sie kaufen das Haus, pachten das Grundstück aber langfristig von dessen Eigentümer, etwa einer Stadt. Dadurch fällt zunächst kein Kaufpreis für den Boden an. Steigt die Pacht später jedoch stark, kann aus der vermeintlichen Hilfe eine finanzielle Belastung oder sogar eine Falle werden.',
    full: [
      'Beim Erbpacht-Modell erwerben Familien ein Haus, nicht aber das Grundstück darunter. Dieses bleibt im Besitz eines anderen Eigentümers, zum Beispiel einer Stadt, und wird langfristig gepachtet.',
      'Das kann den Einstieg ins Eigenheim erleichtern, weil der Kaufpreis für das Grundstück zunächst entfällt. Dafür müssen die Bewohner regelmäßig Pacht zahlen.',
      'Problematisch wird das Modell, wenn diese Zahlungen stark steigen. Familien, die ihre Finanzierung mit einer deutlich niedrigeren Belastung geplant haben, können dadurch überfordert werden. Die Erbpacht kann so von einer Einstiegshilfe zur finanziellen Falle werden.',
    ],
  },
  {
    id: 'welt-sepsis-tag',
    section: 'Gesundheit',
    headline: 'Warum bei Blutvergiftungen oft zu viel Zeit vergeht',
    gist: 'Sepsis bleibt in deutschen Kliniken häufig zu lange unerkannt, obwohl schnelles Handeln entscheidend ist und vergleichsweise viele Menschen daran sterben.',
    keyPoints: [
      'Der Welt-Sepsis-Tag macht auf die Gefahr von Blutvergiftungen aufmerksam.',
      'Sepsis wird in Krankenhäusern häufig nicht rechtzeitig erkannt.',
      'Dadurch geht wichtige Zeit für die Behandlung verloren.',
      'In Deutschland sterben vergleichsweise viele Menschen an Sepsis.',
    ],
    short:
      'Der Welt-Sepsis-Tag soll die Aufmerksamkeit für Blutvergiftungen erhöhen. In deutschen Kliniken wird eine Sepsis häufig nicht rechtzeitig erkannt, obwohl bei der Behandlung jede Verzögerung entscheidend sein kann. Deutschland verzeichnet deshalb im Vergleich eine hohe Zahl von Todesfällen. Mehr Aufmerksamkeit und eine schnellere Diagnose sollen helfen.',
    full: [
      'Der Welt-Sepsis-Tag lenkt den Blick auf Blutvergiftungen und ihre oft unterschätzten Gefahren. Eine Sepsis kann lebensbedrohlich werden und muss schnell behandelt werden.',
      'In deutschen Kliniken bleibt die Erkrankung jedoch häufig zu lange unerkannt. Damit geht wichtige Zeit verloren, bevor die notwendige Behandlung beginnen kann.',
      'Vergleichsweise viele Menschen sterben in Deutschland an einer Sepsis. Der Aktionstag soll deshalb das Bewusstsein für Warnzeichen und die Bedeutung einer schnellen Diagnose stärken.',
    ],
  },
  {
    id: 'frankreich-zugunglueck',
    section: 'Europa',
    headline: 'Keine Hinweise auf Anschlag bei Zugunglück in Frankreich',
    gist: 'Nach der Entgleisung eines Zuges in der Normandie mit mehr als 40 Verletzten sieht die Staatsanwaltschaft keine Hinweise auf einen Anschlag.',
    keyPoints: [
      'Ein Zug ist in der Normandie entgleist.',
      'Mehr als 40 Menschen wurden verletzt.',
      'Einige Politiker hatten einen möglichen Anschlag ins Spiel gebracht.',
      'Die Staatsanwaltschaft sieht dafür keine Hinweise.',
    ],
    short:
      'Bei der Entgleisung eines Zuges in der französischen Normandie sind mehr als 40 Menschen verletzt worden. Nachdem einige Politiker über einen möglichen Anschlag gesprochen hatten, widersprach die Staatsanwaltschaft dieser Darstellung. Den Ermittlungen zufolge gibt es keine Hinweise darauf, dass das Unglück durch einen Anschlag verursacht wurde.',
    full: [
      'In der Normandie ist ein Zug entgleist. Bei dem Unglück wurden mehr als 40 Menschen verletzt.',
      'Nach der Entgleisung brachten einige Politiker einen möglichen Anschlag als Ursache ins Gespräch. Diese Darstellung wurde Teil der öffentlichen Debatte über das Unglück.',
      'Die zuständige Staatsanwaltschaft widerspricht dem jedoch. Nach dem Stand der Ermittlungen gibt es keine Hinweise auf einen Anschlag.',
    ],
  },
  {
    id: 'saudi-arabien-oelpreis',
    section: 'Wirtschaft',
    headline: 'Droht der nächste Ölpreis-Schock?',
    gist: 'Angriffe und Störungen an wichtigen Transportwegen und einer Pipeline setzen Saudi-Arabiens Ölexporte unter Druck und könnten auch in Deutschland die Preise erhöhen.',
    keyPoints: [
      'Saudi-Arabien ist der größte Ölexporteur der Welt.',
      'Die Straße von Hormus und Bab al-Mandab sind wichtige Transportwege.',
      'Zusätzlich wurde eine Pipeline beschädigt.',
      'Die Störungen könnten den Ölpreis und damit Kosten in Deutschland erhöhen.',
    ],
    short:
      'Saudi-Arabiens Ölexporte stehen gleichzeitig an mehreren Stellen unter Druck. Neben Problemen an der Straße von Hormus und der Meerenge Bab al-Mandab ist auch eine wichtige Pipeline beschädigt. Weil Saudi-Arabien der größte Ölexporteur der Welt ist, könnten sich die Störungen auf den globalen Ölpreis auswirken. Damit wären auch Folgen für Verbraucher und Unternehmen in Deutschland möglich.',
    full: [
      'Der weltweit größte Ölexporteur Saudi-Arabien kämpft mit mehreren Problemen zugleich. Die Lage an wichtigen Seerouten erschwert den Transport von Öl.',
      'Betroffen sind die Straße von Hormus und die Meerenge Bab al-Mandab. Zusätzlich wurde eine Pipeline beschädigt, wodurch ein weiterer Transportweg unter Druck steht.',
      'Die Häufung der Störungen wirft die Frage nach einem neuen Ölpreisschock auf. Steigende Weltmarktpreise könnten sich auch in Deutschland auf Energie-, Transport- und Produktionskosten auswirken.',
    ],
  },
  {
    id: 'demos-gegen-rechtsextremismus',
    section: 'Gesellschaft',
    headline: 'Zehntausende demonstrieren gegen Rechtsextremismus',
    gist: 'In mehr als 35 deutschen Städten haben Zehntausende für Demokratie und gegen Rechtsextremismus demonstriert und unter anderem die Prüfung eines AfD-Verbotsverfahrens gefordert.',
    keyPoints: [
      'Zehntausende Menschen gingen auf die Straße.',
      'Demonstrationen fanden in mehr als 35 Städten statt.',
      'Die Teilnehmer setzten ein Zeichen für Demokratie und gegen Rechtsextremismus.',
      'Eine Forderung war die Prüfung eines AfD-Verbotsverfahrens.',
    ],
    short:
      'Zehntausende Menschen haben in Deutschland gegen Rechtsextremismus und für Demokratie demonstriert. Kundgebungen und Protestzüge fanden in mehr als 35 Städten statt. Zu den politischen Forderungen gehörte, ein mögliches Verbotsverfahren gegen die AfD prüfen zu lassen.',
    full: [
      'In zahlreichen deutschen Städten sind Menschen gegen Rechtsextremismus auf die Straße gegangen. Insgesamt beteiligten sich Zehntausende an den Protesten.',
      'Demonstrationen fanden in mehr als 35 Städten statt. Die Teilnehmer wollten damit zugleich ein sichtbares Zeichen für Demokratie und gesellschaftlichen Zusammenhalt setzen.',
      'Neben diesem allgemeinen Anliegen gab es konkrete politische Forderungen. Dazu zählte die Prüfung, ob ein Verbotsverfahren gegen die AfD eingeleitet werden sollte.',
    ],
  },
  {
    id: 'arktis-rohstoffe-macht',
    section: 'Europa',
    headline: 'Zwischen Rohstoffen und Macht: Der Kampf um die Arktis',
    gist: 'Die Arktis gewinnt wegen ihrer Rohstoffe sowie ihrer militärischen und wirtschaftlichen Bedeutung an Gewicht; die EU berät darüber in Finnland.',
    keyPoints: [
      'Die Arktis wird militärisch und wirtschaftlich immer wichtiger.',
      'Auch der Zugang zu Rohstoffen erhöht die Bedeutung der Region.',
      'Die Europäische Union berät über ihre Rolle in der Arktis.',
      'An dem Treffen in Finnland nimmt auch Bundeskanzler Merz teil.',
    ],
    short:
      'Die Arktis liegt geografisch am Rand Europas, rückt politisch aber ins Zentrum. Rohstoffe sowie militärische und wirtschaftliche Interessen machen die Region zunehmend wichtig. Die Europäische Union berät deshalb in Finnland über ihre künftige Rolle. Auch Bundeskanzler Merz nimmt an den Gesprächen teil.',
    full: [
      'Die Arktis wirkt abgelegen, gewinnt aber strategisch immer mehr Bedeutung. Dabei geht es sowohl um wirtschaftliche Interessen und Rohstoffe als auch um militärische Fragen.',
      'Diese Entwicklung beschäftigt auch die Europäische Union. Sie muss klären, welche Rolle Europa in der Region spielen und wie es auf den wachsenden Wettbewerb reagieren will.',
      'Vertreter der EU kommen dazu in Finnland zu Beratungen zusammen. Auch Bundeskanzler Merz nimmt an dem Treffen teil.',
    ],
  },
  {
    id: 'hybride-bedrohungen-europa',
    section: 'Europa',
    headline: 'Was macht Europa gegen hybride Bedrohungen?',
    gist: 'Europäische Staaten reagieren gemeinsam auf Sabotage, Drohungen und Drohnenvorfälle, doch Kritiker vermissen weiterhin ein einheitliches Konzept.',
    keyPoints: [
      'Sabotage, Drohungen und Drohnenvorfälle erhöhen den Druck auf Europa.',
      'Als Ausgangspunkt der wachsenden Gefahr wird Russland genannt.',
      'Europäische Partner arbeiten enger zusammen und zeigen mehr Härte.',
      'Kritiker fordern ein umfassendes gesamteuropäisches Konzept.',
    ],
    short:
      'Sabotage, Drohungen und Drohnenvorfälle verstärken in Europa die Sorge vor hybriden Angriffen, insbesondere aus Russland. Die europäischen Partner rücken deshalb enger zusammen und versuchen, Entschlossenheit zu zeigen. Kritiker halten die bisherigen Schritte jedoch für unzureichend und vermissen eine gemeinsame Strategie für ganz Europa.',
    full: [
      'Europa sieht sich mit einer wachsenden Zahl hybrider Bedrohungen konfrontiert. Dazu zählen Sabotage, politische Drohungen und verdächtige Drohnenvorfälle.',
      'Wegen der als zunehmend wahrgenommenen Gefahr durch Russland arbeiten die europäischen Partner enger zusammen. Sie wollen ihre Abwehr stärken und nach außen mehr Härte zeigen.',
      'Trotz dieser Zusammenarbeit bleibt Kritik. Es fehle weiterhin ein umfassendes Konzept, das die Reaktion auf hybride Angriffe europaweit abstimmt.',
    ],
  },
];
