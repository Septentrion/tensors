/**
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

 /*-------------------*
  * Dépendances
  *-------------------*/

/*
 * Import de la bibliothèque Tensorflow
 */
import * as tf from '@tensorflow/tfjs';

/*
 * Import des différentes classes (étiquettes) du modèle pré-entraîné
 */
import {IMAGENET_CLASSES} from './imagenet_classes';

/*
 * Import des fonctions de gestion du modèle
 */
import * as model from './model.js';

/*
 * Import des fonctions pour l'affichage
 */
import * as ui from './ui.js';

/*-------------------*
 * Initialisation
 *-------------------*/

 /**
 * L'objet FileReader permet à des applications web de lire le contenu de fichiers
 * (ou de tampons de mémoire brute) de façon asynchrone.
 *
 * @see https://developer.mozilla.org/fr/docs/Web/API/FileReader
 */
 let reader = new FileReader();
 // Ecouteur repérant la fin du téléchargement de l'image
 reader.onload = e => {
   // Création d'un élémentHTML pour l'image
   let img = document.createElement('img');
   // la propriété“result” contient les données du fichier (--> pixels de l'image)
   img.src = e.target.result;

   // L'image est redimensionnée pour se conformer à la taille attendue par le modèle
   img.width = model.IMAGE_SIZE;
   img.height = model.IMAGE_SIZE;

   // ui.displayImage(img);

   // Ecouteur repérant la création de l'image, pour entamer automatiquement la prédiction
   img.onload = () => model.classify(img);
 };



/*
 * Ecouteur repérant le choix d'une image par le biais du champ de type “file”
 */
ui.filesElement.addEventListener('change', evt => {
  let files = evt.target.files;

  for (let i = 0, f; f = files[i]; i++) {
    // N'exécuter l'agorithme que si le fichier est bien une image !
    if (!f.type.match('image.*')) {
      continue;
    }

    // Lire l'image depuis le fichier sélectionné.
    reader.readAsDataURL(f);
  }
});


/*-------------------*
 * Programme principal
 *-------------------*/

model.imageClassify();
