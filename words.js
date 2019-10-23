// 3rd element in each element refers to type of word: AD = adjective/adverb/particle, NM = masculine noun, NF = feminine noun, NN = neuter noun, V = verb
var words = [[['ἀγαθός','ἀγαθή','ἀγαθόν'],['good'],'AD'],
             [['ἄγαν'],['too much'],'AD'],
	     [['ἀγγέλλω', 'ἀγγελῶ', 'ἤγγειλα','ἠγγέλθην'],['announce'],'V'],
	     [['ἄγγελος'],['messenger'],'NM'],
	     [['ἀγνοέω','ἀγνοήσω','ἠγνόησα','ἠγνοήθην'],['not know'],'V'],
	     [['ἀγορά','ἀγορᾶς'],['marketplace','agora'],'NF'],
	     [['ἀγρός','ἀγροῦ'],['field','countryside'],'NM'],
	     [['ἄγω','ἄξω','ἤγαγον','ἤχθην'],['lead','bring'],'V'],
	     [['ἀγών','ἀγῶνος'],['contest','trial'],'NM'],
	     [['ἀδελφή','ἀδελφῆς'],['sister'],'NF'],
	     [['ἀδελφός','ἀδελφοῦ'],['brother'],'NM'],
	     [['ἀδικέω','ἀδικήσω', 'ἠδίκησα', 'ἠδικήθην'],['do wrong','injure'],'V'],
	     [['ἀδικία', 'ἀδικίας'],['wrong','wrong‐doing','injustice'],'NF'],
	     [['ἄδικος', 'ἄδικος', 'ἄδικον'], ['unjust', 'wrong'],'AD'],
	     [['ἀδύνατος', 'ἀδύνατον'], ['impossible', 'incapable'],'AD'],
	     [['ἀεί'], ['always'],'AD'],
	     [['Ἀθηναῖοι', 'Ἀθηναίων'],['Athenians'],'NM'],
	     [['Ἀθῆναι'],['Athens'],'NF'],
	     [['ἆθλον', 'ἄθλου'],['prize', 'reward'],'NN'],
	     [['ἁθροίζω'],['gather'],'V'],
	     [['ἀθυμέω'],['be despondent'],'V'],
	     [['αἰδέομαι'],['respect', 'revere'],'V'],
	     [['αἷμα'],['blood'],'NF'],
	     [['αἱρέω'],['take'],'V'],
	     [['αἱρέομαι'],['choose'],'V'],
	     [['αἴρω'],['raise', 'lift'],'V'],
	     [['αἰσθάνομαι'],['perceive', 'notice'],'V'],
	     [['αἰσχρός'],['disgraceful', 'ugly', 'shameful'],'AD'],
	     [['αἰσχύνω'],['shame'],'V'],
	     [['αἰσχύνομαι'],['be ashamed'],'V'],
	     [['αἰτέω'],['ask for','beg'],'V'],
	     [['αἰτία'],['cause', 'charge', 'blame'],'NF'],
	     [['αἰτιάομαι'],['blame', 'accuse'],'V']
	    ];

/*
αἴτιος	responsible
αἰχμάλωτος	prisoner (of war)
ἀκούω  + gen.	I hear, listen
ἄκρος	top (of)
ἀκτή	shore
ἄκων	unwilling
ἀληθής	true
ἅλις	enough
ἀλλά	but
ἀλλήλους	each other
ἄλλος	other, another
ἅμα	at the same time; together with
ἁμαρτάνω	I make a mistake, miss, fail
ἀμύνω	I ward off +acc, defend +dat
ἀμύνομαι	I resist
ἀμφί + acc	around, about
ἀμφότερος	both
ἄν	would, could indefinite
ἀνά + acc	up
ἀναγιγνώσκω	I read
ἀναγκάζω	I compel, force
ἀνάγκη	necessity
ἀνάγομαι	I put to sea
ἀναχωρέω	I retreat, withdraw
ἀνδρεία	courage, manliness
ἀνδρεῖος	brave, manly
ἄνεμος	wind
ἄνευ + gen	without
*/
