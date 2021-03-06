//--------------------------------Imports-------------------------------//
import React, { Component } from "react";
import { read_cookie, delete_cookie } from "sfcookies";

//--------------------------------Declarations-------------------------------//
var nouns = [
  "area",
  "book",
  "business",
  "case",
  "child",
  "company",
  "country",
  "day",
  "eye",
  "fact",
  "family",
  "government",
  "group",
  "hand",
  "home",
  "job",
  "life",
  "lot",
  "man",
  "money",
  "month",
  "mother",
  "Mr",
  "night",
  "number",
  "part",
  "people",
  "place",
  "point",
  "problem",
  "program",
  "question",
  "right",
  "room",
  "school",
  "state",
  "story",
  "student",
  "study",
  "system",
  "thing",
  "time",
  "water",
  "way",
  "week",
  "woman",
  "word",
  "work",
  "world",
  "year"
];
var adjectives = [
  "amusing",
  "angry",
  "athletic",
  "attractive",
  "beautiful",
  "boring",
  "brave",
  "careful",
  "careless",
  "charming",
  "clever",
  "confident",
  "crafty",
  "crazy",
  "creative",
  "cruel",
  "cute",
  "dangerous",
  "dependable",
  "easygoing",
  "energetic",
  "exciting",
  "famous",
  "forgetful",
  "friendly",
  "good-looking",
  "graceful",
  "happy",
  "helpful",
  "horrible",
  "humble",
  "humorous",
  "inconsiderate",
  "interesting",
  "likable",
  "lucky",
  "middle class",
  "old",
  "outgoing",
  "overweight",
  "poor",
  "popular",
  "practical",
  "responsible",
  "rich",
  "romantic",
  "sad",
  "selfish",
  "skinny",
  "stingy",
  "successful",
  "talkative",
  "thin",
  "touchy",
  "ugly",
  "unlucky",
  "wealthy",
  "young"
];

//****************************************************************************
//This component is used to generate random usernames
//****************************************************************************

//--------------------------------Exports-------------------------------//
// get Adjective
export function getAdjective(nr) {
  if (nr >= 0 && nr < 58) {
    return adjectives[nr][0].toUpperCase() + adjectives[nr].slice(1);
  } else {
    return "default";
  }
}

// get Noun
export function getNoun(nr) {
  if (nr >= 0 && nr < 50) {
    return nouns[nr][0].toUpperCase() + nouns[nr].slice(1);
  } else {
    return "fail";
  }
}
