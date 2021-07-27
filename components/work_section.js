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
    bienvenida.textContent="Quiero contarte que constantemente sigo aprendiendo nuevas herramientas y enfoques para ser más cercana a los usuarios, buscando ofrecerles una experiencia accesible e innovadora dentro del mundo de la transformación digital. A continuación, encontraras algunos de mis proyectos los cuales fueron construidos con lenguajes como JavaScript, Html y CSS."
    content_all.appendChild(bienvenida);
    const group_proyect = document.createElement('div');
    group_proyect.className ="group_pro";
    content_all.appendChild(group_proyect);
    const proyect1 = document.createElement('div');
    proyect1.setAttribute("id", "proyect1");
    group_proyect.appendChild(proyect1);
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
    const touch = document.createElement("img");
    touch.src='images/hand.png';
    touch.setAttribute("id", "touch");
    proyect1.appendChild(touch);
    const proyect2 = document.createElement('div');
    proyect2.setAttribute("id", "proyect2");
    group_proyect.appendChild(proyect2);
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
    const proyect3 = document.createElement('div');
    proyect3.setAttribute("id", "proyect3");
    group_proyect.appendChild(proyect3);
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
    const proyect4 = document.createElement('div');
    proyect4.setAttribute("id", "proyect4");
    group_proyect.appendChild(proyect4);
    const img_proyect4 = document.createElement("div");
    img_proyect4.setAttribute("id", "img_proyect4");
    proyect4.appendChild(img_proyect4);
    const title_pr4 = document.createElement("p");
    title_pr4.setAttribute("id", "title_pr4");
    title_pr4.textContent = "Diseñamos Juntos";
    img_proyect4.appendChild(title_pr4);
    const title_pr41 = document.createElement("p");
    title_pr41.setAttribute("id", "title_pr41");
    title_pr41.textContent ="Diseños para una nueva carátula de smartwatches" 
    img_proyect4.appendChild(title_pr41);
    const proyect5 = document.createElement('div');
    proyect5.setAttribute("id", "proyect5");
    group_proyect.appendChild(proyect5);
    const img_proyect5 = document.createElement("div");
    img_proyect5.setAttribute("id", "img_proyect5");
    proyect5.appendChild(img_proyect5);
    const title_pr5 = document.createElement("p");
    title_pr5.setAttribute("id", "title_pr5");
    title_pr5.textContent = "Case Study Slide Deck";
    img_proyect5.appendChild(title_pr5);
    const title_pr51 = document.createElement("p");
    title_pr51.setAttribute("id", "title_pr51");
    title_pr51.textContent =" Google UX Design - Certificate Love & Flowers App Design" 
    img_proyect5.appendChild(title_pr51);
    const envio5 = document.createElement("a");
    envio5.setAttribute("id", "envio5");
    envio5.setAttribute("href",'../components/cv/CaseStudy.pdf');
    envio5.setAttribute("download","CaseStudy.pdf");
    img_proyect5.appendChild(envio5);
}