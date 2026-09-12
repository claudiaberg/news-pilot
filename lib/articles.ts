/**
 * Bundled sample stories. Every story is written four times, from a single
 * sentence up to the full text, so the concentration slider can swap between
 * genuine summaries instead of cutting text off mid-sentence.
 */
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
  /** Level 3: the original article, paragraph by paragraph. */
  full: string[];
};

export const ARTICLES: Article[] = [
  {
    id: 'quiet-nights',
    section: 'Health',
    headline: 'Hospitals switch to quiet nights so patients can sleep',
    gist: 'Twelve hospitals will dim their lights and send non-urgent alarms to staff phones between 10pm and 6am, after patients said noise was the worst part of their stay.',
    keyPoints: [
      'Twelve hospitals start quiet nights, 10pm to 6am, in March.',
      'Non-urgent alarms go to staff phones instead of ward speakers.',
      'On the ward that tested it, patients slept about 40 minutes longer.',
      'Night checks continue, with torches and quieter hand-overs.',
    ],
    short:
      'From March, twelve hospitals will run quiet nights. Between 10pm and 6am, corridor lights are dimmed, non-urgent alarms are sent to staff phones, and routine cleaning and deliveries wait until morning. The plan came out of patient surveys, where noise was named more often than pain. On the ward that tested the rules last winter, patients slept about 40 minutes longer each night and asked for sleeping tablets less often. Nurses still carry out checks, and alarms that signal a real emergency still sound out loud.',
    full: [
      'Twelve hospitals will begin running quiet nights in March. Between 10pm and 6am, corridor lights are dimmed, non-urgent alarms are routed to staff phones, and routine cleaning, deliveries and non-urgent blood tests are held back until the morning.',
      'The plan grew out of patient surveys. Asked what they would change about their stay, more patients named noise than named pain or food. Bin lids, monitors beeping in empty rooms and conversations at the nurses\u2019 station came up again and again.',
      'One ward tested the rules last winter. Patients there slept an average of 40 minutes longer each night and asked for sleeping tablets less often. Staff also logged fewer call-bell requests after midnight.',
      '\u201cSleep is treatment,\u201d said the consultant who led the trial. \u201cPeople recover faster when they are not woken every hour for something that could wait until seven.\u201d',
      'Checks continue through the night for patients who need them. Nurses use small torches instead of ceiling lights, and hand-over conversations move away from bedsides. Alarms that signal a real emergency still sound in the corridor.',
      'Not everyone is sure the rules will hold when wards are full. A nurses\u2019 representative said quiet nights depend on having enough staff on shift, and warned that the policy should not become a reason to skip checks. The hospitals will review the results after a year and publish their sleep scores.',
    ],
  },
  {
    id: 'night-trains',
    section: 'Transport',
    headline: 'Night trains return to five capitals in December',
    gist: 'A new sleeper timetable will link five capital cities from December, with beds priced close to a budget flight and bookings opening six months ahead.',
    keyPoints: [
      'Sleeper services restart on three routes in December.',
      'Five capitals are linked, four of them without changing train.',
      'A bed starts near the price of a budget flight; seats cost less.',
      'Tickets go on sale six months ahead instead of three.',
    ],
    short:
      'Three sleeper routes restart in December, linking five capital cities. Four of them can be reached without changing trains. Beds start at around the price of a budget flight, while reclining seats cost less, and every train carries a bicycle van. The services use refurbished 1990s carriages rather than new stock, so the operator admits comfort will vary between coaches. Bookings will open six months ahead, answering a long-standing complaint that night trains sold out before travellers could plan.',
    full: [
      'Sleeper trains will run again between five capital cities from December, on three routes that were dropped more than a decade ago when short-haul flights became cheaper.',
      'Four of the five cities can be reached without changing trains. The fifth needs one early-morning connection. Trains leave in the evening and arrive between 7am and 9am, which the operator says is the whole point: a night on board replaces both a flight and a hotel.',
      'A bed in a shared compartment starts at roughly the price of a budget flight booked in advance. Private compartments cost about three times that. Reclining seats are cheaper again, and every train carries a van for bicycles, with 30 spaces per departure.',
      'The carriages are refurbished stock from the 1990s rather than new builds. The operator is frank about the consequences: some coaches have been rebuilt with power sockets and reading lights at every berth, others have not, and comfort will vary until the work is finished in 2028.',
      'Bookings will open six months ahead instead of three. That answers a long-running complaint from passengers, who found that sleeper tickets sold out before they could plan a trip, and from travel agents, who could not sell them at all.',
      'Rail unions welcomed the routes but questioned the staffing plan, which puts one attendant in charge of two sleeping cars. The operator says a second attendant will be added on the busiest nights, and that the timetable will be reviewed after the first winter.',
    ],
  },
  {
    id: 'rooftop-solar',
    section: 'Climate',
    headline: 'Rooftop panels out-produced coal on 61 summer days',
    gist: 'Small rooftop solar systems generated more electricity than the region\u2019s coal plants on 61 days this summer, a first according to the grid operator.',
    keyPoints: [
      'Rooftop solar beat coal output on 61 days between June and August.',
      'Households and small firms own about a third of all solar capacity.',
      'Midday surpluses are now large enough to push prices below zero.',
      'Evening demand is still covered mostly by gas.',
    ],
    short:
      'Rooftop solar produced more electricity than coal plants on 61 days between June and August, the grid operator says, the first time small systems have out-produced coal over a whole season. Households and small businesses now own about a third of solar capacity. The surplus is concentrated around midday, when prices sometimes fall below zero, while evening demand is still met mostly by gas. The operator wants more batteries and is asking regulators to let households be paid for storing power rather than exporting it.',
    full: [
      'Rooftop solar panels produced more electricity than the region\u2019s coal plants on 61 days between June and August, according to figures published by the grid operator. It is the first time small systems have out-produced coal across a whole season.',
      'Roughly a third of installed solar capacity now sits on the roofs of houses, farms and small businesses rather than in commercial solar parks. That share has doubled in four years, helped by falling panel prices and a simplified connection process.',
      'The output is heavily concentrated in the middle of the day. On sunny weekends, when factories and offices are closed, wholesale prices have fallen below zero for several hours, meaning generators pay to keep supplying the grid.',
      'Evenings remain the problem. Demand peaks after sunset, and gas plants still cover most of it. The operator says the region needs far more storage, and that batteries installed alongside rooftop systems could shift some of the midday surplus into the evening.',
      'It has asked regulators to change the rules so households can be paid for storing and releasing electricity at useful times, instead of only for exporting it the moment it is generated. A decision is expected in the spring.',
      'Coal plants are scheduled to close by 2030. Two operators have already applied to bring their closure dates forward, arguing that the plants no longer earn enough during daylight hours to be worth running.',
    ],
  },
  {
    id: 'app-store-ranking',
    section: 'Technology',
    headline: 'App stores told to explain how they rank apps',
    gist: 'Large app stores will have to publish the main factors behind their rankings and give developers a written reason before removing an app.',
    keyPoints: [
      'Rules apply to app stores with more than 45 million monthly users.',
      'Stores must list their main ranking factors in plain language.',
      'Developers get a written reason and 14 days to appeal a removal.',
      'Repeat breaches can be fined up to 3% of annual turnover.',
    ],
    short:
      'From next year, app stores with more than 45 million monthly users must publish the main factors that decide how apps are ranked, in language a non-specialist can follow. They will not have to reveal the code behind their systems. Stores must also give developers a written reason before an app is removed, plus 14 days to appeal, unless the app poses a safety risk. Fines for repeat breaches can reach 3% of annual turnover. Developer groups called it a start; the stores warned that clearer rules will help people game the rankings.',
    full: [
      'App stores with more than 45 million monthly users will have to explain how they rank apps, under rules that take effect next year.',
      'Each store must publish the main factors that decide search results and featured lists, in language a non-specialist can follow. Download numbers, ratings, crash rates and update frequency are all expected to appear. Stores will not have to publish the code behind their systems, and they may withhold details that would obviously help spammers.',
      'The second half of the rules deals with removals. Before an app is taken down, the developer must receive a written reason pointing at a specific policy, and 14 days to appeal. Apps that pose a safety risk or break the law can still be removed immediately.',
      'Developers have complained for years that removals arrive as template emails with no way to reply, and that a rejected update can cut off income overnight for a small studio. Regulators said the volume of those complaints, not any single case, prompted the rules.',
      'Fines for repeat breaches can reach 3% of annual turnover. A first breach normally brings a compliance order and a deadline.',
      'Two large stores said they support clearer communication with developers but warned that publishing ranking factors makes them easier to game, which can push low-quality apps up the lists. Developer groups called the rules a useful start and said the appeal window is too short for a small team without a lawyer.',
    ],
  },
  {
    id: 'shorter-lessons',
    section: 'Education',
    headline: 'Sixty schools test 40-minute lessons with movement breaks',
    gist: 'Sixty schools are cutting lessons from 60 to 40 minutes and adding a short movement break every hour, aiming to help pupils who lose focus in long blocks.',
    keyPoints: [
      'Lessons drop from 60 to 40 minutes in 60 schools this term.',
      'Every hour includes a five-minute movement break.',
      'Total teaching time and the length of the school day stay the same.',
      'Teachers report fewer interruptions late in a lesson.',
    ],
    short:
      'Sixty schools are running 40-minute lessons this term, with a five-minute movement break in every hour. The school day and the total teaching time stay the same; the timetable is simply cut differently. Teachers in a pilot last year reported fewer interruptions in the last third of a lesson and said pupils who normally struggle to sit still were the clearest beneficiaries. Not every subject fits: science practicals and art are being kept as double blocks. An evaluation of attendance, behaviour and test results is due next summer.',
    full: [
      'Sixty schools have moved to 40-minute lessons this term, with a five-minute movement break built into every hour. The school day is unchanged and pupils receive the same total teaching time; the timetable is simply divided differently.',
      'The breaks are deliberately unstructured. Pupils stand, stretch, fetch water or walk to the window. Teachers were asked not to turn the five minutes into a quiz or a tidying-up task.',
      'A smaller pilot ran last year in eight schools. Teachers there reported fewer interruptions in the final third of a lesson, and said the clearest gains were among pupils who find it hardest to sit still, including those with attention difficulties.',
      'One head teacher said the change had reduced the number of pupils sent out of class. \u201cWe were punishing children for not managing something we had designed badly,\u201d she said. \u201cAn hour of sitting is a long time for an adult, never mind a twelve-year-old.\u201d',
      'Not every subject fits the shorter block. Science practicals, art, and design lessons are being kept as doubles, because setting up and clearing away eats most of a 40-minute slot.',
      'Sceptics point out that shorter lessons mean more transitions between rooms, which is its own source of lost time and noise. The schools are recording attendance, behaviour referrals and end-of-year results, and an independent evaluation is due next summer.',
    ],
  },
  {
    id: 'four-day-week',
    section: 'Work',
    headline: 'Bakery chain keeps four-day week after year-long trial',
    gist: 'A 34-shop bakery chain will keep its four-day week permanently, saying sales held steady while the share of staff leaving fell by almost half.',
    keyPoints: [
      'Staff work four days for full pay, permanently from January.',
      'Sales held steady; staff turnover fell by nearly half.',
      'Shops keep the same opening hours using overlapping shifts.',
      'Covering the 4am start is still the hardest part.',
    ],
    short:
      'A bakery chain with 34 shops will make its four-day week permanent in January, after a year-long trial. Staff work four days for full pay, and shops kept the same opening hours by overlapping shifts and hiring nine extra people. Sales were flat compared with the previous year, while the share of staff leaving fell from 38% to 21%, which the company says paid for most of the extra wages. The early shift remains the hardest to cover, and the owners warn the model may not transfer to businesses with thinner margins.',
    full: [
      'A bakery chain with 34 shops and 260 staff will make its four-day week permanent from January, after running it as a trial for a year. Everyone keeps full pay.',
      'Opening hours have not changed. The company rebuilt its rotas so that shifts overlap in the middle of the day, and hired nine extra staff to cover the gaps. Managers moved to a fixed day off each week rather than a floating one, after the first three months produced too many weeks with nobody senior on site.',
      'Sales across the year were flat compared with the previous twelve months. The clearer result was staffing: the share of employees leaving fell from 38% to 21%, and the company says the money saved on recruiting and training covered most of the extra wage bill.',
      'The 4am start remains the hardest shift to fill. Bakers on the early rota are paid a supplement and finish before lunch, but the company says it still relies on a small group of people who prefer those hours.',
      'Staff surveys pointed at the same thing twice: appointments, childcare and admin now happen on the day off rather than being squeezed into a working morning. Several bakers said the fourth day off mattered more to them than a pay rise would have.',
      'The owners are cautious about drawing wider conclusions. Their margins are steady and their demand is predictable, they said, which is not true of every business. \u201cIt worked here because we could reorganise the week,\u201d one of them said. \u201cWe did not just delete a day.\u201d',
    ],
  },
  {
    id: 'river-swimming',
    section: 'City',
    headline: 'River swimming returns to the city after forty years',
    gist: 'A 300-metre stretch of the river reopens to swimmers next June, after water tests met bathing standards three years in a row.',
    keyPoints: [
      'A 300-metre stretch reopens to swimmers next June.',
      'Water quality has met bathing standards for three straight years.',
      'Steps, a lifeguard post and a changing hut are being built.',
      'Swimming stays closed for two days after heavy rain.',
    ],
    short:
      'A 300-metre stretch of the river will reopen to swimmers next June, forty years after swimming was banned there. Water samples have met bathing standards for three consecutive years, following sewer repairs and stricter rules on industrial discharges. The city is building steps into the water, a lifeguard post staffed in July and August, and a small changing hut. Swimming will be closed for two days after heavy rain, when overflow pipes can still discharge, and a sign plus an app will show whether the water is open.',
    full: [
      'A 300-metre stretch of the river will reopen for swimming next June, forty years after the practice was banned because of pollution.',
      'The decision follows three consecutive years of water samples that met bathing standards through the summer months. Most of the improvement is credited to sewer repairs completed in 2021 and to tighter limits on discharges from two industrial sites upstream.',
      'Work starts in spring on steps down into the water, a lifeguard post that will be staffed in July and August, and a small changing hut with a drinking fountain. A rope line will separate swimmers from the navigation channel, and boats will be held to walking pace along the stretch.',
      'Heavy rain remains the limit. When storm overflows discharge, bacteria levels rise for a day or two, so swimming will close for 48 hours after any significant rainfall. A sign at the entrance and a free app will show whether the water is open, using the same sensor data.',
      'A swimming club that has campaigned for the reopening since 2009 will run supervised group swims twice a week. Its chair said the hardest part was not the water quality but convincing the city that a river could be treated as a public space again.',
      'Officials say the stretch is deliberately modest. If the first two summers go well, two further sections downstream could follow, though one of them would need a new footbridge to be usable at all.',
    ],
  },
];
