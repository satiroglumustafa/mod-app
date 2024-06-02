import {modlar} from './veri.js'

const kokEtiket = document.querySelector("#kok-etiket")
 
/* Arayüzü Gösterceğimiz fonksiyon */
function UIGoster () {

    modlar.forEach ((deger,index) => { 
        const yeniDiv = document.createElement("div"); 
        yeniDiv.textContent = deger.tr
        
        // mod görseli oluşturma
        const yeniImg = document.createElement('img');
        yeniImg.src = '../img/' + deger.mod+ '.jpg' ;

        // mod sesi oluşturma

        const yeniAudio = document.createElement("audio")
        yeniAudio.src = '../audio/' + deger.mod+ '-sound.mp3' ;
        yeniAudio.loop = true;

        yeniDiv.append(yeniImg);
        yeniDiv.append(yeniAudio);
        kokEtiket.append(yeniDiv);


        //eventler

        yeniDiv.addEventListener('click', () => {
            //eğer şarkı çalmıyorsa çalmaya başlasın
            if(yeniAudio.paused === true){
                yeniAudio.play();
                yeniDiv.classList.add('aktif')
            }
            else{
                yeniAudio.pause();
                yeniDiv.classList.remove('aktif')
            }
           
        })
       
     })

}

 export{UIGoster} // bu fonksiyonu dışarıda kullanabilir hale getirdik