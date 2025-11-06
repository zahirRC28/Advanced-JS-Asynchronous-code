//RESUELVE TUS EJERCICIOS AQUI

const connect = async (urlAp) => {
    try {
        const resp = await fetch(urlAp)
        if(resp.ok){
            const datos = await resp.json()
            return datos
        } else {
            throw 'No hay'
        }
    } catch (error) {
        throw (error + 'no encontramos nada')
    }
}


//EJERCICIOs PARTE 1
const urlBreed = `https://dog.ceo/api/breed`;
const urlUser = `https://api.github.com/users/`;

//1.- Declara una funcion getAllBreeds que devuelva un array de strings con todas las razas de perro.
const getAllBreeds = async () =>{
    try {
        const datos = await connect(`${urlBreed}s/list/all`);
        //console.log(datos);
        //como en datos lo que buscamos esta en messages usamos el objects.keys para tener los datos
        //ya que cada raza es un array en ese objeto
        const razas =  Object.keys(datos.message);
        //console.log(razas);
        return razas;
    } catch (error) {
        console.log(error)
    }
};

// 2.- Declara una función getRandomDog que obtenga una imagen random de una raza.
const getRandomDog = async () =>{
    try {
        const datos = await connect(`${urlBreed}s/image/random`);
        //console.log(datos);
        const img = datos.message;
        //console.log(img);
        return img;
    } catch (error) {
        console.log(error)
    }
};

//3.- Declara una función getAllImagesByBreed que obtenga todas las imágenes de la raza komondor.
const getAllImagesByBreed = async () =>{
    try {
        const datos = await connect(`${urlBreed}/komondor/images`);
        //console.log(datos);
        const imgKomon =  datos.message;
        //console.log(imgKomon);
        return imgKomon;
    } catch (error) {
        console.log(error)
    }
};

//4.- Declara una funcion getAllImagesByBreed2(breed) que devuelva las imágenes de la raza pasada por el argumento
const breed = `schnauzer`;

const getAllImagesByBreed2 = async (breed) =>{
    try {
        const datos = await connect(`${urlBreed}/${breed}/images`);
        //console.log(datos);
        const imgbreed =  datos.message;
        return imgbreed;
    } catch (error) {
        console.log(error)
    }
};

//EJERCICIOs PARTE 2

// 5.- Declarara una función getGitHubUserProfile(username) que obtenga el perfil de usuario de github a partir de su nombre de usuario. (https://api.github.com/users/{username}).
let username = `alenriquez96`;
const getGitHubUserProfile = async (username) =>{
    try {
        const datos = await connect(`${urlUser}${username}`);
        console.log(datos);
        const name = datos.name;
        console.log(name);
        return name;
    } catch (error) {
        console.log(error)
    }
}


const printGithubUserProfile= async (username) =>{
    
}

const getAndPrintGitHubUserProfile = async (username) =>{
    
}