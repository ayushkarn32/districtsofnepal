function myfunction(){
		$('#district').empty();
		var states=document.getElementById("states").value;
      a=[
          {
              "id": "1",
              "title": "Achham",
              "stateno": "7"
          },
          {
              "id": "2",
              "title": "Arghakhanchi",
              "stateno": "5"
          },
          {
              "id": "3",
              "title": "Baglung",
              "stateno": "4"
          },
          {
              "id": "4",
              "title": "Baitadi",
              "stateno": "7"
          },
          {
              "id": "5",
              "title": "Bajhang",
              "stateno": "7"
          },
          {
              "id": "6",
              "title": "Bajura",
              "stateno": "7"
          },
          {
              "id": "7",
              "title": "Banke",
              "stateno": "5"
          },
          {
              "id": "8",
              "title": "Bara",
              "stateno": "2"
          },
          {
              "id": "9",
              "title": "Bardiya",
              "stateno": "5"
          },
          {
              "id": "10",
              "title": "Bhaktapur",
              "stateno": "3"
          },
          {
              "id": "11",
              "title": "Bhojpur",
              "stateno": "1"
          },
          {
              "id": "12",
              "title": "Chitwan",
              "stateno": "3"
          },
          {
              "id": "13",
              "title": "Dadeldhura",
              "stateno": "7"
          },
          {
              "id": "14",
              "title": "Dailekh",
              "stateno": "6"
          },
          {
              "id": "15",
              "title": "Dang",
              "stateno": "5"
          },
          {
              "id": "16",
              "title": "Darchula",
              "stateno": "7"
          },
          {
              "id": "17",
              "title": "Dhading",
              "stateno": "3"
          },
          {
              "id": "18",
              "title": "Dhankuta",
              "stateno": "1"
          },
          {
              "id": "19",
              "title": "Dhanusa",
              "stateno": "2"
          },
          {
              "id": "20",
              "title": "Dolakha",
              "stateno": "3"
          },
          {
              "id": "21",
              "title": "Dolpa",
              "stateno": "6"
          },
          {
              "id": "22",
              "title": "Doti",
              "stateno": "7"
          },
          {
              "id": "23",
              "title": "Gorkha",
              "stateno": "4"
          },
          {
              "id": "24",
              "title": "Gulmi",
              "stateno": "5"
          },
          {
              "id": "25",
              "title": "Humla",
              "stateno": "6"
          },
          {
              "id": "26",
              "title": "Ilam",
              "stateno": "1"
          },
          {
              "id": "27",
              "title": "Jajarkot",
              "stateno": "6"
          },
          {
              "id": "28",
              "title": "Jhapa",
              "stateno": "1"
          },
          {
              "id": "29",
              "title": "Jumla",
              "stateno": "6"
          },
          {
              "id": "30",
              "title": "Kailali",
              "stateno": "7"
          },
          {
              "id": "31",
              "title": "Kalikot",
              "stateno": "6"
          },
          {
              "id": "32",
              "title": "Kanchanpur",
              "stateno": "7"
          },
          {
              "id": "33",
              "title": "Kapilbastu",
              "stateno": "5"
          },
          {
              "id": "34",
              "title": "Kaski",
              "stateno": "4"
          },
          {
              "id": "35",
              "title": "Kathmandu",
              "stateno": "3"
          },
          {
              "id": "37",
              "title": "Kavrepalanchok",
              "stateno": "3"
          },
          {
              "id": "38",
              "title": "Khotang",
              "stateno": "1"
          },
          {
              "id": "39",
              "title": "Lalitpur",
              "stateno": "3"
          },
          {
              "id": "40",
              "title": "Lamjung",
              "stateno": "4"
          },
          {
              "id": "41",
              "title": "Mahottari",
              "stateno": "2"
          },
          {
              "id": "42",
              "title": "Makwanpur",
              "stateno": "3"
          },
          {
              "id": "43",
              "title": "Manang",
              "stateno": "4"
          },
          {
              "id": "44",
              "title": "Morang",
              "stateno": "1"
          },
          {
              "id": "45",
              "title": "Mugu",
              "stateno": "6"
          },
          {
              "id": "46",
              "title": "Mustang",
              "stateno": "4"
          },
          {
              "id": "47",
              "title": "Myagdi",
              "stateno": "4"
          },
          {
              "id": "48",
              "title": "Nawalparasi West",
              "stateno": "5"
          },
          {
              "id": "49",
              "title": "Nuwakot",
              "stateno": "3"
          },
          {
              "id": "50",
              "title": "Okhaldhunga",
              "stateno": "1"
          },
          {
              "id": "51",
              "title": "Palpa",
              "stateno": "5"
          },
          {
              "id": "52",
              "title": "Panchthar",
              "stateno": "1"
          },
          {
              "id": "53",
              "title": "Parbat",
              "stateno": "4"
          },
          {
              "id": "54",
              "title": "Parsa",
              "stateno": "2"
          },
          {
              "id": "55",
              "title": "Pyuthan",
              "stateno": "5"
          },
          {
              "id": "56",
              "title": "Ramechhap",
              "stateno": "3"
          },
          {
              "id": "57",
              "title": "Rasuwa",
              "stateno": "3"
          },
          {
              "id": "58",
              "title": "Rautahat",
              "stateno": "2"
          },
          {
              "id": "59",
              "title": "Rolpa",
              "stateno": "5"
          },
          {
              "id": "60",
              "title": "Rukum East",
              "stateno": "5"
          },
          {
              "id": "61",
              "title": "Rukum West",
              "stateno": "6"
          },
          {
              "id": "62",
              "title": "Rupandehi",
              "stateno": "5"
          },
          {
              "id": "63",
              "title": "Salyan",
              "stateno": "6"
          },
          {
              "id": "64",
              "title": "Sankhuwasabha",
              "stateno": "1"
          },
          {
              "id": "65",
              "title": "Saptari",
              "stateno": "2"
          },
          {
              "id": "66",
              "title": "Sarlahi",
              "stateno": "2"
          },
          {
              "id": "67",
              "title": "Sindhuli",
              "stateno": "3"
          },
          {
              "id": "68",
              "title": "Sindhupalchok",
              "stateno": "3"
          },
          {
              "id": "69",
              "title": "Siraha",
              "stateno": "2"
          },
          {
              "id": "70",
              "title": "Solukhumbu",
              "stateno": "1"
          },
          {
              "id": "71",
              "title": "Sunsari",
              "stateno": "1"
          },
          {
              "id": "72",
              "title": "Surkhet",
              "stateno": "6"
          },
          {
              "id": "73",
              "title": "Syangja",
              "stateno": "4"
          },
          {
              "id": "74",
              "title": "Tanahu",
              "stateno": "4"
          },
          {
              "id": "75",
              "title": "Taplejung",
              "stateno": "1"
          },
          {
              "id": "76",
              "title": "Terhathum",
              "stateno": "1"
          },
          {
              "id": "77",
              "title": "Udayapur",
              "stateno": "1"
          }
      ]

     a.map((item) => {
	if(item.stateno == states)
     {
		$('#district').append('<option>'+item.title+'</option>')

      }	
   })
}
