export function home2($containerGeneral){
    const home2 = document.createElement('div');
    home2.className ='home2';
    home2.setAttribute("id", "contact");
    $containerGeneral.appendChild(home2);
    const image_logoE= document.createElement("img");
    image_logoE.src='images/foto.jpg';
    image_logoE.className ="imgNata";
    home2.appendChild(image_logoE);
    const piece_white = document.createElement('div');
    piece_white.className= "piece"
    home2.appendChild(piece_white);
    const piece_white_two = document.createElement('div');
    piece_white_two.className= "piece_two"
    home2.appendChild(piece_white_two);
    const image_bt_home= document.createElement("img");
    image_bt_home.src='images/bt_home2.png';
    image_bt_home.className ="bt_home_2";
    home2.appendChild(image_bt_home);
    const author_dos =document.createElement('p');
    author_dos.className="author_dos";
    author_dos.textContent="Natalia Gonzalez";
    home2.appendChild(author_dos);
    const description =document.createElement('p');
    description.className="description";
    description.textContent="Soy Front End Developer con una conexión especial hacia el asombroso mundo del diseño UX/UI, cuento con formación en Administración de empresas. A lo largo de mi camino profesional siempre he tenido como prioridad contribuir al bienestar y satisfacción de los usuarios. por ello siento gran pasion  por la construcción de productos digitales únicos y generar experiencias de impacto a cada uno de sus futuros usuarios.";
    home2.appendChild(description);
    const image_logN= document.createElement("img");
    image_logN.src='images/logo-sf.png';
    image_logN.className ="image_logN";
    home2.appendChild(image_logN);
    const list_home2 = document.createElement("li");
    list_home2.className ="list_home2"
    home2.appendChild(list_home2);
    const curriculum = document.createElement("a");
    curriculum.textContent="Descargar Curriculum"
    curriculum.setAttribute ('href','../components/cv/CV NATALIA GONZALEZ.pdf');
    curriculum.setAttribute("id", "curriculum")
    curriculum.setAttribute("download","CV_NATALIA_GONZALEZ.pdf")
    list_home2.appendChild(curriculum);
    const list_proyect = document.createElement("li");
    list_proyect.className ="list_proyect"
    home2.appendChild(list_proyect);
    const proyect= document.createElement("a");
    proyect.textContent ="Mis Proyectos"
    proyect.setAttribute("href","#work");
    proyect.setAttribute("id", "proyect")
    list_proyect.appendChild(proyect);
    const down_home2 = document.createElement("a")
    down_home2.className ="down_home2"
    down_home2.setAttribute("href","#home")
    home2.appendChild(down_home2)
}   
