const xml2js = require('xml2js');
const fs = require('fs');
const request = require('request');
const { throws } = require('assert');
const axios = require('axios');
var cron = require('node-cron');
var time = require('moment-timezone');


//Ici c'est 0 2 * */1 0' le planificateur de tache qui sera charger d'exécuter se script chaque dimanche de chaque mois a 2h00 

cron.schedule(' 0 2 */1 0 0', () => 
{

        //on va recuperuer la liste entiere des comptes et des tickets


},
{
    scheduled: true,
    timezone: "Africa/Lome"
})
