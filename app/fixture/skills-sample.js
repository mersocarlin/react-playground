const skillsFixture = [
  {
    id: 1,
    title: 'Account Analysis',
    body: 'Vovi jum me ik wugi pifaw hot em ejce dejwocgu metkepi gu ecucu ehgur.',
  },
  {
    id: 2,
    title: 'Account Reconciliation',
    body: 'Fejaod huja zuginje pe hozdoki ja fikiesa hol paopki obadowo losel upewontef ehoadeve fuwtu.',
  },
  {
    id: 3,
    title: 'Accounting Information Systems',
    body: 'Vahselvu wu rigaluz pu vonitgol eg gubo amu salsag bimojfew moslajov nizoj omniwozi vu aw opa.',
  },
  {
    id: 4,
    title: 'Accounting Software',
    body: 'Wuf bib liled fe vimzifa dobko uw gapgieb uc rumkar lesne azjujeg dejiahu na.',
  },
  {
    id: 5,
    title: 'Accounts Payable',
    body: 'Re nibiwog kug ka ral vun roj zu fir lal bimis wowadouj edier wimuw amgujhi ecu etuhonji tub.',
  },
  {
    id: 6,
    title: 'Accounting Processes',
    body: 'Ficpod sujuw kipiija ahjew megaz lokmov howwujho famij titrismu lam lisir po edoac.',
  },
  {
    id: 7,
    title: 'Accounting Principles',
    body: 'Ifizigo ne het inu beugu jelpeklop vipi dul salubovoh cover vapu pis uvwadpi ablac ikueghi iszu.',
  },
  {
    id: 8,
    title: 'Accounts Receivable',
    body: 'Noplipo fug zupiin dile otu ci pasovo as loas eplu dova tupjaffel disi zanir.',
  },
  {
    id: 9,
    title: 'Accuracy',
    body: 'Ehoza fanuig use acdu uvvul vofadoaz ni fa mitta peto vi rijdov ebotafkiw zemi.',
  },
  {
    id: 10,
    title: 'ADP',
    body: 'Jorbentaw lu le kokwevor afidi ebiroc jec dafcu enje koscebuv paetos co nuwilifa mu ag.',
  },
  {
    id: 11,
    title: 'Aging Reports',
    body: 'Bavemun uzo ot piszemte wa potih sepuwega ifa pumocges et to didebtad ewusalpen.',
  },
  {
    id: 12,
    title: 'Analysis',
    body: 'Nob lihupe wijelagug natfa hiagaza giom homkaz kaecoivi pum uzo jo voloca papidouza zothon sog pejcat kargi ecabij.',
  },
  {
    id: 13,
    title: 'Annual Reports',
    body: 'Bevukiwe ebez fudorir dumij epufocfe dosijo opoapuag pipocu uku alimarpi viz veevewi.',
  },
  {
    id: 14,
    title: 'Asset Management',
    body: 'Zi roce jijwin jiva olacur ehgoela wi hufivja ud omolozab kuhzu bof.',
  },
  {
    id: 15,
    title: 'Attention to Detail',
    body: 'Me vic onjabwum ronka wes bobeh ri isukudi sik nih puton abpuvhi zi ovucacgis kipugiga je.',
  },
  {
    id: 16,
    title: 'Audits',
    body: 'Roowe idfifac balep rivu zikum ho ezeluro dep etum ponvuf icgoh woguzon udenibul so itcidew ja got.',
  },
  {
    id: 17,
    title: 'Audit Schedules',
    body: 'Gu tegece ramfaoz vepfugen mopek zojo pile viken vanofa inriela zajbuppot wow bi biop var wucun.',
  },
  {
    id: 18,
    title: 'Balance Sheets',
    body: 'Ba kezducju uz ibhe geh di jokkappuw ridacpu tez jit gik poukim le.',
  },
  {
    id: 19,
    title: 'Banking',
    body: 'Katpa zeregnak sarode wuwi codfoguga esavidu rivnabom tis onu ho meub sa vufa guifu roruva.',
  },
  {
    id: 20,
    title: 'Bank Deposits',
    body: 'Pekvunu hih ohco vowjuz dos ro kaer sup iz lumilos vos di jamowu soje ka johduvji.',
  },
  {
    id: 21,
    title: 'Bank Reconciliations',
    body: 'Abtuk ekozisa hogwiabe daftab deccas kimijha rag wesizzor pev nu po kamdeg wi.',
  },
  {
    id: 22,
    title: 'Bill Payment',
    body: 'Ra tahiuf ce sac ake sabi kinlip owsacip wulnanu mevha gedhide pic zewdaskov wiw ufiwo vo dafgebhaf vipmues.',
  },
  {
    id: 23,
    title: 'Bookkeeping',
    body: 'Apbule ho ujwirjis emjopvu cifihju wunhiev fuabwop su fus uzaul ojiviim li jidsi amriri pisijvo waprit powmuma cawgihef.',
  },
  {
    id: 24,
    title: 'Budgets',
    body: 'Cut ka nonsaco vaconu guksem zupo jotelra sa fi ric ari dusjuke vuz zop hutwi niala.',
  },
  {
    id: 25,
    title: 'Business Awareness',
    body: 'Elo opo gadohli ne duiraki ifgutra vanow wekso gograg magza gumtavop ituep ab sag ga ej je.',
  },
  {
    id: 26,
    title: 'Cash Receipts',
    body: 'Peor ew diunwup id woge emtozet hemuzo ej roub efigiv canguh luhci ehuh cofac zeuzon ulu ril katfebuke.',
  },
  {
    id: 27,
    title: 'Certified Public Accountant (CPA)',
    body: 'Pakonew bi as fuboape to lun ribapwe nohigip ufodow re no ojekete dut acober zotinneb ho.',
  },
  {
    id: 28,
    title: 'Chart of Accounts',
    body: 'Naon coro tub hagapo huode po em sunam su mu dog eniboki he ik tiktuvo jushaf zuecko.',
  },
  {
    id: 29,
    title: 'Check Runs',
    body: 'Lumleguv ga buvutaco dero sofa va talir dijawod abo buhimhe se hutmodagi liiweid cam sa bim mobgihnin.',
  },
  {
    id: 30,
    title: 'Collections',
    body: 'Ka awajaz awmo gilwap az af wuho doz hudiheda pu kerduwke gomse rujwe kehirtah ekop ba ponutefe.',
  },
  {
    id: 31,
    title: 'Commitment',
    body: 'Tokaro henwow paptoak jivab kep naaha kuodiahu voz dofucib fe defij ovufo rogeb.',
  },
  {
    id: 32,
    title: 'Compliance',
    body: 'Ota occodrec suog zu bo owufupes ricabof agupvu ib nimeljaz pal etosop nulzaawi.',
  },
  {
    id: 33,
    title: 'Corporate Reports',
    body: 'Na fetpo voemvev tizo gen pajsolu ke vacgol fojup dagzepba esi okdowum so.',
  },
  {
    id: 34,
    title: 'Corporate Tax',
    body: 'Putder ahi jotzo rivpodko rigiczi luluz toboz eda tewules fi fonci pim za gohceg.',
  },
  {
    id: 35,
    title: 'Cost Accounting',
    body: 'Zuc zacodma ug ruje okrospa wuz ju ebogah ovconi heephol urdethed imuilriz kum ranu ko.',
  },
  {
    id: 36,
    title: 'Credit Management',
    body: 'Foowatu egajanat hisukov la fifam ko larsifono go wiwuvum duoh zen riduec su.',
  },
  {
    id: 37,
    title: 'Credits',
    body: 'Hizecure ce jakhu waleole cu wi sioh coseut vofvenhuw tiw cusew zahooni repez.',
  },
  {
    id: 38,
    title: 'Crystal Reports',
    body: 'Umga wu wilfofgub ma ja da dih fuf ijomopdon du fotobas few ropet uri hihkalur ubkag fi da.',
  },
  {
    id: 39,
    title: 'Debt Management',
    body: 'Dekgapaz waow ka dafgagef tutez wuru ic kitzap vasca ba pagido wajuku eken mukkeg nis noeteho.',
  },
  {
    id: 40,
    title: 'Depreciation',
    body: 'Acemi lufos bulsa jaj tizi erunum pakumo dufu peson zih fofiz ac luh dulu pocinoj.',
  },
  {
    id: 41,
    title: 'Detail Orientation',
    body: 'Nawac ipvan se vaili ujonu bajuktic imatadbuc gahobrat uga evoabzal guham itetovkan.',
  },
  {
    id: 42,
    title: 'Federal Tax Law',
    body: 'Ce oga ho il mije nezkeusa wazohwi hiut tifdovkac emgim ducovbo sulufake afobo.',
  },
  {
    id: 43,
    title: 'Finance',
    body: 'Kuhsofomu liwvicur se vo onube odromid ko efa um evisaw renaf fupbo fac ki gabufabin opiela tujo gitzapi.',
  },
  {
    id: 44,
    title: 'Financial Analysis',
    body: 'Sovkik ko vabve aghumohu ov sisiwsa poc dazmiwu maz ta du zocce befoz azvi bazigow ti octuum.',
  },
  {
    id: 45,
    title: 'Financial Reporting',
    body: 'Haufme vi cugga rah juf tasofu iluedanaw ob vih zokripo miih fific esi ge sik wel.',
  },
  {
    id: 46,
    title: 'Financial Software',
    body: 'Bagim esa soiw riwis biwa kafu muwuhu ugaobser gowsiek fi zan ficzak vib fepojjol.',
  },
  {
    id: 47,
    title: 'Financial Statements',
    body: 'Egpaatu zuco ovuva su wepi mih jan lafogojop kem noshu wik ihidoc.',
  },
  {
    id: 48,
    title: 'Financial Statement Analysis',
    body: 'Te jamoj seh pe ihu mu bo rarmo vu canapa balca remsafpod.',
  },
  {
    id: 49,
    title: 'Fixed Assets',
    body: 'Dam movaheuc metab viv bozso ad ubareih camun got hodzo wo otuz budbifkot vi.',
  },
  {
    id: 50,
    title: 'Chapters',
    body: 'Naeli tatomeru ulihuem re da gijmarber egujopiz va picvu peg et vofko kubabued paho fit ijazuvu letjabgu.',
  },
  {
    id: 51,
    title: 'Chapters',
    body: 'Tolcisvop calozop igciv sen azab naliwih rop pejam gusid ab zure moh kuafa zutsiv pis ultodrij idlid.',
  },
  {
    id: 52,
    title: 'Forecasts',
    body: 'Jaereih cobemagiz faste sate patomjef ovifuzdik seppupsuc lowmetoj bikzi ohibu fat ju wuv las hospa tibler.',
  },
  {
    id: 53,
    title: 'Forecasting',
    body: 'Ohji igvi tazibnek efo pobri ka ofvuduv fidhec kep muvud omma aciidusuf masedze wipwim dof rivbadces nod neiduf.',
  },
  {
    id: 54,
    title: 'Full Charge Bookkeeping',
    body: 'Idukih ohwim ovbefmo cunpefmug ek gobap gutupsu siraj gapavmo poptuma ago dew.',
  },
  {
    id: 55,
    title: 'Full Cycle Month-End Close',
    body: 'Ipsamub beh ki okeime fujuluc cedtog umu mo nadizuz huj goglonow ko.',
  },
  {
    id: 56,
    title: 'Full Cycle Year-end Close',
    body: 'Rosaput imu medohac ju pedcaz aluta fi jafif luhud umka felcu ji toddelon.',
  },
  {
    id: 57,
    title: 'GAAP',
    body: 'Fam udenofut namo uj iseja amruozo fozut nizrugik jimow duj tidizige do.',
  },
  {
    id: 58,
    title: 'General Ledger',
    body: 'Kazbop gag aco bujo eb er of libozru hi uwasetlim zoh saepute lav zov zohtimisa wot fehliz.',
  },
  {
    id: 59,
    title: 'Great Plains Accounting',
    body: 'El mul ufewaeh ivibaflom raf are lile ake votepozu okohi si egineov esuberheb ipezepi tipumime rivur.',
  },
  {
    id: 60,
    title: 'Great Plains Dynamics',
    body: 'Gobeko wamew tamze goc saivoiz rolok po eseelemek pag gauza nemo pitpigiv huk bohmumed sajmopuw biuzifeh fepezgo gehduprat.',
  },
  {
    id: 61,
    title: 'Income Tax',
    body: 'Pe wate rur zip junub ruti okpejjo ihihu sucdoca hu jidnulupo zisrap nibwel ri hotus ve.',
  },
  {
    id: 62,
    title: 'Interest Calculations',
    body: 'Walgepu cipca aj pim tog ergu sesru ocobedoz cepiboju bofosuowo sanaje otcegfo kuffesvi bazju dasiri.',
  },
  {
    id: 63,
    title: 'Invoices',
    body: 'Timrozab deoc du zo no ta ze mogvewoh uh wig duwifjop gufcojzeb nipowemeb.',
  },
  {
    id: 64,
    title: 'Job Cost Reports',
    body: 'Woku zelojap re cato noze ivejajah dime ufodonup rat bofloal uru bameamo.',
  },
  {
    id: 65,
    title: 'Journal Entry Preparation/Posting',
    body: 'Ifuse bigrael dedumvi je lelakus pefkuc femo wemeb ra vup piuklo nan.',
  },
  {
    id: 66,
    title: 'Mathematical',
    body: 'Besjecu odzu azlij vid afi gud bizutno fek gode jejbe nap azlaw lotbed.',
  },
  {
    id: 67,
    title: 'Monthly Closes',
    body: 'Soc omjukvi sigav so osmegfom ojhe oditot vad bek iw haboh zithad ajotieho.',
  },
  {
    id: 68,
    title: 'Motivation',
    body: 'Lifnihruk vihmago hagavi pamboago atvijca voc londib gaoz inteaho hir sit jafe nik taksuco ripufe kozem daga.',
  },
  {
    id: 69,
    title: 'MS Access',
    body: 'Nogvuak tiw jijeg li gatacon optaujo iwi miogeji puzon om honuzalat tin weujumoj resis an opzuraz.',
  },
  {
    id: 70,
    title: 'MS Excel',
    body: 'Muc tuvfid heh itvem kocug tuzon por iranese odwawig lufezme dojisud eb ti alfa otejomdu id.',
  },
  {
    id: 71,
    title: 'MS Word',
    body: 'Ishale sivjom ke ku fukitces jo melaso jarepun baapefu oceufe ku raal tubob.',
  },
  {
    id: 72,
    title: 'Numerical Competence',
    body: 'Kogu tidtel hef ezi ma komwe hanpit do tu ub vasnid me gedmuzik zapwuom.',
  },
  {
    id: 73,
    title: 'Oracle',
    body: 'Imnapic pavauju dohi ratza tahej ecevegjav fupok rev orfolo ep ej lug dofeput fik pin tize.',
  },
  {
    id: 74,
    title: 'Paychex',
    body: 'Iluege ermuje dih minul gijec usriho vinzo fugru ta pooczip sinar sifi otgugdu luligiwi affuzip ba mik nu.',
  },
  {
    id: 75,
    title: 'Payroll',
    body: 'Ikmobral cemme ge mool lulesga guv up areirupo uvu ukhosa rawrofan wi oto fez vutaftez mi.',
  },
  {
    id: 76,
    title: 'Payroll Liabilities',
    body: 'Ipa jab tamaw cislallu fovveko amuba ut cafgen abatihsi zojupero jok foh galej.',
  },
  {
    id: 77,
    title: 'Payroll Taxes',
    body: 'Nisfuuge judul goczegen piojeij noso fiaj esfucub hurawdo judicdo polrirur eza uhiojvew jupsiela fewhusage zenhiztiz aw oc zihhalhez.',
  },
  {
    id: 78,
    title: 'Peachtree',
    body: 'Seh co mijicu se af va op tirzuv putu tasfackoc eruh pu go mesesca orcedu.',
  },
  {
    id: 79,
    title: 'Personal Tax',
    body: 'Low wuluzenuj fanal uzaovujaw ogoibinuf eti dilrod ewapak vo zuati utfaluhi wasgit me ugevri fohehe sanugi kufcura.',
  },
  {
    id: 80,
    title: 'Petty Cash',
    body: 'Popev bi laviso ostuw fiplac tu de sof oktulof le tomje epjabi gekes ze comizebu zahninug kizeohu bentajep.',
  },
  {
    id: 81,
    title: 'Platinum',
    body: 'Sinec satato ki ta hoh nekbare luroemi dijedtuc ifien kizsube fuc furjioz fupoik roddiwo vuafti wajazves varaf ipabadli.',
  },
  {
    id: 82,
    title: 'Prepaid Income/Expenses',
    body: 'Ono cacjaanu ruvobjo ovfi eku hop nebroz urife cadwo ti filrajra agu ceaduda nesijulu.',
  },
  {
    id: 83,
    title: 'Profit and Loss',
    body: 'Goseg jew zuebaela ijatut hefgohav havowit kovu utkuufi dumgij canfir eneogiemu pona pucape ubu ofu gildom no zucnu.',
  },
  {
    id: 84,
    title: 'Professionalism',
    body: 'Bod efzapib wugmuze cizij ovo ib ni vah anajaf ola roji sescula fivtuvem laz ra ik.',
  },
  {
    id: 85,
    title: 'Reconciliation',
    body: 'Ga indu hattujod ega ob mutu siw vewi maiphab pog nimbun pujasoke nunsekko sedid bo.',
  },
  {
    id: 86,
    title: 'Regulatory Filings',
    body: 'Ubosa segjit koim sopnarbip moeji tafuh tulunhaj victi ve artut owu edmug ok rowev faci.',
  },
  {
    id: 87,
    title: 'Reporting',
    body: 'Kuwrufar ku sa atila dopmihkuj jufaom kapkur haid cam jom oj damapmi woc buf ake gida fic zemerpug.',
  },
  {
    id: 88,
    title: 'Revenue Projections',
    body: 'Geziofu ida at ef av mebog povoc eni ozitula fecarda fekal usfaj.',
  },
  {
    id: 89,
    title: 'Revenue Recognition',
    body: 'Vur mapu lola si do egvefmal adarilmow peizadi doneuhi tu awto vijse.',
  },
  {
    id: 90,
    title: 'Sales Receipts',
    body: 'Puompa gubit vofru lama fiten wuzif jouji zok gop ojtedcim ric vunho sih fugec nohwentok poc.',
  },
  {
    id: 91,
    title: 'SAP',
    body: 'Litvubba ar tuhalo livugel mo luvsaju lehracso bugok zoder fewrow pawbed heslu ig vimasmu paajfo bevginu wubumuj nip.',
  },
  {
    id: 92,
    title: 'Special Projects',
    body: 'Si fabu nagi vag jihucik enuraz zutsugmu bu da otu dawre fu mip fihwi al fevpo ucfib eniwab.',
  },
  {
    id: 93,
    title: 'State Tax Law',
    body: 'Gicga loze geene pi liha kiwfutnoj uhogij ikpetic fub uwupucu navuhsic iho firip.',
  },
  {
    id: 94,
    title: 'Tax Analysis',
    body: 'Tejwuvuzo hafawgor ecu kod je pu mafa feh lilu wub pev derenoso fukfaz ufhuog polcu oblih.',
  },
  {
    id: 95,
    title: 'Tax Compliance',
    body: 'Hildo fus zuzonrow uzuek ti cati hiaf bezof puz vidin tiru sulut cedubmi cu.',
  },
  {
    id: 96,
    title: 'Tax Filing',
    body: 'Nag fafzam irnad jakom wufi wige ruknacog ezmucdu tunomus pum atseh iwiwo.',
  },
  {
    id: 97,
    title: 'Tax Law',
    body: 'Jicwas tuihcu vutewlem pamkuw jowfi ihzulopa kez ecta hu balmo wo lo edwibbi.',
  },
  {
    id: 98,
    title: 'Tax Liabilities',
    body: 'Kuzsem vag cah ku hupnaz kiril cekukuho sancod vi cimwehi bafhuw seov wogufvi ba tomabguj ra zibupes.',
  },
  {
    id: 99,
    title: 'Tax Reporting',
    body: 'Asvo ocno es uviji mijejol kit rudi miptocug kizlage sikvezgu mebitu zapwimaj badedise buse jirwipwid zarabu.',
  },
  {
    id: 100,
    title: 'Tax Returns',
    body: 'Tiscu toplerma kofunsup to ezik damziugo puleb wew toztisile suvetfa jukbezko pi zasuwi amnaiv.',
  },
  {
    id: 101,
    title: 'Tax Software',
    body: 'Wokev egowo hoor jeeke vi pirpeh degeiw febluke postadzo gi ozujovu ufdoj teparfil cu.',
  },
  {
    id: 102,
    title: 'Technology',
    body: 'Mimaweb papzitvu piw aj cucocal afebies zamu palafbip rucziemu huw zuw olhe fe comsorceg zadomi vukritom id kuctum.',
  },
  {
    id: 103,
    title: 'Training',
    body: 'Vor uwlofwi jewu iwed wug peggo ebfatfof urhutole vowi etuliric eboja zuvmiezo.',
  },
  {
    id: 104,
    title: 'Trial Balance',
    body: 'Witreh hedhorad bakeg zibazoz piwad dak bucuk dajtojpod efu roebici pil wejwat se akjeno negli wek tiriva mu.',
  },
  {
    id: 105,
    title: 'Vouchers',
    body: 'Ufugaup pe du leksu gije geabeehu divjujaj periso ta zirigi zefage kip vatfin ideborit dat.',
  },
  {
    id: 106,
    title: 'Writing',
    body: 'Sozobu me kehub ninuwe fuw kon evzo gicakul huob ce so ewaluk tuzam ereculafo voj dog.',
  },
  {
    id: 107,
    title: 'Written Communication',
    body: 'Ji nifer ugi velkiru tupi zaf fo cueragar za vopfitir gurose mugaj cep adhogot na fupe pianiwak.',
  },
  {
    id: 108,
    title: 'Year End Reporting',
    body: 'Giidaza mab malogul ceh mecef aznikgaj doolobih wa fabdasido azsajwu gen reh.',
  },
];

export default skillsFixture;
