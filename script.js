but_ser = document.getElementById("sser");
but_anime = document.getElementById("aan");
but_mult=document.getElementById("mult");
but_filmm=document.getElementById("film");
but_vsenovinki=document.getElementById("vsenovinki");
pic_serial=["1452554 1.png","1634648712_1-papik-pro-p-osd-plakat-1 1.png","28561-1000x830 1.png","MV5BNWY1YTVmMTMtNGE0NC00ZTg2LWI3NGUtOGQyN2Y1YTUwYzA2XkEyXkFqcGdeQXVyMzY0MTE3NzU@ 1.png","62Tlpx85oGax141TMOOb0QZdCzdYGhwYrJNslpMp6uoQ0ZeYPIx8swCQsYkQrT_FyVsGrsOI 1.png","EVKJSApUYAs681D 1.png"]
picture_containers=document.getElementsByClassName("pictire_container");
text_serial=["Looking for Alaska сериал с 2019 ","Stranger Things сериал 2017","The Umbrella Academy сериал с 2022","Alice in the Borderlands сериал 2020","I Am Not Okay With This сериал 2020","Euphoria сериал, 2019"]
text_container=document.getElementsByClassName("text_container");

pic_anime=["ataka-titanov_5 1.png","Без названия (2) 1.png","e061d85e0c8201a92a304259be61f8 1.png","300x450 (2) 1.png","b84eb4f5dc18eceb0ec1fb618b0b9b20 1.png","300x450 (3) 1.png"]
text_anime=["Attack of the Titans Сериал 2018","Demon slayer Сериал  2019","Arietti from the Land of the Lilliputians Фильм 2010 ","Spirited Away Фильм 2001","Your name Фильм 2016","Sing a little harmony Фильм 2021"]
pic_multfilm=["eYRthyPwzFAEAtFDVPYYy74T40p 1.png","FYApYSQXgAE4220 1.png","w1500_50521394 1.png","23220635-2336124 1.png","49632996-1647051 1.png","49814055-2158041 1.png"]
text_multfilm=["Minions the  rise of Gru фильм 2022","Puss in Boots 2 Фильм 2022","the Bad Guys Фильм  ","Enchanted 2 Фильм 2022","Encanto Фильм 2021","lightyear Фильм 2022"]
pic_filmm=["aa90ea8d29141f248f86cd4e067d2f87 1.png","600x900 1.png","34483220-2006786 1.png","8f88f12029a151394eab970ce4128e9e 1.png","600x900 (1) 1.png","300x450 1.png"]
text_filmm=["IT фильм 2017","Megan Фильм 2022","The Goldfinch Фильм 2019","House of Peculiar Children Фильм 2016","The Black Phone Фильм 2021","Enola Holmes  Фильм 2020"]
pic_vsenovinki=["600x900 1.png","IXzzuB5DEjzbbdV7yKwtX-sqCnI9_hK5EfEag61lfbor-nXJdRx2-7ad65WjB9LUPq6WULPd-6Z7oleyiohPp5fU (1) 2.png","FS4gGSAakAAU9Tn 1.png","i (2) 1.png","49609853-1688583 1.png","FL0Q5ycXwAM-HqN 1.png"]
text_vsenovinki=["Megan Фильм 2022","Ginny and Georgia сериал  2021","Senior Year  фильм  2022","Wednesday сериал 2022","Scream  фильм 2022","Stranger Things4  сериал с 2022"]
function serials(){
   but_ser.src="Frame 13.png"
   but_anime.src="Frame 15.png"
   but_mult.src="Frame 10.png"
   but_filmm.src="Frame 12 (1).png"
   for(i=0;i<pic_serial.length;i++){
      picture_containers[i].src=pic_serial[i];
   }
   for(i=0;i<text_serial.length;i++){
      text_container[i].innerText=text_serial[i];
   }

}
function animes(){
   but_ser.src="Frame 9.png"
   but_anime.src="Frame 11.png"
   but_mult.src="Frame 10.png"
   but_filmm.src="Frame 12 (1).png"
   but_vsenovinki.src="Frame 12 (2).png"
   for(i=0;i<pic_anime.length;i++){
      picture_containers[i].src=pic_anime[i];
   }
   for(i=0;i<text_anime.length;i++){
      text_container[i].innerText=text_anime[i];
   }
}

function multfilm(){
   but_mult.src="Frame 14.png"
   but_ser.src="Frame 9.png"
   but_anime.src="Frame 15.png"
   but_filmm.src="Frame 12 (1).png"
   but_vsenovinki.src="Frame 12 (2).png"
   for(i=0;i<pic_multfilm.length;i++){
      picture_containers[i].src=pic_multfilm[i];
   }
   for(i=0;i<text_multfilm.length;i++){
      text_container[i].innerText=text_multfilm[i];
   }
}

function filmm(){
   but_filmm.src="Frame 12 (3).png"
   but_mult.src="Frame 10.png"
   but_ser.src="Frame 9.png"
   but_anime.src="Frame 15.png"
   but_vsenovinki.src="Frame 12 (2).png"
   for(i=0;i<pic_filmm.length;i++){
      picture_containers[i].src=pic_filmm[i];
   }
   for(i=0;i<text_filmm.length;i++){
      text_container[i].innerText=text_filmm[i];
   }
}
function vsenovinki(){
   but_vsenovinki.src="Frame 14 (1).png"
   but_filmm.src="Frame 12 (1).png"
   but_mult.src="Frame 10.png"
   but_ser.src="Frame 9.png"
   but_anime.src="Frame 15.png"
   for(i=0;i<pic_vsenovinki.length;i++){
      picture_containers[i].src=pic_vsenovinki[i];
   }
   for(i=0;i<text_vsenovinki.length;i++){
      text_container[i].innerText=text_vsenovinki[i];
   }
}
