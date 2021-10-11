"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var contacts_1 = require("./contacts");
var Antonio = new person_1.Person("Antonio Carrasco Balart", 50, "Mare de deu pilar 36 3*1");
var Alex = new person_1.Person("Alex Carrasco Balart", 22, "Mare de deu pilar 36 3*1");
var arr = [Antonio, Alex];
//Contacts
var agenda = new contacts_1.Contacts();
agenda.people = arr;
agenda.printCalendar();
