const lados=document.getElementById('bt');
lados.addEventListener('click',()=>

{
    const uno=document.getElementById('uno').value//np
    const dos=document.getElementById('dos').value//ns
    const tres=document.getElementById('tres').value//nt


    if(uno==dos && uno == tres)
 {
    alert ('Este es un triangulo Equilatero')
 }
else if(uno==dos || dos==tres || uno==tres)
{
    alert ('Este es un triangulo Isoceles')
}
else
{
    alert('Este es un triangulo escaleno')
}


})









