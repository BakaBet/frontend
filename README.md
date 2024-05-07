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

# Cas d'utilisation
## Parier sur un évènement sportif
- L'utilisateur parcourt la liste des événements sportifs disponibles sur la plateforme.
- L'utilisateur sélectionne l'événement sportif qui l'intéresse.
- L'utilisateur consulte les différentes cotes disponibles pour l'événement sportif sélectionné.
- L'utilisateur sélectionne le pari qu'il souhaite placer et indique le montant de sa mise.
- Le système vérifie le solde de l'utilisateur et confirme le pari.
- L'utilisateur consulte la liste de ses paris en cours et suivis.
- En cas de victoire du pari, l'utilisateur reçoit ses gains sur son compte.

## Parier sur un événement de la vie
- L'utilisateur Proposant définit les termes du pari, la cote et le montant de la mise minimale.
- L'utilisateur Proposant consulte l'état de son pari (en attente, en cours, terminé).

- L'utilisateur Parieur parcourt la liste des paris sur la vie disponibles sur la plateforme.
- L'utilisateur Parieur consulte les termes du pari, la cote et le montant de la mise.
- L'utilisateur Parieur peut négocier la cote du pari avec l'utilisateur Proposant avant de le rejoindre.
- L'utilisateur Parieur place une mise sur le pari et rejoint le pari.
- L'utilisateur Parieur consulte l'évolution du pari (en attente, en cours, terminé).

## Ouverture d'un compte BakaBet
- L'utilisateur s'inscrit en remplissant un formulaire d'inscription complet (nom, prénom, pseudo, email, mot de passe) et valide.
- L'utilisateur reçoit 100 BakaCoins à l'inscription

## Gérer son compte BakaBet
- L'utilisateur saisit ses identifiants de connexion (email et mot de passe).
- L'utilisateur consulte son solde en BakaCoins.
- L'utilisateur consulte l'historique de ses paris.
- L'utilisateur peut modifier ses informations personnelles (nom, prénom, email, mot de passe, etc.).
