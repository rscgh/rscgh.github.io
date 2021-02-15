	






$.ajax({
        url: 'https://api.wit.ai/message?v=20140826&q=',
        beforeSend: function(xhr) {
             xhr.setRequestHeader("Authorization", "Bearer xFE0kqs5Z21k5vqd")
        }, success: 
})


https://api.mendeley.com/search/catalog?query=whales


curl 'https://api.mendeley.com/search/catalog?query=polar+bears&limit=3' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Accept: application/vnd.mendeley-document.1+json'

curl='https://api.mendeley.com/search/catalog?query=polar+bears&limit=3'


succfunc1 = function(data){
  console.log("received data")
  console.log(data);
}

catalogsearch = function(curl, succfunc) {
	$.ajax({ url: curl,
        beforeSend: function(xhr) { xhr.setRequestHeader("Authorization", "Bearer xFE0kqs5Z21k5vqd")}, 
        success: succfunc
	})
}

//catalogsearch(curl, succfunc1)

curl2 = "https://api.mendeley.com/oauth/authorize?client_id=9513&response_type=code&scope=all&state=213653957730.97845"
catalogsearch(curl2, succfunc1)

curl2 = "https://api.mendeley.com/oauth/authorize?client_id=9513&redirect_uri=http:%2F%2Fcitavy.de&response_type=code&scope=all&state=213653957730.97845"
catalogsearch(curl2, succfunc1)

https://api.mendeley.com/oauth/authorize?client_id=9513&response_type=code&scope='all'&access_type=offline&redirect_uri=http:%2F%2Fcitavy.de
https://api.mendeley.com/oauth/authorize?client_id=9513&redirect_uri=http:%2F%2Fcitavy.de&response_type=code&scope=all&state=21365353332730.97845

=>
http://citavy.de/?code=8ekzFqxwdQV5btz4g00W5aSb4S4&state=213653957730.97845

https://api.mendeley.com/oauth/token

succfunc1 = function(data){
  console.log("received data")
  console.log(data);
}

$.ajax({
  type: "POST",
  url: "https://api.mendeley.com/oauth/token",
  data: {'grant_type': 'authorization_code', 'code': 'XcFs1uf6kAsaxsohLkAh-BgzHjA' ,'redirect_uri': 'http://citavy.de'},
  success: succfunc1,
  beforeSend : function(xhr) { 
  	xhr.setRequestHeader ("Authorization", "Basic " + btoa("9513:xFE0kqs5Z21k5vqd"));
  	xhr.setRequestHeader ("Content-Type", "application/x-www-form-urlencoded");
  },
});

=>

{
  "access_token": "MSwxNjEyNTU3NzA1NjI1LDYxMDgzMTI4MSw5NTEzLGFsbCwsLGI2NzYxMGQ0MjIxN2EwNGZiZTY4MTIyOGM0YzIxNWFkYTdlZGd4cnFiLDVhYTM4NGFlLTA3N2YtMzRhYi1hZDVkLTRlY2QxMmY2MjZkNyx1aUZQazBEZmZ1bHU4OEJoU2NQYzQyTjd4ZDQ",
  "token_type": "bearer",
  "expires_in": 3600,
  "refresh_token": "MSw2MTA4MzEyODEsOTUxMyxhbGwsLCwsNWFhMzg0YWUtMDc3Zi0zNGFiLWFkNWQtNGVjZDEyZjYyNmQ3LG5vdC11c2VkLG5vdC11c2VkLGI2NzYxMGQ0MjIxN2EwNGZiZTY4MTIyOGM0YzIxNWFkYTdlZGd4cnFiLDE2MTI1NTMyNzM4NDgsYWhPMjBWQWNJYThLeWFiN2tpNnNYVDI0YVdF",
  "msso": null,
  "scope": "all"
}
// https://dev.mendeley.com/reference/topics/authorization_auth_code.html


bearer
MSwxNjEyNTU3NzA1NjI1LDYxMDgzMTI4MSw5NTEzLGFsbCwsLGI2NzYxMGQ0MjIxN2EwNGZiZTY4MTIyOGM0YzIxNWFkYTdlZGd4cnFiLDVhYTM4NGFlLTA3N2YtMzRhYi1hZDVkLTRlY2QxMmY2MjZkNyx1aUZQazBEZmZ1bHU4OEJoU2NQYzQyTjd4ZDQ

token='MSwxNjEyNTcwOTg0OTU1LDYxMDgzMTI4MSw5NTEzLGFsbCwsLGI2NzYxMGQ0MjIxN2EwNGZiZTY4MTIyOGM0YzIxNWFkYTdlZGd4cnFiLDVhYTM4NGFlLTA3N2YtMzRhYi1hZDVkLTRlY2QxMmY2MjZkNyx6OTJCaFBzSjl0ZEpzTndCR2E5Qm0xT1hyLXc'


catalogsearch = function(squery, token, succfunc) {
	curl = "https://api.mendeley.com/search/catalog?query=" + encodeURI(squery) + "&limit=5"
	$.ajax({ url: curl,
        beforeSend: function(xhr) { 
        	xhr.setRequestHeader("Authorization", "Bearer "+token);
        	xhr.setRequestHeader("Accept", "application/vnd.mendeley-document.1+json");
        }, 
        success: succfunc
	})
}

/*
curl 'https://api.mendeley.com/search/catalog?query=polar+bears&limit=3' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Accept: application/vnd.mendeley-document.1+json'
*/

catalogsearch("Kahnt SQ Park Haynes 2012", token, succfunc1)

[
  {
    "title": "Connectivity-based parcellation of the human orbitofrontal cortex",
    "type": "journal",
    "authors": [
      {
        "first_name": "Thorsten",
        "last_name": "Kahnt",
        "scopus_author_id": "16039099500"
      },
      {
        "first_name": "Luke J.",
        "last_name": "Chang",
        "scopus_author_id": "57201236717"
      },
      {
        "first_name": "Soyoung Q.",
        "last_name": "Park",
        "scopus_author_id": "35215904500"
      },
      {
        "first_name": "Jakob",
        "last_name": "Heinzle",
        "scopus_author_id": "15070091500"
      },
      {
        "first_name": "John Dylan",
        "last_name": "Haynes",
        "scopus_author_id": "9741021000"
      }
    ],
    "year": 2012,
    "source": "Journal of Neuroscience",
    "identifiers": {
      "scopus": "2-s2.0-84860328966",
      "pmid": "22553030",
      "doi": "10.1523/JNEUROSCI.0257-12.2012",
      "sgr": "84860328966",
      "issn": "02706474",
      "pui": "364704051"
    },
    "id": "c76f4d6c-d816-3970-b883-9051a903a185",
    "link": "https://www.mendeley.com/catalogue/c76f4d6c-d816-3970-b883-9051a903a185/"
  }
]


nq= "Kim Moghaddam 2016 Reward Anticipation Is Encoded Differently by Adolescent Ventral Tegmental Area Neurons"
catalogsearch(nq, token, succfunc1)


nq= "Kim Moghaddum 2016 Reward Anticipation Is Encoded Differently by Adolescent Ventral Tegmental Area Neurons"
catalogsearch(nq, token, succfunc1)

catalogsearch("concept spaces hippocampus", token, succfunc1)





singleresp = [
  {
    "title": "The social hippocampus",
    "type": "generic",
    "authors": [
      {
        "first_name": "Alison",
        "last_name": "Montagrin",
        "scopus_author_id": "55840141800"
      },
      {
        "first_name": "Catarina",
        "last_name": "Saiote",
        "scopus_author_id": "55627653900"
      },
      {
        "first_name": "Daniela",
        "last_name": "Schiller",
        "scopus_author_id": "7006486626"
      }
    ],
    "year": 2018,
    "source": "Hippocampus",
    "identifiers": {
      "sgr": "85028911299",
      "issn": "10981063",
      "pui": "618217629",
      "scopus": "2-s2.0-85028911299",
      "pmid": "28843041",
      "doi": "10.1002/hipo.22797"
    },
    "keywords": [
      "affiliation",
      "cognitive map",
      "hierarchy",
      "hippocampus",
      "navigation",
      "relational",
      "social"
    ],
    "id": "23947e8e-22fa-3ada-abc4-b820c71d797f",
    "link": "https://www.mendeley.com/catalogue/23947e8e-22fa-3ada-abc4-b820c71d797f/"
  },
  {
    "title": "The Hippocampus Encodes Distances in Multidimensional Feature Space",
    "type": "journal",
    "authors": [
      {
        "first_name": "Stephanie",
        "last_name": "Theves",
        "scopus_author_id": "56563087100"
      },
      {
        "first_name": "Guillén",
        "last_name": "Fernandez",
        "scopus_author_id": "7202232893"
      },
      {
        "first_name": "Christian F.",
        "last_name": "Doeller",
        "scopus_author_id": "6507122603"
      }
    ],
    "year": 2019,
    "source": "Current Biology",
    "identifiers": {
      "sgr": "85063408900",
      "issn": "09609822",
      "pui": "2001738932",
      "pii": "S0960982219302052",
      "scopus": "2-s2.0-85063408900",
      "pmid": "30905602",
      "doi": "10.1016/j.cub.2019.02.035"
    },
    "keywords": [
      "cognitive geometry",
      "cognitive map",
      "conceptual knowledge",
      "spatial coding"
    ],
    "id": "7b89d43c-b1ff-379c-b6ba-a489e6f57c85",
    "link": "https://www.mendeley.com/catalogue/7b89d43c-b1ff-379c-b6ba-a489e6f57c85/"
  },
  {
    "title": "Vascular basement membranes as pathways for the passage of fluid into and out of the brain",
    "type": "journal",
    "authors": [
      {
        "first_name": "Alan W.J.",
        "last_name": "Morris",
        "scopus_author_id": "56364553200"
      },
      {
        "first_name": "Matthew Mac Gregor",
        "last_name": "Sharp",
        "scopus_author_id": "55597988100"
      },
      {
        "first_name": "Nazira J.",
        "last_name": "Albargothy",
        "scopus_author_id": "57184247900"
      },
      {
        "first_name": "Rute",
        "last_name": "Fernandes",
        "scopus_author_id": "36604362100"
      },
      {
        "first_name": "Cheryl A.",
        "last_name": "Hawkes",
        "scopus_author_id": "12242641800"
      },
      {
        "first_name": "Ajay",
        "last_name": "Verma",
        "scopus_author_id": "55948558700"
      },
      {
        "first_name": "Roy O.",
        "last_name": "Weller",
        "scopus_author_id": "7201400620"
      },
      {
        "first_name": "Roxana O.",
        "last_name": "Carare",
        "scopus_author_id": "23767970500"
      }
    ],
    "year": 2016,
    "source": "Acta Neuropathologica",
    "identifiers": {
      "sgr": "84961167095",
      "issn": "14320533",
      "pui": "609108512",
      "pii": "1555",
      "scopus": "2-s2.0-84961167095",
      "pmid": "26975356",
      "doi": "10.1007/s00401-016-1555-z"
    },
    "keywords": [
      "Alzheimer’s disease",
      "Amyloid-β",
      "Arteries",
      "Basement membranes",
      "Capillaries",
      "Drug delivery",
      "Lymphatic drainage",
      "Nanoparticles neuroimmunology",
      "Virchow–Robin space"
    ],
    "id": "7301bcbb-ed86-3b51-b916-5fb4bdbb3c25",
    "link": "https://www.mendeley.com/catalogue/7301bcbb-ed86-3b51-b916-5fb4bdbb3c25/"
  }
]