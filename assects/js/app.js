let cl = console.log

const database = document.getElementById('database');
const searchbox = document.getElementById('search');
const selectbox = document.getElementById('type');

// Templating Function ===>>

function Templating(arr){
    let result = "";
    arr.forEach(card => {
        result += `
        <div class="col-md-3 mt-4">
            <div class="card"> 
                <div class="card-body">
                    <figure>
                        <div class="main-tittle mt-4">
                        <h1 class="${colours(card.type)}">${card.type}</h1>
                        </div>
                        <h2 class="name">${card.name}</h2>
                        <p class="duration"> from ${card.dateOpen} to ${card.dateClose}</p>
                        <p class="description">${card.description}</p>
                    </figure>
                    <a href="${card.link}" target="_blank"><button type="button" class="btn btn-info">Details</button></a>
                </div>
            </div>
       </div>
        `
    });
    database.innerHTML = result;
}

Templating(db);

function colours(color){
    if(color === 'hardware'){
        return 'blue'
    }else if(color === 'service'){
        return 'orange'
    }else if(color === 'app'){
        return 'green'
    }
}

// ============= Call Back Functions for events =============>>

const OnEnter = (event) =>{
    if(event.key === 'Enter'){
        // cl("event triggerd");
        let name = event.target.value.toLowerCase().trim();
        // cl(name)
        let search = db.filter(card => card.name.toLowerCase().trim().includes(name));
        Templating(search);
    }else{
        Templating(db);
    }
}

const ForChange = (e) => {
    let select = e.target.value;
    if(select !== 'type'){
        find = db.filter(s => s.type === select);
        // cl(find)
        Templating(find);
    }else{
        Templating(db);
    }
}

// =========== Events =============>>
searchbox.addEventListener('keyup', OnEnter);
selectbox.addEventListener('change', ForChange);
