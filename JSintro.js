@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: rgb(82, 82, 82);
  opacity: 1;
  transition: opacity 0.8s ease;
}

#animacaointro {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(10, 10, 10);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  transition: opacity 1s ease;
  opacity: 1;
}

#animacaointro.sair {
  opacity: 0;
  pointer-events: none;
}

#logoIntro {
  max-width: 300px;
  max-height: 150px;
  object-fit: contain;
  transition: transform 1s ease;
}

#introVideoArea {
  width: 100%;
  height: 690px;
  overflow: hidden;
  position: relative;
}

#video-fundo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease;
}

#video-fundo.mostrar {
  opacity: 1;
}

.pqAVicenza {
  font-size: 32px;
  color: #ffcb21;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  text-decoration: underline;
  margin-top: 180px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.pqAVicenza.visivel {
  opacity: 1;
  transform: translateY(0);
}

.imagemDeFundoIntro {
  background-image: url('imagemDeFundoIntro.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  padding: 1px 0px;
  position: relative;
  z-index: 1;
}

.ladoALado {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 15px;
  margin-bottom: 150px;
}

.carroETexto {
  display: flex;
  gap: 8px;
  padding: 20px;
  line-height: 1.4;
}

.exemploImgCar img,
.ImgCarVicenza img {
  width: 300px;
  height: auto;
  padding: 8px;
  background-color: black;
  border-radius: 20px;
}

.exemploImgCar img {
  border: 2px solid rgb(237, 0, 0);
}

.ImgCarVicenza img {
  border: 2px solid rgb(0, 208, 3);
}

.empresasExemp {
  flex: 1;
  font-size: 18px;
  color: #ffffff;
  font-family: 'Merriweather', serif;
  min-width: 250px;
}

.sublinhadovermelho {
  text-decoration: underline;
  text-decoration-color: rgb(165, 10, 10);
}

.sublinhadoverde {
  text-decoration: underline;
  text-decoration-color: rgb(0, 208, 3);
}

.sublinhadoVicenza {
  color: #f4d408;
  text-decoration: underline;
  text-decoration-color: rgb(255, 221, 0);
}

.letramaior {
  font-size: 20px;
}

.mensagemVemOuNao {
  background-color: white;
  color: black;
  font-size: 24px;
  font-weight: 500;
  padding: 20px 25px;
  border-radius: 10px;
  text-align: center;
  width: 400px;
  font-family: 'Montserrat', sans-serif;
  margin: 70px auto 80px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  position: relative;
}

.mensagemVemOuNao .texto {
  transition: transform 0.3s ease;
}

.mensagemVemOuNao .seta {
  opacity: 0;
  position: absolute;
  right: 25px;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateX(-5px);
}


.mensagemVemOuNao:hover {
  background-color: #828282;
}

.mensagemVemOuNao:hover .texto {
  transform: translateX(-5px);
}

.mensagemVemOuNao:hover .seta {
  opacity: 1;
  transform: translateX(0);
}


.barra1 {
  width: 100%;
  height: 25px;
  background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(41, 41, 41));
}

.barra2 {
  width: 100%;
  height: 25px;
  background-image: linear-gradient(to bottom, rgb(41,41, 41), rgb(0, 0, 0));
}