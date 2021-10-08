
export function work ($containerGeneral){
//    console.log($containerGeneral)
    const content_all = document.createElement("section");
    content_all.className = ("content_all");
    content_all.setAttribute("id", "work");
    $containerGeneral.appendChild(content_all);
    const work_area = document.createElement("div");
    work_area.className ='work_area';
    content_all.appendChild(work_area);
    const fondo_header =document.createElement("div");
    fondo_header.className = "fn_header"
    content_all.appendChild(fondo_header)
    const decoration = document.createElement("img");
    decoration.src='images/bt_home2.png';
    decoration.className ="bt_decoration";
    work_area.appendChild(decoration);
    const decoration2 = document.createElement("img");
    decoration2.src='images/bt_home2.png';
    decoration2.setAttribute("id", "dec2");
    work_area.appendChild(decoration2);
    const decoration3 = document.createElement("img");
    decoration3.src='images/Group.png';
    decoration3.setAttribute("id", "dec3");
    work_area.appendChild(decoration3);
    const decoration4 = document.createElement("img");
    decoration4.src='images/bt_home2.png';
    decoration4.setAttribute("id", "dec4");
    work_area.appendChild(decoration4);
    const decoration5 = document.createElement("img");
    decoration5.src='images/bt_home2.png';
    decoration5.setAttribute("id", "dec5");
    work_area.appendChild(decoration5);
    const decoration6 = document.createElement("img");
    decoration6.src='images/Group.png';
    decoration6.setAttribute("id", "dec6");
    work_area.appendChild(decoration6);
    const decoration7 = document.createElement("img");
    decoration7.src='images/Group.png';
    decoration7.setAttribute("id", "dec7");
    work_area.appendChild(decoration7);
    const decoration8 = document.createElement("img");
    decoration8.src='images/bt_home2.png';
    decoration8.setAttribute("id", "dec8");
    work_area.appendChild(decoration8);
    const decoration9 = document.createElement("img");
    decoration9.src='images/Group.png';
    decoration9.setAttribute("id", "dec9");
    work_area.appendChild(decoration9);
    const decoration10 = document.createElement("img");
    decoration10.src='images/bt_home2.png';
    decoration10.setAttribute("id", "dec10");
    work_area.appendChild(decoration10);
    const decoration11 = document.createElement("img");
    decoration11.src='images/Group.png';
    decoration11.setAttribute("id", "dec11");
    work_area.appendChild(decoration11);
    const decoration12 = document.createElement("img");
    decoration12.src='images/bt_home2.png';
    decoration12.setAttribute("id", "dec12");
    work_area.appendChild(decoration12);
    const decoration13 = document.createElement("img");
    decoration13.src='images/bt_home2.png';
    decoration13.setAttribute("id", "dec13");
    work_area.appendChild(decoration13);
    const decoration14 = document.createElement("img");
    decoration14.src='images/Group.png';
    decoration14.setAttribute("id", "dec14");
    work_area.appendChild(decoration14);
    const all_proyects =document.createElement('p');
    all_proyects.className=" all_proyects";
    all_proyects.textContent="Mis proyectos";
    content_all.appendChild( all_proyects);
    const fondo_work = document.createElement("img");
    fondo_work.src='images/fondo_work.png';
    fondo_work.className ="fondo_work";
    work_area.appendChild(fondo_work);
    const decoration15 = document.createElement("img");
    decoration15.src='images/Group.png';
    decoration15.setAttribute("id", "dec15");
    content_all.appendChild(decoration15);
    const circle_work = document.createElement('div');
    circle_work.className= 'circle_work';
    content_all.appendChild(circle_work);
    const title_work= document.createElement("p");
    title_work.textContent ="Welcome|Bienvenue|歡迎|ようこそ  dear visitor"
    title_work.setAttribute("id", "title_work")
    content_all.appendChild(title_work);
    const bienvenida= document.createElement("p");
    bienvenida.setAttribute("id", "bienvenida");
    bienvenida.textContent="Como apasionada por la tecnologia constantemente sigo aprendiendo nuevas herramientas y enfoques para ser cada vez más cercana al usuario, buscando ofrecerle una experiencia accesible e innovadora dentro del mundo de la transformación digital. A continuación, encontraras algunos de mis proyectos los cuales fueron construidos con lenguajes de programacion como JavaScript, Html y CSS."
    content_all.appendChild(bienvenida);
    const group_proyect = document.createElement('div');
    group_proyect.className ="group_pro";
    content_all.appendChild(group_proyect);

    // componente reto hexacta
    const box1= document.createElement("div");
    box1.className = ("box1");
    group_proyect.appendChild(box1);
    const proyect_talent = document.createElement('div');
    proyect_talent.setAttribute("id", "proyect_talent");
    box1.appendChild(proyect_talent);
    const img_proyect_talent = document.createElement("div");
    img_proyect_talent.setAttribute("id", "img_proyect_talent");
    proyect_talent.appendChild(img_proyect_talent);
    const title_talent = document.createElement("p");
    title_talent.setAttribute("id", "title_talent");
    title_talent.textContent = "Points Team Hexacta";
    img_proyect_talent.appendChild(title_talent);
    const title_talent2 = document.createElement("a");
    title_talent2.setAttribute("id", "title_talent2");
    title_talent2.setAttribute("href","https://objective-sinoussi-95f889.netlify.app/");
    img_proyect_talent.appendChild(title_talent2);
    const touch_talent = document.createElement("img");
    touch_talent.src='images/hand.png';
    touch_talent.setAttribute("id", "touch_talent");
    proyect_talent.appendChild(touch_talent);
    const description_talent = document.createElement("div");
    description_talent.className=("description_talent");
    box1.appendChild(description_talent);
    const valid1 = document.createElement("p");
    valid1.className=("valid1");
    valid1.textContent ="Points Team Hexacta"
    description_talent.appendChild(valid1);
    const content1= document.createElement("li");
    content1.className=("content1");
    content1.textContent ="1er Puesto Hackaton Talent Fest Laboratoria 2021 "
    description_talent.appendChild(content1);
    const content2= document.createElement("li");
    content2.className=("content1");
    content2.textContent ="Diseño y construccion de MVP pagina web SPA (single page application) para redencion catalogo de puntos colaboradores "
    description_talent.appendChild(content2);

    // componente nasa
    const box2= document.createElement("div");
    box2.className = ("box2");
    group_proyect.appendChild(box2);
    const proyect_nasa = document.createElement('div');
    proyect_nasa.setAttribute("id", "proyect_nasa");
    box2.appendChild(proyect_nasa);
    const img_proyect_nasa = document.createElement("div");
    img_proyect_nasa.setAttribute("id", "img_proyect_nasa");
    proyect_nasa.appendChild(img_proyect_nasa);
    const title_nasa = document.createElement("p");
    title_nasa.setAttribute("id", "title_nasa");
    title_nasa.textContent = "X-plorer Jupiter Game";
    img_proyect_nasa.appendChild(title_nasa);
    const title_nasa2 = document.createElement("a");
    title_nasa2.setAttribute("id", "title_nasa2");
    title_nasa2.setAttribute("href","http://ec2-18-221-34-104.us-east-2.compute.amazonaws.com/#home");
    img_proyect_nasa.appendChild(title_nasa2);
    const description_nasa = document.createElement("div");
    description_nasa.className=("description_nasa");
    box2.appendChild(description_nasa);
    const valid2 = document.createElement("p");
    valid2.className=("valid2");
    valid2.textContent ="X-plorer Jupiter Game";
    description_nasa.appendChild(valid2);
    const content_nasa= document.createElement("li");
    content_nasa.className=("content_nasa");
    content_nasa.textContent ="Hackaton NASA Space Apps Challenge"
    description_nasa.appendChild(content_nasa);
    const content4= document.createElement("li");
    content4.className=("content_nasa");
    content4.textContent ="Diseño y construccion de MVP juego educativo enfocado a fomentar en los niños en edad preescolar, el interés por la ciencia, la investigación y el espacio. Logrando a través de la curiosidad y el juego que puedan generar conocimientos científicos solidos."
    description_nasa.appendChild(content4);


    const box3= document.createElement("div");
    box3.className = ("box3");
    group_proyect.appendChild(box3);
    const proyect1 = document.createElement('div');
    proyect1.setAttribute("id", "proyect1");
    box3.appendChild(proyect1);
    const img_proyect1 = document.createElement("div");
    img_proyect1.setAttribute("id", "img_proyect1");
    proyect1.appendChild(img_proyect1);
    const title_1 = document.createElement("p");
    title_1.setAttribute("id", "title_1");
    title_1.textContent = "Data Lovers";
    img_proyect1.appendChild(title_1);
    const title_2 = document.createElement("p");
    title_2.setAttribute("id", "title_2");
    title_2.textContent ="Diseño y construccion Pagina web Base de datos juego Pokemon GO" 
    img_proyect1.appendChild(title_2);
    const envio1 = document.createElement("a");
    envio1.setAttribute("id", "envio1");
    envio1.setAttribute("href","https://nataliasita.github.io/BOG002-data-lovers/");
    img_proyect1.appendChild(envio1);

    const box4= document.createElement("div");
    box4.className = ("box4");
    group_proyect.appendChild(box4);
    const proyect2 = document.createElement('div');
    proyect2.setAttribute("id", "proyect2");
    box4.appendChild(proyect2);
    const img_proyect2 = document.createElement("div");
    img_proyect2.setAttribute("id", "img_proyect2");
    proyect2.appendChild(img_proyect2);
    const title_pr = document.createElement("p");
    title_pr.setAttribute("id", "title_pr");
    title_pr.textContent = "Social Network";
    img_proyect2.appendChild(title_pr);
    const title_pr2 = document.createElement("p");
    title_pr2.setAttribute("id", "title_pr2");
    title_pr2.textContent ="Diseño y construccion Pagina web Red Social para Viajeros" 
    img_proyect2.appendChild(title_pr2);
    const envio2 = document.createElement("a");
    envio2.setAttribute("id", "envio2");
    envio2.setAttribute("href","https://nataliagaravito.github.io/BOG002-social-network/")
    img_proyect2.appendChild(envio2);
    const box5= document.createElement("div");
    box5.className = ("box5");
    group_proyect.appendChild(box5);
    const proyect3 = document.createElement('div');
    proyect3.setAttribute("id", "proyect3");
    box5.appendChild(proyect3);
    const img_proyect3 = document.createElement("div");
    img_proyect3.setAttribute("id", "img_proyect3");
    proyect3.appendChild(img_proyect3);
    const title_pr3 = document.createElement("p");
    title_pr3.setAttribute("id", "title_pr3");
    title_pr3.textContent = "Card Validation";
    img_proyect3.appendChild(title_pr3);
    const title_pr31 = document.createElement("p");
    title_pr31.setAttribute("id", "title_pr31");
    title_pr31.textContent ="Diseño y construccion Pagina web Validacion Tarjeta de credito Tienda Cosmetica" 
    img_proyect3.appendChild(title_pr31);
    const envio3 = document.createElement("a");
    envio3.setAttribute("id", "envio3");
    envio3.setAttribute("href","https://nataliagaravito.github.io/BOG002-card-validation/")
    img_proyect3.appendChild(envio3);

    const box7= document.createElement("div");
    box7.className = ("box7");
    group_proyect.appendChild(box7);
    const proyect4 = document.createElement('div');
    proyect4.setAttribute("id", "proyect4");
    box7.appendChild(proyect4);
    const img_proyect4 = document.createElement("div");
    img_proyect4.setAttribute("id", "img_proyect4");
    proyect4.appendChild(img_proyect4);
    const title_pr4 = document.createElement("p");
    title_pr4.setAttribute("id", "title_pr4");
    title_pr4.textContent = "Diseñamos Juntos";
    img_proyect4.appendChild(title_pr4);
    const title_pr41 = document.createElement("p");
    title_pr41.setAttribute("id", "title_pr41");
    title_pr41.textContent ="Diseños para nueva carátula de smartwatches" 
    img_proyect4.appendChild(title_pr41);

    const box6= document.createElement("div");
    box6.className = ("box6");
    group_proyect.appendChild(box6);
    const proyect5 = document.createElement('div');
    proyect5.setAttribute("id", "proyect5");
    box6.appendChild(proyect5);
    const img_proyect5 = document.createElement("div");
    img_proyect5.setAttribute("id", "img_proyect5");
    proyect5.appendChild(img_proyect5);
    const title_pr5 = document.createElement("p");
    title_pr5.setAttribute("id", "title_pr5");
    title_pr5.textContent = "Case Study Slide Deck";
    img_proyect5.appendChild(title_pr5);
    const title_pr51 = document.createElement("p");
    title_pr51.setAttribute("id", "title_pr51");
    title_pr51.textContent =" Google UX Design - Design a flower catalog application mobile for a florist in Buenos Aires" 
    img_proyect5.appendChild(title_pr51);
    const envio5 = document.createElement("a");
    envio5.setAttribute("id", "envio5");
    envio5.setAttribute("href",'./components/CaseStudy.pdf');
    envio5.setAttribute("download","CaseStudy.pdf");
    img_proyect5.appendChild(envio5);
    const proyect6 = document.createElement('div');
    proyect6.setAttribute("id", "proyect6");
    box6.appendChild(proyect6);
    const img_proyect6 = document.createElement("div");
    img_proyect6.setAttribute("id", "img_proyect6");
    proyect6.appendChild(img_proyect6);
    const title_pr6 = document.createElement("p");
    title_pr6.setAttribute("id", "title_pr6");
    title_pr6.textContent = "Case Study Slide Deck";
    img_proyect6.appendChild(title_pr6);
    const title_pr61 = document.createElement("p");
    title_pr61.setAttribute("id", "title_pr61");
    title_pr61.textContent =" Google UX Design - Desing a website responsive shopping experience for a french patisserie"
    img_proyect6.appendChild(title_pr61);
    const envio6 = document.createElement("a");
    envio6.setAttribute("id", "envio6");
    img_proyect6.appendChild(envio6);
    const proyect7 = document.createElement('div');
    proyect7.setAttribute("id", "proyect7");
    box6.appendChild(proyect7);
    const img_proyect7 = document.createElement("div");
    img_proyect7.setAttribute("id", "img_proyect7");
    proyect7.appendChild(img_proyect7);
    const title_pr7 = document.createElement("p");
    title_pr7.setAttribute("id", "title_pr7");
    title_pr7.textContent = "Case Study Slide Deck";
    img_proyect7.appendChild(title_pr7);
    const title_pr71 = document.createElement("p");
    title_pr71.setAttribute("id", "title_pr71");
    title_pr71.textContent =" Google UX Design - Design a cross-platform tool to help conserve an endangered species of panda" 
    img_proyect7.appendChild(title_pr71);
    const envio7 = document.createElement("a");
    envio7.setAttribute("id", "envio6");
    envio7.setAttribute("href",'./Personal_Brand/components/csworldPanda.pdf');
    envio7.setAttribute("download",'csworldPanda.pdf');
    img_proyect7.appendChild(envio7);

    
}