












             //armazenar músicas 
             
             var DryzParanoia = new Audio('DryzParanoia.mp3');
             var DryzInsônia = new Audio('DryzInsônia.mp3');  
             var DryzFaçoParecer = new Audio('DryzFaçoParecer.mp3');
             var DryzNãoDuvide = new Audio('DryzNãoDuvide.mp3');
             var DryzHaciendoDinero = new Audio('DryzHaciendoDinero.mp3');
             var DryzVemEVai = new Audio('DryzVemEVai.mp3');
             var DryzVibe = new Audio('DryzVibe.mp3');
             var DryzFollowers = new Audio('DryzFollowers.mp3');
             var DryzTardeDemais = new Audio('DryzTardeDemais.mp3');
             var DryzCalifórnia = new Audio('DryzCalifórnia.mp3');
             var DryzOkOk = new Audio('DryzOkOk.mp3');
             var DryzVocêSeFoi = new Audio('DryzVocêSeFoi.mp3');
             var DryzNemValeuAPena = new Audio('DryzNemValeuAPena.mp3');
             var DryzAlone = new Audio('DryzAlone.mp3');
             var DryzAtéAmanhecer = new Audio('DryzAtéAmanhecer.mp3');
             var DryzSeiLá = new Audio('DryzSeiLá.mp3');
             var DryzBandeid = new Audio('DryzBandeid.mp3');
             var DryzFim = new Audio('DryzFim.mp3');
             var DryzFollowersRemix = new Audio('DryzFollowersRemix.mp3');
             var DryzFlash = new Audio('DryzFlash.mp3');
             var DryzTeuOlhar = new Audio('DryzTeuOlhar.mp3');
             var DryzÁries = new Audio('DryzÁries.mp3');
             var DryzEsseAss = new Audio('DryzEsseAss.mp3');
             var DryzMidNigth = new Audio('DryzMidNigth.mp3');
             var DryzBlues = new Audio('DryzBlues.mp3');
             var DryzLibre = new Audio('DryzLibre.mp3');
             var DryzEuETu = new Audio('DryzEu&Tu.mp3');
             
             
             //receber informações de botão clicado: tocar (começar música) e parar (pausar música)
             
             function receberInfo(){
             idTocarDryz1 = document.getElementById('idTocarDryz1');
             idPausarDryz1 = document.getElementById('idPausarDryz1');
             
             idTocarDryz2 = document.getElementById('idTocarDryz2');
             idPausarDryz2 = document.getElementById('idPausarDryz2');
             
             idTocarDryz3 = document.getElementById('idTocarDryz3');
             idPausarDryz3 = document.getElementById('idPausarDryz3');
             }
             
             //Dryz - Paranoia
             
             function tocarMúsicaDryz1(){
             idTocarDryz1.style.display = "none";
             idPausarDryz1.style.display = "block";
             DryzParanoia.play();
             
             pararMúsicas1();
             }
             
             function pausarMúsicaDryz1(){
             idTocarDryz1.style.display = "block";
             idPausarDryz1.style.display = "none";
             DryzParanoia.pause();
             }
             
             //Dryz - Insônia
             
             function tocarMúsicaDryz2(){
             idTocarDryz2.style.display = "none";
             idPausarDryz2.style.display = "block";
             DryzInsônia.play();
             
             pararMúsicas2();
             }
             
             function pausarMúsicaDryz2(){
             idTocarDryz2.style.display = "block";
             idPausarDryz2.style.display = "none";
             DryzInsônia.pause();
             }
             
             //Dryz - Faço Parecer
             
             function tocarMúsicaDryz3(){
             idTocarDryz3.style.display = "none";
             idPausarDryz3.style.display = "block";
             DryzFaçoParecer.play();
             
             pararMúsicas3(); 
             }
             
             function pausarMúsicaDryz3(){
             idTocarDryz3.style.display = "block";
             idPausarDryz3.style.display = "none";
             DryzFaçoParecer.pause();
             }
             
             //Dryz - Não duvide
             
             function tocarMúsicaDryz4(){
             idTocarDryz4.style.display = "none";
             idPausarDryz4.style.display = "block";
             DryzNãoDuvide.play();
             
             pararMúsicas4();     
             }
             
             function pausarMúsicaDryz4(){
             idTocarDryz4.style.display = "block";
             idPausarDryz4.style.display = "none";
             DryzNãoDuvide.pause();
             }
             
             //Dryz - Haciendo Dinero
             
             function tocarMúsicaDryz5(){
             idTocarDryz5.style.display = "none";
             idPausarDryz5.style.display = "block";
             DryzHaciendoDinero.play();
             
             pararMúsicas5();
             }
             
             function pausarMúsicaDryz5(){
             idTocarDryz5.style.display = "block";
             idPausarDryz5.style.display = "none";
             DryzHaciendoDinero.pause();
             }
             
             //Dryz - Vem e Vai
             
             function tocarMúsicaDryz6(){
             idTocarDryz6.style.display = "none";
             idPausarDryz6.style.display = "block";
             DryzVemEVai.play();
             
             pararMúsicas6(); 
             }
             
             function pausarMúsicaDryz6(){
             idTocarDryz6.style.display = "block";
             idPausarDryz6.style.display = "none";
             DryzVemEVai.pause();
             }
             
             //Dryz - Vibe
             
             function tocarMúsicaDryz7(){
             idTocarDryz7.style.display = "none";
             idPausarDryz7.style.display = "block";
             DryzVibe.play();
             
             pararMúsicas7(); 
             }
             
             function pausarMúsicaDryz7(){
             idTocarDryz7.style.display = "block";
             idPausarDryz7.style.display = "none";
             DryzVibe.pause();
             }
             
             //Dryz - Followers
             
             function tocarMúsicaDryz8(){
             idTocarDryz8.style.display = "none";
             idPausarDryz8.style.display = "block";
             DryzFollowers.play();
             
             pararMúsicas8();
             }
             
             function pausarMúsicaDryz8(){
             idTocarDryz8.style.display = "block";
             idPausarDryz8.style.display = "none";
             DryzFollowers.pause();
             }
             
             //Dryz - Tarde Demais
             
             function tocarMúsicaDryz9(){
             idTocarDryz9.style.display = "none";
             idPausarDryz9.style.display = "block";
             DryzTardeDemais.play();
             
             pararMúsicas9();
             }
             
             function pausarMúsicaDryz9(){
             idTocarDryz9.style.display = "block";
             idPausarDryz9.style.display = "none";
             DryzTardeDemais.pause();
             }
            
             //Dryz - Califórnia
            
             function tocarMúsicaDryz10(){
             idTocarDryz10.style.display = "none";
             idPausarDryz10.style.display = "block";
             DryzCalifórnia.play();
             
             pararMúsicas10();
             }
             
             function pausarMúsicaDryz10(){
             idTocarDryz10.style.display = "block";
             idPausarDryz10.style.display = "none";
             DryzCalifórnia.pause();
             }
             
             //Dryz - OkOk
             
             function tocarMúsicaDryz11(){
             idTocarDryz11.style.display = "none";
             idPausarDryz11.style.display = "block";
             DryzOkOk.play();
             
             pararMúsicas11();
             }
             
             function pausarMúsicaDryz11(){
             idTocarDryz11.style.display = "block";
             idPausarDryz11.style.display = "none";
             DryzOkOk.pause();
             }
             
             //Dryz - Você se foi
             
             function tocarMúsicaDryz12(){
             idTocarDryz12.style.display = "none";
             idPausarDryz12.style.display = "block";
             DryzVocêSeFoi.play();
             
             pararMúsicas12();
             }
             
             function pausarMúsicaDryz12(){
             idTocarDryz12.style.display = "block";
             idPausarDryz12.style.display = "none";
             DryzVocêSeFoi.pause();
             }
             
             //Dryz - Nem Valeu a Pena
             
             function tocarMúsicaDryz13(){
             idTocarDryz13.style.display = "none";
             idPausarDryz13.style.display = "block";
             DryzNemValeuAPena.play();
             
             pararMúsicas13(); 
             }
             
             function pausarMúsicaDryz13(){
             idTocarDryz13.style.display = "block";
             idPausarDryz13.style.display = "none";
             DryzNemValeuAPena.pause();
             }
             
             //Dryz - Alone
             
             function tocarMúsicaDryz14(){
             idTocarDryz14.style.display = "none";
             idPausarDryz14.style.display = "block";
             DryzAlone.play();
             
             pararMúsicas14();
             }
             
             function pausarMúsicaDryz14(){
             idTocarDryz14.style.display = "block";
             idPausarDryz14.style.display = "none";
             DryzAlone.pause();
             }          
             
             //Dryz - Até Amanhecer
             
             function tocarMúsicaDryz15(){
             idTocarDryz15.style.display = "none";
             idPausarDryz15.style.display = "block";
             DryzAtéAmanhecer.play();
             
             pararMúsicas15();
             }
             
             function pausarMúsicaDryz15(){
             idTocarDryz15.style.display = "block";
             idPausarDryz15.style.display = "none";
             DryzAtéAmanhecer.pause();
             }       
            
             //Dryz - Sei Lá
             
             function tocarMúsicaDryz16(){
             idTocarDryz16.style.display = "none";
             idPausarDryz16.style.display = "block";
             DryzSeiLá.play();
             
             pararMúsicas16();
             }
             
             function pausarMúsicaDryz16(){
             idTocarDryz16.style.display = "block";
             idPausarDryz16.style.display = "none";
             DryzSeiLá.pause();
             }      
             
             //Dryz - Bandeid
             
             function tocarMúsicaDryz17(){
             idTocarDryz17.style.display = "none";
             idPausarDryz17.style.display = "block";
             DryzBandeid.play();
             
             pararMúsicas17();
             }
             
             function pausarMúsicaDryz17(){
             idTocarDryz17.style.display = "block";
             idPausarDryz17.style.display = "none";
             DryzBandeid.pause();
             }      
             
             //Dryz - Fim
             
             function tocarMúsicaDryz18(){
             idTocarDryz18.style.display = "none";
             idPausarDryz18.style.display = "block";
             DryzFim.play();
             
             pararMúsicas18();
             }
             
             function pausarMúsicaDryz18(){
             idTocarDryz18.style.display = "block";
             idPausarDryz18.style.display = "none";
             DryzFim.pause();
             }     
             
             //Dryz - Followers (remix)
             
             function tocarMúsicaDryz19(){
             idTocarDryz19.style.display = "none";
             idPausarDryz19.style.display = "block";
             DryzFollowersRemix.play();
             
             pararMúsicas19(); 
             }
             
             function pausarMúsicaDryz19(){
             idTocarDryz19.style.display = "block";
             idPausarDryz19.style.display = "none";
             DryzFollowersRemix.pause();
             }     
             
             //Dryz - Flash
             
             function tocarMúsicaDryz20(){
             idTocarDryz20.style.display = "none";
             idPausarDryz20.style.display = "block";
             DryzFlash.play();
             
             pararMúsicas20();
             }
             
             function pausarMúsicaDryz20(){
             idTocarDryz20.style.display = "block";
             idPausarDryz20.style.display = "none";
             DryzFlash.pause();
             }     
             
             //Dryz - Teu Olhar
             
             function tocarMúsicaDryz21(){
             idTocarDryz21.style.display = "none";
             idPausarDryz21.style.display = "block";
             DryzTeuOlhar.play();
             
             pararMúsicas21();
             }
             
             function pausarMúsicaDryz21(){
             idTocarDryz21.style.display = "block";
             idPausarDryz21.style.display = "none";
             DryzTeuOlhar.pause();
             }     
            
             //Dryz - Áries
             
             function tocarMúsicaDryz22(){
             idTocarDryz22.style.display = "none";
             idPausarDryz22.style.display = "block";
             DryzÁries.play();
             
             pararMúsicas22();
             }
             
             function pausarMúsicaDryz22(){
             idTocarDryz22.style.display = "block";
             idPausarDryz22.style.display = "none";
             DryzÁries.pause();
             }     
             
             //Dryz - Esse Ass
             
             function tocarMúsicaDryz23(){
             idTocarDryz23.style.display = "none";
             idPausarDryz23.style.display = "block";
             DryzEsseAss.play();
             
             pararMúsicas23();
             }
             
             function pausarMúsicaDryz23(){
             idTocarDryz23.style.display = "block";
             idPausarDryz23.style.display = "none";
             DryzEsseAss.pause();
             }     
             
             //Dryz - MidNigth
             
             function tocarMúsicaDryz24(){
             idTocarDryz24.style.display = "none";
             idPausarDryz24.style.display = "block";
             DryzMidNigth.play();
             
             pararMúsicas24();
             }
             
             function pausarMúsicaDryz24(){
             idTocarDryz24.style.display = "block";
             idPausarDryz24.style.display = "none";
             DryzMidNigth.pause();
             }    
             
             
             //Dryz - Blues
             
             function tocarMúsicaDryz25(){
             idTocarDryz25.style.display = "none";
             idPausarDryz25.style.display = "block";
             DryzBlues.play();
             
             pararMúsicas25();
             }
             
             function pausarMúsicaDryz25(){
             idTocarDryz25.style.display = "block";
             idPausarDryz25.style.display = "none";
             DryzBlues.pause();
             }
                 
             //Dryz - Libre
             
             function tocarMúsicaDryz26(){
             idTocarDryz26.style.display = "none";
             idPausarDryz26.style.display = "block";
             DryzLibre.play();
             
             pararMúsicas26();
             }
             
             function pausarMúsicaDryz26(){
             idTocarDryz26.style.display = "block";
             idPausarDryz26.style.display = "none";
             DryzLibre.pause();
             }   
              
             //Dryz - Eu & Tu
             
             function tocarMúsicaDryz27(){
             idTocarDryz27.style.display = "none";
             idPausarDryz27.style.display = "block";
             DryzEuETu.play();
             
             pararMúsicas27();
             }
             
             function pausarMúsicaDryz27(){
             idTocarDryz27.style.display = "block";
             idPausarDryz27.style.display = "none";
             DryzEuETu.pause();
             }   
              
             //verificar se alguma música está tocando 
             
             function pararMúsicas1(){
             pausarMúsicaDryz2();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz10();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas2(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz10();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas3(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz2();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz10();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas4(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz2();
             pausarMúsicaDryz3();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz10();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas5(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz2();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz10();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas5(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz2();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz10();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas6(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz2();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz10();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas7(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz2();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz10();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas8(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz2();
             pausarMúsicaDryz9();
             pausarMúsicaDryz10();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas9(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz2();
             pausarMúsicaDryz10();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas10(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz2();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas11(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz2();
             pausarMúsicaDryz10();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas12(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz2();
             pausarMúsicaDryz11();
             pausarMúsicaDryz10();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas13(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz2();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz10();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas14(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz2();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz10();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas15(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz2();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz10();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas16(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz2();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz10();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas17(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz2();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz10();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas18(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz2();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz10();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas19(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz2();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz10();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas20(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz2();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz10();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas21(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz2();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz10();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas22(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz2();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz10();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas23(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz2();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz10();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas24(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz2();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz10();
             pausarMúsicaDryz25();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas25(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz2();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz10();
             pausarMúsicaDryz26();
             pausarMúsicaDryz27();
             }
             function pararMúsicas26(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz2();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz25();
             pausarMúsicaDryz10();
             pausarMúsicaDryz27();
             }
             function pararMúsicas27(){
             pausarMúsicaDryz1();
             pausarMúsicaDryz2();
             pausarMúsicaDryz3();
             pausarMúsicaDryz4();
             pausarMúsicaDryz5();
             pausarMúsicaDryz6();
             pausarMúsicaDryz7();
             pausarMúsicaDryz8();
             pausarMúsicaDryz9();
             pausarMúsicaDryz10();
             pausarMúsicaDryz11();
             pausarMúsicaDryz12();
             pausarMúsicaDryz13();
             pausarMúsicaDryz14();
             pausarMúsicaDryz15();
             pausarMúsicaDryz16();
             pausarMúsicaDryz17();
             pausarMúsicaDryz18();
             pausarMúsicaDryz19();
             pausarMúsicaDryz20();
             pausarMúsicaDryz21();
             pausarMúsicaDryz22();
             pausarMúsicaDryz23();
             pausarMúsicaDryz24();
             pausarMúsicaDryz26();
             }