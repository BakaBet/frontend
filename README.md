# frontend

Our amazing front-end designed by our designer W.Boyard

# Cahier des charges

## 1. Introduction

Bakabet est un site de paris en ligne. 

## 2. Fonctionnalités

### 2.1. Types de paris

- **Pari sportif** : Fonctionnement classique d'un site de paris en ligne, permettant aux utilisateurs de parier sur une multitude d'événements sportifs et de consulter les cotes associées.

- **Pari sur la vie** : Permet aux utilisateurs de proposer et de parier sur des événements de la vie quotidienne, en définissant les termes du pari.

### 2.2. Gestion de l'argent

- Utilisation de la monnaie virtuelle "BakaCoins" pour tous les paris.

- Mise en place d'un système de gestion des comptes utilisateurs, permettant le dépôt / l'achat de BakaCoins.

- Intégration de deux API externes open-source pour le calcul des cotes des paris sportifs.

- Ajustement en temps réel de la côte des paris proposés en fonction du nombre d'utilisateurs qui ont pariés pour l'un ou pour l'autre choix / équipe. 

- Mise en place d'un système de test avec des mock pour simuler les transactions et les flux de BakaCoins.

### 2.3. Pari sur la vie

- Proposition de pari : l'utilisateur proposant définit les termes du pari, la cote et le montant de la mise de départ.

- Pari en attente : les utilisateurs pariants peuvent consulter le pari et négocier la cote avec l'utilisateur proposant avant de le rejoindre.

- Pari en cours :
  
  - Une fois qu'un utilisateur a rejoint le pari, les fonds correspondants sont bloqués sur les comptes des deux utilisateurs.
  
  - Le pari est ajouté à la liste des paris en cours sur la plateforme.
  
  - (A décider) D'autres utilisateurs peuvent rejoindre le pari en cours, ce qui entraîne un ajustement de la cote en temps réel.

- Résultat du pari : 
  
  - À l'issue de l'événement, le résultat est vérifié par le site BakaBet.
  
  - En cas de victoire du pari, le gain, en fonction de la côte pariée, est réparti entre les utilisateurs Pariants proportionnellement à leurs mises respectives.
  
  - En cas de défaite du pari, les fonds misés sont perdus par les utilisateurs pariants.

### 2.4. Pari sportif

- Fonctionnement classique d'un site de paris en ligne, permettant aux utilisateurs :
  
  - Consulter une large gamme d'événements sportifs.
  
  - Parcourir les différentes cotes disponibles pour chaque événement.
  
  - Sélectionner le pari qu'ils souhaitent placer et indiquer le montant de leur mise.
  
  - Confirmer leur pari.
  
  - Suivre l'évolution de leurs paris en temps réel.
  
  - Recevoir leurs gains en cas de victoire.

### 2.5. Fonctionnalités annexes

- Système de notification pour informer les utilisateurs des événements importants (pari validé, résultat d'un événement, etc.).



## 3. Aspects techniques

### 3.1. Technologies

- Langage de programmation back-end : C#

- Framework de tests back-end : Xunit

- Base de données : [Choisir une base de données]

- Technologie de front-end : Angular

- Framework de tests front-end : Cypress

### 3.2. API externes

- API 1 : [Insérer]

- API 2 : [Insérer]

### 3.3. Hébergement (à voir) :

- Serveur web : [Insérer]

- Back : [Insérer]
