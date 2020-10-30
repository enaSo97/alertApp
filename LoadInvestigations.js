//import { StatusBar } from 'expo-status-bar';
//import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';

import { createInvestigation } from './graphql/mutations'

import Amplify, { API, graphqlOperation } from 'aws-amplify'
import config from './aws-exports'
import { listInvestigations } from './graphql/queries'
Amplify.configure(config)

const parseOccId = (occId) => {
    const baseUrl = "https://www.tsb.gc.ca"
    var href = occId.match(/href="([^"]*)/)[1];
    console.log(baseUrl+href)
    return baseUrl + href
}

const parseReportTitle = (reportTitle) => {
    const reportObj = {
        title : "",
        location : "",
        
    }
}


function getInvestiation() {
    return API.graphql(graphqlOperation(listInvestigations));
}

async function addInvestigation(item, mode){

    const investigation = {
        reportTitle: item.ReportTitle,
        status: item.status,
        occID: parseOccId(item.occID),
        occYear: item.occYear,
        pubDate: item.pubDate,
        mode: mode

    }
    try {
        
        await API.graphql(graphqlOperation(createInvestigation, { input: investigation }))
        console.log("Success creating Investigation: ", investigation)
    } catch (err) { console.log("error creating investigation GraphQL: ", err) }
}

const InvestigationsLoadToDB = async (object, mode, callback) => {
    getInvestiation()
        .then(evt => {
            const items = evt.data.listInvestigations.items
            console.log(object)
            console.log(items)
            if (items.length > 0) {
                (items[0].reportTitle != object.data[0].reportTitle)
                ? function (items){
                    console.log("adding investigations")
                    for (var i = 0; i < 10; i++){
                        callback(object.data[i], mode)
                    }
                } : (console.log("Nothing got updated"));
            }else{
                console.log("empty db: adding new investigations")
                //console.log(object.data[0])
                for (var i = 0; i < 10; i++){
                    callback(object.data[i], mode)
                }
            }
        })

}


function loadAirInvestigations() {
    const url = "https://www.tsb.gc.ca/includes/ajax/AIR-object-EN.txt?_=1603834435895";
    const cors_api_url = 'https://cors-anywhere.herokuapp.com/';
    let x = new XMLHttpRequest();
    x.open("GET", cors_api_url + url);

    x.onload = x.onerror = function () {
        const air_investigation = JSON.parse(x.responseText)
        InvestigationsLoadToDB(air_investigation, "Air" , addInvestigation)
    };
    x.send();
}


export default function LoadInvestigations() {
    loadAirInvestigations()
}
