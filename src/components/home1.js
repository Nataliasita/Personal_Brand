export function home1($containerGeneral){
    const home1 = document.createElement('div');
    home1.className ='home1';
    home1.setAttribute("id", "home");
    $containerGeneral.appendChild(home1);
    const triangle = document.createElement('div');
    triangle.className='triangle_blue';
    home1.appendChild(triangle);
    const butterfly_fondo = document.createElement('div');
    butterfly_fondo.className= 'btfly_fondo';
    home1.appendChild(butterfly_fondo);
    const author =document.createElement('p');
    author.className="author";
    author.textContent="Natalia Gonzalez";
    home1.appendChild(author);
    const butterfly_big = document.createElement('div');
    butterfly_big.className= 'btfly_big';
    home1.appendChild(butterfly_big);
    const circle_home = document.createElement('div');
    circle_home.className= 'circle';
    home1.appendChild(circle_home);
    const down = document.createElement("a")
    down.className ="down"
    down.setAttribute("href","#contact")
    home1.appendChild(down)
}
