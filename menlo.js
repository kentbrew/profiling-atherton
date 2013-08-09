// data massaged from the Menlo Park police log archive, here:
// http://www.menloparkpolice.org/crime/media_archive.html
// any mistakes are mine, please let me know!

var menloData = [ {
  "time": "21:02",
  "event": "Mental Evaluation",
  "id": "13-2057/130630081",
  "officer": "Officer Venzon",
  "location": "1100 blk Merrill St, Menlo Park.",
  "disposition": "Transported."
}, {
  "time": "09:43",
  "event": "Drug Registration",
  "id": "13-2058/130709026",
  "officer": "Records",
  "location": "700 blk Laurel St, Menlo Park.",
  "narrative": "Case take for drug resgistrant.",
  "disposition": "Report Taken."
}, {
  "time": "14:21",
  "event": "Found Property",
  "id": "13-2059/130708089",
  "officer": "CSO Sepulveda",
  "location": "700 blk Laurel St, Menlo Park.",
  "narrative": "City employee turned in found cell phone.",
  "disposition": "Report Taken."
}, {
  "time": "09:30",
  "event": "Abandoned Vehicle",
  "id": "13-2060/130709024",
  "officer": "CSO Mazon",
  "location": "3700 blk Marsh Rd, Menlo Park.",
  "narrative": "bandoned vehicle towed.",
  "disposition": "Report Taken."
}, {
  "time": "14:49",
  "event": "Hit & Run w/Property Damage",
  "id": "13-2061/130709071",
  "officer": "Officer Russell",
  "location": "Willow Rd/Newbridge St, Menlo Park.",
  "narrative": "Auto vs bike non-injury accident and the driver of the vehicle fled without stopping.",
  "disposition": "Report Taken."
}, {
  "time": "14:36",
  "event": "Possession of Paraphernalia",
  "id": "13-2062/130709070",
  "officer": "Detective Douglas",
  "location": "Adams Dr /University Av, Menlo Park.",
  "narrative": "Subject detained for 11364 HS bus was then released at the scene 849b PC.",
  "disposition": "Report Taken."
}, {
  "time": "15:18",
  "event": "Warrant Arrest",
  "id": "13-2063/130709071",
  "officer": "Officer Phu",
  "location": "Bayfront Ex/Willow Rd, Menlo Park.",
  "subject": [ {
    "name": "Gonzalez-Castro, Juan DeDios",
    "dob": "090654",
    "narrative": "was cited on warrants: 1 $7500 MPPD 14601 2 $10,000 SMSO 14601 VC"
  } ],
  "disposition": "Arrest."
}, {
  "time": "15:41",
  "event": "Burglary",
  "id": "13-2064/130709078",
  "officer": "Officer Lacy",
  "location": "00 blk Coleman Pl, Menlo Park.",
  "narrative": "Victim reports unknown forced entry in laundry room and broke into coin operated laundry.",
  "disposition": "Report Taken."
}, {
  "time": "16:04",
  "event": "Info Case",
  "id": "13-2065/130709082",
  "officer": "Sgt Cowans",
  "location": "Info case taken for narcotics investigation.",
  "disposition": "Report Taken."
}, {
  "time": "16:49",
  "event": "Info Case",
  "id": "13-2066/130709093",
  "officer": "Officer Douglas",
  "location": "Info case taken for narcotics investigation.",
  "disposition": "Report Taken."
}, {
  "time": "19:11",
  "event": "Vehicle Accident- Injury",
  "id": "13-2067/130709113",
  "officer": "Officer Mendoza",
  "location": "Laurel St/Ravenswood Av, Menlo Park.",
  "narrative": "Report taken for vehicle vs bike collision.",
  "disposition": "Report Taken."
}, {
  "time": "22:23",
  "event": "Under Influence of Controlled Substance",
  "id": "13-2068/130709129",
  "officer": "Officer Ordone",
  "location": "1200 blk Hamilton Ct, Menlo Park.",
  "subject": [ {
    "name": "GarciaOrtiz, Carlos",
    "dob": "011976",
    "oo": "Redwood City",
    "narrative": "(HM O/OF RWC) was arrested and cited/released for 11550(a) H&S." 
  } ],
  "disposition": "Citation Issued."
}, {
  "time": "01:04",
  "event": "Suspicious Vehicle",
  "id": "13-2069/130710007",
  "officer": "Officer Venzon",
  "location": "Laurel St/Burgess Dr, Menlo Park.",
  "narrative": "Report taken for contributing to delinquency of a minor.",
  "disposition": "Report Taken."
}, {
  "time": "00:35",
  "event": "Drug Activity",
  "id": "13-2070/130710005",
  "officer": "Officer Neumann",
  "location": "Waverley St/Willow Rd, Menlo Park.",
  "narrative": "Juvenile booked hillcrest for 11350 H&S, 11364 H&S, and probation violation.",
  "disposition": "Arrest."
}, {
  "time": "07:17",
  "event": "Warrant Arrest",
  "id": "13-2071/130710015",
  "officer": "Officer Phu",
  "location": "Willow Rd/Obrien Dr, Menlo Park.",
  "subject": [ {
    "name": "Montalban, Constantine",
    "dob": "102066",
    "narrative": "was cited and released on $3000 SM Co SO warrant for 485 PC."
  } ],
  "disposition": "Citation Issued."
}, {
  "time": "07:36",
  "event": "Hit and Run with Injury",
  "id": "13-2072/130710017",
  "officer": "Officer Ferguson",
  "location": "900 blk Willow Rd, Menlo Park.",
  "disposition": "Report Taken."
}, {
  "time": "07:47",
  "event": "Vehicle Accident- Injury",
  "id": "13-2073/130710019",
  "officer": "Officer Ferguson",
  "location": "400 blk Bay Rd, Menlo Park.",
  "narrative": "Report taken for 3 vehicle collision with injury.",
  "disposition": "Report Taken."
}, {
  "time": "10:06",
  "event": "Possession of Controlled Substance",
  "id": "13-2074/130710033",
  "officer": "Detective Douglas",
  "location": "100 blk Hamilton Av, Menlo Park.",
  "subject": [ {
    "name": "Rushing, Danny",
    "dob": "122355",
    "oo": "Menlo Park",
    "narrative": "BMA of Menlo Park was booked CJ for 11350(a) HS, 11364.1(a) HS."
  } ],
  "disposition": "Arrest."
}, {
  "time": "10:17",
  "event": "Hit and Run w/Prop Damage",
  "id": "13-2075/130710035",
  "officer": "Officer Lacy",
  "location": "1000 blk University Dr, Menlo Park.",
  "narrative": "Victim reports vehicle hit their parked vehicle and took off. A witness provide suspect info.",
  "disposition": "Report Taken."
}, {
  "time": "10:38",
  "event": "Recovered Embezzled Vehicle",
  "id": "13-2076/130710038",
  "officer": "Detective Douglas",
  "location": "1300 blk Hollyburne Av, Menlo Park.",
  "narrative": "Officer located vehicle that had been reported as embezzled to the Alameda Co Sheriff�s Office in June 2012.",
  "subject": [ {
    "name": "Richards, Latonya D",
    "dob": "061167",
    "oo": "Mountain View",
    "narrative": "BFA of Mountain View was booked CJ for 10855 VC."
  } ],
  "disposition": "Arrest."
}, {
  "time": "10:54",
  "event": "Information",
  "id": "13-2077/130710041",
  "officer": "Officer Russell",
  "location": "1300 blk Henderson Av, Menlo Park.",
  "narrative": "Info case taken for suspicious circumstances.",
  "disposition": "Report Taken."
}, {
  "time": "12:34",
  "event": "Stored Vehicle",
  "id": "13-2078/130710060",
  "officer": "Officer Phu",
  "location": "1300 blk Henderson Av, Menlo Park.",
  "narrative": "Vehicle towed due to expired registration.",
  "disposition": "Report Taken."
}, {
  "time": "13:38",
  "event": "Vehicle Accident- Injury",
  "id": "13-2079/130710068",
  "officer": "Officer Trask",
  "location": "Creek Dr/El Camino Real, Menlo Park.",
  "narrative": "Report taken for collision involving bicyclist vs vehicle.",
  "disposition": "Report Taken."
}, {
  "time": "14:00",
  "event": "Vehicle Accident - No Injury",
  "id": "13-2080/130710070",
  "officer": "Officer Ferguson",
  "location": "Willow Rd/Middlefield Rd, Menlo Park.",
  "disposition": "Report Taken."
}, {
  "time": "14:25",
  "event": "Hit and Run w/Prop Damage",
  "id": "13-2081/130710074",
  "officer": "CSO Sepulveda",
  "location": "1300 blk Delfino Wy, Menlo Park.",
  "narrative": "Victim reports unknown suspect hit parked vehicle.",
  "disposition": "Report Taken."
}, {
  "time": "14:56",
  "event": "Warrant Arrest",
  "id": "13-2082/130710078",
  "officer": "Officer Phu",
  "location": "Willow Rd/Newbridge St, Menlo Park.",
  "subject": [ {
    "name": "Philyaw, Thaddeus Edward",
    "dob": "100874",
    "narrative": "BMA cited and released on $2500.00 MPPD warrant for 11357(B) HS."
  } ],
  "disposition": "Citation Issued."
}, {
  "time": "15:47",
  "event": "Attempt Residential Burglary",
  "id": "13-2083/130710085",
  "officer": "Officer Ferguson",
  "location": "1000 blk Woodland Av, Menlo Park.",
  "narrative": "Victim reported coming home and observing 3 suspects in the yard who fled upon arrival. It was determined that the subjects were trying to gain access to a rear door of the residence. Suspects were 3 males all in black clothing.",
  "disposition": "Report Taken."
}, {
  "time": "17:49",
  "event": "Threats",
  "id": "13-2084/130710097",
  "officer": "Officer Mackdanz",
  "location": "00 blk Sunset Ct, Menlo Park.",
  "narrative": "Report taken for threats received via email.",
  "disposition": "Report Taken."
}, {
  "time": "18:22",
  "event": "Mental Evaluation",
  "id": "13-2085/130710100",
  "officer": "Officer Ordone",
  "location": "800 blk Pierce Rd, Menlo Park.",
  "disposition": "Transported."
}, {
  "time": "19:42",
  "event": "Warrant Arrest",
  "id": "13-2086/130710109",
  "officer": "Officer Ordone",
  "location": "00 blk Willow Pl, Menlo Park.",
  "subject": [ {
    "name": "Khan, Donish",
    "dob": "120584", 
    "oo": "Tracy",
    "narrative": "was arrested and booked into County Jail on a $25,000 warrant for 470 PC o/o Orange Co SO."
  } ],
  "disposition": "Arrest."
}, {
  "time": "19:43",
  "event": "Suspended or Revoked License",
  "id": "13-2087/130710110",
  "officer": "Officer Schuler",
  "location": "Hamilton Av/Plumas Av, Menlo Park.",
  "subject": [ {
    "name": "Jackson, Lawrence",
    "dob": "092390", 
    "oo": "Menlo Park",
    "narrative": "was cited and released for 14601 VC. Vehicle towed by BJ Towing for 30 day impound auth 14602.6vc. Vehicle description: 1988 Black Jeep Cherokee."
  } ],
  "disposition": "Arrest."
}, {
  "time": "20:30",
  "event": "Probation Arrest or Assist",
  "id": "13-2088/130710116",
  "officer": "Sgt Soares",
  "location": "Ivy Dr/Almanor Av, Menlo Park.",
  "subject": [ {
    "name": "Johnson, Biven",
    "dob": "012491",
    "oo": "Menlo Park",
    "narrative": "BMA of MP arrested and booked CJ for probation violation."
  } ],
  "disposition": "Arrest."
}, {
  "time": "21:36",
  "event": "Suspended or Revoked License",
  "id": "13-2089/130710123",
  "officer": "Officer Mendoza",
  "location": "500 blk Willow Rd, Menlo Park.",
  "subject": [ {
    "name": "Gromowsky, Richard",
    "dob": "092768",
    "oo": "Newark",
    "narrative": "male of Newark cited/released for 14601vc. Vehicle towed by Specialty Tow for 30 day impound auth 14602.6vc. Vehicle description: 1999 Brown Ford Taurus 4D."
  } ],
  "disposition": "Arrest."
}, {
  "time": "22:55",
  "event": "Drug Activity",
  "id": "13-2090/130710127",
  "officer": "Sgt Soares",
  "location": "Willow RD/101, Menlo Park.",
  "subject": [ {
    "name": "HernandezMarquez, Victor",
    "dob": "010889",
    "oo": "East Palo Alto",
    "narrative": "HMA of EPA arrested and cited for 11357b hs."
  } ],
  "disposition": "Citation Issued."
}, {
  "time": "00:35",
  "event": "Burglary",
  "id": "13-2091/130711003",
  "officer": "Officer Mackdanz",
  "location": "700 block El Camino Real, Menlo Park.",
  "subject": [ {
    "name": "Perez, Max",
    "dob": "082257", 
    "oo": "San Jose",
    "narrative": "was arrested and booked County Jail for 460(b) PC, 11364.1(a) HS and 4140 BP."
  } ],
  "disposition": "Arrest."
}, {
  "time": "09:02",
  "event": "Vandalism",
  "id": "13-2092/130711025",
  "officer": "Officer Lacy",
  "location": "800 block Willow Rd, Menlo Park",
  "narrative": "Graffiti was spray painted on 2 vehicles by unknown(s).",
  "disposition": "Report Taken"
}, {
  "time": "09:15",
  "event": "Lost Property",
  "id": "13-2093/130711026",
  "officer": "Officer Solorzano",
  "location": "800 block Willow Rd, Menlo Park",
  "narrative": "Case taken for a lost cell phone",
  "disposition": "Report Taken"
}, {
  "time": "09:48",
  "event": "Petty Theft",
  "id": "13-2094/130711033",
  "officer": "Officer Solorzano",
  "location": "500 block Pope St, Menlo Park",
  "narrative": "A pair of sunglasses was taken from an unlocked vehicle.",
  "disposition": "Report Taken"
}, {
  "time": "10:38",
  "event": "72 Hour Hold",
  "id": "13-2095/130711030",
  "officer": "Officer Solorzano",
  "location": "1000 block Fremont St, Menlo Park",
  "narrative": "A subject was transported to hospital on a 72 hour hold.",
  "disposition": "Report taken"
}, {
  "time": "10:46",
  "event": "Found Property",
  "id": "13-2096/130711045",
  "officer": "CSO Sepulveda",
  "location": "800 block Santa Cruz, Menlo Park",
  "narrative": "A purse was found and turned into police.",
  "disposition": "Report Taken"
}, {
  "time": "13:14",
  "event": "Suspended Drivers License",
  "id": "13-2097/130711064",
  "officer": "Officer Russell",
  "location": "Hamilton Av/Modoc Av, Menlo Park",
  "subject": [ {
    "name": "Ross, Shannon",
    "dob": "061389", 
    "oo": "San Jose",
    "narrative": "was cited and released for 14601.2(a) VC. The vehicle was towed."
  } ],
  "disposition": "Citation Issued."
}, {
  "time": "15:45",
  "event": "Information Case",
  "id": "13-2098/130709100",
  "officer": "Detective Douglas",
  "location": "MPPD",
  "narrative": "Case taken for an ongoing narcotics investigation",
  "disposition": "Report Taken"
}, {
  "time": "16:24",
  "event": "Suspended Drivers License",
  "id": "13-2099/130711081",
  "officer": "Officer Trask",
  "location": "Ravenswood Av/Noel Dr, Menlo Park",
  "subject": [ {
    "name": "Mapa, Hilate",
    "dob": "041083", 
    "oo": "Sunnyvale",
    "narrative": "was cited and released for 14601.1(a) VC. The vehicle was towed/"
  } ],
  "disposition": "Citation Issued"
}, {
  "time": "16:25",
  "event": "Minor Injury Accident",
  "id": "13-2100/130711082",
  "officer": "CSO Mazon",
  "location": "Marsh Rd/Hwy 101. Menlo Park",
  "narrative": "2 vehicle accident with minor injury.",
  "disposition": "Report Taken"
}, {
  "time": "18:13",
  "event": "Non Injury Accident",
  "id": "13-2101/130711093",
  "officer": "CSO Mazon",
  "location": "Santa Cruz Av/Sharon Rd, Menlo Park",
  "disposition": "Report Taken"
}, {
  "time": "18:44",
  "event": "72 Hour Hold",
  "id": "13-2102/130703108",
  "officer": "Officer Mackdanz",
  "location": "100 block El Camino Real, Menlo Park",
  "narrative": "A subject was transported to hospital on a 72 hour hold.",
  "disposition": "Report Taken"
}, {
  "time": "19:21",
  "event": "Information Case",
  "id": "13-2103/130711098",
  "officer": "Officer Schuler",
  "location": "MPPD",
  "narrative": "Case taken for an ongoing narcotics investigation",
  "disposition": "Report Taken"
}, {
  "time": "22:03",
  "event": "Runaway Juvenile",
  "id": "13-2104/130711106",
  "officer": "Officer Ordone",
  "location": "1400 block Modoc Av, Menlo Park",
  "narrative": "A juvenile was reported as a missing runaway",
  "disposition": "Report Taken"
}, {
  "time": "13:14",
  "event": "Non Injury Accident",
  "id": "13-2105/130711064",
  "officer": "Officer Russell",
  "location": "Hamilton Av/Modoc Av, Menlo Park",
  "disposition": "Report taken."
}, {
  "time": "15:14",
  "event": "Non Injury Accident",
  "id": "13-2106/130712055",
  "officer": "Officer Wilson",
  "location": "1300 block Henderson Av, Menlo Park",
  "disposition": "Report taken."
}, {
  "time": "16:08",
  "event": "Canceled Case",
  "id": "13-2107/130712062"
}, {
  "time": "15:27",
  "event": "Fraud",
  "id": "13-2108/130712058",
  "officer": "Officer Russell",
  "location": "10 block Hermosa Pl, Menlo Park",
  "narrative": "An unknown suspect fraudulently routed the victim�s paychecks into a different bank account.",
  "disposition": "Report taken."
}, {
  "time": "17:53",
  "event": "Hit and Run w/Injury",
  "id": "13-2109/130712069",
  "officer": "Officer Wilson",
  "location": "El Camino Real/Santa Cruz Av, Menlo Park",
  "subject": [ {
    "name": "Ford, Michael",
    "dob": "072875", 
    "oo": "Palo Alto",
    "narrative": "was arrested and booked into County Jail for 20001 VC and 23153(a) VC."
  } ],
  "disposition": "Arrest."
}, {
  "time": "21:51",
  "event": "Drunk in Public",
  "id": "13-2110/130712090",
  "officer": "Officer Luevano",
  "location": "1300 block Willow Rd, Menlo Park",
  "subject": [ {
    "name": "Clemons,Eric",
    "dob": "071859", 
    "oo": "Menlo Park",
    "narrative": "was arrested and booked into County Jail for 647(f) PC, 148(a)(1) PC, violation of probation, and a $588 warrant for 40508(a) VC o/o San Francisco PD."
  } ],
  "disposition": "Arrest."
}, {
  "time": "21:32",
  "event": "Sexual Assault",
  "id": "13-2111/130712085",
  "officer": "Officer Weber",
  "location": "1100 block Sevier Av, Menlo Park",
  "narrative": "The incident occurred in 2010 and is under investigation.",
  "disposition": "Report taken."
}, {
  "time": "01:11",
  "event": "Suspended Drivers License",
  "id": "13-2112/130713009",
  "officer": "Officer Weber",
  "location": "Willow Rd/ Hwy 101, Menlo Park",
  "subject": [ {
    "name": "Reed, Nicholas",
    "dob": "040187", 
    "oo": "Menlo Park",
    "narrative": "was cited & released for 14601.1(a) VC. The vehicle was towed."
  } ],
  "disposition": "Citation Issued"
}, {
  "time": "01:49",
  "event": "Suspended Drivers License",
  "id": "13-2113/130713013",
  "officer": "Officer Adair",
  "location": "University Av/Adams Dr, Menlo Park",
  "subject": [ {
    "name": "Tatakamotonga, Duane",
    "dob": "011259", 
    "oo": "East Palo Alto",
    "narrative": "was cited & released for 14601.1(a) VC"
  } ],
  "disposition": "Citation Issued"
}, {
  "time": "11:27",
  "event": "Auto Accident/Non-Injury",
  "id": "13-2114/130713042",
  "officer": "Officer Poirier",
  "location": "900 block Willow Rd, Menlo Park",
  "disposition": "Report Taken"
}, {
  "time": "17:53",
  "event": "Hit & Run/Property Damage",
  "id": "13-2115/130712069",
  "officer": "Officer Hughes",
  "location": "Santa Cruz Av/El Camino Real, Menlo Park",
  "disposition": "Report Taken"
}, {
  "time": "15:42",
  "event": "Gang Information",
  "id": "13-2116/130713069",
  "officer": "Officer Hughes",
  "location": "Hollyburne Av/Ivy Dr, Menlo Park",
  "narrative": "Case taken for gang validations",
  "disposition": "Report Taken"
}, {
  "time": "20:18",
  "event": "Vandalism",
  "id": "13-2117/130713090",
  "officer": "Officer Luevano",
  "location": "1100 block Willow, Menlo Park",
  "narrative": "An unknown suspect put graffiti on a building.",
  "disposition": "Report Taken"
}, {
  "time": "20:18",
  "event": "Vandalism",
  "id": "13-2118/130713090",
  "officer": "Officer Luevano",
  "location": "1100 block Willow, Menlo Park",
  "narrative": "An unknown suspect put graffiti on a building.",
  "disposition": "Report Taken"
}, {
  "time": "02:15",
  "event": "Drunk Driving",
  "id": "13-2119/130714012",
  "officer": "Officer Weber",
  "location": "Chester St/Willow Rd, Menlo Park",
  "subject": [ {
    "name": "Bradwell, Daniel",
    "dob": "022183", 
    "oo": "Hayward",
    "narrative": "was arrested and booked into County Jail for 23152(a) VC & 14601.2(a) VC. The vehicle was towed."
  } ],
  "disposition": "Arrest"
}, {
  "time": "08:14",
  "event": "72 Hour Hold",
  "id": "13-2120/130714021",
  "officer": "Officer Solorzano",
  "location": "700 block Menlo Av, Menlo Park",
  "narrative": "Subject transported to the hospital on a 72 hour hold Disposition: Report Taken."
}, {
  "time": "11:32",
  "event": "Accident/Minor Injury",
  "id": "13-2121/130714031",
  "officer": "Officer Poirier",
  "location": "Oak Grove Av/Rebecca Ln, Menlo Park",
  "disposition": "Report Taken."
}, {
  "time": "11:46",
  "event": "Canceled Case",
  "id": "13-2122/130714032"
}, {
  "time": "11:59 ",
  "event": "Vandalism",
  "id": "13-2123/130714033",
  "officer": "Officer Knopp",
  "location": "2400 block Ralmar Av, Menlo Park",
  "narrative": "A window at a business was broken by unknown(s).",
  "disposition": "Report Taken."
}, {
  "time": "11:59",
  "event": "Warrant Arrest",
  "id": "13-2124/130714033",
  "officer": "Officer Knopp",
  "location": "2400 block Ralmar Av, Menlo Park",
  "subject": [ {
    "name": "Prince, Chester",
    "dob": "101444", 
    "oo": "East Palo Alto",
    "narrative": "was cited and released on a $2,500 warrant o/o San Mateo Co SO for 14601 VC."
  } ],
  "disposition": "Arrest"
}, {
  "time": "13:42",
  "event": "Drug Activity",
  "id": "13-2125/130714045",
  "officer": "Officer Hughes",
  "location": "Menalto Av/Oak Ct, Menlo Park",
  "subject": [ {
    "name": "Buitron, Samuel",
    "dob": "080892", 
    "oo": "East Palo Alto",
    "narrative": "was cited and released for 11357(b) HS."
  } ],
  "disposition": "Citation Issued"
}, {
  "time": "13:42",
  "event": "Gang Information",
  "id": "13-2126/130714045",
  "officer": "Officer Hughes",
  "location": "Menalto Av/Oak Ct, Menlo Park",
  "narrative": "Case taken for gang validations",
  "disposition": "Report Taken."
}, {
  "time": "14:10",
  "event": "Accident/Non-Injury",
  "id": "13-2127/130714048",
  "officer": "Officer Hughes",
  "location": "El Camino Real/Oak Grove Av, Menlo Park",
  "disposition": "Report Taken."
}, {
  "time": "14:46",
  "event": "Stored Vehicle",
  "id": "13-2128/130714051",
  "officer": "Officer Knopp",
  "location": "3500 block Haven Av, Menlo Park",
  "narrative": "Vehicle towed for being abandoned.",
  "disposition": "Report Taken."
}, {
  "time": "00:09",
  "event": "Information",
  "id": "13-2129/130715002",
  "officer": "Officer Adair",
  "location": "Willow Rd/Pierce Rd, Menlo Park.",
  "narrative": "Information report taken for a verbal disturbance.",
  "disposition": "Report Taken."
}, {
  "time": "09:12",
  "event": "Hit and Run",
  "id": "13-2130/130715057",
  "officer": "CSO Sepulveda",
  "location": "200 blk Oak Grove Av, Menlo Park.",
  "narrative": "Online report taken for a hit and run that occurred on 7-11-13.",
  "disposition": "Report Taken."
}, {
  "time": "11:35",
  "event": "Lost Property",
  "id": "13-2132/130715065",
  "officer": "Officer Perna",
  "location": "700 blk Laurel St, Menlo Park.",
  "narrative": "Report taken for a lost passport.",
  "disposition": "Report Taken."
}, {
  "time": "11:21",
  "event": "Hit and Run w/Prop Damage",
  "id": "13-2133/130715061",
  "officer": "Officer Solorzano",
  "location": "00 blk Middlefield Rd, Menlo Park.",
  "narrative": "Report taken for non injury hit and run.",
  "disposition": "Report Taken."
}, {
  "time": "12:57",
  "event": "Vehicle Accident- No Injury",
  "id": "13-2134/130715088",
  "officer": "CSO Sepulveda",
  "location": "Santa Cruz Av/Sandhill Rd, Menlo Park.",
  "narrative": "2 vehicle non injury accident.",
  "disposition": "Report Taken."
}, {
  "time": "13:20",
  "event": "Vehicle Accident- Minor Injury",
  "id": "13-2135/130715094",
  "officer": "Officer Hughes",
  "location": "Middlefield Rd/Ravenswood Av, Menlo Park.",
  "narrative": "3 vehicle minor injury accident.",
  "disposition": "Report Taken."
}, {
  "time": "14:21",
  "event": "Suspicious Circumstance 13-2136/130715100",
  "officer": "Officer Wilson",
  "location": "1100 blk Merrill St, Menlo Park.",
  "narrative": "Reported unknown subject tried to open the front door with keys.",
  "disposition": "Report Taken."
}, {
  "time": "14:16",
  "event": "Information",
  "id": "13-2137/130715090",
  "officer": "Officer Hughes",
  "location": "700 blk Laurel St, Menlo Park.",
  "narrative": "Information report taken for a suspicious circumstance.",
  "disposition": "Report Taken."
}, {
  "time": "16:00",
  "event": "Tow Vehicle",
  "id": "13-2138/130715109",
  "officer": "CSO Sepulveda",
  "location": "400 blk Burgess Dr, Menlo Park.",
  "narrative": "Vehicle towed for expired registration.",
  "disposition": "Report Taken."
}, {
  "time": "16:11",
  "event": "Hit and Run w/Prop Damage",
  "id": "13-2139/130715112",
  "officer": "Officer Wilson",
  "location": "500 blk El Camino Real, Menlo Park.",
  "narrative": "Report taken for hit and run.",
  "disposition": "Report Taken."
}, {
  "time": "16:50",
  "event": "Mental Evaluation",
  "id": "13-2140/130715115",
  "officer": "Officer Knopp",
  "location": "1100 blk Willow Rd, Menlo Park.",
  "narrative": "Patient transported by medics.",
  "disposition": "Transported."
}, {
  "time": "16:52",
  "event": "Vandalism",
  "id": "13-2141/130715116",
  "officer": "Officer Solorzano",
  "location": "600 blk Hamilton Av, Menlo Park.",
  "narrative": "Reported damage to a vehicle window.",
  "disposition": "Report Taken."
}, {
  "time": "11:21",
  "event": "Vandalism",
  "id": "13-2142/130715119",
  "officer": "Officer Wilson",
  "location": "00 blk Willow Rd, Menlo Park.",
  "narrative": "Report taken for damage to a door.",
  "disposition": "Report Taken."
}, {
  "time": "18:27",
  "event": "Fraud",
  "id": "13-2143/130715123",
  "officer": "Officer Weber",
  "location": "800 blk Woodland Av, Menlo Park.",
  "narrative": "Report taken for unauthorized bank transaction.",
  "disposition": "Report Taken."
}, {
  "time": "19:37",
  "event": "Suspended or Revoked License",
  "id": "13-2144/130715133",
  "officer": "Sgt Paugh",
  "location": "Willow Rd/Middlefield Rd, Menlo Park.",
  "subject": [ {
    "name": "Blueford, Elgin",
    "dob": "070787",
    "oo": "Antioch",
    "narrative": "male of Antioch cited/released for 14601vc. Vehicle towed by National Towing auth 22651p vc. Vehicle description: 2000 Burgun Bmw 528."
  } ],
  "disposition": "Vehicle Towed."
}, {
  "time": "19:55",
  "event": "Petty Theft",
  "id": "13-2145/130715137",
  "officer": "CSO Sepulveda",
  "location": "500 blk Laurel St, Menlo Park.",
  "narrative": "Report taken for a stolen, locked bike.",
  "disposition": "Report Taken."
}, {
  "time": "20:08",
  "event": "Threats",
  "id": "13-2146/130715139",
  "officer": "Officer Adair",
  "location": "00 blk Hacker Wy, Menlo Park.",
  "narrative": "Report taken for threats received.",
  "disposition": "Report Taken."
}, {
  "time": "19:45",
  "event": "Medical call",
  "id": "13-2147/130715135",
  "officer": "Officer Tommei",
  "location": "Curtis St/Santa Cruz Av, Menlo Park.",
  "disposition": "Report Taken."
}, {
  "time": "20:47",
  "event": "Burglary",
  "id": "13-2148/130715145",
  "officer": "Officer Mendoza",
  "location": "100 blk Newbridge St, Mp.",
  "narrative": "Rps house was broken into btn 1000-toc. POE: Back door.",
  "disposition": "Report Taken."
}, {
  "time": "21:36",
  "event": "Suspicious Circumstances 13-2149/130715153",
  "officer": "Officer Tommei",
  "location": "1300 blk Hoover St, Mp.",
  "narrative": "Report taken for package left at the rp�s door by a known subject.",
  "disposition": "Report Taken."
}, {
  "time": "11:22",
  "event": "Threats",
  "id": "13-2150/130716035",
  "officer": "Officer Knopp",
  "location": "3600 blk Haven Av, Menlo Park.",
  "narrative": "Business reports receiving threats from disgruntled customer.",
  "disposition": "Report Taken."
}, {
  "time": "12:38",
  "event": "Found Property",
  "id": "13-2151/130716051",
  "officer": "CSO Mazon",
  "location": "500 blk Santa Cruz Av, Menlo Park.",
  "narrative": "Citizen reported finding table saw in the street.",
  "disposition": "Report Taken."
}, {
  "time": "14:41",
  "event": "Vandalism",
  "id": "13-2152/130716083",
  "officer": "CSO Sepulveda",
  "location": "00 blk Colemen Pl, Menlo Park.",
  "narrative": "ONLINE REPORT � Victim reports unknown damaged the roof of their vehicle.",
  "disposition": "Report Taken."
}, {
  "time": "14:56",
  "event": "Threats",
  "id": "13-2153/130716079",
  "officer": "Officer Byars",
  "location": "600 blk Sharon Park Dr, Menlo Park.",
  "narrative": "Victim reports receiving threats from subject over a business transaction.",
  "disposition": "Report Taken."
}, {
  "time": "14:58",
  "event": "Info Report",
  "id": "13-2154/130716080",
  "officer": "Detective Del Mundo",
  "location": "700 blk Laurel St, Menlo Park.",
  "narrative": "Case taken for ongoing narcotics investigation.",
  "disposition": "Report Taken."
}, {
  "time": "16:39",
  "event": "Grand Theft / Forgery",
  "id": "13-2155/130716095",
  "officer": "Officer Lacy",
  "location": "300 blk Arbor Rd, Menlo Park.",
  "narrative": "Victim reports subject took property from residence and cashed forged checks. Investigation continuing.",
  "disposition": "Report Taken."
}, {
  "time": "16:31",
  "event": "Vehicle Accident- No Injury",
  "id": "13-2156/130716092",
  "officer": "Officer Byars",
  "location": "2900 blk Sand Hill Rd, Menlo Park.",
  "narrative": "Report taken for solo vehicle collision.",
  "disposition": "Report Taken."
}, {
  "time": "15:20",
  "event": "Property for Safekeeping",
  "id": "13-2157/130716084",
  "officer": "Officer Igno",
  "location": "3600 blk Haven Av, Menlo Park.",
  "narrative": "Case taken for car keys taken for safekeeping.",
  "disposition": "Report Taken."
}, {
  "time": "17:56",
  "event": "Mental Evaluation",
  "id": "13-2158/130716104",
  "officer": "Officer Igno",
  "location": "Merrill St/Santa Cruz Av, Menlo Park.",
  "narrative": "Patient transported by medics for evaluation.",
  "disposition": "Report Taken."
}, {
  "time": "16:40",
  "event": "Vandalism",
  "id": "13-2159/130716097",
  "officer": "CSO Mazon",
  "location": "400 blk Glenwood Av, Menlo Park.",
  "narrative": "Victim reports their vehicles were egged overnight.",
  "disposition": "Report Taken."
}, {
  "time": "18:58",
  "event": "Towed Vehicle",
  "id": "13-2160/130716110",
  "officer": "Officer Mackdanz",
  "location": "1200 blk El Camino Real, Menlo Park.",
  "narrative": "Vehicle towed for expired registration.",
  "disposition": "Vehicle Towed."
}, {
  "time": "19:50",
  "event": "Lost Property",
  "id": "13-2161/130716117",
  "officer": "CSO Sepulveda",
  "location": "1100 blk Merrill St, Menlo Park.",
  "narrative": "Report taken for a lost cell phone.",
  "disposition": "Report Taken."
}, {
  "time": "19:51",
  "event": "Warrant Arrest",
  "id": "13-2162/130716118",
  "officer": "Officer Del Mundo",
  "location": "1900 blk Tate St, East Palo Alto",
  "subject": [ {
    "name": "Tatum, Lashauna",
    "dob": "040482",
    "oo": "East Palo Alto",
    "narrative": "(BF o/of EPA) was booked CJ on the following warrants: $3,000 o/of San Mateo Co SO for probation violation; $10,000 O/OF Mountain View PD for larceny: and No Bail o/of Santa Clara Co SO for probation violation."
  } ],
  "disposition": "Arrest."
}, {
  "time": "20:26",
  "event": "Mental Evaluation",
  "id": "13-2163/130716120",
  "officer": "Officer Ordone",
  "location": "1300 blk Hollyburne Av, Menlo Park",
  "narrative": "Subject transported by medics for evaluation.",
  "disposition": "Report Taken."
}, {
  "time": "20:43",
  "event": "Found Property",
  "id": "13-2164/130716122",
  "officer": "Officer Venzon",
  "location": "Alma St/Ravenswood Av, Menlo Park",
  "narrative": "Case taken for found jewelry.",
  "disposition": "Report Taken."
}, {
  "time": "23:04",
  "event": "Lost Property",
  "id": "13-2165/130716135",
  "officer": "Officer Mackdanz",
  "location": "100 blk El Camino Real, Menlo Park.",
  "narrative": "Report taken for lost property.",
  "disposition": "Report Taken."
}, {
  "time": "23:41",
  "event": "Drunk in Public",
  "id": "13-2166/130716137",
  "officer": "Sgt Soares",
  "location": "500 blk Oak Grove Av, Menlo Park.",
  "subject": [ {
    "name": "Miller, Brendan",
    "dob": "021486",
    "oo": "San Francisco",
    "narrative": "male of San Francisco cited/released to First Chance."
  } ],
  "disposition": "Arrest."
}, {
  "time": "23:48",
  "event": "Gang Validations",
  "id": "13-2167/130716138",
  "officer": "Officer Venzon",
  "location": "1100 blk Willow Rd, Menlo Park.",
  "disposition": "Report Taken."
}, {
  "time": "09:26",
  "event": "Suspended License",
  "id": "13-2168/130717021",
  "officer": "Officer Russell",
  "location": "3500 blk Haven Av, Menlo Park.",
  "subject": [ {
    "name": "Tuinei, Tyrone",
    "dob": "021984",
    "oo": "Sunyvale",
    "narrative": "male out of Sunnyvale cited and released for 14601 VC."
  } ],
  "disposition": "Citation Issued."
}, {
  "time": "11:09",
  "event": "Mental Evaluation",
  "id": "13-2169/130717037",
  "officer": "Officer Phu",
  "location": "1200 blk Willow Rd, Menlo Park.",
  "narrative": "Patient transported by medics for evaluation.",
  "disposition": "Transported."
}, {
  "time": "13:18",
  "event": "Petty Theft",
  "id": "13-2170/130717057",
  "officer": "CSO Mazon",
  "location": "600 blk Willow Rd, Menlo Park.",
  "narrative": "Victim reports unknown took property from unlocked vehicle overnight.",
  "disposition": "Report Taken."
}, {
  "time": "13:57",
  "event": "Mental Evaluation",
  "id": "13-2171/130717058",
  "officer": "Officer Phu",
  "location": "Willow Rd/Hamilton Av, Menlo Park.",
  "narrative": "Patient transported by medics for evaluation.",
  "disposition": "Transported."
}, {
  "time": "18:41",
  "event": "Medical call",
  "id": "13-2172/130717092",
  "officer": "Officer Ordone",
  "location": "700 blk Menlo Av, Menlo Park.",
  "disposition": "Report Taken."
}, {
  "time": "23:12",
  "event": "Warrant Arrest",
  "id": "13-2173/130717113",
  "officer": "Officer Ordone",
  "location": "Pierce Rd/Madera Av, Menlo Park.",
  "subject": [ {
    "name": "Cougoule, Ruth Ann",
    "dob": "011962",
    "oo": "Menlo Park",
    "narrative": "WFA of MP arrested and booked CJ for No Bail felony warrant #B1366837 out of Santa Clara SO for 11377A HS & 23152A VC. Vehicle towed by Specialty Tow auth 22651h vc. Vehicle description: 2005 Black Bmw."
  } ],
  "disposition": "Arrest."
}, {
  "time": "07:40",
  "event": "Suspended License",
  "id": "13-2174/130718011",
  "officer": "Officer Phu",
  "location": "Willow Rd/Bayfront Ex, Menlo Park",
  "subject": [ {
    "name": "Ritchie, Shannon",
    "dob": "042584", 
    "oo": "Hayward",
    "narrative": "cited & released for 14601.1(a) VC. The vehicle was towed."
  } ],
  "disposition": "Citation Issued"
}, {
  "time": "10:24",
  "event": "Found Property",
  "id": "13-2175/130718033",
  "officer": "CSO Mazon",
  "location": "500 block El Camino, Menlo Park",
  "narrative": "Two wallets and a cell phone were found and turned over to police.",
  "disposition": "Report Taken"
}, {
  "time": "15:04",
  "event": "Burglary",
  "id": "13-2176/130718071",
  "officer": "Officer Russell",
  "location": "200 block Waverley St, Menlo Park",
  "narrative": "An unknown suspect forced entry into a laundry room of an apartment complex. Nothing was taken.",
  "disposition": "Report Taken"
}, {
  "time": "15:29",
  "event": "Stored Vehicle",
  "id": "13-2177/130718073",
  "officer": "Officer Phu",
  "location": "Sharon Rd/Sharon Oaks Dr",
  "narrative": "A vehicle was towed for expired registration.",
  "disposition": "Report Taken"
}, {
  "time": "16:23",
  "event": "Vehicle Accident- Minor Injury",
  "id": "13-2178/130718079",
  "officer": "Officer Solorzano",
  "location": "2700 block Sand Hill Rd, Menlo Park",
  "disposition": "Report Taken"
}, {
  "time": "17:33",
  "event": "Auto Burglary",
  "id": "13-2179/130718087",
  "officer": "Officer Russell",
  "location": "1600 block Marsh Rd, Menlo Park",
  "narrative": "An unknown suspect smashed a window on a vehicle and took a purse.",
  "disposition": "Report Taken"
}, {
  "time": "17:54",
  "event": "Auto Burglary",
  "id": "13-2180/130718091",
  "officer": "Officer Solorzano",
  "location": "1600 block Marsh Rd, Menlo Park",
  "narrative": "An unknown suspect smashed a window on a vehicle and took a laptop and purse.",
  "disposition": "Report Taken"
}, {
  "time": "19:41",
  "event": "Vandalism",
  "id": "13-2181/130718099",
  "officer": "Officer Sepulveda",
  "location": "200 block San Mateo Dr, Menlo Park",
  "narrative": "An unknown suspect keyed the victim�s vehicle.",
  "disposition": "Report Taken"
}, {
  "time": "20:10",
  "event": "Warrant Arrest",
  "id": "13-2182/130718103",
  "officer": "Officer Schuler",
  "location": "1100 block Willow Rd, Menlo Park",
  "subject": [ {
    "name": "Graham, Anthony",
    "dob": "010859", 
    "oo": "Menlo Park",
    "narrative": "was arrested and booked into County Jail on a no bail warrant for 23152 VC o/o Los Altos PD."
  } ],
  "disposition": "Arrest"
}, {
  "time": "22:12",
  "event": "Vehicle Accident � Minor Injury",
  "id": "13-2183/130718111",
  "officer": "Officer Mackdanz",
  "location": "Willow Rd/Newbridge St, Menlo Park",
  "disposition": "Report Taken"
}, {
  "time": "08:54",
  "event": "Lost Property",
  "id": "13-2184/130719018",
  "officer": "Officer Lacy",
  "location": "1300 block Willow Rd, Menlo Park",
  "narrative": "Case taken for lost keys.",
  "disposition": "Report Taken"
}, {
  "time": "11:22",
  "event": "Psychiatric Evaluation",
  "id": "13-2185/130719034",
  "officer": "Officer Russell",
  "location": "1100 block Willow Rd, Menlo Park",
  "disposition": "Report Taken"
}, {
  "time": "12:35",
  "event": "Vehicle Accident - No Injury",
  "id": "13-2186/130719040",
  "officer": "Officer Mazon",
  "location": "500 block Okeefe St, Menlo Park",
  "disposition": "Report Taken"
}, {
  "time": "13:27",
  "event": "Lost Property",
  "id": "13-2187/130719043",
  "officer": "Officer Byars",
  "location": "1400 block El Camino Real, Menlo Park",
  "narrative": "The reporting party lost a firearm at an unknown location, possibly in Newark or Menlo Park.",
  "disposition": "Report Taken"
}, {
  "time": "14:06",
  "event": "Fraud",
  "id": "13-2188/130719048",
  "officer": "Officer Byars",
  "location": "800 block Curtis St, Menlo Park",
  "narrative": "An unknown suspect made charges to the victim�s credit card account.",
  "disposition": "Report Taken"
}, {
  "time": "14:54",
  "event": "Domestic Disturbance",
  "id": "13-2189/130719054",
  "officer": "Officer Byars",
  "location": "1700 block Valparaiso Av, Menlo Park",
  "narrative": "An information case was taken for a domestic arguement.",
  "disposition": "Report Taken"
}, {
  "time": "14:53",
  "event": "Vehicle Accident � Minor Injury",
  "id": "13-2190/130719053",
  "officer": "Officer Douglas",
  "location": "Willow Rd/Clover Ln, Menlo Park",
  "disposition": "Report Taken"
}, {
  "time": "06:57",
  "event": "Fraud",
  "id": "13-2191/130720007",
  "officer": "Officer Russell",
  "location": "2400 block Sharon Rd, Menlo Park",
  "narrative": "An unknown suspect made fraudulent charges using the victim�s debit card.",
  "disposition": "Report Taken"
}, {
  "time": "16:18",
  "event": "CPS Referral",
  "id": "13-2192/130719059",
  "officer": "Officer Wilson",
  "location": "200 block Santa Monica Av, Menlo Park",
  "narrative": "Case taken for a CPS referral",
  "disposition": "Report Taken"
}, {
  "time": "11:46",
  "event": "Auto Burglary",
  "id": "13-2193/130720026",
  "officer": "Officer Russell",
  "location": "2100 block Santa Cruz Av, Menlo Park",
  "narrative": "Vehicle was broken into by an unknown suspect.",
  "disposition": "Report Taken"
}, {
  "time": "11:46",
  "event": "Burglary",
  "id": "13-2194/130720032",
  "officer": "Officer Hughes",
  "location": "400 block Glenwood Av, Menlo Park",
  "narrative": "Coin boxes in a laundry room were broken into by an unknown suspect.",
  "disposition": "Report Taken"
}, {
  "time": "14:11",
  "event": "Grand Theft",
  "id": "13-2195/130720034",
  "officer": "Officer Igno",
  "location": "800 block El Camino Real, Menlo Park.",
  "narrative": "An unknown suspect took the victim�s wallet.",
  "disposition": "Report Taken"
}, {
  "time": "17:34",
  "event": "Petty Theft",
  "id": "13-2196/130720047",
  "officer": "Officer Ferguson",
  "location": "800 block Santa Cruz Av, Menlo Park",
  "narrative": "An unknown suspect took the victim�s sunglasses.",
  "disposition": "Report Taken"
}, {
  "time": "21:26",
  "event": "Criminal Threats",
  "id": "13-2197/130720065",
  "officer": "Officer Adair",
  "location": "1200 block Carlton Av, Menlo Park",
  "subject": [ {
    "name": "Miller, Dennis",
    "dob": "071594", 
    "oo": "Hayward",
    "narrative": "A victim reported criminal threats, and officers later located the suspects. was arrested and booked into County Jail for 422 PC & 182(a)(1) PC. Two juvenile suspects were also arrested for 422 PC and 182(a)(1) PC. The suspect vehicle was towed."
  } ],
  "disposition": "Report Taken"
}, {
  "time": "01:10",
  "event": "Drunk in Public",
  "id": "13-2198/130721006",
  "officer": "Officer Tommei",
  "location": "Oak Grove Av/El Camino Real, Menlo Park",
  "subject": [ {
    "name": "Johnson, Gene",
    "dob": "012553", 
    "oo": "Menlo Park",
    "narrative": "was arrested and booked into County Jail for 647f PC"
  } ],
  "disposition": "Arrest"
}, {
  "time": "05:17",
  "event": "Drunk in Public",
  "id": "13-2199/130721022",
  "officer": "Officer Luevano",
  "location": "1100 block Windermere Av, Menlo Park",
  "subject": [ {
    "name": "Langi, Osaiasi",
    "dob": "021894", 
    "oo": "Menlo Park",
    "narrative": "was arrested and booked into County Jail for 647(F) PC."
  } ],
  "disposition": "Arrested."
}, {
  "time": "05:17",
  "event": "72 Hour Hold",
  "id": "13-2199/130721022",
  "officer": "Officer Luevano",
  "location": "1100 block Windermere Av, Menlo Park",
  "narrative": "Subject placed on a 72 hour hold and transported to the hospital.",
  "disposition": "Report Taken."
}, {
  "time": "10:17",
  "event": "Grand Theft",
  "id": "13-2201/130721038",
  "officer": "Officer Ferguson",
  "location": "600 block Santa Cruz Av, Menlo Park",
  "narrative": "Unknown(s) stole several paintings overnight.",
  "disposition": "Report Taken."
}, {
  "time": "10:21",
  "event": "Suspended or Revoked License",
  "id": "13-2202/130721039",
  "officer": "Officer Knopp",
  "location": "1100 block Saratoga Av, Menlo Park",
  "subject": [ {
    "name": "Estrada, Daniel",
    "dob": "040882", 
    "oo": "San Jose",
    "narrative": "cited and released for 14601.1(a) VC. The vehicle was towed."
  } ],
  "disposition": "Arrest."
}, {
  "time": "10:33",
  "event": "Attempted Burglary",
  "id": "13-2203/130721041",
  "officer": "Officer Igno",
  "location": "400 block Glenwood Av, Menlo Park",
  "narrative": "Unknown(s) attempted to gain access to 3 locked storage rooms.",
  "disposition": "Report Taken."
}, {
  "time": "11:14",
  "event": "Suspended or Revoked License",
  "id": "13-2204/130721044",
  "officer": "Officer Wilson",
  "location": "Hwy 101/Willow Rd, Menlo Park",
  "subject": [ {
    "name": "Caballero, Maria",
    "dob": "040161", 
    "oo": "Redwood City",
    "narrative": "was cited and released for 14601.1(a) VC."
  } ],
  "disposition": "Arrest."
}, {
  "time": "12:22",
  "event": "Canceled Case",
  "id": "13-2205/130721051"
}, {
  "time": "13:52",
  "event": "Attempted Burglary",
  "id": "13-2206/130721058",
  "officer": "Officer Solorzano",
  "location": "600 block Santa Cruz Av, Menlo Park",
  "narrative": "Unknown(s) attempted to gain entry into a back door.",
  "disposition": "Report Taken"
}, {
  "time": "16:47",
  "event": "Suspended or Revoked License",
  "id": "13-2207/130721070",
  "officer": "Officer Solorzano",
  "location": "600 block Sand Hill Rd, Menlo Park",
  "subject": [ {
    "name": "Deleon, Cassandra",
    "dob": "052490", 
    "oo": "Fremont",
    "narrative": "cited and released for 14601 VC. The vehicle was towed."
  } ],
  "disposition": "Arrest"
}, {
  "time": "18:11",
  "event": "Canceled Case",
  "id": "13-2208/130721074"
}, {
  "time": "18:20",
  "event": "Petty Theft",
  "id": "13-2209/130721075",
  "officer": "Officer Swanson",
  "location": "500 block El Camino Real, Menlo Park",
  "narrative": "Theft of a bicycle.",
  "disposition": "Report Taken"
}, {
  "time": "23:04",
  "event": "Drug Activity",
  "id": "13-2210/130721096",
  "officer": "Officer Luevano",
  "location": "1300 block Willow Rd, Menlo Park",
  "subject": [ {
    "name": "Mahoni, Wallbank",
    "dob": "011193", 
    "oo": "Menlo Park",
    "narrative": "was cited and released for 11357(b) HS."
  } ],
  "disposition": "Citation Issued"
}, {
  "time": "02:50",
  "event": "Recovered Stolen Vehicle",
  "id": "13-2211/130722010",
  "officer": "Officer Swanson",
  "location": "900 blk Willow Rd, Menlo Park.",
  "narrative": "Officer located unoccupied stolen vehicle from San Jose. Vehicle had 1 stolen lic plate from another stolen vehicle out of RCY PD. Vehicle towed by National Tow 22651c. Vehicle description: 1995 Tan Hond Accord.",
  "disposition": "Report Taken."
}, {
  "time": "07:28",
  "event": "Vehicle Accident - No Injury",
  "id": "13-2212/130722018",
  "officer": "Officer Wilson",
  "location": "Bayfront Ex/University Av, Menlo Park.",
  "narrative": "2 vehicle non injury accident.",
  "disposition": "Report Taken."
}, {
  "time": "12:05",
  "event": "Fraud",
  "id": "13-2213/130722044",
  "officer": "Officer Perna",
  "location": "1800 blk El Camino Real, Menlo Park.",
  "narrative": "Report taken for fraud.",
  "disposition": "Report Taken."
}, {
  "time": "13:00",
  "event": "Forgery",
  "id": "13-2214/130722050",
  "officer": "Officer Russell",
  "location": "500 blk El Camino Real, Menlo Park.",
  "subject": [ { 
    "name": "Vierra, Laurencia", 
    "dob": "090519", 
    "narrative": "51 o/o Redwood City was Arrested/Booked into San Mateo County Jail for 460(b) PC & 470(d) PC.", "oo": "Redwood City" 
  } ],
  "disposition": "Arrest."
}, {
  "time": "16:25",
  "event": "Vehicle Accident- Injury",
  "id": "13-2216/130722080",
  "officer": "Officer Igno",
  "location": "Bay Rd/Van Buren Rd, Menlo Park",
  "narrative": "Report taken for solo bike collision.",
  "disposition": "Report Taken."
}, {
  "time": "12:34",
  "event": "Narcotics Investigation",
  "id": "13-2217/130722049",
  "officer": "Detective Torres",
  "location": "700 blk Laurel Av, Menlo Park.",
  "narrative": "Report taken for narcotics investigation.",
  "disposition": "Report Taken."
}, {
  "time": "16:35",
  "event": "Vehicle Accident- Inury",
  "id": "13-2218/130722081",
  "officer": "Officer Wilson",
  "location": "Santa Cruz Av/Sharon Rd, Menlo Park",
  "narrative": "Solo bicycle accident with major injuries occurred 7/17/13.",
  "disposition": "Report Taken."
}, {
  "time": "18:33",
  "event": "Petty Theft",
  "id": "13-2219/130722089",
  "officer": "CSO Sepulveda",
  "location": "600 blk Santa Cruz Av, Menlo Park.",
  "narrative": "Online report for theft of on an iphone that occ'd on 07/21.",
  "disposition": "Report Taken."
}, {
  "time": "19:00",
  "event": "Petty Theft",
  "id": "13-2220/130722091",
  "officer": "CSO Sepulveda",
  "location": "2800 blk Sand Hill Rd, Menlo Park.",
  "narrative": "Online report taken for theft of a wallet on 07/11 with no susp info.",
  "disposition": "Report Taken."
}, {
  "time": "19:48",
  "event": "Canceled Case",
  "id": "13-2221/130722096"
}, {
  "time": "22:08",
  "event": "Warrant Arrest",
  "id": "13-2222/130722116",
  "officer": "Officer Neumann",
  "location": "Carlton Av/Pierce Rd, Menlo Park.",
  "subject": [ {
    "name": "Orejel, Vanessa",
    "dob": "011019", 
    "oo": "Menlo Park",
    "narrative": "89 o/o Menlo Park was cited/released on an outstanding San Mateo County SO warrant for 14601.1(a) VC."
  } ],
  "disposition": "Arrest."
}, {
  "time": "22:34",
  "id": "13-2223/130722120",
  "event": "Suspended or Revoked License",
  "officer": "Officer Swanson",
  "location": "E Okeefe St/Euclid Av, East Palo Alto.",
  "subject": [ {
    "name": "Miles, Moris",
    "dob": "090164",
    "oo": "East Palo Alto",
    "narrative": "BMA of EPA cited/released for 14601vc. Vehicle impounded by Able Towing 30 day impound 14602.6vc. Vehicle description: 2006 Silver/Aluminum Ford Taurus 4D."
  } ],
  "disposition": "Arrest."
}, {
  "time": "23:24",
  "event": "Mental Evaluation 13-2224/130722127",
  "officer": "Officer Luevano",
  "location": "600 blk Bay Rd, Mp.",
  "narrative": "Patient transported by medics.",
  "disposition": "Transported."
}, {
  "time": "04:17",
  "event": "Burglary",
  "id": "13-2225/130723018",
  "officer": "Officer Tommei",
  "location": "800 blk El Camino Real, Mp.",
  "narrative": "Unk broke into the store via a back window and stole the register.",
  "disposition": "Report Taken."
}, {
  "time": "05:05",
  "event": "Vandalism",
  "id": "13-2226/130723020",
  "officer": "Officer Tommei",
  "location": "1100 blk El Camino Real, Menlo Park.",
  "narrative": "Report taken for a damaged side door.",
  "disposition": "Report Taken."
}, {
  "time": "04:27",
  "event": "Burglary in Progress 13-2227 & 13-2228/130723019",
  "officer": "Officer Swanson/Officer Knopp",
  "location": "1500 blk El Camino Real, Menlo Park.",
  "narrative": "Case 13-2227 taken by Ofc Swanson for 460 to business located on 1500 blk El Camino Real. Case 13-2228 taken by Ofc Knopp for 460 to business located on 1500 blk El Camino Real. Officers responded to report of burglary in progress. Susp fled and area checked with negative results.",
  "disposition": "Report Taken."
}, {
  "time": "10:57",
  "event": "Drug Registrant",
  "id": "13-2229/130723037",
  "officer": "Records",
  "location": "700 blk Laurel St, Menlo Park.",
  "narrative": "Case taken for drug registration at PD.",
  "disposition": "Report Taken."
}, {
  "time": "12:50",
  "event": "Vehicle Accident- No Injury",
  "id": "13-2230/130723054",
  "officer": "CSO Sepulveda",
  "location": "Ravenswood Av/Laurel St, Menlo Park.",
  "narrative": "Report taken for 2 vehicle collision.",
  "disposition": "Report Taken."
}, {
  "time": "13:13",
  "event": "Burglary-Auto",
  "id": "13-2231/130723060",
  "officer": "Officer Igno",
  "location": "800 blk Coleman Av, Menlo Park.",
  "narrative": "Victim reports unknown forced entry into vehicle and removed property.",
  "disposition": "Report Taken."
}, {
  "time": "13:32",
  "event": "Vehicle Accident- No Injury",
  "id": "13-2232/130723063",
  "officer": "CSO Mazon",
  "location": "1000 blk Curtis St, Menlo Park.",
  "narrative": "Report taken for 2 vehicle collision.",
  "disposition": "Report Taken."
}, {
  "time": "13:42",
  "event": "Shoplifter In Custody",
  "id": "13-2233/130723065",
  "officer": "Officer Solorzano",
  "location": "1000 bBlk University Dr, Menlo Park.",
  "subject": [ {
    "name": "Rhoan, Donna",
    "dob": "093065",
    "narrative": "was booked CJ for 666 PC."
  } ],
  "disposition": "Arrest."
}, {
  "time": "13:16",
  "event": "Petty Theft",
  "id": "13-2234/130723061",
  "officer": "CSO Mazon",
  "location": "1200 blk Obrien Dr, Menlo Park.",
  "narrative": "Victim reports unknown took unattended laptop computer from desk.",
  "disposition": "Report Taken."
}, {
  "time": "14:43",
  "event": "Burglary � Residential",
  "id": "13-2235/130723070",
  "officer": "Officer Wilson",
  "location": "1100 blk Henderson Av, Menlo Park.",
  "narrative": "Victim reports between 12:30 and TOC unknown entered residence and removed property.",
  "disposition": "Report Taken."
}, {
  "time": "16:03",
  "event": "Hit and Run w/Property Damage",
  "id": "13-2236/130723077",
  "officer": "CSO Sepulveda",
  "location": "1200 blk Obrien Dr, Menlo Park.",
  "narrative": "Victim reports unknown hit parked vehicle and fled.",
  "disposition": "Report Taken."
}, {
  "time": "16:21",
  "event": "Burglary - Residential",
  "id": "13-2237/130723079",
  "officer": "Officer Wilson",
  "location": "00 blk Willow Rd, Menlo Park.",
  "narrative": "Victim reports unknown broke into laundry room and took locks by unknown suspect(s).",
  "disposition": "Report Taken."
}, {
  "time": "15:24",
  "event": "Stolen Vehicle",
  "id": "13-2238/130723074",
  "officer": "Officer Tommei",
  "location": "3500 blk Haven Dr, Menlo Park.",
  "narrative": "Theft of a black Chevrolet blazer by unknown suspect(s).",
  "disposition": "Report Taken."
}, {
  "time": "18:30",
  "event": "Theft",
  "id": "13-2239/130723090",
  "officer": "Officer Cooley",
  "location": "700 blk Laurel St, Menlo Park.",
  "disposition": "Report Taken."
}, {
  "time": "18:05",
  "event": "Domestic Disturbance",
  "id": "13-2240/130723086",
  "officer": "Officer Adair",
  "location": "500 blk Hamilton Av, Menlo Park.",
  "subject": [ {
    "name": "Sanchez, Carlos",
    "oo": "Menlo Park",
    "dob": "071419", 
    "narrative": "78 o/o Menlo Park was arrested/booked into San Mateo County Jail for 243(e)(1) PC, 273a(a) PC, 236 PC & 148(a)(1) PC."
  } ],
  "disposition": "Arrest."
}, {
  "time": "17:26",
  "event": "Drug Activity",
  "id": "13-2241/130723083",
  "officer": "Officer Del Mundo",
  "location": "300 blk E Okeefe St � East Palo Alto",
  "subject": [ {
    "name": "Bustamante, Julio",
    "dob": "072919", 
    "oo": "East Palo Alto",
    "narrative": "77 o/o East Palo Alto was arrested/booked for 11378 HS & 11364.1(a) HS and booked on an outstanding Palo Alto PD warrant for 11364.1 HS in the amount of $10,000."
  } ],
  "disposition": "Arrest."
}, {
  "time": "18:25",
  "event": "Hit and Run w/Property Damage",
  "id": "13-2242/130723089",
  "officer": "CSO Sepulveda",
  "location": "400 blk Oconnor St, Menlo Park.",
  "narrative": "Victim reports unknown hit parked vehicle and fled.",
  "disposition": "Report Taken."
}, {
  "time": "06:34",
  "event": "Vehicle Accident- No Injury",
  "id": "13-2243/130724013",
  "officer": "Officer Ferguson",
  "location": "Coleman Av/Willow Rd, Menlo Park.",
  "narrative": "Report taken for 2 vehicle collision.",
  "disposition": "Report Taken."
}, {
  "time": "06:34",
  "event": "Suspended License",
  "id": "13-2244/130724013",
  "officer": "Officer Ferguson",
  "location": "Coleman Av/Willow Rd, Menlo Park.",
  "subject": [ {
    "name": "Vercherrushing, Quntisha",
    "dob": "032378",
    "oo": "Manteca",
    "narrative": "x of Manteca cited for 14601 VC after getting involved in a collision."
  } ],
  "disposition": "Citation Issued."
}, {
  "time": "08:30",
  "event": "Grand Theft",
  "id": "13-2245/130724019",
  "officer": "Officer Ferguson",
  "location": "900 blk Oak Ln, Menlo Park.",
  "narrative": "Victim reports 3 bikes taken from carport sometime overnight.",
  "disposition": "Report Taken."
}, {
  "time": "13:21",
  "event": "Suspended License",
  "id": "13-2246/130724044",
  "officer": "Officer Ferguson",
  "location": "1900 blk Euclid Av, East Palo Alto.",
  "subject": [ {
    "name": "Lupian-Pleitez, Jesenia",
    "dob": "031892",
    "narrative": "was cited for 14601 VC."
  } ],
  "disposition": "Citation Issued."
}, {
  "time": "14:42",
  "event": "Mental Evaluation",
  "id": "13-2247/130724055",
  "officer": "Officer Ferguson",
  "location": "1700 blk El Camino Real, Menlo Park.",
  "narrative": "Patient transported by medics.",
  "disposition": "Transported."
}, {
  "time": "15:49",
  "event": "Possession of Controlled Substance",
  "id": "13-2248/130724060",
  "officer": "Officer Lacy",
  "location": "Chilco St/Terminal Av, Menlo Park.",
  "subject": [ {
    "name": "Magana, David",
    "dob": "081880",
    "oo": "Redwood City",
    "narrative": "HMA of Redwood City arrested and booked CJ for 11350 HS."
  } ],
  "disposition": "Arrest."
}, {
  "time": "16:01",
  "event": "Assist Outside Agency",
  "id": "13-2249/130724062",
  "officer": "Detective Torres",
  "location": "600 blk Bell St, East Palo Alto.",
  "narrative": "Case taken for outside assist for EPA PD.",
  "disposition": "Report Taken."
}, {
  "time": "17:04",
  "event": "Vehicle Accident - Injury 13-2250/130724070",
  "officer": "Officer Ferguson",
  "location": "Elder Av/Santa Cruz Av, Menlo Park.",
  "disposition": "Report Taken."
}, {
  "time": "20:40",
  "event": "Petty Theft",
  "id": "13-2251/130724092",
  "officer": "Officer Russell",
  "location": "500 blk El Camino Real, Menlo Park.",
  "narrative": "Report taken for theft of a bike tire.",
  "disposition": "Report Taken."
}, {
  "time": "23:02",
  "event": "Burglary",
  "id": "13-2252/130724101",
  "officer": "Officer Venzon",
  "location": "1200 blk Carlton Av, Mp.",
  "narrative": "Occd btn yesterday and today. Rp thinks someone broke into rps house and stole various debit cards, and misc items.",
  "disposition": "Report Taken."
}, {
  "time": "04:18",
  "event": "Found Property",
  "id": "13-2253/130725018",
  "officer": "Officer Venzon",
  "location": "Willow RD/101, Menlo Park.",
  "narrative": "Report taken for a found/discarded bag.",
  "disposition": "Report Taken."
}, {
  "time": "09:24",
  "event": "Vehicle Accident- No Injury",
  "id": "13-2254/130725026",
  "officer": "Officer Ferguson",
  "location": "2100 blk Sand Hill Rd, Menlo Park.",
  "narrative": "Report taken for 2 vehicle collision.",
  "disposition": "Report Taken."
}, {
  "time": "13:43",
  "event": "Found Property",
  "id": "13-2255/130725052",
  "officer": "CSO Mazon",
  "location": "00 blk Hacker Wy, Menlo Park.",
  "narrative": "Case taken for miscellaneous found property that was turned in.",
  "disposition": "Report Taken."
}, {
  "time": "15:31",
  "event": "Burglary",
  "id": "13-2256/130725058",
  "officer": "Officer Ferguson",
  "location": "1600 blk Oak Av, Menlo Park.",
  "narrative": "Victim reports unknown suspect entered residence via unlocked front door and removed property.",
  "disposition": "Report Taken."
}, {
  "time": "15:50",
  "event": "Child Abuse",
  "id": "13-2257/130725060",
  "officer": "Officer Russell",
  "location": "400 blk Ivy Dr, Menlo Park.",
  "disposition": "Report Taken."
}, {
  "time": "18:40",
  "event": "Warrant Arrest",
  "id": "13-2258/130725075",
  "officer": "Officer Neumann",
  "location": "Bay Rd/University Av, East Palo Alto.",
  "subject": [ {
    "name": "Mendez, Isidro Alvarez",
    "dob": "050290",
    "oo": "East Palo Alto",
    "narrative": "HMA of EPA arrested and booked for $5,000.00 misd warrant out of EPA PD for 14601.1A vc and for $20,000.00 misd warrant out of Alameda SO for 273.5pc."
  } ],
  "disposition": "Arrest."
}, {
  "time": "20:11",
  "event": "Stolen Vehicle",
  "id": "13-2259/130725086",
  "officer": "Officer Venzon",
  "location": "500 blk Laurel St, Menlo Park.",
  "narrative": "Vehicle description: 2004 Silver/Aluminum Volv XC70.",
  "disposition": "Report Taken."
}, {
  "time": "20:41",
  "event": "Canceled Case",
  "id": "13-2261/130725090"
}, {
  "time": "20:58",
  "event": "Warrant Arrest",
  "id": "13-2262/130725093",
  "officer": "Officer Schuler",
  "location": "Marsh RD/101, Menlo Park.",
  "subject": [ {
    "name": "Mendieta, Palmira Sanchez",
    "dob": "040763",
    "oo": "Redwood City",
    "narrative": "HFA of RCY arrested and cited for misd $5000.00 out of Atherton PD for 14601.1A vc."
  } ],
  "disposition": "Arrest."
}, {
  "time": "23:34",
  "event": "Drug Activity",
  "id": "13-2263/130725102",
  "officer": "Officer Ordone",
  "location": "100 blk Jefferson Dr, Menlo Park.",
  "subject": [ {
    "name": "Perez, Jose Juan",
    "dob": "072879",
    "oo": "East Palo Alto",
    "narrative": "HMA of EPA arrested and cited/released for 11357b hs."
   }, { 
    "name": "MaganaLopez, Eduardo",
    "dob": "031892",
    "oo": "East Palo Alto",
    "narrative": "HMA of EPA arrested and cited/released for 11357b hs."
   } ]
}, {
  "time": "13:31",
  "event": "Information Case",
  "id": "13-2264/130726036",
  "officer": "Officer Solorzano",
  "location": "1100 block Crane St, Menlo Park",
  "narrative": "Information case taken for a fall victim.",
  "disposition": "Report Taken"
}, {
  "time": "14:51",
  "event": "Drunk in Public",
  "id": "13-2265/130726043",
  "officer": "Officer Russell",
  "location": "500 block El Camino Real, Menlo Park",
  "subject": [ {
    "name": "Thomas, Charles",
    "dob": "031446", 
    "oo": "Redwood City",
    "narrative": "was arrested, cited and released for 647f PC"
  } ],
  "disposition": "Arrest"
}, {
  "time": "15:57",
  "event": "Vandalism",
  "id": "13-2266/130726048",
  "officer": "Officer Ferguson",
  "location": "300 block Sheridan Dr, Menlo Park",
  "narrative": "Unknown(s) broke a window at a construction site.",
  "disposition": "Report Taken"
}, {
  "time": "18:48",
  "event": "Verbal Disturbance",
  "id": "13-2267/130726065",
  "officer": "Officer Venzon",
  "location": "200 block Van Buren Rd, Menlo Park",
  "narrative": "Case taken for a verbal dispute.",
  "disposition": "Report Taken"
}, {
  "time": "23:02",
  "event": "Suspended or Revoked License",
  "id": "13-2268/130726100",
  "officer": "Officer Ordone",
  "location": "1300 block Hollyburne Av, Menlo Park",
  "subject": [ {
    "name": "Evans, Troy",
    "dob": "102569", 
    "oo": "East Palo Alto",
    "narrative": "cited and released for 14601 VC. The vehicle was towed."
  } ],
  "disposition": "Citation Issued"
}, {
  "time": "23:25",
  "event": "Warrant Arrest",
  "id": "13-2269/130726103",
  "officer": "Officer Tommei",
  "location": "Sevier Av/Newbridge St, Menlo Park",
  "subject": [ {
    "name": "Tofavaha, Christopher",
    "dob": "110292", 
    "oo": "East Palo Alto",
    "narrative": "was arrested and booked into County Jail on a $20,000 warrant o/o Menlo Park PD for 12305 HS & 12500(a) VC."
  } ],
  "disposition": "Arrest"
}, {
  "time": "03:08",
  "event": "Petty Theft",
  "id": "13-2270/130727010",
  "officer": "Officer Venzon",
  "location": "500 block Oak Grove Av, Menlo Park",
  "narrative": "Two male subjects stole 2 12 packs of beer and fled",
  "disposition": "Report Taken"
}, {
  "time": "05:12",
  "event": "Coroners Case",
  "id": "13-2271/130727011",
  "officer": "Officer Mendoza",
  "location": "700 block of Live Oak Avenue, Menlo Park",
  "narrative": "Victim passed of natural causes.",
  "disposition": "Report taken"
}, {
  "time": "16:24",
  "event": "Suspicious Circumstances",
  "id": "13-2272/130727047",
  "officer": "Officer Ferguson",
  "location": "700 block Hamilton Av, Menlo Park",
  "narrative": "Case taken for suspicious circumstances.",
  "disposition": "Report Taken"
}, {
  "time": "20:28",
  "event": "Drunk Driving",
  "id": "13-2273/130727062",
  "officer": "Officer Mendoza",
  "location": "Willow Road/Coleman Avenue, Menlo Park",
  "subject": [ {
    "name": "GarciaSalgado,Maria",
    "dob": "112089",
    "narrative": "was arrested and booked into County Jail for 23152(a) VC and 23152(b) VC. The vehicle was towed."
  } ],
  "disposition": "Arrest"
}, {
  "time": "20:53",
  "event": "Mental Evaluation",
  "id": "13-2274/130727063",
  "officer": "Officer Venzon",
  "location": "100 block of Linfield Drive, Menlo Park",
  "narrative": "Subject was transported to hospital on a 72 hour hold.",
  "disposition": "Report Taken"
}, {
  "time": "16:24",
  "event": "Mental Evaluation",
  "id": "13-2275/130727047",
  "officer": "Officer Venzon",
  "location": "700 block of Laurel Street, Menlo Park",
  "narrative": "Subject was transported to hospital on a 72 hour hold.",
  "disposition": "Report Taken"
}, {
  "time": "11:21",
  "event": "Grand Theft",
  "id": "13-2276/130728029",
  "officer": "Officer Solorzano",
  "location": "100 block Laurel Av, Menlo Park.",
  "narrative": "Victim reports a stolen watch and other misc items.",
  "disposition": "Report Taken."
}, {
  "time": "13:01",
  "event": "Warrant Arrest",
  "id": "13-2277/130728041",
  "officer": "Officer Wilson",
  "location": "800 block Alma St, Menlo Park.",
  "subject": [ {
    "name": "Madsen, Heather",
    "dob": "092068", 
    "oo": "Redwood City",
    "narrative": "was booked County Jail on a $15,000 warrant o/o Redwood City PD for 11550 HS."
  } ],
  "disposition": "Arrest."
}, {
  "time": "12:35",
  "event": "Information Case",
  "id": "13-2278/130728039",
  "officer": "Officer Solorzano",
  "location": "800 block Alma St, Menlo Park.",
  "narrative": "Case taken for a vehicle damaged by a falling tree branch.",
  "disposition": "Report Taken."
}, {
  "time": "15:12",
  "event": "Grand Theft",
  "id": "13-2279/130728048",
  "officer": "Officer Solorzano",
  "location": "200 block Bay Rd, Menlo Park",
  "narrative": "A walkie talkie was taken from an unlocked vehicle by an unknown suspect(s).",
  "disposition": "Report Taken"
}, {
  "time": "20:10",
  "event": "Drug Activity",
  "id": "13-2280/130728067",
  "officer": "Officer Luevano",
  "location": "Terminal Av/Hill Av, Menlo Park",
  "subject": [ {
    "name": "OrocioLopez, Jaime",
    "dob": "062893", 
    "oo": "East Palo Alto",
    "narrative": "was cited and released for 23222(b) VC."
  } ],
  "disposition": "Citation Issued"
}, {
  "time": "20:49",
  "event": "Petty Theft",
  "id": "13-2281/130728076",
  "officer": "Officer Adair",
  "location": "Alma St/Burgess Dr, Menlo Park",
  "narrative": "An unknown suspect took an unattended iphone.",
  "disposition": "Report Taken"
}, {
  "time": "20:40",
  "event": "Suspended or Revoked License",
  "id": "13-2282/130728074",
  "officer": "Officer Swanson",
  "location": "ValdovinosVarelas, Diego",
    "dob": "112792", 
    "oo": "Oakland",
    "narrative": "was arrested, cited and released for 14601",
  "narrative": "VC. The vehicle was towed.",
  "disposition": "Arrest"
}, {
  "time": "23:39",
  "event": "Hit and Run/Property Damage",
  "id": "13-2283/130728093",
  "officer": "Officer Luevano",
  "location": "1100 block Willow Alley, Menlo Park",
  "narrative": "An unknown vehicle hit a garage door and fled the scene.",
  "disposition": "Report Taken"
}, {
  "time": "23:44",
  "event": "Drunk in Public",
  "id": "13-2284/130728095",
  "officer": "Officer Weber",
  "location": "Willow Rd/Coleman Av, Menlo Park",
  "subject": [ {
    "name": "Tejada, Mauricio",
    "dob": "081364", 
    "oo": "Menlo Park",
    "narrative": "was arrested and booked into County Jail for 647f PC"
  } ],
  "disposition": "Arrest"
}, {
  "time": "08:01",
  "event": "Information Call",
  "id": "13-2285/130729021",
  "officer": "Officer Hughes",
  "location": "300 block Waverley S, Menlo Park.",
  "narrative": "Info case taken for a verbal altercation.",
  "disposition": "Report Taken."
}, {
  "time": "07:56",
  "event": "Threats",
  "id": "13-2286/130729020",
  "officer": "Officer Wilson",
  "location": "100 block Constitution Dr, Menlo Park.",
  "narrative": "Ex-employee made threats. .",
  "disposition": "Report."
}, {
  "time": "08:55",
  "event": "DUI",
  "id": "13-2287/130729027",
  "officer": "Officer Hughes",
  "location": "Willow Rd/101, Menlo Park.",
  "subject": [ {
    "name": "Valdez, Hector",
    "dob": "061383",
    "narrative": "Arrested and booked CJ for 23152 CVC"
  } ],
  "disposition": "Arrest."
}, {
  "time": "09:55",
  "event": "Residential Burglary",
  "id": "13-2288/130729032",
  "officer": "CSO Sepulveda",
  "location": "700 block Live Oak Av, Menlo Park",
  "narrative": "Online report theft of a bicycle from a carport.",
  "disposition": "Report Taken"
}, {
  "time": "11:35",
  "event": "Petty Theft",
  "id": "13-2289/130729040",
  "officer": "CSO Sepulveda",
  "location": "700 block Roble Av, Menlo Park",
  "narrative": "Online report theft of a bicycle from an open patio area.",
  "disposition": "Report Taken"
}, {
  "time": "11:48",
  "event": "Grand Theft",
  "id": "13-2290/130729043",
  "officer": "CSO Sepulveda",
  "location": "100 block Pope St, Menlo Park",
  "narrative": "Online Report theft of camera equipment from a vehicle.",
  "disposition": "Report Taken"
}, {
  "time": "12:11",
  "event": "Petty Theft",
  "id": "13-2291/130729050",
  "officer": "CSO Sepulveda",
  "location": "900 block Alice Ln, Menlo Park",
  "narrative": "Online Report theft of a bicycle from a common area.",
  "disposition": "Report Taken."
}, {
  "time": "12:21",
  "event": "Petty Theft",
  "id": "13-2292/130729053",
  "officer": "CSO Sepulveda",
  "location": "1600 block Stonepine Ln, Menlo Park",
  "narrative": "Online Report theft of outdoor furniture from the yard.",
  "disposition": "Report Taken"
}, {
  "time": "12:29",
  "event": "Residential Burglary",
  "id": "13-2293/130729055",
  "officer": "CSO Sepulveda",
  "location": "800 block Fremont St, Menlo Park",
  "narrative": "Online report theft of a bicycle from a carport occurred between 7/24/13 and 7/25/13.",
  "disposition": "Report Taken."
}, {
  "time": "13:35",
  "event": "Found Property",
  "id": "13-2294/130729065",
  "officer": "Officer Mendoza",
  "location": "2500 block Sandhill Rd, Menlo Park",
  "narrative": "Found property a gym bag and clothing in the bushes.",
  "disposition": "Report Taken."
}, {
  "time": "17:25",
  "event": "Residential Burglary",
  "id": "13-2295/130729097",
  "officer": "CSO Sepulveda",
  "location": "900 block Alice Ln, Menlo Park",
  "narrative": "Online report theft of a bicycle from an unlocked garage.",
  "disposition": "Report Taken."
}, {
  "time": "15:49",
  "event": "Fraud",
  "id": "13-2296/130729082",
  "officer": "Officer Hughes",
  "location": "600 block Oak Grove Av, Menlo Park",
  "narrative": "Case taken for fraud.",
  "disposition": "Report Taken."
}, {
  "time": "19:28",
  "event": "72 Hour Hold",
  "id": "13-2297/130729110",
  "officer": "Officer Tommei",
  "location": "2300 Blk Sharon Rd, Menlo Park",
  "narrative": "Subj transported by medics on a 5150 hold.",
  "disposition": "Report Taken."
}, {
  "time": "21:39",
  "event": "Warrant Arrest",
  "id": "13-2298/130729129",
  "officer": "Sgt Paugh",
  "location": "Paige St/Marsh Rd, Redwood City",
  "subject": [ {
   "name": "Preimesberger, Andrew",
    "dob": "100688",
    "oo": "Redwood City",
    "narrative": "-- Counterfeit Reg Tabs (o/of RWC) was cited and released on a $5,000 warrant o/of Palo Alto PD for VC 14601.1(A) VC 4462(B). The vehicle was towed for registration expired over six months."
  }, { 
   "name": "Preimesberger, Andrew",
    "dob": "090852",
    "oo": "Redwood City",
    "narrative": "(o/of RWC) was cited for 4463a1 VC."
  } ]
}, {
  "time": "22:19",
  "event": "Drug Activity",
  "id": "13-2301/130729135",
  "officer": "Officer Swanson",
  "location": "Marsh Road/Scott Drive, Menlo Park",
  "subject": [ {
    "name": "LANDA, Luis Garcia",
    "dob": "060682", 
    "oo": "Redwood City",
    "narrative": "HMA booked County Jail for violation of 11350(A) HS, 14601.1(A) CVC, and 11357 (B) HS."
  } ],
  "disposition": "Arrest"
}, {
  "time": "01:34",
  "event": "Drunk Driver",
  "id": "13-2303/130730007",
  "officer": "Sgt. Paugh",
  "location": "800 block of Santa Cruz Avenue, Menlo Park",
  "narrative": "Juvenile released to parent.",
  "disposition": "Report taken"
}, {
  "time": "07:37",
  "event": "Vandalism",
  "id": "13-2304/130730012",
  "officer": "Officer Ferguson",
  "location": "700 Blk Laurel St",
  "narrative": "Victim reports unknown damaged his vehicle overnight.",
  "disposition": "Report Taken"
}, {
  "time": "10:28",
  "event": "Petty Theft",
  "id": "13-2305/1307300026",
  "officer": "CSO Sepulveda",
  "location": "Oak Grove Av/Crane St",
  "narrative": "Online report. Victim reports unknown removed parking permit from vehicle.",
  "disposition": "Report Taken"
}, {
  "time": "10:31",
  "event": "Attempt Burglary",
  "id": "13-2306/13073028",
  "officer": "Officer Hughes",
  "location": "200 Blk Waverly St.",
  "narrative": "Victim reports a couple of days ago unknown suspect tried to force entry into laundry room. Nothing taken.",
  "disposition": "Report Taken"
}, {
  "time": "11:41",
  "event": "Warrant Arrest",
  "id": "13-2307/130730040",
  "officer": "Possession of Drug Paraphernalia / Probation Violation Detective DelMundo",
  "location": "200 Blk Gardenia Wy, EPA",
  "subject": [ {
   "name": "MARCHENKO, Julia",
    "dob": "010981",
    "narrative": "was booked CJ on warrants: 1. SFPD No Bail for 11377(a) HS 2. SFPD No Bail for 11350(a) HS 3. SC Co SO No Bail for 11350(a), 11550(a) HS 4. SC Co SO No Bail for 11364 HS"
  }, { 
   "name": "TRAN, Tuan",
    "dob": "020275",
    "narrative": "was booked CJ for 11364 HS & Probation Violation." 
  } ],
  "disposition": "Arrest"
}, {
  "time": "12:14",
  "event": "Possession of Marijuana",
  "id": "13-2308/130730047",
  "officer": "Officer Hughes",
  "location": "Willow Rd/Newbridge St",
  "subject": [ {
    "name": "LOPEZ, Jose",
    "dob": "112990",
    "narrative": "cited for 11357b HS."
  } ],
  "disposition": "Citation Issued"
}, {
  "time": "13:28",
  "event": "Burglary Residential",
  "id": "13-2309/130730058",
  "officer": "Officer Wilson",
  "location": "400 Blk Burgess Dr",
  "narrative": "Victim reports last week unknown forced entry into apartment complex laundry room and removed money from laundry machines.",
  "disposition": "Report Taken"
}, {
  "time": "15:15",
  "event": "Non-Injury Accident",
  "id": "13-2310/130730070",
  "officer": "Officer Ferguson",
  "location": "Encinal Av/El Camino Real, Menlo Park",
  "narrative": "Two vehicles, no injuries.",
  "disposition": "Report Taken."
}, {
  "time": "19:31",
  "event": "Warrant Arrest",
  "id": "13-2311/130730104",
  "officer": "Officer Luevano",
  "location": "1200 Blk Willow Rd, Menlo Park",
  "subject": [ {
    "name": "TOVAR, Antonio",
    "dob": "052057",
    "narrative": "was cited and released on a $7,500 warrant o/of MPPD for 14601 VC."
  } ],
  "disposition": "Report Taken."
}, {
  "time": "20:12",
  "event": "Suspended license",
  "id": "13-2312/130730110",
  "officer": "Officer Swanson",
  "location": "E O&rsquo;Keefe St/Euclid Av, Menlo Park",
  "subject": [ {
    "name": "AGUILAR, Azael",
    "dob": "022889",
    "oo": "East Palo Alto",
    "narrative": "(HM o/of EPA) was cited and released for 14601 VC."
  } ],
  "disposition": "Report Taken."
}, {
  "time": "21:12",
  "event": "Warrant Arrest",
  "id": "13-2313/130730119",
  "officer": "Officer Tommei",
  "location": "Ivy Dr/Willow Rd, Menlo Park",
  "subject": [ {
    "name": "TORRES-MERCADO, Jose",
    "dob": "071175",
    "oo": "East Palo Alto",
    "narrative": "(HM o/of EPA) was cited and released on a $5,000 warrant o/of EPAPD for 594(b)(2)A PC"
  } ],
  "disposition": "Report Taken."
}, {
  "time": "10:52",
  "event": "Information Case",
  "id": "13-2314/130731034",
  "officer": "Detective Torres",
  "location": "MPPD",
  "narrative": "Information case taken for an ongoing narcotics investigation",
  "disposition": "Report Taken"
}, {
  "time": "11:42",
  "event": "Domestic Disturbance",
  "id": "13-2315/130731047",
  "officer": "Officer Wilson",
  "location": "1100 block Willow Rd, Menlo Park",
  "narrative": "Information case taken for a verbal domestic dispute.",
  "disposition": "Report Taken"
}, {
  "time": "11:57",
  "event": "Burglary",
  "id": "13-2316/13031050",
  "officer": "Officer Hughes",
  "location": "300 block Waverly St, Menlo Park",
  "narrative": "Victim reports overnight unknown suspect forced entry into laundry room and removed coins from laundry machines.",
  "disposition": "Report Taken"
}, {
  "time": "12:57",
  "event": "Information Case",
  "id": "13-2317/130731055",
  "officer": "CSO Sepulveda",
  "location": "400 block Laurel St, Menlo Park",
  "narrative": "Case taken for informational purposes.",
  "disposition": "Report Taken"
}, {
  "time": "19:08",
  "event": "Information Case",
  "id": "13-2318/130731102",
  "officer": "Detective Douglas",
  "location": "MPPD",
  "narrative": "Information case taken for an ongoing narcotics investigation",
  "disposition": "Report Taken"
}, {
  "time": "20:05",
  "event": "Lost Property",
  "id": "13-2319/130731105",
  "officer": "Officer Weber",
  "location": "1200 block Willow Rd, Menlo Park",
  "narrative": "Case taken for a lost iphone",
  "disposition": "Report Taken"
}, {
  "time": "21:06",
  "event": "Suspended or Revoked License",
  "id": "13-2320/130731111",
  "officer": "Officer Swanson",
  "location": "Newbridge St/Saratoga Av, East Palo Alto Burton, Christopher",
    "dob": "052768", 
    "oo": "San Francisco",
    "narrative": "was cited and released for 14601.1(a) VC.",
  "narrative": "The vehicle was towed.",
  "disposition": "Arrest"
}, {
  "time": "11:45",
  "event": "Vehicle Tampering",
  "id": "13-2321/130801046",
  "officer": "CSO Mazon",
  "location": "400 block Laurel St, Menlo Park",
  "narrative": "Parts were removed from a vehicle by unknown(s).",
  "disposition": "Report Taken"
}, {
  "time": "12:33",
  "event": "Information Case",
  "id": "13-2322/130801055",
  "officer": "Officer Ferguson",
  "location": "1700 block Oak Av, Menlo Park",
  "narrative": "Information case taken for an ongoing harassment.",
  "disposition": "Report Taken"
}, {
  "time": "13:12",
  "event": "Hit and Run w/Prop Damage",
  "id": "13-2323/130801061",
  "officer": "CSO Sepulveda",
  "location": "2300 block Sharon Rd, Menlo Park",
  "disposition": "Report Taken"
}, {
  "time": "14:39",
  "event": "Vehicle Accident/Non Injury",
  "id": "13-2324/130801077",
  "officer": "CSO Mazon",
  "location": "200 block El Camino Real, Menlo Park",
  "disposition": "Report Taken"
}, {
  "time": "19:19",
  "event": "Towed Vehicle",
  "id": "13-2325/130801114",
  "officer": "Officer Mendoza",
  "location": "600 block Alma St, Menlo Park",
  "narrative": "A vehicle was towed for being abandoned in a city parking lot",
  "disposition": "Report Taken"
}, {
  "time": "20:03",
  "event": "Verbal Disturbance",
  "id": "13-2326/130801122",
  "officer": "Officer Venzon",
  "location": "1100 block Windermere Av, Menlo Park",
  "narrative": "Information case taken for a verbal dispute",
  "disposition": "Report Taken"
}, {
  "time": "21:30",
  "event": "Information Case",
  "id": "13-2327/130801136",
  "officer": "Officer Mackdanz",
  "location": "700 block Laurel St, Menlo Park",
  "narrative": "Case taken for informational purposes.",
  "disposition": "Report Taken"
}, {
  "time": "22:12",
  "event": "Drunk in Public",
  "id": "13-2328/130801142",
  "officer": "Officer Ordone",
  "location": "Hamilton Av/Madera Av, Menlo Park",
  "subject": [ {
    "name": "Webster, Teddy",
    "dob": "121868", 
    "oo": "Oakland",
    "narrative": "was arrested and booked into County Jail for 647(f) PC & 11364.1(a) HS"
  } ],
  "disposition": "Arrest"
}, {
  "time": "22:18",
  "event": "Auto Burglary",
  "id": "13-2329/130801143",
  "officer": "Officer Mackdanz",
  "location": "2700 block Sand Hill Rd, Menlo Park",
  "narrative": "Auto vehicle burglary with no suspect(s) information.",
  "disposition": "Report Taken"
}, {
  "time": "22:59",
  "event": "Auto Burglary",
  "id": "13-2330/130801147",
  "officer": "Officer Mackdanz",
  "location": "2800 block Sand Hill Rd, Menlo Park",
  "narrative": "Auto vehicle burglary with no suspect(s) information.",
  "disposition": "Report Taken"
}, {
  "time": "23:11",
  "event": "Drug Activity",
  "id": "13-2331/130801148",
  "officer": "Officer Mendoza",
  "location": "Gilbert Av/Willow Rd, Menlo Park",
  "subject": [ {
    "name": "Welsh, Elliot",
    "dob": "070589", 
    "oo": "Santa Cruz",
    "narrative": "was arrested and booked into County Jail for 11350(a) HS & 11550(a) HS"
  } ],
  "disposition": "Arrest"
}, {
  "time": "22:53",
  "event": "Drug Activity",
  "id": "13-2332/130801146",
  "officer": "Officer Schuler",
  "location": "Ivy Dr/Madera Av, Menlo Park",
  "subject": [ {
    "name": "Franklin, Edward",
    "dob": "072368", 
    "oo": "Redwood City",
    "narrative": "was arrested and booked County Jail for 11350(a) HS & 11364.1(a) HS."
  } ],
  "disposition": "Arrest"
}, {
  "time": "06:37",
  "event": "Vehicle Accident/No Injury",
  "id": "13-2333/130802008",
  "officer": "Officer Ferguson",
  "location": "700 block Valpariso Av, Menlo Park",
  "disposition": "Report Taken"
}, {
  "time": "07:45",
  "event": "Suspended or Revoked License",
  "id": "13-2334/130802010",
  "officer": "Officer Russell",
  "location": "Hwy 101/Marsh Rd, Menlo Park",
  "subject": [ {
    "name": "Gonzalez, Antonio",
    "dob": "122991", 
    "oo": "Redwood City",
    "narrative": "cited and released for 14601.1(a) VC. The vehicle was towed."
  } ],
  "disposition": "Arrested."
}, {
  "time": "12:17",
  "event": "Towed Vehicle",
  "id": "13-2335/130802036",
  "officer": "CSO Mazon",
  "location": "700 block Live Oak Av, Menlo Park",
  "narrative": "A vehicle was towed for having expired registration over 6 months.",
  "disposition": "Report Taken"
}, {
  "time": "13:17",
  "event": "Property for Destruction",
  "id": "13-2336/130802045",
  "officer": "Officer Russell",
  "location": "Obrien Dr/Willow Rd, Menlo Park",
  "narrative": "Case taken for destruction of a bb gun.",
  "disposition": "Report Taken"
}, {
  "time": "12:53",
  "event": "Canceled Case",
  "id": "13-2337/130802040",
}, {
  "time": "14:11",
  "event": "Fraud",
  "id": "13-2338/130802048",
  "officer": "Officer Lacy",
  "location": "1100 block Chester St, Menlo Park",
  "narrative": "Case taken for credit card fraud.",
  "disposition": "Report Taken"
}, {
  "time": "16:31",
  "event": "Lost Property",
  "id": "13-2339/130802062",
  "officer": "Officer Ferguson",
  "location": "700 block Laurel St, Menlo Park",
  "narrative": "Case taken for a lost passport",
  "disposition": "Report Taken"
}, {
  "time": "16:14",
  "event": "Fraud",
  "id": "13-2340/130802059",
  "officer": "Officer Lacy",
  "location": "200 block Arden Rd, Menlo Park",
  "narrative": "Case taken for purchase of fraudulent concert tickets Disposition: Report Taken"
}, {
  "time": "19:14",
  "event": "Drug Activity",
  "id": "13-2341/130802074",
  "officer": "Officer Ordone",
  "location": "Willow Rd/ RR Tracks, Menlo Park",
  "subject": [ {
    "name": "Gonzalez, Oscar",
    "dob": "011488", 
    "oo": "Redwood City",
    "narrative": "was arrested and booked into County Jail for 11350(a) HS & 11550(a) HS"
  } ],
  "disposition": "Arrest"
}, {
  "time": "20:41",
  "event": "Fraud",
  "id": "13-2342/130802080",
  "officer": "Officer Mendoza",
  "location": "100 block Baywood Av, Menlo Park",
  "narrative": "Victims social security number was used to open a fraudulent cell phone account.",
  "disposition": "Report Taken"
}, {
  "time": "00:04",
  "event": "Outside Agency Assist",
  "id": "13-2343/130803001",
  "officer": "Officer Neumann",
  "location": "1300 block Laurel St, San Carlos",
  "narrative": "Case taken for assisting another agency",
  "disposition": "Report Taken"
}, {
  "time": "05:06",
  "event": "Burglary",
  "id": "13-2344/130803015",
  "officer": "Officer Ordone",
  "location": "1000 block Madera Av, Menlo Park",
  "subject": [ {
    "name": "ChavezSosa, Jose",
    "dob": "121976",
    "narrative": "was arrested and booked into County Jail for 460(a) PC, 11377(A) HS, 11364.1(a) HS, 466 PC and 4573 PC"
  } ],
  "disposition": "Arrested"
}, {
  "time": "08:31",
  "event": "Suspended or Revoked License",
  "id": "13-2346/130803021",
  "officer": "Officer Phu",
  "location": "Ravenswood Av/El Camino Real, Menlo Park",
  "subject": [ {
    "name": "Dixit, Nisha",
    "dob": "020987", 
    "oo": "Palo Alto",
    "narrative": "was cited and released for 14601.2(a) VC. The vehicle was towed" 
  } ],
  "disposition": "Arrested."
}, {
  "time": "16:59",
  "event": "Burglary/Shoplifting",
  "id": "13-2347/130803066",
  "officer": "Officer Phu",
  "location": "1000 block University Dr, Menlo Park",
  "subject": [ {
    "name": "Davis, Sharon",
    "dob": "031754", 
    "oo": "San Francisco",
    "narrative": "was arrested and booked into County Jail for 460(b) PC & 666 PC"
  } ],
  "disposition": "Arrest"
}, {
  "time": "22:32",
  "event": "Hit and Run w/Prop Damage",
  "id": "13-2348/130803101",
  "officer": "Officer Venzon",
  "location": "1100 block Madera Av, Menlo Park",
  "narrative": "Victim vehicle was hit by an unknown vehicle while parked.",
  "disposition": "Report Taken"
}, {
  "time": "23:20",
  "event": "Found Property",
  "id": "13-2349/130803107",
  "officer": "Officer Mackdanz",
  "location": "900 block Santa Cruz Av, Menlo Park",
  "narrative": "Found bicycle",
  "disposition": "Report Taken"
}, {
  "time": "23:04",
  "event": "Drug Activity",
  "id": "13-2350/130803105",
  "officer": "Officer Schuler",
  "location": "Emmet Wy/Kavanaugh Dr, East Palo Alto",
  "subject": [ {
    "name": "Milligan, Arthur",
    "dob": "110156", 
    "oo": "Redwood City",
    "narrative": "arrested and booked into County Jail for 11350 HS & 14601.1(a) VC. The vehicle was towed."
  } ],
  "disposition": "Arrest"
}, {
  "time": "07:36",
  "event": "Indecent Exposure",
  "id": "13-2351/130804018",
  "officer": "Officer Lacy",
  "location": "Willow Rd/Newbridge St, Menlo Park",
  "subject": [ {
    "name": "Mcghee, David",
    "dob": "052558", 
    "oo": "Redwood City",
    "narrative": "was cited and released for 314.1 PC."
  } ],
  "disposition": "Arrest"
}, {
  "time": "07:45",
  "event": "Auto Burglary",
  "id": "13-2352/130804019",
  "officer": "Officer Trask",
  "location": "2200 block Sharon Rd, Menlo Park",
  "narrative": "Vehicle broken into by unknown subject(s) and miscellaneous items were taken",
  "disposition": "Report Taken"
}, {
  "time": "08:41",
  "event": "Information Case",
  "id": "13-2353/130804022",
  "officer": "Officer Ferguson",
  "location": "1300 block Carlton Av, Menlo Park",
  "narrative": "Information case taken for a child custody issue.",
  "disposition": "Report Taken"
}, {
  "time": "13:00",
  "event": "Vandalism",
  "id": "13-2354/130804039",
  "officer": "Officer Roy",
  "location": "600 block Carlton Av, Menlo Park",
  "narrative": "Case taken for damage done to a television by a known subject",
  "disposition": "Report Taken"
}, {
  "time": "14:50",
  "event": "Petty Theft",
  "id": "13-2355/130804046",
  "officer": "Officer Phu",
  "location": "1100 block Windermere Av, Menlo Park",
  "narrative": "An unknown subject(s) stole a license plate off a vehicle.",
  "disposition": "Report Taken"
}, {
  "time": "16:31",
  "event": "Burglary",
  "id": "13-2356/130804055",
  "officer": "Officer Ferguson",
  "location": "Unit block Willow Rd, Menlo Park",
  "narrative": "A bicycle was stolen out of a locked bicycle storage room.",
  "disposition": "Report Taken"
}, {
  "time": "16:09",
  "event": "Runaway Juvenile",
  "id": "13-2357/130804051",
  "officer": "Officer Russell",
  "location": "1400 block San Antonio St, Menlo Park",
  "narrative": "A juvenile was reported as a runaway.",
  "disposition": "Report Taken"
}, {
  "time": "18:29",
  "event": "Suspicious Circumstances",
  "id": "13-2358/130804063",
  "officer": "Officer Ordone",
  "location": "900 block Oak Ln, Menlo Park",
  "narrative": "Resident believed someone gained entry into the house because the chain was on the door. The house was checked and no one was found. Case was taken for informational purposes.",
  "disposition": "Report Taken"
}, {
  "time": "18:23",
  "event": "Petty Theft",
  "id": "13-2359/130804062",
  "officer": "Officer Mendoza",
  "location": "1300 block Willow Rd, Menlo Park",
  "narrative": "Unknown subject(s) stole a bicycle parked outside of a market.",
  "disposition": "Report Taken"
}, {
  "time": "21:52",
  "event": "Drug Activity",
  "id": "13-2360/130804075",
  "officer": "Officer Ordone",
  "location": "1000 block Sonoma Av, Menlo Park",
  "subject": [ {
    "name": "Davis, Scott",
    "dob": "110866", 
    "oo": "Menlo Park",
    "narrative": "was arrested & booked into County Jail for 11377(a) HS."
  } ],
  "disposition": "Arrest"
}, {
  "time": "01:30",
  "event": "Vehicle Accident - No Injury",
  "id": "13-2361/130805007",
  "officer": "Officer Venzon",
  "location": "Willow Rd/Obrien Dr, Menlo Park.",
  "narrative": "Report taken for solo vehicle collision.",
  "disposition": "Report Taken."
}, {
  "time": "01:25",
  "event": "Warrant Arrest",
  "id": "13-2362/130805006",
  "officer": "Officer Mackdanz",
  "location": "Middlefield Rd/Ringwood Av, Menlo Park.",
  "subject": [ {
    "name": "Abdullah, Hatim",
    "dob": "011456", 
    "oo": "Mill Valley",
    "narrative": "was arrested, cited and released on a $7,500 warrant o/o Marin CO SO for 11550a HS."
  } ],
  "disposition": "Arrest."
}, {
  "time": "06:46",
  "event": "Burglary",
  "id": "13-2363/130805010",
  "officer": "Officer Solorzano",
  "location": "1200 blk El Camino Real, Menlo Park.",
  "narrative": "Report taken for commercial burglary.",
  "disposition": "Report Taken."
}, {
  "time": "10:11",
  "event": "Battery",
  "id": "13-2364/130805019",
  "officer": "Officer Poirier",
  "location": "Bayfront Ex/Willow Rd, Menlo Park.",
  "narrative": "Reported assault/battery occurred after a traffic altercation.",
  "disposition": "Report Taken."
}, {
  "time": "11:18",
  "event": "Theft",
  "id": "13-2365/130805034",
  "officer": "Officer Poirier",
  "location": "300 blk Marmona Dr, Menlo Park.",
  "narrative": "Reported theft of jewelry.",
  "disposition": "Report Taken."
}, {
  "time": "13:08",
  "event": "Hit and Run w/Prop Damage",
  "id": "13-2366/130805047",
  "officer": "Officer Solorzano",
  "location": "500 blk El Camino Real, Menlo Park.",
  "disposition": "Report Taken."
}, {
  "time": "14:39",
  "event": "Fraud",
  "id": "13-2367/130805062",
  "officer": "CSO Sepulveda",
  "location": "1700 blk Stanford Ct, Menlo Park.",
  "narrative": "Report taken for ID theft.",
  "disposition": "Report Taken."
}, {
  "time": "15:29",
  "event": "Property for Destruction",
  "id": "13-2368/130805074",
  "officer": "Officer Igno",
  "location": "1300 blk Obrien Dr, Menlo Park.",
  "narrative": "Bullets turned in for destruction.",
  "disposition": "Report Taken."
}, {
  "time": "15:46",
  "event": "Mental Evaluation",
  "id": "13-2369/130805077",
  "officer": "Officer Poirier",
  "location": "100 blk Oak Ct, Menlo Park.",
  "narrative": "Patient transported by medics.",
  "disposition": "Report Taken."
}, {
  "time": "17:02",
  "event": "Theft",
  "id": "13-2370/130805087",
  "officer": "CSO Sepulveda",
  "location": "200 blk Terminal AV, Menlo Park.",
  "narrative": "Theft of a rear license plate.",
  "disposition": "Report Taken."
}, {
  "time": "18:59",
  "event": "Information Report",
  "id": "13-2371/130805099",
  "officer": "Sgt Dixon",
  "location": "1000 blk University Dr, Menlo Park.",
  "narrative": "Case taken for a dispute with a customer.",
  "disposition": "Report Taken."
}, {
  "time": "19:31",
  "event": "Petty Theft",
  "id": "13-2372/130805110",
  "officer": "CSO Sepulveda",
  "location": "1300 bBlk Hillview Dr, Menlo Park.",
  "narrative": "On line report for a stolen bicycle.",
  "disposition": "Report Taken."
}, {
  "time": "19:46",
  "event": "Vandalism",
  "id": "13-2373/130805112",
  "officer": "Officer Luevano",
  "location": "3700 blk Haven Av, Menlo Park.",
  "narrative": "Case taken for a broken window.",
  "disposition": "Report Taken."
}, {
  "time": "21:01",
  "event": "Suspended License",
  "id": "13-2374/130805122",
  "officer": "Officer Swanson",
  "location": "Oak Grove Av/Alma St, Menlo Park.",
  "subject": [ {
    "name": "Strawhacker, Victoria",
    "dob": "121661",
    "oo": "Redwood City",
    "narrative": "(WF o/of RWC) cited and released on a suspended license. Vehicle impounded by El Dorado Towing for 30 days."
  } ],
  "disposition": "Report Taken."
}, {
  "time": "22:08",
  "event": "Drunk Driver",
  "id": "13-2375/130805130",
  "officer": "Officer Luevano",
  "location": "1100 blk Willow Rd, Menlo Park.",
  "subject": [ {
    "name": "Landaverde, Juan Carlos",
    "dob": "070572",
    "oo": "East Palo Alto",
    "narrative": "HMA of EPA arrested and booked CJ. Vehicle towed by Ellison's Towing. Vehicle description: 1990 Blue Hond Accord."
  } ],
  "disposition": "Arrest."
}, {
  "time": "04:23",
  "event": "Tow Request",
  "id": "13-2376/130806012",
  "officer": "CSO Rios",
  "location": "100 blk E Okeefe St, Menlo Park.",
  "narrative": "Vehicle towed by National Towing for expired registration. Vehicle description: 1998 Ford.",
  "disposition": "Vehicle Towed."
}, {
  "time": "07:01",
  "event": "Warrant Arrest",
  "id": "13-2377/130806015",
  "officer": "Officer Solorzano",
  "location": "900 blk Hermosa Wy, Menlo Park.",
  "subject": [ {
    "name": "Kuznetsov, Vladimir",
    "dob": "060270",
    "oo": "Menlo Park",
    "narrative": "WMA of MP booked CJ on $7500 MPPD warrant for 2800 VC & 12500 VC."
  } ],
  "disposition": "Arrest."
}, {
  "time": "08:38",
  "event": "Vandalism",
  "id": "13-2378/130806020",
  "officer": "Officer Solorzano",
  "location": "1000 blk Siskiyou Dr, Menlo Park.",
  "narrative": "Victim reports windshield on vehicle was smashed by unknown suspect overnight.",
  "disposition": "Report Taken."
}, {
  "time": "09:25",
  "event": "Information Report",
  "id": "13-2379/130806025",
  "officer": "Officer Wilson",
  "location": "00 Hacker Wy, Menlo Park.",
  "narrative": "Case taken for a medical.",
  "disposition": "Report Taken."
}, {
  "time": "10:37",
  "event": "Animal- General Call",
  "id": "13-2380/130806031",
  "officer": "Officer Solorzano",
  "location": "300 blk Sharon Park Dr, Menlo Park.",
  "narrative": "Victim reports being bitten by his neighbor�s dog on 8/5.",
  "disposition": "Report Taken."
}, {
  "time": "22:00",
  "event": "Drug Activity",
  "id": "13-2381/130806081",
  "officer": "Officer Weber",
  "location": "00 blk La Loma Dr, Menlo Park.",
  "subject": [ {
    "name": "Arrington, Connor",
    "dob": "080695",
    "oo": "Menlo Park",
    "narrative": "WMA of MP arrested and cited for 11357b hs. Vehicle description: 2001 Chev."
  } ],
  "disposition": "Citation Issued."
}, {
  "time": "08:31",
  "event": "Petty Theft",
  "id": "13-2382/130807032",
  "officer": "Officer Solorzano",
  "location": "700 blk Roble Av, Mp.",
  "narrative": "Reported theft of bike from carport between 2100 to 0630 hrs.",
  "disposition": "Report Taken."
}, {
  "time": "09:07",
  "event": "Found Property",
  "id": "13-2383/130807033",
  "officer": "Officer Solorzano",
  "location": "800 blk Fremont St, Menlo Park.",
  "narrative": "Report taken for a found wallet.",
  "disposition": "Report Taken."
}, {
  "time": "13:27",
  "event": "Unlicensed Driver",
  "id": "13-2384/130807054",
  "officer": "Officer Baxter",
  "location": "Willow Rd/Durham St, Menlo Park.",
  "subject": [ {
    "name": "AscencioMedina, Mitchell",
    "dob": "082793",
    "oo": "South San Francisco",
    "narrative": "male of SSF cited and released for 12500vc and 31 vc."
  } ],
  "disposition": "Citation Issued."
}, {
  "time": "08:48",
  "event": "Information",
  "id": "13-2385/130806021",
  "officer": "Officer Baxter",
  "location": "600 blk Woodland Av, Menlo Park.",
  "narrative": "Information case taken for juvenile info/contact.",
  "disposition": "Report Taken."
}, {
  "time": "17:07",
  "event": "Warrant Arrest",
  "id": "13-2386/130807077",
  "officer": "Detective Douglas",
  "location": "3000 blk Monterey Hwy, San Jose.",
  "subject": [ {
    "name": "Jennings, David Taliga",
    "dob": "121819",
    "oo": "San Jose",
    "narrative": "74 o/o San Jose was arrested/booked into San Mateo County Jail for an outstanding Santa Clara County SO warrant. Vehicle description: 5 Chry."
  } ],
  "disposition": "Arrest."
}, {
  "time": "18:51",
  "event": "Tow Request",
  "id": "13-2387/130807090",
  "officer": "CSO Mazon",
  "location": "1100 blk Orange Av, Menlo Park.",
  "narrative": "Vehicle towed by Redwood Auto auth, 22651(o) VC. Vehicle description: 1994 White/4D Niss Altima.",
  "disposition": "Vehicle Towed."
}, {
  "time": "21:20",
  "event": "Petty Theft",
  "id": "13-2388/130807111",
  "officer": "Officer Tommei",
  "location": "1300 blk Carlton Av, Menlo Park.",
  "narrative": "Report taken for theft of a purple Giant 10 speed bike with a torn seat.",
  "disposition": "Report Taken."
}, {
  "time": "22:29",
  "event": "Recovered Stolen Vehicle",
  "id": "13-2389/130807121",
  "officer": "Officer Swanson",
  "location": "1000 blk Obrien Dr, Menlo Park.",
  "narrative": "Stolen vehicle out of San Mateo PD located unoccupied and released to the owner. Stolen lic plates were also placed on the stolen vehicle and they were removed/located. Vehicle description: 1994 Blue Hond Accord.",
  "disposition": "Report Taken."
}, {
  "time": "21:32",
  "event": "Information",
  "id": "13-2390/130806079",
  "officer": "Officer Tommei",
  "location": "1200 blk Madera Av, Menlo Park.",
  "narrative": "Information case taken for wel check/juvenile case.",
  "disposition": "Report Taken."
} ];

