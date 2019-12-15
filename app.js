document.getElementById('collection').innerHTML = localStorage.getItem('items');

document.getElementById('add').addEventListener('click', lisaTabelisse)

function lisaTabelisse(e){
    const rida = document.createElement('li');
    
    const ylesanne = document.getElementById('task');
    rida.innerHTML = ylesanne.value;
    tabel = document.getElementById('collection');
    
    
    if (ylesanne.value === ''){
        alert('add task');
    } else {
        tabel.appendChild(rida);
        let todosUl = document.querySelector('ul');
        let a = document.createElement('a');
        let i = document.createElement('i');

        rida.className = "collection-item";
        a.className = "secondary-content delete-item";
        a.href = "#";
        i.className = "fa fa-remove";
        
        todosUl.appendChild(rida);
        rida.appendChild(a);
        a.appendChild(i);
        kustuta();
        
    }
    document.getElementById('task').value = '';

    
    
}

function kustuta(){
    let del  = document.querySelectorAll('.delete-item');
    for (let element of del){
        element.addEventListener('click', function(){element.parentNode.remove();
        //localStorage.removeItem(element.parentNode.textContent);
        
        })
      }
      
 }

 document.querySelector('.clear-tasks').addEventListener('click', kustutaKoik);

function kustutaKoik(){
    document.getElementById('collection').innerHTML = '';
    localStorage.clear();
  }


const lisa = document.getElementById('add');


 lisa.addEventListener('click', function(e){
    
    const uusYlesanne = document.getElementById('task').value;
    console.log(uusYlesanne)
    let ylesanded; 
    
    if (localStorage.getItem('items') === null){
        ylesanded = []
    } else {
        ylesanded = JSON.parse(localStorage.getItem('items'))
        
    }
    
    ylesanded.push(uusYlesanne);
    localStorage.setItem('items', JSON.stringify(ylesanded));
    
    e.preventDefault();
})










