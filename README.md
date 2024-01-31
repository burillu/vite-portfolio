<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Installazione Laravel

```bash
cd your parent_folder_path

#con laravel installer
laravel new your_project_name_here

#per versione 9
composer create-project --prefer-dist laravel/laravel:^9.2 your_project_name_here

cd your_project_name_here

code . -r

php artisan serve

ctrl + c

```
## Configurazione Laravel
```bash
npm remove postcss

#installo dbal per migration e seeder
composer require doctrine/dbal

composer require guzzlehttp/guzzle

composer require laravel/breeze --dev
php artisan breeze:install #blade


composer require pacificdev/laravel_9_preset

#solo per versione 9
php artisan preset:ui bootstrap --auth

npm install bootstrap axios @fortawesome/fontawesome-free sass

#in vite config aggiungo agli alias
'~@fortawesome': path.resolve(__dirname, 'node_modules/@fortawesome'),

#copio la cartella dei webfont e se voglio la rinomino e la copio nella cartella font

#app.js
import "./bootstrap";
import "~resources/scss/app.scss";
import * as bootstrap from "bootstrap";
import.meta.glob(["../img/**", "../fonts/**"]);

#app.scss
@use './partials/variables' as *;

$fa-font-path: "../fonts/webfonts" !default;

@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/regular";
@import "~@fortawesome/fontawesome-free/scss/solid";
@import "~@fortawesome/fontawesome-free/scss/brands";

@import '~bootstrap/scss/bootstrap';

h1 {
    color: $text-color;
}

#vite.config.js
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import * as path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/scss/app.scss", "resources/js/app.js"],
            refresh: true,
        }),
    ],
    // Add resolve object and aliases
    resolve: {
        alias: {
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
            "~@fortawesome": path.resolve(
                __dirname,
                "node_modules/@fortawesome"
            ),
            "~resources": "/resources/",
        },
    },
});

#sistemo (cambio/rimuovo) template e routing

#volendo personalizzo paginazione e pagine di errore
php artisan vendor:publish --tag=laravel-errors
php artisan vendor:publish --tag=laravel-pagination

# per visualizzare e modificare le lingue disponibili
php artisan lang::publish

#comandi git

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin your_git_url 
git push -u origin main


```
## Clono progetto da github 

```bash
# copio file .env.example e lo rinomino in .env

composer install

php artisan key:generate

npm install

# creo il database da phpmyadmin

# inserisco i dati per il collegamento al db in env

#creo migration
php artisan make:migration create_nome_tabella_table
php artisan make:migration update_users_table --table=users
php artisan make:migration add_phone_number_to_users_table

#lanciare migration
php artisan migrate

#revert migration
php artisan migrate:rollback


#popolare il db
php artisan make:seeder UsersTableSeeder

php artisan db:seed --class=UsersTableSeeder

# preparo le rotte file web.php es. 
Route::get('/books', [BookController::class, 'index'])->name('books.index');
# oppure resource route per tutte le operazioni CRUD
Route::resource('books', BookController::class);

# creo controller
php artisan make:controller NomeController
#con opzione resource controller
php artisan make:controller NomeController --resource


#creo model
php artisan make:model Nome 
#posso creare il model e contestualmente resource controller, migration, seeder e form request per validazioni
php artisan make:model Nome -rcms --requests

# creo le views relative

#creo form request per validazione
	
php artisan make:request StoreMomemodelRequest


```
## Auth

```bash
#in app/Providers/RouteServiceProvider.php modifico
public const HOME = '/admin';

# Se l’utente non è autenticato, sarà dirottato automaticamente verso la pagina di login.
# Questo comportamento è modificabile nel file in app/Http/Middleware/Authenticate.php

php artisan make:controller Admin/DashboardController
# nel controller
public function index(){
        return view('admin.dashboard');
    }

Route::middleware(['auth', 'verified'])
   ->name('admin.')
   ->prefix('admin')
   ->group(function () {
         Route::get('/', [DashboardController::class, 'index'])
         ->name('dashboard');
   });

....

Route::fallback(function() {
    return redirect()->route('admin.dashboard');
});

```
## Fileupload - File Storage

```bash
#In config/filestystems.php 
#Caricheremo i nostri file nella cartella storage/app/public
# modifichiamo quindi e volendo anche env file modifica chiave FILESYSTEM_DRIVER=public
'default' => env('FILESYSTEM_DRIVER', 'public'),

#lanciare comando
php artisan storage:link

#salvare
Storage::put('nomecartella', $data['image']); //ritorna il path

#per visualizzare 
<img src="{{ asset('storage/' . $post->cover_image) }}">
....

Route::fallback(function() {
    return redirect()->route('admin.dashboard');
});

```
## Relazioni
```bash
#migration di esempio 

#up
Schema::table('posts', function (Blueprint $table) {

    $table->unsignedBigInteger('user_id');
    $table->foreign('user_id')
        ->references('id')
        ->on('users')->cascadeOnDelete();
});
# shortcut
	
$table->foreignId('user_id')->constrained()->cascadeOnDelete();

#down

$table->dropForeign('posts_user_id_foreign');
$table->dropColumn('user_id');

#nei model relazione one to many:

#nel model User(one):
public function posts(){
    return $this->hasMany(Post::class);
}

#nel model Post(many):
public function user(){
    return $this->belongTo(User::class);
}

#nei model relazione many to many:

#nel model Tag:
public function posts(){
    return $this->belongToMany(Tag::class);
}

#nel model Post:
public function tags(){
    return $this->belongToMany(Post::class);
}




```

# vite-boolfolio

### Descrizione
Continuiamo a lavorare sul codice dei giorni scorsi, ma in una nuova repo.
L’esercizio di oggi è suddiviso in milestone ed è importante che ne seguiate l’ordine.
### Milestone 1
1. Iniziamo ad occuparci della parte front-office della nostra applicazione: creiamo un nuovo progetto Vue 3 con Vite e installiamo axios.
2. Installiamo vue router e creiamo il file router.js con le rotte (almeno  home, projects, singolo progetto e fallback route)
### Milestone 2
1. Nel componente relativo alla lista dei progetti della nostra Vue App facciamo una chiamata API all’endpoint costruito nel progetto Laravel  e recuperiamo tutti i progetti dal nostro back-end.
2. Stampiamo in console i risultati e verifichiamo di ricevere i dati correttamente. Poi stampiamoli in pagina
### Milestone 3
1. Creiamo un nuovo componente ProjectCard, che corrisponde ad una card per visualizzare un progetto. 
2. Utilizziamo questo componente per visualizzare tutti i progetti ricevuti tramite API.
### Milestone 4
1. Creiamo un nuovo componente es. ProjectDetail che corrisponde alla rotta per visualizzare il singolo progetto completo di technologies e Type. 
2. Utilizziamo questo componente per visualizzare i dati ricevuti tramite API che recupera il singolo progetto.
3. Creiamo anche un componente NotFound per la rotta di fallback.
### Bonus:
1. Gestire la paginazione dei risultati nella pagina dei progetti
2. Creare una barra di navigazione in un componente header e un componente per il footer

> ## *Spolverata di vue+vite:*
> 1. Crea repo su git (senza opzioni se non pubblico)
> 2. Clonare la repo e apri la cartella su vs code e aprire terminale
> 3. digitare: npm create vue@latest
> 4. per creare il progetto nella directory corrente mettere solo un  punto
> 5. nome package lo stesso della cartella poi lasciare tutto come sta
> 6. dire si all'opzione vue router
> 7. npm install
> 8. npm run dev

```bash
npm install bootstrap axios @fortawesome/fontawesome-free sass

# eventualmente facciamo vedere fontsource: https://fontsource.org/fonts/montserrat
npm install @fontsource/montserrat

# copiamo la cartella webfonts da fontawesome in node-modules in assets
# inizialmente commentiamo l'importazione e l'uso del router di view dal main js
# eliminiamo i file inutili al termine le cartelle dovrebbero essere così:

npm run dev -- --port 8000

```