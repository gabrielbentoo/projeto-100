var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    setTimeout(function() {
      
    imageId = selfie1;
    take_snapshot();
    speakData = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speaka(utterThis);

    }, 5000);
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speakData = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);

}

function takeSelfie()
 {
    console.log(imgId);
    Webcam.snap(function(data_uri) {
        if(imgId=="selfie1"){
            document.getElementById("result1").innerHTML = '<imd id="selfie1" src="'+data_uri+'"/>';
        }
        if(imgId=="selfie2"){
            document.getElementById("result2").innerHTML = '<imd id="selfie2" src="'+data_uri+'"/>';
        }
        if(imgId=="selfie3"){
            document.getElementById("result1").innerHTML = '<imd id="selfie3" src="'+data_uri+'"/>';
        }
    });
 }
